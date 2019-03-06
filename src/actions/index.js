import axios from 'axios';

export function toggleAuth(){
    return {
        type: 'CHANGE_AUTH'
    }
}

export function fetchComments() {
    const response = axios.get ('https://jsonplaceholder.typicode.com/comments');
        return{
                type:"FETCH_COMMENT",
                payload: response,
    
}
}

export function saveComment (comment) {

    return{
            type: 'SAVE_COMMENT',
            payload: comment
    }
}