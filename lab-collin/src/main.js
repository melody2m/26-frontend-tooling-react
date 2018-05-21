import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

import '../style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: cowsay.say({
        text: faker.lorem.words(5),
        e: 'oO',
        T: 'U ',
      }),
    };
    this.handleCowClick = this.handleCowClick.bind(this);
  }

  handleCowClick() {
    this.setState(() => {
      return {
        message: cowsay.say({
          text: faker.lorem.words(5),
          e: 'oO',
          T: 'U ',
        }) ,
      };
    });
  }

  render() {
    return (
      <div>
      <p> Cowsay: <pre> { this.state.message } </pre> </p>
      <button onClick={ this.handleCowClick}> Click Me! </button>
    </div>      
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
