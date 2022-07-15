import styled from 'styled-components/native';

export const StyledTabBarContent = styled.View`
  height: 56px;
  background-color: #ffffff;
  elevation: 24;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  z-index: 2;
`;

export const StyledTabBarItem = styled.Pressable<{active?: boolean}>`
  flex: 1;
  height: 56px;
  max-width: ${({theme}) => theme.device.width / 5}px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const StyledActiveItem = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;
