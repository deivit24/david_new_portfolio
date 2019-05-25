import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
class Work extends React.Component {
  render() {
    return (
      <div>
        <section id="sec4" className="demo">
          <h1 id="work">Work & Progress</h1>
          <div className="container-fluid">
            <div className="projects">
              <div className="boxes">
                <a href="https://google.com">
                  <div className="image1" />
                </a>

                <a href="https://armisfinancial.com" className="btn btn-dark">
                  <i className="fas fa-eye"> Armis Financial LLC</i>
                </a>

                <a
                  href="https://github.com/deivit24/Armis-Financial"
                  className="btn btn-light"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </div>

              <div className="boxes">
                <a href="https://google.com">
                  <div className="image2" />
                </a>

                <a
                  href="https://fuegoleondevelopment.com"
                  className="btn btn-dark"
                >
                  <i className="fas fa-eye"> Fuegoleon Development</i>
                </a>
                <a
                  href="https://github.com/deivit24/Fuegoleon-Development"
                  className="btn btn-light"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </div>

              <div className="boxes">
                <a href="https://heuristic-ride-af34ca.netlify.com">
                  <div className="image3" />
                </a>

                <a
                  href="https://heuristic-ride-af34ca.netlify.com"
                  className="btn btn-dark"
                >
                  <i className="fas fa-eye"> Frank Key & Associates</i>
                </a>
                <a
                  href="https://github.com/deivit24/Frank-Key-Associates"
                  className="btn btn-light"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </div>
              <div className="boxes">
                <a href="https://agitated-kepler-a559b4.netlify.com/">
                  <div className="image4" />
                </a>

                <a
                  href="https://agitated-kepler-a559b4.netlify.com/"
                  className="btn btn-dark"
                >
                  <i className="fas fa-eye"> RGV Tennis Academy</i>
                </a>
                <a
                  href="https://github.com/deivit24/RGV-Tennis"
                  className="btn btn-light"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </div>
              <div className="boxes">
                <a href="https://wealthmods.com">
                  <div className="image5" />
                </a>

                <a href="https://wealthmods.com" className="btn btn-dark">
                  <i className="fas fa-eye"> Wealth MODs 101</i>
                </a>
                <a
                  href="https://github.com/deivit24/wealth_mods"
                  className="btn btn-light"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </div>
              <div className="boxes">
                <a href="https://acceleratedfund.com/">
                  <div className="image6" />
                </a>

                <a href="https://acceleratedfund.com/" className="btn btn-dark">
                  <i className="fas fa-eye"> Accelerated Funding LLC</i>
                </a>
                <a
                  href="https://github.com/deivit24/wealth_mods"
                  className="btn btn-light"
                >
                  <i className="fab fa-github"> View on Github</i>
                </a>
              </div>
            </div>
          </div>
          <Link
            className="Link"
            activeClass="active"
            to="sec5"
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

export default Work;
