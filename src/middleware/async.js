export default ({dispatch}) => (next) => (action) => {

    if(!action.payload || !action.payload.then){
        return next(next);
    }
    action.payload.then((response) => {
        const newAction = {...action, payload: response}
        dispatch(newAction);
    })
}