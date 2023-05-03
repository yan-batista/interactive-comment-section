import { useState } from "react";

import data from "../../../data.json";
import NewComment from "../NewComment";
import Comment from "../index";
import Modal from "../../Modal";

import "./styles.scss";

const CommentList = () => {
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };

  const renderComments = data.comments.map((comment) => {
    return (
      <div className="comment-subcomment-container" key={`${comment.user.username}${comment.id}`}>
        <Comment
          type="comment"
          currentUserComment={data.currentUser.username === comment.user.username}
          username={comment.user.username}
          date={comment.createdAt}
          score={comment.score}
          key={comment.id}
          showModal={showModal}
        >
          {comment.content}
        </Comment>

        {comment.replies.length > 0 && (
          <div className="comment-replies">
            <div className="dividerLine"></div>

            {comment.replies.map((reply) => {
              return (
                <Comment
                  type="subcomment"
                  currentUserComment={data.currentUser.username === reply.user.username}
                  username={reply.user.username}
                  date={reply.createdAt}
                  score={reply.score}
                  key={reply.id}
                  showModal={showModal}
                >
                  <span className="replyTo">@{reply.replyingTo} </span>
                  {reply.content}
                </Comment>
              );
            })}
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="comment-list-container">
      {renderComments}
      <NewComment />
      <Modal title="Delete Comment" showModal={show} hideModal={hideModal}>
        Are you sure you want to delete this comment? This will remove the comment and can't be undone.
      </Modal>
    </div>
  );
};

export default CommentList;
