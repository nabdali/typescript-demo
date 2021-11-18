import React from "react";

export enum PlayerEnum {
    NONE = 0,
    A = 1,
    B = 2,
}

export default function Cell(props: {player?: PlayerEnum}) {
    const baseClass = 'c4__cell';

    function classNames(booleans: { [p: string]: boolean }) {
        
    }

    const cellClasses = `${baseClass} ${classNames({
        [`${baseClass}--empty`]: (props.player === PlayerEnum.NONE),
        [`${baseClass}--a`]: (props.player === PlayerEnum.A),
        [`${baseClass}--b`]: (props.player === PlayerEnum.B),
    })}`;

    return <button className={cellClasses} />;
}

function DisplayCell(props: {x: number, y: number}) {
    return <Cell key={`c-${props.x}-${props.y}`} /*player={}*/ /*auto-completion*/ />
}

    // transpiled -> return React.createElement("button", { className: cellClasses });