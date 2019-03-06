export default function (state = [], action){

    switch(action.type){
        case 'FETCH_COMMENT':
            return [...state, ...action.payload.data.slice(0,5)];
        case 'SAVE_COMMENT':
            return [...state, {name: action.payload}];     
        default:
            return state;


    }
}