import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Angebote() {
  return (
    <div className="angeboteBody">
      <Parallax pages={10}>
        <ParallaxLayer offset={0.3}>
          <h1>IF YOU WANT A PROFESSIONAL PHOTGRAPHER</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h1>WITH A LOT OF KNOW HOW AND HIGH QUALITY GEAR</h1>
        </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5}>
          <h1>LOOK NO FURTHER</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
