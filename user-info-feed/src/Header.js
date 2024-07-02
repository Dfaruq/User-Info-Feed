import React from "react";

function Header(props) {

    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-pointer-o fa-2x text-white mr-2"/>
                <div className="text-light h2" data-testid="title">{props.title}</div>
            </div>
        </div>
      </nav>
    );
}

export default Header;