import React from 'react';
import './Tile.css';

export default props => {
    const { onClick, type } = props;
    const cssType = !!type ?  (type === 'circle' ? 'tile--circle' : 'tile--cross') : false;
    return (<div 
        className={`tile ${cssType}`}
        onClick={onClick}>
    </div>)
}