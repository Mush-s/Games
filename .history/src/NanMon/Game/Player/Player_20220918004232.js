const Player = (props) => {
  <div className={props.player === 1 && "player1"}>
    <div>player1</div>
    <div> have {props.Point} point</div>
    <button onClick={props.Answer}>Answer</button>
  </div>;
};

export default Player;
