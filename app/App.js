import React, {Component} from 'react';
import CommonField from '../components/common-field/index.js';

require('./main.less');

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <CommonField />
      </div>
    );
  }
}
