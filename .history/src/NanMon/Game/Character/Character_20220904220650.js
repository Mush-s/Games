const Character = (props) => {
  return (
    <div className="character">
      <div>What is this name?</div>
      <ul>
        {props.char.map((c) => (
          <li key={c.id}>
            <img src={c.img} alt="hi" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Character;
