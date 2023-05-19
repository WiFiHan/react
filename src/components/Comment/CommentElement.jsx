import { useState } from "react";

const CommentElement = ({ comment, deleteComment }) => {
  // TODO : props 받기

  // TODO : 수정하는 input 내용 관리
  
  const [isEditting, setIsEditting] = useState(false);
  const editComment = () => {
    setIsEditting(true);
  }

  const [commentData, setCommentData] = useState({
    content: comment.content,
    created_at: Date()
  });

  const handleInput = (e) => {
    setCommentData({...commentData, [e.target.id]: e.target.value });
  };

  const handleEdit = (e) => {
    setIsEditting(false);
  };

  // comment created_at 전처리
  const date = new Date(comment.created_at);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;

  return(
    isEditting ?
    <div className="flex w-full flex-col">
      <div className="flex  w-full gap-x-5">
      <input
          type="text"
          id="content"
          onChange={handleInput}
          value={commentData.content}
          className="border border-black-400 outline-none rounded-2xl text-center py-2 px-20 text-black-400 bg-transparent"
        />
        
        <button onClick={handleEdit} className="small-button w-16">
          Done
        </button>
        </div>
      </div>
    : (

    
  <div className="w-full flex justify-between gap-1 mb-2">
    <div className="w-1/2">
      <p>{commentData.content}</p>
      <span className="text-base mr-1 text-gray-300">
        {year}.{month}.{day}
      </span>
    </div>
    <div className="w-1/4 flex flex-row-reverse items-center">
        <button onClick={editComment} className="small-button w-16">
          Edit
        </button>
        <button onClick={() => deleteComment(comment)} className="small-button w-16">
          Delete
        </button>
      </div>

  </div>
  )
  );
};

export default CommentElement;

