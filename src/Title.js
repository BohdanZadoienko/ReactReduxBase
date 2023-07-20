import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

const Title = (props) => {
  const text = useSelector((state) => {

    const { inputReducer } = state
    return inputReducer.text
  });

  const dispatch = useDispatch();

  const handlechange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top"></div>
      <input type="text" onChange={handlechange} placeholder='Enter Title here' />
      <p>{text}</p>
    </div>
  );
};

export default Title;
