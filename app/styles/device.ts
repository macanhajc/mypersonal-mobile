import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

type DeviceTypes = {
  width: number;
  height: number;
};

export const device: DeviceTypes = {
  width,
  height,
};
