import { Link } from "react-router-dom";

import "./Start.css";

const Start = () => {
  return (
    <div className="start">
      <nav className="header">
        <div className="header-logo">GAME</div>
        <ul className="header-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">fobnvnl</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="start-button">
        <ul>
          <li>
            <Link to="/tictactou">
              <img
                src="https://dictionary.cambridge.org/ja/images/thumb/nought_noun_002_25125.jpg?version=5.0.250"
                alt="tic tac tou"
              />
              | Tic Tac Toe
            </Link>
          </li>
          <li>
            <img src='https://sugorokuya.jp/assets/products/nanjamonja/nanjamonja_wt-card-matrix-w800-714bce2ee63a030a02946d11ed11b930055551c61b2eaa47287edc89866c5f83.jpg'
            <Link to="nanmon">| NanMon</Link>

          </li>
          <li>
            <a href="#">Under Development</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
