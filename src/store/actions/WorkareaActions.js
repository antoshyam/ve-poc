import ActionConstants from "../../constants/ActionConstants"

export const setUpWorkareaData = (nodePath) => {

    return dispatch => {
        if (nodePath[2].includes("Entity"))
            dispatch({
                type: ActionConstants.FETCHED.WORKAREA,
                payload: prepareWorkareaData("Entity")
            })
        else if (nodePath[2].includes("Engagement")) {
            dispatch({
                type: ActionConstants.FETCHED.WORKAREA,
                payload: prepareWorkareaData("Engagement")
            })
        }
        else {
            dispatch({
                type: ActionConstants.FETCHED.WORKAREA,
                payload: prepareWorkareaData("Under Construction")
            })
        }
    }
}

const prepareWorkareaData = (type) => {
    if (type == "Entity") {
        return {
            "pageHeader": "Entity Card",
            "formData": [
                {
                    label: "Entity Name",
                    value: "new Entity V155 Test RMA",
                    required: true
                },
                {
                    label: "Entity Lead Partner",
                    value: "France.Partner",
                    required: true
                },
                {
                    label: "Entity Status",
                    value: "Active"
                }

            ],
            "tabData": [
                {
                    tabName: "GENERAL",
                    tabData: [
                        {
                            sectionName: "ENTITY DETAILS",
                            formData: [
                                {
                                    label: "Address 1",
                                    value: "1079 Boulevard Avenue, 5th cross",
                                    required: true
                                },
                                {
                                    label: "Address 2",
                                    value: ""
                                },
                                {
                                    label: "City",
                                    value: "Las Vegas",
                                    required: true
                                },
                                {
                                    label: "State/Province/Country",
                                    value: "Nevada"
                                },
                                {
                                    label: "Country",
                                    value: "United States"
                                },
                                {
                                    label: "Postal Code 1(ZIP Code)",
                                    value: "10384"
                                },
                                {
                                    label: "Primary Phone Number",
                                    value: ""
                                },
                                {
                                    label: "Alternate Phone Number",
                                    value: ""
                                }

                            ]
                        },
                        {
                            sectionName: "ENTITY LEGAL INFORMATION",
                            formColumns:3,
                            formData: [
                                {
                                    label: "Does the entity have a National Registration Number?*",
                                    value: "Yes",
                                    required: true
                                },
                                {
                                    label: "Specify National Registration Number*",
                                    value: "",
                                    required: true
                                },
                                {
                                    label: "Unique Global Number",
                                    value: "FRNRN 12345",
                                },
                                {
                                    label: "Legal Form",
                                    value: "Association",
                                    required: true
                                }
                            ]
                        },
                        {
                            sectionName: "ENTITY CHARACTERISTICS",
                            formData: [
                                {
                                    label: "Sector",
                                    value: "Industry/Services",
                                    required: true
                                },
                                {
                                    label: "Sub-sector",
                                    value: "Energy",
                                    required: true
                                },
                                {
                                    label: "Description of Activity",
                                    value: "aaa",
                                },
                                {
                                    label: "Number of Employees",
                                    value: "12",
                                    required: true
                                },
                                {
                                    label: "Listed Company?",
                                    value: "aaa",
                                },
                                {
                                    label: "PIE?",
                                    value: "No",
                                    required: true
                                }
                            ]
                        }
                    ]
                },
                {
                    tabName: "GROUP HIERARCHY",
                    tabData: [
                    ]
                },
                {
                    tabName: "CONTACTS",
                    tabData: [
                    ]
                },
                {
                    tabName: "GOVERNANCE",
                    tabData: [
                    ]
                },
                {
                    tabName: "OTHER ADDRESSES",
                    tabData: [
                    ]
                }
            ]
        }
    }else if(type == "Engagement"){
            return {
                "pageHeader": "Engagement Card",
                "formColumns":3,
                "formData": [
                    {
                        label: "Engagement Name",
                        value: "New V155_RMA Cloned Review",
                        required: true
                    },
                    {
                        label: "Entity Name",
                        value: "new Entity V155 Test RMA",
                        required: true
                    },
                    {
                        label: "Engagement Status",
                        value: "Open"
                    },
                    {
                        label: "Engagement Lead Partner",
                        value: "UK.Partner",
                        required: true
                    },
                    {
                        label: "Office",
                        value: "Paris",
                        required: true
                    },
                    {
                        label: "Management Unit",
                        value: "Banque"
                    },
                    {
                        label: "Engagement Period End Date",
                        value: "30-Nov-2021",
                        required: true
                    },
                    {
                        label: "Master File Name",
                        value: "FRANCE(FR)",
                        required: true
                    },
                    {
                        label: "Sector",
                        value: "Industry/Services"
                    }
    
                ],
                "tabData": [
                    {
                        tabName: "GENERAL",
                        tabData: [
                            {
                                sectionName: "BACKGROUND INFORMATION",
                                formColumns: 3,
                                formData: [
                                    {
                                        label: "Engagement Type",
                                        value: "Audit Services",
                                        required: true
                                    },
                                    {
                                        label: "Type of Service",
                                        value: "Statutory accounts audit"
                                    },
                                    {
                                        label: "Back Office Job Number",
                                        value: "",
                                        required: true
                                    },
                                    {
                                        label: "Won through tender?",
                                        value: ""
                                    },
                                    {
                                        label: "Date of First Assignment",
                                        value: "11-Feb-2020"
                                    },
                                    {
                                        label: "Is this the first year audit?",
                                        value: "No"
                                    },
                                    {
                                        label: "Date of Renewal",
                                        value: ""
                                    }
    
                                ]
                            },
                            {
                                sectionName: "A joint audit is an audit on a legal entity (the auditee) by two or more auditors to produce a single audit report, thereby sharing responsibility for the audit.",
                                formData: [
                                    {
                                        label: "Is the engagement a Joint Audit?",
                                        value: "No",
                                        required: true
                                    }
                                ]
                            },
                            {
                                sectionName: "FRAMEWORK AND SCOPE",
                                formData: [
                                    {
                                        label: "Functional Currency",
                                        value: "Euro(EUR)",
                                        required: true
                                    },
                                    {
                                        label: "Accounting Framework",
                                        value: "FRANCE IFRS",
                                        required: true
                                    },
                                    {
                                        label: "Previous Accounting Framework",
                                        value: "FRANCE IFRS",
                                    },
                                    {
                                        label: "Document whether selected framework is acceptable",
                                        value: "aaa",
                                        required: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tabName: "ENGAGEMENT TEAM/FEES",
                        tabData: [
                        ]
                    }
                ]
            }
        }
    }