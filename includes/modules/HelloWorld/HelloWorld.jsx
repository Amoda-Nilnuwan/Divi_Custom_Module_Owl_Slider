// External Dependencies
import React, { Component } from 'react';

// Internal Dependencies
import './style.css';


class HelloWorld extends Component {

  static slug = 'owl_hello_world';

  render() {
    const Content = this.props.content;

    return (
      <h1>
        <Content/>
        <b>Amoda Nilnuwan Deshanjana</b>
      </h1>
    );
  }
}

export default HelloWorld;
