import React from 'react';
import { FiberManualRecord } from '@material-ui/icons';

const StatusIcon = ({ inactive }) => {
  const color = inactive === false ? 'error' : 'primary';
  return <FiberManualRecord color={color} />;
};

StatusIcon.defaultProps = {
  inactive: false,
};

export default StatusIcon;
