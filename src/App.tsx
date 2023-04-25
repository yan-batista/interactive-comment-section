import "./styles/GlobalStyle.scss";

import Layout from "./components/Layout";
import Button from "./components/Button";

function App() {
  return (
    <Layout>
      <h1>Comment Section</h1>
      <div className="buttons">
        <Button text="send" type="primary" />
        <Button text="delete" type="warning" />
        <Button text="no, cancel" type="secondary" />
      </div>
    </Layout>
  );
}

export default App;
