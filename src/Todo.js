import React, { Component } from 'react';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            item:"",
            todoItem:[]
        }
        this.onChangehandler = this.onChangehandler.bind(this);
        this.addData = this.addData.bind(this);
        this.delete = this.delete.bind(this);
    }
        onChangehandler(event){
            var inputval = event.target.value;
            this.setState({
                item:inputval
            })
        }
    addData(){
        var inputval = this.state.item;
        var iteminstance = this.state.todoItem;
        iteminstance.push(inputval)
        this.setState({
            todoItem:iteminstance,
            item:""
        })
    }
    delete(event){
    var id = event.target.id;
    var iteminstance = this.state.todoItem;
        iteminstance.splice(id,1);
        this.setState({
            todoItem:iteminstance
        })
        


    }
    render(){
        var itemlist = this.state.todoItem.map((e,i)=>
        <li key={i}>{e} <span onClick={this.delete} id={i}>X</span></li>
        )
        return(
             <div>
                 <div className="Header"> Todo app</div>
                 <div className="body"></div>
        <ul>
            {itemlist}
        </ul>
                 <div className="foater">
                     <input type="text"value={this.state.item}onChange={this.onChangehandler}/>
                      <p>{this.state.item}</p>
                      <button onClick={this.addData}>add</button>
                 </div>
             </div>
        );
    }

}
export default Todo;