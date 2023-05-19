import { useEffect, useState } from "react";
import comments from "../../data/comments";
import CommentElement from "./CommentElement";

//Given: useState, comments, commentElement. CommentList를 보여주는 함수는 Homepage.jsx 참고
const Comment = () => {
  // TODO 1: 가짜 comments 불러와서 관리해야겟즤
  const [commentList, setCommentList] = useState(comments);
  // TODO 2: comment추가하는 input 관리해줘야겟지
  const [formData, setFormData] = useState({
    content: "",
    created_at: Date()
  });
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  };

  // TODO 3: comment Form 제출됐을때 실행되는 함수 만들어줘
  const onSubmit = (e) => {
    if (formData.content != "") {
    e.preventDefault();
    setCommentList([...commentList, formData]);
    setFormData({content : "", created_at: Date()});}    
    else return;    
  };

  // TODO 4: commet Delete 하는 함수 만들어죠
  const deleteComment = (comment) => {
    console.log("before filtering")
    console.log(commentList);
    setCommentList(
      commentList.filter((c) => c !== comment)
    );
    console.log("after filtering")
    console.log(commentList)
  }

  return (
    <form className="form" onSubmit={onSubmit}>
        <div className="w-full mt-5 self-start">
        <h1 className="text-3xl font-bold mt-5 mb-3">Comments</h1>
          {commentList.map((comment) => (
            <CommentElement 
              key={comment.id} 
              comment={comment} 
              deleteComment={deleteComment} 
              commentList = {commentList}
            />
          ))}

        <input
          type="text"
          id="content"
          placeholder="댓글을 제발 입력해주세요"
          onSubmit={onSubmit}
          onChange={handleChange}
          value={formData.content}
          className="w-3/4 border border-black-400 outline-none rounded-2xl text-center py-2 px-20 text-black-400 bg-transparent"
        />
          <button type="submit" className="button mt-10 mx-4 py-2 px-10">Comment</button>
          </div>

    </form>
  );
};

export default Comment;
