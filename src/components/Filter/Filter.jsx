import { useState } from 'react';
import PropTypes from 'prop-types';
import FilterLabel from './Filter.styled';
import { useEffect } from 'react';

const Filter = ({ onChange }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onChange({ filter: filter });
  }, [filter, onChange]);

  const handleChange = evt => {
    if ((evt.target.name = 'filter')) {
      setFilter(evt.target.value);
    }
  };
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
};

Filter.propTypes = { onChange: PropTypes.func };

export default Filter;
