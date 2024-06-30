/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { CounterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';


export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(CounterActions.increment())
    }
    const decrement = () => {
        dispatch(CounterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="title-value">value = {counterValue}</h1>
            <button  data-testid="increment-btn"onClick={increment}>
                increment
            </button>
            <button data-testid="decrement-btn" onClick={decrement}>
                decrement
            </button>
        </div>
    );
}