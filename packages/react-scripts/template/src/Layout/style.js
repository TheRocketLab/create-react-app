import styled from 'styled-components';
import { MenuList, MenuItem } from '@material-ui/core';

const DrawerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DrawerMenuList = styled(MenuList)`
  height: 100%;

  li:last-child {
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
`;

const LogoutItem = styled(MenuItem)`
  color: #fff !important;
  font-weight: bold !important;
  background-color: #e10050 !important;

  &:hover {
    background-color: #9d0038 !important;
  }
`;

export { DrawerWrapper, DrawerMenuList, LogoutItem };
