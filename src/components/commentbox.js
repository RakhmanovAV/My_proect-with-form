import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as  actions from '../actions'
import requireAuth from './requireAuth.js'

class CommentBox extends Component {
state = {
comment: ''



}

handleSubmit = () => {
this.props.saveComment(this.state.comment);
this.setState({comment: ''});
}

    render(){
        console.log(this.state)
        return( 
        <div>
                <h3>CommentBox</h3>
                <h4>add a comment</h4>
                <textarea 
                value = {this.state.comment}
                onChange ={(event)  => this.setState({comment: event.target.value})}
                />
                <button onClick={this.handleSubmit}>Submit comment</button>
        </div>
        )
    }
}

export default connect(null, actions)(requireAuth(CommentBox));