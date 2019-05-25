import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
class Contact extends React.Component {
  render() {
    return (
      <div>
        <section id="sec5" className="demo">
          <h1 id="contact">Let's Talk!</h1>
          <div className="container">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="John"
                    name="first-name"
                    value="contact"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Smith"
                    name="last-name"
                    value="contact"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value="contact"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group col-md-6">
                  <label>Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="555-555-5555"
                    value="contact"
                    name="number"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Personal Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  name="message"
                  value="contact"
                  placeholder="Enter a personal message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="icons">
              <a href="https://www.facebook.com/AugieSal" target="a_blank">
                <i className="fab fa-facebook fa-2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/david-a-salazar-aa6a2750/"
                target="a_blank"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
              <a href="https://github.com/deivit24" target="a_blank">
                <i className="fab fa-github fa-2x" />
              </a>
              <a href="#">
                {' '}
                <i className="fas fa-envelope fa-2x" />{' '}
              </a>
              <a href="#">
                {' '}
                <i className="fab fa-instagram fa-2x" />{' '}
              </a>
            </div>
          </div>
          <Link
            className="Link Last-Link"
            activeClass="active"
            to="sec1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span className="Scroll Last"> </span>
            Top
          </Link>
        </section>
      </div>
    );
  }
}

export default Contact;
