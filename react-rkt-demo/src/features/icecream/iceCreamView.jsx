import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
const IceCreamView = () => {
  const iceCreams = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Number of iceCreams: {iceCreams}</p>
      <button onClick={() => dispatch(ordered())}>order iceCreams</button>
      <button onClick={() => dispatch(restocked(100))}>
        restock iceCreams
      </button>
    </div>
  );
};
export default IceCreamView;
