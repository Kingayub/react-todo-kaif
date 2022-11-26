import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div className='todos'>
            {props.todos.map((el, index) => {
                return (<Todo
                    el={el}
                    index={index}
                    makeFavorite={props.makeFavorite}
                    removeTodo={props.removeTodo}
                />)
            })
            }
        </div>
    );
};

export default Todos;