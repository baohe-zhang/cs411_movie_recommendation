import React, { Component } from "react";
import { Link } from "react-router-dom";

import Authentication from "./Authentication";
import Autocomplete from "./Autocomplete";

class HeaderComonent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: Authentication.isUserLoggedIn()
    };
  }

  clickLogout = () => {
    Authentication.logout();
    this.setState({
      status: false
    });
  };

  render() {
    const { status } = this.state;

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link to="/" className="navbar-brand">
              MovieStudio
            </Link>
          </div>

          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/tags">
                Category
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Trend
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/recommend">
                Recommend
              </Link>
            </li>
          </ul>

          <form className="form-inline">
            <Autocomplete />
          </form>

          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/reviews">
                Review
              </Link>
            </li>
            {!status && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {status && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={this.clickLogout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComonent;
