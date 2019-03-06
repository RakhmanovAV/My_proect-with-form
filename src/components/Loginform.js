import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const dataUser  = [
        {email: 'lexa55rus@mail.ru',
        password: '12345'},

        {email: 'rav3110@gmail.com',
        password: '54321'}

        ];

class LoginForm extends Component {
state = {
        email: '',
        password: '',
        error: ''
        };

check = () => {
        var check = dataUser.some((user) => {return user.email===this.state.email && user.password===this.state.password});
                if (check){
                        this.props.history.push('/') 
                        this.props.toggleAuth()
                }                              
                else{
                        this.setState({ error: 'Email or password entered is not correct'});
} 
};
render () {

return (
        <Fragment>
                <form>               
                        <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter lexa55rus@mail.ru" 
                                onChange ={(event)  => this.setState({email: event.target.value})}
                                />
                        </div>
                        <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter 12345" 
                                onChange ={(event)  => this.setState({password: event.target.value})}
                                />
                        </div>
                        <div><h3 className="badge badge-danger">{this.state.error}</h3></div>
                        <button onClick={this.check} type='button'  className="btn btn-primary">Login</button>
                </form>

        </Fragment>)
    }} 
    const mapStateToProps = ({auth}) => ({auth});

    export default connect(mapStateToProps, actions)(LoginForm) 