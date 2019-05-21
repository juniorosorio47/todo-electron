import React, { Component } from 'react';
import Link from 'next/link';

class Layout extends Component {
  render() {
    return (
      <div>
        <style jsx global>
          {`
            * {
              padding: 0;
              margin: 0;
            }
            .navbar {
              width: 100%;
              height: 60px;
              background: #dadfe1;
            }
            .app-body {
              padding: 10px;
            }
            a {
              text-decoration: none;
              font-size: 14pt;
            }
            .navbar-list {
              display: flex;
              justify-content: flex-start;
              align-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
            }
            .navbar-item {
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              list-style: none;
              width: 150px;
              height: 100%;
              background: red;
            }
          `}
        </style>

        <div className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="/">
                <a>Index</a>
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="app-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
