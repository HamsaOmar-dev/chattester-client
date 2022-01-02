import React from "react";

import { auth } from "../firebase";


function NavBar() {

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand">SimpleCSCI</button>
        {auth.currentUser && (
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={() => auth.signOut()}
          >
            LogOut
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
