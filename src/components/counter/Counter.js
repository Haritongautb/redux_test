import { useDispatch, useSelector } from "react-redux";
import { countPlus, countMinus } from "../../actions";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onPlus = () => {
        dispatch(countPlus(1))
    }

    const onMinus = () => {
        dispatch(countMinus(-1))
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
        </div>
    )
}

export default Counter;
