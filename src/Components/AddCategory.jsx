import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue('');
    onAddCategory(inputValue.trim());
  };
  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
    </form>
  );
};

AddCategory.prototype = {
  onAddCategory: PropTypes.func.isRequired,
};
