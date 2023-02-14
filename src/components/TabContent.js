import React from 'react'
import Accordion from './common/layouts/AccordionLayout/Accordion';
import Form from './common/layouts/Form';
import './TabContent.css'
import WorkareaForm from './WorkareaForm';

const TabContent = ({data}) => {

    return <div className='tabContentContainer'>
        {
            data?.map(tabContent => 
            <Accordion header={tabContent.sectionName} collapsible showContent={true}>
                <WorkareaForm data={tabContent.formData} columns={tabContent.formColumns}></WorkareaForm>
            </Accordion>)
        }

    </div>
}

export default TabContent