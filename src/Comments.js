import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commenstLoad } from "./redux/actions";
import uniqid from "uniqid";

import SingleComment from "./SingleComment";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");

  const comments = useSelector((state) => {
    const { commentReducer } = state;
    return commentReducer.comments;
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment(" ");
  };

  useEffect(() => {
    dispatch(commenstLoad());
  }, []);

  console.log("Comments>>>>", comments);
  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput} placeholder='Enter comment here'></input>
        <input type="submit" hidden></input>
      </form>
      {!comments.lenght &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
