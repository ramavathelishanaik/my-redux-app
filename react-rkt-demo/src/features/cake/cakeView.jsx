import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
const CakeView = () => {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Number of cakes: {cakes} </p>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <button onClick={() => dispatch(restocked(10))}>restock cakes</button>
    </div>
  );
};
export default CakeView;
