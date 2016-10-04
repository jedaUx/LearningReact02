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
      todos: [
        'Call Henry',
        'Pay phone bill',
        'Make medical appointment'
      ]
    };
  },

  add: function() {
    var arr= this.state.todos;
    var newTodo= this.refs.newTodo.getDOMNode().value;
    if(!newTodo){
      e.preventDefault();
    }else{
      arr.push(newTodo);
      this.setState({todos: arr});
    }
  },

  update: function(newValue, i) {
    var arr = this.state.todos;
    arr[i] = newValue;
    this.setState({todos: arr});
  },

  remove: function(i) {
    var arr= this.state.todos;
    arr.splice(i, 1);
    this.setState({todos: arr});
  },

  eachTodo: function(todo, i) {
    return (React.createElement(Todo, {key: i, index: i, onChange: this.update, onRemove: this.remove}, 
      todo
    ));
  },

  render: function(){
      return (
        React.createElement("div", null, 

          React.createElement("h1", null, "Things to DO"), 
          React.createElement("div", {className: "form-inline"}, 

            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {ref: "newTodo", className: "form-control", placeholder: "Add todo"}), 
              React.createElement("button", {onClick: this.add, className: "btn btn-default btn-sm"}, "+")
            )
          ), 
          React.createElement("ul", null, 
            this.state.todos.map(this.eachTodo)
          )
        )
      );
  }
});

React.render(React.createElement(TodoList, null), document.getElementById('todo'));
