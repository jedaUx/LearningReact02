var Todo = React.createClass({displayName: "Todo",
  todoDisplay: function(){
    return (
      React.createElement("li", {className: "todo"}, 
        React.createElement("span", null, 
          this.props.children
        )
      )
    );
  },

  render: function(){
    return this.todoDisplay();
  }
  //ends todo
});

var Excersice = React.createClass({displayName: "Excersice",

  getInitialState: function(){
    return {
      convertedArray: [
        1,
        2,
        3
      ],
      text: '',
      placeholder: "Add nested array",
      input_style: "form-control"
    };
  },

  convert: function(e) {
    var arr= this.state.convertedArray;
    var newtoConvert= this.refs.nestedArray.getDOMNode().value;
    if(!newtoConvert){
      e.preventDefault();
      this.setState({placeholder:"Please add a nested array", input_style:"form-control red"});
    }else{
      arr.push(newtoConvert);
      this.setState({todos: arr, text: null, input_style:"form-control", placeholder:"Add nested array"});
    }
  },

  eachNumber: function(number, i) {
    return (React.createElement(Number, {key: i, index: i}, 
      number
    ));
  },

  render: function(){
      return (
        React.createElement("div", null, 

          React.createElement("h1", null, "Insert nested arrays (js convention)"), 
          React.createElement("div", {className: "form-inline"}, 

            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {ref: "nestedArray", className: this.state.input_style, placeholder: this.state.placeholder, value: this.state.text}), 
              React.createElement("button", {onClick: this.convert, className: "btn btn-default btn-sm"}, "Convert")
            )
          ), 
          React.createElement("ul", null, 
            this.state.convertedArray.map(this.eachNumber)
          )
        )
      );
  }
});

React.render(React.createElement(Excersice, null), document.getElementById('excersice'));
