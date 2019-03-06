import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as  actions from '../actions'

class CommentList extends Component {
    renderComments = () => {
return this.props.comments.map((item, idx) => {
    return <li key={idx}>{item.name}</li>
})

    }
    render(){
        console.log(this.props)
       
        return (
        <div>
            <h3>CommentList</h3>
            <button onClick={this.props.fetchComments}>Get Comments</button>
            <ul>
                {this.renderComments()}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = ({comments}) => ({comments});


export default connect(mapStateToProps, actions)(CommentList);