const createActionStatuses = (action) => {
    return {
        IN_PROCESS: `${action}_IN_PROCESS`,
        SUCCESS: `${action}_SUCCESS`,
        ERROR: `${action}_ERROR`
    }
}

const CommonConstants =  {
    ENTITY: {
        NAVIGATION_TREE: 'NAVIGATION_TREE',
        WORKAREA: 'WORKAREA'
    },
    ACTION: {
        INIT: createActionStatuses('INIT'),
        FETCH: createActionStatuses('FETCH')
    },
    DOC_TYPE: {
        DATA: 'DATA'
    }
}

export default CommonConstants