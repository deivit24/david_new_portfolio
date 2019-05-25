import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      message: ''
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstName, lastName, email, number, message } = this.state;
    return (
      <div>
        <section id="sec5" className="demo">
          <h1 id="contact">Let's Talk!</h1>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="John"
                    name="firstName"
                    value={firstName}
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Smith"
                    name="lastName"
                    required
                    value={lastName}
                    onChange={this.handleChange}
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
                    value={email}
                    onChange={this.handleChange}
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
                    name="number"
                    value={number}
                    onChange={this.handleChange}
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
                  placeholder="Enter a personal message"
                  value={message}
                  onChange={this.handleChange}
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
