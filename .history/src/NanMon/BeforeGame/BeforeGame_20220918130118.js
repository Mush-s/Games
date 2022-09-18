import "./BeforeGame.css";

const BeforeGame = (props) => {
  return (
    <div className="before">
      <div className="content">
        <h1>Choose player</h1>
        <button onClick={props.onClick}>2</button>
        <button onClick={props.onClick2}>3</button>
        <div className="rule">
          <h2>1) 出てきたキャラクターに名前をつけてください</h2>
          <h2>2) そのキャラクターが再度出てきた時に名前を答えてください</h2>
          <h2>3) 相手より早く答えられた方がポイントをもらえます</h2>
        </div>
      </div>
    </div>
  );
};

export default BeforeGame;
