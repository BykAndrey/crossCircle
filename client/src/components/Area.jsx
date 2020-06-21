import React from 'react';
import Tile from './Tile';
import './Area.css';
import { useState, useEffect } from 'react';



export default props => {
    const { onWin, onEnd } = props;
    const [tilesType, setTilesType] = useState([]);
    const [currentType, setCurrentType] = useState('cross');

    const schema = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    const resetTilesType = () => {
        setTilesType([]);
    }
    const onClick = (key) => {
        if (tilesType[key]) return;

        setTilesType({
            ...tilesType,
            [key]: currentType
        })
        setCurrentType(currentType === 'cross' ? 'circle' : 'cross')
    }





    const getTileList = size => {
        const TileWithProps = <Tile
            key={size}
            type={tilesType[size]}
            onClick={() => onClick(size)} />

        return size === 1
            ? [TileWithProps]
            : [TileWithProps, ...getTileList(size - 1)];
    }


    useEffect(() => {
        const res = schema.find(item => {
            const first = tilesType[item[0]];
            const res = item.every(i => {
                return first !== undefined && tilesType[i] === first;
            });
            return res;
        });

        const whoWin = res ? tilesType[res[0]] : false;
        if (whoWin) {
            onWin(whoWin);
            onEnd();
            resetTilesType();
        }

    }, [tilesType]);

    const tilesList = getTileList(9);
    return (<div className="area">
        {tilesList}
    </div>)
}