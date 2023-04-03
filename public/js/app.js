


class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      question : '',
      answer : ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
 // our method to handle all click events from our buttons
handleClick(event){
 
  // get the value from the target element (button)
  const value = event.target.value;
 
  switch (value) {
    case '=': {
 
      // if it's an equal sign, use the eval moduleiop
      // to evaluate the question ,convert the answer
      // (in number) to String
      if (this.state.question!=='')
      {
          var ans='';
            try
              {
                  ans = eval(this.state.question);
              }
              catch(err)
              {
                  this.setState({answer: "Math Error"});
              }
              if (ans===undefined)
                  this.setState({answer: "Math Error"});
 
              // update answer in our state.
              else
                  this.setState({ answer: ans , question: ''});
              break;
          }
    }
    case 'Clear': {
 
      // if it's the Clears sign, just clean our
      // question and answer in the state
      this.setState({ question: '', answer: '' });
      break;
    }
 
    case 'Delete': {
      var str = this.state.question;
        str = str.substr(0,str.length-1);
        this.setState({question: str});
        break;
    }
 
  default: {
 
      // for every other command, update the answer in the state
      this.setState({ question: this.state.question += value})
      break;
    }
  }
}

  render() {
    return (
      <div className = 'main calculator'>
        <div className = 'output screen'>
          <Screen content = {this.state.question}/>
        </div>
        <div className = 'input screen'>
          <Screen content = {this.state.answer}/>
        </div>
        <div className = 'button-row'>
          <Button label = 'Clear' onclick = {this.handleClick}/>
          <Button label = 'Delete' onclick = {this.handleClick}/>
          <Button label = '^' onclick = {this.handleClick}/>
          <Button label = '%' onclick = {this.handleClick}/>
        </div>
        <div className = 'button-row'>
          <Button label = '7' onclick = {this.handleClick}/>
          <Button label = '8' onclick = {this.handleClick}/>
          <Button label = '9' onclick = {this.handleClick}/>
          <Button label = '/' onclick = {this.handleClick}/>
        </div>
        <div className = 'button-row'>
          <Button label = '4' onclick = {this.handleClick}/>
          <Button label = '5' onclick = {this.handleClick}/>
          <Button label = '6' onclick = {this.handleClick}/>
          <Button label = '*' onclick = {this.handleClick}/>
        </div>
        <div className = 'button-row'>
          <Button label = '1' onclick = {this.handleClick}/>
          <Button label = '2' onclick = {this.handleClick}/>
          <Button label = '3' onclick = {this.handleClick}/>
          <Button label = '-' onclick = {this.handleClick}/>
        </div>
        <div className = 'button-row'>
          <Button label = '0' onclick = {this.handleClick}/>
          <Button label = '.' onclick = {this.handleClick}/>
          <Button label = '=' onclick = {this.handleClick}/>
          <Button label = '+' onclick = {this.handleClick}/>
        </div>
      </div>
    );
  }
}

class Screen extends React.Component {
  render() {
    return (
      <div className="screen-row">
      <input type="text" readOnly value={this.props.content}/>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <input type = 'button' onClick = {this.props.onclick} value = {this.props.label} />
    );
  }
}

ReactDOM.render(<Calculator/>, document.getElementById('content'));