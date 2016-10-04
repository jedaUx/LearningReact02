var Todo = React.createClass({displayName: "Todo",
  edit: function(){
    alert("edit todo");
  },

  remove: function(){
    alert("todo removed")
  },

  save: function(){
    alert("todo saved")
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
          React.createElement("input", {type: "text", placeholder: "Edit todo", defaultValue: this.props.children})
        ), 
        React.createElement("button", {onClick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-plus pull-right"}
        )
      )
    );
  },

  render: function(){

  }
  //ends todo
});

React.render(
  React.createElement("div", null, 

    React.createElement("h1", null, "Things to DO"), 
    React.createElement("div", {className: "form-inline"}, 

      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {className: "form-control", placeholder: "Add todo"}), 
        React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
      )
    ), 
    React.createElement("ul", null, 
      React.createElement(Todo, null, 
        "Call Henry"
      ), 
      React.createElement(Todo, null, 
        "Pay phone"
      ), 
      React.createElement(Todo, null, 
        "Make medical appointment"
      )
    )
  ),
  document.getElementById('todo'));
