import React from "react";

const Item = ({valor, remover}) => {
    return (
        <div className="item">
            <div>
                <input type='checkbox'></input>
                <label>{valor}</label>
            </div>
            <button className="deleta borda" onClick={remover}>x</button>
        </div>
    );
    
};

export default Item;