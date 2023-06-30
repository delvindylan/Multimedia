import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PFP from "../Images/pfp.jpeg";
import Vegas from "../Images/Vegas.jpg";

export default function About() {
  return (
    <div className="AboutBody">
      <Parallax pages={3}>

        <ParallaxLayer offset={0.3}>
          <h1>IF YOU WANT A PROFESSIONAL PHOTOGRAPHER</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h1>WITH A LOT OF KNOW HOW AND HIGH QUALITY GEAR</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={0.5}>
          <h1>LOOK NO FURTHER</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={0.5}>
          <h1>And Book me now</h1>
          <br />
          <Link to="/kontakt">
            <input className="startButton" type="button" value="Angebote" />
          </Link>
        </ParallaxLayer>

        <ParallaxLayer offset={1.9}>
          <h1>MY NAME IS DELVIN AND I'M A MODERN PHOTOGRAPHER</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={2} >
          <img id="pfp" src={PFP} alt="pfp.jpeg" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} >
          <img id="vegas" src={Vegas} alt="Vegas.jpg" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
