import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

class Hello extends React.Component {
  render() {
    const TypeWriter = function(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    };

    // Type Method
    TypeWriter.prototype.type = function() {
      // Current Index of Word
      const current = this.wordIndex % this.words.length;
      // Get Full Text od Current Word
      const fullTxt = this.words[current];

      // CHeck if deleting
      if (this.isDeleting) {
        // Remove Character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add Character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into Element
      this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 200;
      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // this will make pause
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 200;
      }

      setTimeout(() => this.type(), typeSpeed);
    };
    // Init on DOM Load

    document.addEventListener('DOMContentLoaded', init);

    // Init App

    function init() {
      const txtElement = document.querySelector('#sec1 .Txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }

    return (
      <div>
        <section id="sec1" className="Demo">
          <h1 id="david">David Salazar</h1>
          <div id="contain" className="Container">
            <h1 id="hello">
              <span
                className="Txt-type"
                data-wait="3000"
                data-words='[ "Hello!",   
        "¡Hola!", 
        "こんにちは",   
        "Guten Tag!",   
        "你好!",   
        "Привет!",   
        "नमस्ते!" ]'
              />
            </h1>
          </div>
          <Link
            className="Link"
            activeClass="active"
            to="sec2"
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

export default Hello;
