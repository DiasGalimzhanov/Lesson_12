import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBy, decrement, increment, redBy } from "../../store/counterSlice";
import s from "./Counter.module.scss"

function Counter() {
    const dispatch = useDispatch();
    const {count} = useSelector((state)=> state.counter);

    const onIncrement = ()=> {
        dispatch(increment());
    }

    const onDecremenrt = ()=> {
        dispatch(decrement());
    }

    const onAddBy = ()=>{
        dispatch(addBy(10));
    }

    const onRedBy = ()=>{
        dispatch(redBy(10));
    }


    return <div className={s.counter}>
        <div className={s.buttons}>
            <button className={s.button} onClick={onIncrement}>+1</button>
            <button className={s.button} onClick={onDecremenrt}>-1</button>
            <button className={s.button} onClick={onAddBy}>+10</button>
            <button className={s.button} onClick={onRedBy}>-10</button>
        </div>
        <div className={s.value}>{count}</div>
    </div>
}


export default Counter;