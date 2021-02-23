import React from "react";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav>
            <div>
              <Link  to="/">
              <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072016/untitled-1_16.png?itok=B4o_2UCy" width="100" height="100"/>
              </Link> 
            </div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/faq">F.A.Q.</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
                <li>
                    <Link to="/home">App</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;