import { useEffect, useState } from "react";

export const Timer = (props) => {
  const [time, setTime] = useState(props);
  let timer;
  const updataCount = (props) => {
    timer = setInterval(() => {
      console.log(time);
      setTime((preC) => preC - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    updataCount();
    return () => clearInterval(timer);
  }, [time]);

  return <div>count is: {time}</div>;
};