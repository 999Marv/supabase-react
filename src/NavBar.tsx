import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <ul>
          <li>
            <Link to="/1">Message Board</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
