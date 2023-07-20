import { connect } from "react-redux";
import { incrementLikes, incrementDislikes } from "./redux/actions";

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}> 👍 {props.likes}</button>
      <button onClick={props.onIncrementDislikes}> 👎 {props.dislikes}</button>
    </div>
  );
};

function mapStateToProps(state) {
  const { likesReducer, dislikesReducer } = state;

  return {
    likes: likesReducer.likes,
    dislikes: dislikesReducer.dislikes,
  };
}

function mapDispatchToProps(dispath) {
  return {
    onIncrementLikes: () => dispath(incrementLikes()),
    onIncrementDislikes: () => dispath(incrementDislikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
