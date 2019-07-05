import React,{Component} from 'react'
import auth from './auth.js'
class Login extends Component{
    constructor(props){
        
        super(props);

        this.defaultCredentials = {user:"admin", pass:"admin"};
        
        this.state = {
            userValue:'',
            passValue:'',
            error:null
        };
    }

    onSubmitHandler = (e) => {
		e.preventDefault();
        let {userValue, passValue} = this.state;
        let isLogged = this.validateCredentials(userValue, passValue);
        let message;
        if(!isLogged){
            message = 'Oops! The credentials are invalid. Please Try again.';
        }else{
            message = null;
            auth.login(()=>{
                this.props.history.push('/');
            });
        }

        this.setState({error:message});
    }
    
    onChangeInput = (e) => {
        let id = e.target.id;
		this.setState({[`${id}Value`]:e.target.value})
    }

    validateCredentials = (userValue, passValue) => {

        let {user, pass} = this.defaultCredentials;

        if(userValue === user && passValue === pass){
            return true;
        }

        return false;
    } 
    
    render(){ 

        let {userValue, passwordValue, error} = this.state;

        return (
            <div className="todo">
                <form onSubmit={this.onSubmitHandler}>
                    <h1>Please enter your credentials</h1>
                    <input type="text" name="user" id="user" required value={userValue} placeholder="Enter your username" onChange={this.onChangeInput} />   
                    <input type="password" name="pass" id="pass" required value={passwordValue} placeholder="Enter your password" onChange={this.onChangeInput} />  
                    <button>LogIn</button> 
                    <p className="error">{error}</p>
                </form>
            </div>
        )
    }
}

export default Login;