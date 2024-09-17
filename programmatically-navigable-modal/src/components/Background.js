import { Link, Outlet, useLocation } from "react-router-dom";

function Background() {
  const location = useLocation();
  return (
    <div>
      <h2>Create programmatically navigable modal</h2>
      <Link to="/modal" state={{ background: location }}>
        Open Modal
      </Link>
      <Outlet />
    </div>
  );
}

export default Background;