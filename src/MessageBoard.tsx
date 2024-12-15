import { Link, Outlet } from "react-router-dom";

export default function MessageBoard() {
  return (
    <div>
      <Link to="/1">
        <h2>Message Board</h2>
      </Link>
      <Outlet />
    </div>
  );
}
