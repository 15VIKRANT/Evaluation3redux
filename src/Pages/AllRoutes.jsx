import { Routes, Route, Link } from "react-router-dom";

import Login from "./Login";
import Navbar from "./Navbar";
import PrivateRoute from "./PrivateRoute";

import Posts from "./Home";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/posts"
          element={
            <PrivateRoute to="/">
              <Posts />
            </PrivateRoute>
          }
        >
         
        </Route>
        <Route element={<PrivateRoute to="/"></PrivateRoute>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default AllRoutes;

// 1. Create Routes
// 2. Create navbar
// 3. ensure Browser Router is imported
// 4. create home, about, contact
// 5. creaet separate components for it
// 6. if possible start on the users page => where you fetch user data
// 15minutes
