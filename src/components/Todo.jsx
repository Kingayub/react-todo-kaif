import React from 'react';

const Todo = (props) => {
    return (
        <div className={`todo ${props.el.favorite ? "selected" : ""}`} key={props.index}>
            <div className="star"><button onClick={() => { props.makeFavorite(props.index) }}>&#9733;</button></div>
            <div className="content">{props.el.text}</div>
            <div className="btn_delete"><button onClick={() => { props.removeTodo(props.index) }}>&#10008;</button></div>
        </div>
    );
};

export default Todo;