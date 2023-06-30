import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MultimediaImage from "../Images/Multimedia-03.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <div className="homeTitle">
          <h1>Insurance Calculator</h1>
        </div>

        <Link to="/calculator">
          <input className="startButton" type="button" value="Start" />
        </Link>
      </div>
    </div>
  );
}
