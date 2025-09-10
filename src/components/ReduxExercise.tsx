import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  reduceCounter,
  resetCounter,
} from "../features/counterSlice";

const ReduxExercise = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Exercise</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(addCounter())}>+</button>
      <button onClick={() => dispatch(reduceCounter())}>-</button>
      <button onClick={() => dispatch(resetCounter())}>reset</button>
    </div>
  );
};

export default ReduxExercise;
