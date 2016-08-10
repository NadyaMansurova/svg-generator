import React, {Component} from 'react';
import MainDrawing from '../main-drawing/index.js';

require('./common-field.less');

export default class CommonField extends Component {
  render() {
    return (
      <div className="main-field">
        <div className="col-sm-3">drawing panel</div>
        <div className="col-sm-6"><MainDrawing  /></div>
        <div className="col-sm-3">download/upload panel</div>
      </div>
    );
  }
}
