import React from 'react'
import Form from './common/layouts/Form'
import TabLayout from './common/layouts/TabLayout'
import Tab from './common/layouts/TabLayout/Tab'
import TabContent from './TabContent'
import WorkareaForm from './WorkareaForm'
import './WorkareaTabs.css'

const WorkareaTabs = ({data}) => {

    return <TabLayout activeTab="GENERAL" defaultTabClassName="defaultTabClassName" activeTabClassName="activeTabClassName">
        {
            data?.map(tab => <Tab name={tab.tabName}>
                <TabContent data={tab.tabData}/>
            </Tab>)
        }
    </TabLayout>
}

export default WorkareaTabs