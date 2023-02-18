import "./Screen.css";
import Form from "./Form";
let Screen = () => {
  return (
    <>
      <div className="container-body">
        <div className="text-section">
          <p className="header">Learn to code by watching others</p>
          <p className="para">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="form">
            <Form></Form>
        </div>
      </div>
    </>
  );
};

export default Screen;
