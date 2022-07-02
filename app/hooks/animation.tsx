import React from 'react';
import {Animated, Easing} from 'react-native';

type ConfigProps = Omit<Animated.TimingAnimationConfig, 'toValue'> & {
  toValue?: Animated.Value;
};

export const useAnimated = (configs?: ConfigProps, shouldAnimate?: boolean) => {
  const animatedValue = React.useRef(new Animated.Value(!configs ? 1 : 0)).current;

  const animation = React.useCallback(
    (value: number) => {
      Animated.timing(animatedValue, {
        toValue: value,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
        ...configs,
      }).start();
    },
    [animatedValue, configs],
  );

  React.useEffect(() => {
    if (shouldAnimate === undefined || shouldAnimate) {
      setTimeout(
        () => {
          animation(1);
        },
        shouldAnimate ? 0 : configs?.duration || 500,
      );
    } else {
      animation(0);
    }
  }, [configs, animatedValue, shouldAnimate, animation]);

  const useInterpolate = (outputRange: number[] | string[], animated?: Animated.Value) => {
    const inputRange = [...new Array(outputRange.length)].map((_, i) => {
      return i % 10;
    });
    if (animated) {
      return animated.interpolate({
        inputRange,
        outputRange,
      });
    }
    return animatedValue.interpolate({
      inputRange,
      outputRange,
    });
  };

  return [animatedValue, useInterpolate] as const;
};

type AnimateToValueProps = {
  toValue?: number;
  bounciness?: number;
  delay?: number;
  useNativeDriver?: boolean;
};

export const useAnimateToValue = (props?: AnimateToValueProps) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: props?.toValue || 1,
        duration: 500,
        useNativeDriver: props?.useNativeDriver === undefined ? true : props?.useNativeDriver,
        easing: props?.bounciness ? Easing.elastic(props.bounciness) : Easing.out(Easing.ease),
      }).start();
    }, props?.delay || 0);
  }, [animatedValue, props]);

  const useInterpolate = (outputRange: number[] | string[]) => {
    const inputRange = [...new Array(outputRange.length)].map((_, i) => i);
    return animatedValue.interpolate({
      inputRange,
      outputRange,
    });
  };

  return [animatedValue, useInterpolate] as const;
};

export const withAnimated = (WrappedComponent: React.ComponentType<any>): React.ComponentType => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class WithAnimated extends React.Component {
    static displayName = `WithAnimated(${displayName})`;

    render(): React.ReactNode {
      return <WrappedComponent {...this.props} />;
    }
  }

  return Animated.createAnimatedComponent(WithAnimated);
};
