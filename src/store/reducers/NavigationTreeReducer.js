import ActionConstants from "../../constants/ActionConstants"

const NavigationTreeReducer = (
    state={}
    , action
) => {
    switch (action.type) {
        case ActionConstants.INITIALIZING.NAVIGATION_TREE:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}

export default NavigationTreeReducer