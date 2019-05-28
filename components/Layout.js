import React, { Component } from 'react';
import Link from 'next/link';

class Layout extends Component {
  render() {
    return (
      <div className="app">
        <style jsx global>
          {`
            /*App -------------------*/
            * {
              padding: 0;
              margin: 0;
            }
            .app {
              background: whitesmoke;
              display: grid;
              grid-template-columns: 100px calc(100vw - 100px);
              grid-template-rows: 40px calc(100vh - 40px);
            }

            /*Navbar -------------------*/
            .navbar {
              grid-column: 1/3;
              grid-row: 1/2;
              background: yellow;
              width: 100%;
              height: 100%;
            }

            /*Sidebar -------------------*/
            .sidebar {
              display: flex;
              justify-content: flex-start;
              flex-direction: column;
              align-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              background: #dadfe1;
              grid-column: 1/2;
              grid-row: 2/3;
            }
            .sidebar-list {
              width: 100%;
              height: auto;
              display: grid;
              grid-gap: 5px;
            }
            .sidebar-list .list-item {
              height: 50px;
              width: 100%;
              list-style: none;
              background: red;
            }
            .sidebar-list .list-item a {
              text-decoration: none;
              font-size: 13pt;
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
            }

            /*App Body -------------------*/
            .app-body {
              margin: 10px;
              background: white;
              grid-column: 2/3;
              grid-row: 2/3;
              width: calc(100% - 20px);
              height: calc(100% - 20px);
            }
          `}
        </style>

        <div className="sidebar">
          <ul className="sidebar-list">
            <li className="list-item">
              <Link href="/">
                <a>Index</a>
              </Link>
            </li>
            <li className="list-item">
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <h2>navbar</h2>
        </div>
        <div className="app-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
