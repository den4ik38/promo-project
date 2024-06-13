import { useState } from "react";
import cls from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = useState(0)
  const incerement = ()=>{
    setCounter(counter+1)
  }
  
 return (
  <div>
    <h1 className={cls.title}>{counter}</h1>
    <button className={cls.btn} onClick={incerement}>Add</button>
  </div>
 );
}