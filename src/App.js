import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import CommentList from './components/commentlist.js'
import CommentBox from './components/commentbox.js'
import Test from './components/test.js'
import LoginForm  from './components/Loginform.js'
import {Link, Route} from 'react-router-dom';
import  './App.css';

class App extends Component {
  renderButton() {
    if(!this.props.auth){
        return <Link to='/login' className="btn btn-primary">Login</Link>
  }
        else {
        return <button className="btn btn-primary" onClick={this.props.toggleAuth}>SingOut</button>}
}


  render() {
    console.log(this.props)
    return (
      <div className='conteiner'>
        <div className='row header'>
            <ul className='row'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/post'>Post a comment</Link></li>
                  <li><Link to='/test'>Test</Link></li>
                  {/* <li><Link to='/login' 
                            class="btn btn-primary"
                            onClick={this.props.toggleAuth}>
                                                    Login
                      </Link>
                  </li> */}
                  <li>{this.renderButton()}</li>
            </ul>
        </div>
      <div className='row' style={{backgroundColor: 'aliceblue'}}>
        <div className="col-md-auto">
        <Route path="/post" component={CommentBox} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={LoginForm} />
        <Route path="/" exact component={CommentList} />
        <Route path="/error" render={()=> <h3>Error</h3>} />
        
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps, actions)(App);
