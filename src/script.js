var Todo = React.createClass({
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
      <li className="todo">
        <span onClick={this.edit}>
          {this.props.children}
        </span>
        <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash pull-right">
        </button>
      </li>
    );
  },

  todoForm: function () {
    return (
      <li className="todo">
        <span onClick={this.edit}>
          <input type="text" placeholder="Edit todo" ref="newValue" defaultValue={this.props.children} />
        </span>
        <button onClick={this.save} className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk pull-right">
        </button>
      </li>
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

var TodoList = React.createClass({

  getInitialState: function(){
    return {
      todos: [
        'Call Henry',
        'Pay phone bill',
        'Make medical appointment'
      ],
      text: '',
      placeholder: "Add Todo",
      input_style: "form-control"
    };
  },

  onChange: function(e) {
    this.setState({text: e.target.value})
  },

  add: function(e) {
    var arr= this.state.todos;
    var newTodo= this.refs.newTodo.getDOMNode().value;
    if(!newTodo){
      e.preventDefault();
      this.setState({placeholder:"Please Add Todo", input_style:"form-control red"});
    }else{
      arr.push(newTodo);
      this.setState({todos: arr, text: null, input_style:"form-control", placeholder:"Add Todo"});
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
    return (<Todo key={i} index={i} onChange={this.update} onRemove={this.remove}>
      {todo}
    </Todo>);
  },

  render: function(){
      return (
        <div>

          <h1>Things to DO</h1>
          <div className="form-inline">

            <div className="form-group">
              <input ref="newTodo" className={this.state.input_style} placeholder={this.state.placeholder} value={this.state.text} onChange={this.onChange} />
              <button onClick={this.add} className="btn btn-default btn-sm">+</button>
            </div>
          </div>
          <ul>
            {this.state.todos.map(this.eachTodo)}
          </ul>
        </div>
      );
  }
});

React.render(<TodoList />, document.getElementById('todo'));
