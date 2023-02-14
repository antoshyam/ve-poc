import ActionConstants from "../../constants/ActionConstants"
import folderOpen from "../../assets/images/folder-open.gif"
import leaf from "../../assets/images/leaf.gif"
import form from "../../assets/images/form.png"
import check_list from "../../assets/images/check_list.png"

export const initializeNavigation = () => (dispatch) => {
    dispatch({
        type: ActionConstants.INITIALIZING.NAVIGATION_TREE,
        payload: navTreeData
    })
}

const navTreeData =
    [
        {
            NodeLabel: "Audit Engagement-NATZUTARI AFRICA LIMITED KENYA BRANCH",
            NodeImage: folderOpen,
            NodeData: [
                {
                    NodeLabel: "1 - Acceptance",
                    NodeImage: folderOpen,
                    NodeData: [
                        { NodeLabel: "01 - Meeting(s)", NodeImage: leaf },
                        { NodeLabel: "10 - Entity Card", NodeImage: form },
                        { NodeLabel: "15 - Engagement Card", NodeImage: form },
                        { NodeLabel: "16 - Engagement Scoping", NodeImage: check_list },
                        { NodeLabel: "19 - Entite et Mandat informations FR", NodeImage: check_list  },
                        { NodeLabel: "20 - ISA Compliance", NodeImage: check_list  },
                        { NodeLabel: "25 - Acceptance Survey", NodeImage: check_list  },
                        { NodeLabel: "30 - Engagement and Independence Letter", NodeImage: check_list  },
                        { NodeLabel: "40 - Acceptance Sign-off", NodeImage: form  },
                        { NodeLabel: "41 - Partner Acceptance Sign-off", NodeImage: check_list  }
                    ]
                }
            ]
        }
    ]