import "./styles/GlobalStyle.scss";

import Layout from "./components/Layout";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Score from "./components/Score";
import Comment from "./components/Comment";

function App() {
  return (
    <Layout>
      <h1>Comment Section</h1>
      <div className="buttons">
        <Button text="send" type="primary" />
        <Button text="delete" type="warning" />
        <Button text="no, cancel" type="secondary" />
      </div>
      <Modal title="Delete Comment">
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
      </Modal>

      <Score score={99} />
      <div className="comment-list-container">
        <Comment type="comment" currentUserComment username="amyrobson" date="1 month ago" score={12}>
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've
          nailed the design and the responsiveness at various breakpoints works really well."
        </Comment>

        <Comment type="subcomment" username="maxblagun" date="2 weeks ago" score={5}>
          Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive
          into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!
        </Comment>
      </div>
    </Layout>
  );
}

export default App;
