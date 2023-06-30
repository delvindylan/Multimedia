import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="homeTitle">
        <h1>Delvin Photography</h1>
      </div>

      <Link to="/angebote">
        <input className="startButton" type="button" value="Angebote" />
      </Link>
    </div>
  );
}
