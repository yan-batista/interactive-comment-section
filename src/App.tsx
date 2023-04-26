import "./styles/GlobalStyle.scss";

import Layout from "./components/Layout";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Score from "./components/Score";

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

      <Score />
    </Layout>
  );
}

export default App;
