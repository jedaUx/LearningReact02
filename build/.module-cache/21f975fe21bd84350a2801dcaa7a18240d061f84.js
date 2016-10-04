var Todo = React.createClass({displayName: "Todo",
  getInitialState: function(){
    return {editing:false};
  },

  edit: function(){
    this.setState({editing:true});
  },

  remove: function(){
    this.props.onRemove(this.props.index);
  },

  save: function(){
    var val = this.refs.newValue.getDOMNode().value;
    this.props.onChange(val, this.props.index);
    this.setState({editing:false});
  },

  todoDisplay: function(){
    return (
      React.createElement("li", {className: "todo"}, 
        React.createElement("span", {onClick: this.edit}, 
          this.props.children
        ), 
        React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash pull-right"}
        )
      )
    );
  },

  todoForm: function () {
    return (
      React.createElement("li", {className: "todo"}, 
        React.createElement("span", {onClick: this.edit}, 
          React.createElement("input", {type: "text", placeholder: "Edit todo", ref: "newValue", defaultValue: this.props.children})
        ), 
        React.createElement("button", {onClick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-floppy-disk pull-right"}
        )
      )
    );
  },

  render: function(){
    if(this.state.editing){
      return this.todoForm();
    }else{
      return this.todoDisplay();
    }
  }
  //ends todo
});

var TodoList = React.createClass({displayName: "TodoList",

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
              React.createElement("input", {ref: "nestedArray", className: this.state.input_style, placeholder: this.state.placeholder, value: this.state.text, onChange: this.onChange}), 
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

React.render(React.createElement(TodoList, null), document.getElementById('excersice'));
