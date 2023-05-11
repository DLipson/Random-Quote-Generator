import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CountSelect = ({count, setCount, countLimit}) => {
        
      return (
        <FormControl margin="normal" >
          <InputLabel id="count-select-label">count</InputLabel>
          <Select
            labelId="count-select-label"
            id="count-select"
            value={count || 1}
            label="count"
            onChange={(event) => setCount(event.target.value)}
          >
            {Array.from(Array(countLimit).keys()).map((count) => (
              <MenuItem key={count + 1} value={count + 1}>
                {count + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );    
}

export default CountSelect
