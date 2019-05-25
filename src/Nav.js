import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick() {
    if (this.state.clicked) {
      this.setState({ clicked: false });
      console.log('closed');
    } else {
      this.setState({ clicked: true });
      console.log('open');
    }
  }
  render() {
    return (
      <div>
        <header>
          <div
            className={`Menu-btn ${this.state.clicked ? 'Close' : 'Show'}`}
            onClick={this.buttonClick}
          >
            <div className={`Btn-line`} />
            <div className={`Btn-line`} />
            <div className={`Btn-line`} />
          </div>

          <nav className={`Menu ${this.state.clicked ? 'Show' : 'Close'}`}>
            <div
              className={`Menu-branding ${
                this.state.clicked ? 'Show' : 'Close'
              }`}
            >
              <div className={`Portrait`} />
            </div>
            <ul className={`Menu-nav ${this.state.clicked ? 'Show' : 'Close'}`}>
              <li
                className={`Nav-item current ${
                  this.state.clicked ? 'Show' : 'Close'
                }`}
              >
                <a href="index.html" className="Nav-link">
                  Enjoy
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
