import CommonConstants from "./CommonConstants";

let action = CommonConstants.ACTION,
    entity = CommonConstants.ENTITY,
    docType = CommonConstants.DOC_TYPE


const ActionConstants =  {
    INITIALIZING: {
        NAVIGATION_TREE : `${entity.NAVIGATION_TREE}_${docType.DATA}_${action.INIT.IN_PROCESS}`
        ,WORKAREA : `${entity.WORKAREA}_${docType.DATA}_${action.INIT.IN_PROCESS}`
    },
    INITIALIZED: {
        NAVIGATION_TREE : `${entity.NAVIGATION_TREE}_${docType.DATA}_${action.INIT.SUCCESS}`
        ,WORKAREA : `${entity.WORKAREA}_${docType.DATA}_${action.INIT.SUCCESS}`
    },
    FETCHING: {
        NAVIGATION_TREE : `${entity.NAVIGATION_TREE}_${docType.DATA}_${action.FETCH.IN_PROCESS}`
        ,WORKAREA : `${entity.WORKAREA}_${docType.DATA}_${action.FETCH.IN_PROCESS}`
    },
    FETCHED: {
        NAVIGATION_TREE : `${entity.NAVIGATION_TREE}_${docType.DATA}_${action.FETCH.SUCCESS}`
        ,WORKAREA : `${entity.WORKAREA}_${docType.DATA}_${action.FETCH.SUCCESS}`
    }
}

export default ActionConstants