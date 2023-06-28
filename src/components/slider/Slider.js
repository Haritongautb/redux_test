import { useSelector, useDispatch } from "react-redux";
import { slideConfigFast, slideConfigSlow, slideConfigAutoplay } from "../../actions"


const Slider = () => {
    const slideConfig = useSelector(state => state.slideConfig);
    const dispatch = useDispatch();

    const onFast = () => {
        dispatch(slideConfigFast())
    }

    const onSlow = () => {
        dispatch(slideConfigSlow())
    }

    const onAutoplay = () => {
        dispatch(slideConfigAutoplay())
    }

    return (
        <div>
            <div>{slideConfig}</div>
            <button onClick={onFast}>fast</button>
            <button onClick={onSlow}>slow</button>
            <button onClick={onAutoplay}>autoplay</button>
        </div>
    )
}

export default Slider;