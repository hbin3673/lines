import React, { useState } from 'react';
import './InputForm.css';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsDuplicate(items.includes(e.target.value));
  };

  const handleAddItem = () => {
    if (!isDuplicate && inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
      setIsDuplicate(false);
    }
  };

  const handleInputBlur = () => {
    setIsDuplicate(items.includes(inputValue));
  };

  return (
    <div className="input-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className={isDuplicate ? 'error' : ''}
        placeholder="아이템 입력"
      />
      <button onClick={handleAddItem} disabled={isDuplicate}>
        추가
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputForm;
