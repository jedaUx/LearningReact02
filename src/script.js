var Excersice = React.createClass({

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
    return (<li className="todo">
      {number}
    </li>);
  },

  render: function(){
      return (
        <div>
          <div className="text-center">
          <h1>Insert nested arrays(js convention)</h1>
          <h2>i.e. [[1,2,[3]],4]</h2>
          </div>
          <div className="form-inline">

            <div className="form-group">
              <input ref="nestedArray" className={this.state.input_style} placeholder={this.state.placeholder} value={this.state.text} onChange={this.onChange} />
              <button onClick={this.convert} className="btn btn-default btn-sm">Convert</button>
            </div>
          </div>
          <ul>
            {this.state.convertedArray.map(this.eachNumber)}
          </ul>
        </div>
      );
  }
});

React.render(<Excersice />, document.getElementById('excersice'));
