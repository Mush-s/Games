import { Transition } from "react-transition-group";
import "./Correct.css";

const Correct = (props) => {
  const [inProps, setInProps] = useState(false);

  const transitonStyles = {
    entering: { opacity: 1, color: "red", transiton: "all 1s ease" },
  };
  if (props.correct) {
    setTimeout(() => {
      props.setCorrect(false);
    }, 3000);
  }

  return (
    <Transition in={inProps} timeout={1500}>
      {(state) => {
        <div style={transitonStyles[state]}>
          <p>React CSS Animation</p>
        </div>;
      }}
    </Transition>
  );
};

export default Correct;
