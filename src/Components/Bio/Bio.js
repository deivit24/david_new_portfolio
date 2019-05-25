import React from 'react';
import me from '../../img/me.jpg';
import { Link, animateScroll as scroll } from 'react-scroll';
class Bio extends React.Component {
  render() {
    return (
      <div>
        <section id="sec2" className="demo">
          <h1 id="about">About Me</h1>
          <div className="container" id="contain2">
            <div className="plx-card gold">
              <div className="pxc-bg" />
              <div className="pxc-avatar">
                <img src={me} alt=" " />
              </div>
              <div className="pxc-stopper" />
              <div className="pxc-subcard">
                <div className="pxc-title">Hello My Name Is David Salazar</div>
                <div className="pxc-sub">
                  <p>
                    I'm a husband, business owner, Front-End Web Developer, and
                    an aspiring Full Stack Developer. Born in McAllen, TX and
                    was raised a tennis player. Lived in Nashville, New York,
                    United Kingdom, and St. Louis. But these days I live in
                    Austin, TX.
                  </p>
                </div>

                <div className="pxc-tags">
                  <div>Husband</div>
                  <div>Tennis Player</div>
                  <div>Business Owner</div>
                  <div>Font-End Web Developer</div>
                  <div>Aspiring Full-Stack</div>
                </div>
                <div className="bottom-row">
                  <div className="pxc-info">
                    <div className="flags">
                      <span>
                        <img
                          src="http://pollux.fun/images/flags/EN.png"
                          alt=" "
                        />
                      </span>
                      <span>
                        <img
                          src="http://pollux.fun/images/flags/MX.png"
                          alt=" "
                        />
                      </span>
                      <span>
                        <img
                          src="http://pollux.fun/images/flags/JP.png"
                          alt=" "
                        />
                      </span>
                    </div>
                    <div className="region">Global</div>
                  </div>
                  <div className="links">
                    <a
                      className="site"
                      uk-tooltip="WEBSITE"
                      href="https://www.facebook.com/AugieSal"
                      target="a_blank"
                    >
                      <i className="fab fa-facebook-f"> </i>
                    </a>
                    <a
                      className="link discordLink"
                      uk-tooltip="DISCORD SERVER"
                      href="https://github.com/deivit24"
                      target="a_blank"
                    >
                      <i className="fab fa-github" />
                    </a>
                    <a
                      className="shop"
                      uk-tooltip="EXCLUSIVE POLLUX SHOP"
                      href="https://www.linkedin.com/in/david-a-salazar-aa6a2750/"
                      target="a_blank"
                    >
                      <i className="fab fa-linkedin-in"> </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="Link"
            activeClass="active"
            to="sec3"
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

export default Bio;
