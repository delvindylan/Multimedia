import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Skyline from "../Images/Multimedia-07.jpg"
import LaParking from "../Images/Multimedia-03.jpg"
import VegasCity from "../Images/Multimedia-05.jpg"
import Multimedia6 from "../Images/Multimedia-06.jpg"
import Multimedia4 from "../Images/Multimedia-04.jpg"
import Multimedia2 from "../Images/Multimedia-02.jpg"
import Multimedia10 from "../Images/Multimedia-10.jpg"
import Multimedia08 from "../Images/Multimedia-08.jpg"
import Multimedia09 from "../Images/Multimedia-09.jpg"
import Multimedia18 from "../Images/Multimedia-18.jpg"
import Multimedia16 from "../Images/Multimedia-16.jpg"
import Multimedia17 from "../Images/Multimedia-17.jpg"




export default function Angebote() {
  return (
    <div className="angeboteBody">
      <Parallax pages={20}>
        <ParallaxLayer offset={0.3}>
          <h1 className="center">Landschafts Fotografie</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0.8}>
            <img className="right" src={Skyline} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.8}>
            <img className="left" src={LaParking} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2.8}>
            <img className="right" src={VegasCity} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={3.8}>
            <img id="Multimedia6" src={Multimedia6} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={4.8}>
            <img id="Multimedia4" src={Multimedia4} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={5.8}>
            <img id="Multimedia2" src={Multimedia2} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={7.8}>
          <h1 className="center">Portrait Fotografie</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={8.3}>
            <img id="Multimedia10" src={Multimedia10} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={9.8}>
            <img id="Multimedia8" src={Multimedia08} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={10.8}>
            <img id="Multimedia09" src={Multimedia09} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={13.8}>
          <h1 className="center">Auto Fotografie</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={14.8}>
            <img className="right" src={Multimedia18} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={15.8}>
            <img className="left" src={Multimedia16} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={15.8}>
            <img id="Multimedia17" src={Multimedia17} alt="" />
        </ParallaxLayer>

        </Parallax>
    </div>
  );
}
