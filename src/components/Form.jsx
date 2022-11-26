import React from 'react';

const Form = (props) => {
    return (
        <div className='form'>
        <input
          placeholder='Добавить дело...'
          type="text"
          value={props.text}
          onChange={(e) =>props.setText(e.target.value)}
        />
        <button onClick={() => {props.addTodo() }}>добавить</button>
      </div>
    );
};

export default Form;