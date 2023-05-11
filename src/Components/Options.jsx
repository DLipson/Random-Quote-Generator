import CategorySelect from './CategorySelect';
import CountSelect from './CountSelect';
import { FormGroup } from '@mui/material';


const Options = ({category, setCategory, count, setCount, countLimit}) => {
  return (
    <FormGroup>
      <CategorySelect
        category={category}
        setCategory={setCategory}      
      />
        <CountSelect
        count={count}
        setCount={setCount}
        countLimit={countLimit}
        />
    </FormGroup>
  )
}

export default Options
