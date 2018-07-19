import React from 'react';
import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  AccessTime,
  PermContactCalendar,
} from '@material-ui/icons';
import { DateTimePicker } from 'material-ui-pickers';

/**
 * @see https://material-ui-pickers.firebaseapp.com/demo/datetimepicker
 */
export default props => (
  <DateTimePicker
    {...props}
    format="YYYY-MM-DD hh:mm a"
    rightArrowIcon={<KeyboardArrowRight />}
    leftArrowIcon={<KeyboardArrowLeft />}
    timeIcon={<AccessTime />}
    dateRangeIcon={<PermContactCalendar />}
    margin="normal"
    InputLabelProps={{
      shrink: true,
    }}
  />
);
