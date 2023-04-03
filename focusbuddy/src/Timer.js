import { CircularProgressbar, BuildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";

function Timer() {
  return (
    <div>
      <CircularProgressbar value={50} text={`50%`} />
      <div style={{marginTop: '20px'}}>
        <PlayButton />
      </div>
    </div>
  );
}

export default Timer;
