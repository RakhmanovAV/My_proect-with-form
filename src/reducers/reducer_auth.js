
export  default function (state=false, action){
    switch(action.type){
        case 'CHANGE_AUTH':
            return !state
           default:
           return state; 

    }
}