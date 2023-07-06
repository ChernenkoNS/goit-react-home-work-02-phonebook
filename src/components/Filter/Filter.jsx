import PropTypes from "prop-types";
import css from '../Filter/Filter.module.css'


export const Filter = ({value, onChange}) => {
  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
