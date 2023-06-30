import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <div>
      

      <Parallax pages={4}>
        <ParallaxLayer 
        offset={0.2} 
        speed={1}
        factor={2}
        style={{
            backgroundImage: 'url'
        }}
        >

          <h1 className="homeTitle">Delvin Photography</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <h1>asdasd</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
