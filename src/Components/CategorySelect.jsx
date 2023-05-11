import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { categories } from "../Services/QuoteService"

const CategorySelect = ({category, setCategory}) => {

  return (
    <FormControl margin="normal">
      <InputLabel id="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={category || "Choose a Category"}
        label="Category"
        onChange={(event) => setCategory(event.target.value)}
      >
        <MenuItem value="Choose a Category">Choose a Category</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CategorySelect
