import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

class Know extends React.Component {
  render() {
    let widthbar = {
      width: '75%'
    };
    return (
      <div>
        <section id="sec3" className="demo">
          <h1 id="knowledge">Knowledge & Skills</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                {' '}
                <i className="devicon-html5-plain-wordmark colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-css3-plain-wordmark colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-bootstrap-plain-wordmark colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-visualstudio-plain colored" />
              </div>
              <div className="col-sm-2">
                {' '}
                <i className="devicon-chrome-plain-wordmark colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-git-plain-wordmark colored" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <i className="devicon-sass-original colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-javascript-plain colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-jquery-plain-wordmark colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-react-original-wordmark colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-babel-plain colored" />
              </div>
              <div className="col-sm-2">
                <i className="devicon-webpack-plain-wordmark colored" />
              </div>
            </div>
            <h1>Currently Learning</h1>
            <div className="row">
              <div className="col-sm-4">
                <i className="devicon-nodejs-plain-wordmark colored" />
              </div>
              <div className="col-sm-4">
                <i className="devicon-express-original-wordmark colored" />
              </div>
              <div className="col-sm-4">
                <i className="devicon-mongodb-plain-wordmark colored" />
              </div>
            </div>
            <br />
            <br />
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={widthbar}
              />
            </div>
            <br />
          </div>
          <Link
            className="Link"
            activeClass="active"
            to="sec4"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span className="Scroll"> </span>
            Scroll
          </Link>
        </section>
      </div>
    );
  }
}

export default Know;
