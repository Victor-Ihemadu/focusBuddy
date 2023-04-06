import { CircularProgressbar, BuildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";

function Timer() {
  return (
    <div>
      <CircularProgressbar value={55} text={`55%`} />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{marginTop:'20px'}}>
        <SettingsButton />
      </div>
    </div>
  );
}

export default Timer;
