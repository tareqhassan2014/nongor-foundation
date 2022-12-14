import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54')
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    console.log(value?.format('YYYY-MM-DD'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
