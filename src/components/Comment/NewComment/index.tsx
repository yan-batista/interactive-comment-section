import Button from "../../Button";
import CurrentUserProfilePicture from "../../../assets/images/avatars/image-juliusomo.png";

import "./styles.scss";

const NewComment = () => {
  return (
    <div className="comment-container">
      <div className="new-comment">
        <textarea placeholder="Add a comment..."></textarea>

        <div className="profile-button-container">
          <img src={CurrentUserProfilePicture}></img>
          <Button type="primary" text="Send"></Button>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
