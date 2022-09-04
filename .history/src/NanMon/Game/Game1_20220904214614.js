import { useEffect, useState } from "react";
import Back from "../../Components/Back/Back";
import "./Game1.css";

const Game1 = () => {
  const [char, setChar] = useState([]);
  const namedHandler = () => {};
  const answerHandler = () => {};

  useEffect(() => {
    const fetchchara = async () => {
      const characters = await fetch(
        "https://games-31fd4-default-rtdb.firebaseio.com/Nanmon/Characters.json"
      );

      if (!characters.ok) {
        console.log(characters);
      }

      const responseDate = await characters.json();
      const loadedCharacters = [];
      for (const key in responseDate) {
        loadedCharacters.push({
          id: key,
          img: responseDate[key].img,
        });
      }
      setChar(loadedCharacters);
    };
    fetchchara();
  }, []);

  return (
    <div className="game">
      <Back />
      <div className="character">
        <div>What is this name?</div>
        <div></div>
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDtPTyREmVTKa9RNtF-v7qKrLo3snUiK3pVFoVPRk7eVRCaq1epYuVwwkb7WeQWVgaO0&usqp=CAU"
          alt="g"
        /> */}
      </div>
      <div className="inputs">
        <form className="make-character" onSubmit={namedHandler}>
          <p>Please name character</p>
          <input />
          <input type="submit" />
        </form>
        <form className="answer-charcter" onSubmit={answerHandler}>
          <p>Please answer character name</p>
          <input />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Game1;
