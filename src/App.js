import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';


const marked = require("marked");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
  // this.state = this.state.bind(this);
  updateMarkdown(e) {
    this.setState({
      markdown: e.target.value
    })
  }

  render() {
    console.log(this.state.markdown);
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextArea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.markdown}
              placeholder="Enter Markdown"
              onChange={this.updateMarkdown}
            ></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
