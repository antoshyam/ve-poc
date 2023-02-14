import ActionConstants from "../../constants/ActionConstants"

const WorkareaReducer = (
    state={}
    , action
) => {
    switch (action.type) {
        case ActionConstants.FETCHED.WORKAREA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default WorkareaReducer