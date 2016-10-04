var Todo = React.createClass({displayName: "Todo",
  render: function(){
    return (
      React.createElement("div", null, 

          React.createElement("h1", null, "Things to DO"), 

          React.createElement("div", {className: "form-inline"}, 

            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {className: "form-control", placeholder: "Add todo"}), 
              React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
            )
          ), 

          React.createElement("ul", null, 
            React.createElement("li", {className: "todo"}, " Call Henry"), 
            React.createElement("li", {className: "todo"}, " Pay phone bill")
          )

       )
    );
  }
  //ends todo
});

React.render(React.createElement(Todo, null), document.getElementById('todo'));
