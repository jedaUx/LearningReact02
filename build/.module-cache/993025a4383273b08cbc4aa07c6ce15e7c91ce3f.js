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

  onChange: function(e) {
    this.setState({text: e.target.value})
  },

  getArray: function(data) {
    for (item in data) {
      if(Array.isArray(data[item])){
        this.getArray(data[item]);
      }else{
        this.state.convertedArray.push(data[item]);
        console.log(data[item]);
      }
    }
  },

  convert: function(e) {
    var arr= this.state.convertedArray;
    var newtoConvert= this.refs.nestedArray.getDOMNode().value;
    if(!newtoConvert){
      e.preventDefault();
      this.setState({placeholder:"Please add a nested array", input_style:"form-control red"});
    }else{
      this.state.convertedArray = [];
      try{
        var newData = JSON.parse("[" + newtoConvert + "]");
      }
      catch (err){
        this.setState({placeholder:"Please check syntax", input_style:"form-control red"});
        return err;
      }

      this.getArray(newData);
      this.setState({text: null, input_style:"form-control", placeholder:"Add nested array"});
    }
  },

  eachNumber: function(number, i) {
    return (React.createElement("li", {className: "todo"}, 
      number
    ));
  },

  render: function(){
      return (
        React.createElement("div", null, 

          React.createElement("h1", null, "Insert nested arrays(js convention)"), 
          React.createElement("h2", null, "i.e. [[1,2,[3]],4]"), 
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

React.render(React.createElement(Excersice, null), document.getElementById('excersice'));
