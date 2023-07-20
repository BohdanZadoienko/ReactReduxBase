import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from './redux/actions'
import { useDispatch } from "react-redux";

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState('')
  const { text, id } = data;
  const dispatch = useDispatch();

  useEffect(()=> {
    if (text) {
      setCommentText(text)
    }
  }, [text])

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  const handleUpdate = (e) =>{
    e.preventDefault()
    console.log('submit ->>>>', commentText)
    dispatch(commentUpdate(commentText, id))
  }

  const handleDelete = (e) =>{
    e.preventDefault()
    console.log('delete')
    dispatch(commentDelete(id))
  }

  return (
    <form  onSubmit={handleUpdate} className="comments-item">
    <div  onClick = {handleDelete} className="comments-item-delete"> &times;</div>
      <input type="text" value={commentText} onChange = {handleInput}  />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
