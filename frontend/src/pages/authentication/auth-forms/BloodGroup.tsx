import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function BloodGroup() {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                    Blood Group
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    fullWidth
                    size="medium"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="A_Positive">A+</MenuItem>
                    <MenuItem value="A_Negative">A-</MenuItem>
                    <MenuItem value="B_Positive">B+</MenuItem>
                    <MenuItem value="B_Negative">B-</MenuItem>
                    <MenuItem value="AB_Positive">AB+</MenuItem>
                    <MenuItem value="AB_Negative">AB-</MenuItem>
                    <MenuItem value="O_Positive">O+</MenuItem>
                    <MenuItem value="O_Negative">O-</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
