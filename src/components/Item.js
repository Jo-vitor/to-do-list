import React from "react";

const Item = (props) => {
    return (
        <div className="item">
            <input type='checkbox'></input>
            <label>{props.valor}</label>
        </div>
    );
    
};

export default Item;