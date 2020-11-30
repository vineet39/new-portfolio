import React, { Component } from "react";
import classes from './ScrollToTop.css';
import Aux from '../../hoc/Aux';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const { is_visible } = this.state;
    return (
      <Aux>
        <div className="scroll-to-top">
          {is_visible && (
            <button onClick={() => this.scrollToTop()} id="myBtn"><i className="fa fa-arrow-up"></i></button>
          )}
        </div>
        <div className="header">
          <div className="progress-container">
            <div className="progressBar" id="progressBar"></div>
          </div>
        </div>
      </Aux>
    );
  }
}
