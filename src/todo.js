import React,{Component} from 'react'
import auth from './auth.js'
class Todo extends Component{
    constructor(props){
        super(props);
        //{label:"Mi primera tarea", status:true}
        this.state = {
            list:[],
            inputValue:''
        };
    }

    onSubmitHandler = (e) => {
		e.preventDefault();
        let {list, inputValue} = this.state;
        list.push({label:inputValue, status:false});
        this.setState({list, inputValue:''});
        console.log(this.state.list)
    }
    
    onChangeInput = (e) => {
		this.setState({inputValue:e.target.value})
    }
    
    onPressCheck = (e) =>{
        let index = e.target.dataset.index;
        let {list} = this.state;
        list[index].status = e.target.checked;

		this.setState({list})
    }
    
    order = (list) => {
        
        return list.sort(function (a, b) {
            if (a.status > b.status) {
              return 1;
            }
            if (a.status < b.status) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
    }

    log


    render(){ 

        let {list,inputValue} = this.state;

        return (
            <div className="todo">

                <form onSubmit={this.onSubmitHandler}>
                    <h1>Simple Todo list</h1>
                    <input type="text" name="newTodo" id="newTodo" value={inputValue} onChange={this.onChangeInput} />   
                </form>

                <ul>
                    {this.order(list).map( (element, index) => <li key={index}><input data-index={index}  id={`check-${index}`} type="checkbox" checked={element.status} onChange={this.onPressCheck} /><label htmlFor={`check-${index}`} className={element.status?'completed':''} >{element.label}</label ></li> )}
                </ul>

                <button className="logout" onClick={()=>{
                            auth.logout(()=>{ this.props.history.push('/') })
                        }}>Logout</button>
            </div>
        )
    }
}

export default Todo;