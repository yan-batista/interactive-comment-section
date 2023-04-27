import data from "../../../data.json";
import Comment from "../index";
import "./styles.scss";

const CommentList = () => {
  const renderComments = data.comments.map((comment) => {
    const currentUser = data.currentUser.username === comment.user.username;

    return (
      <div className="comment-subcomment-container" key={`${comment.user.username}${comment.id}`}>
        <Comment
          type="comment"
          currentUserComment={currentUser}
          username={comment.user.username}
          date={comment.createdAt}
          score={comment.score}
          key={comment.id}
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
                  currentUserComment={currentUser}
                  username={reply.user.username}
                  date={reply.createdAt}
                  score={reply.score}
                  key={reply.id}
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

  return <div className="comment-list-container">{renderComments}</div>;
};

export default CommentList;
