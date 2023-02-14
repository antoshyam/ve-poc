import React from 'react'
import './workarea.css'
import TabLayout from './common/layouts/TabLayout'
import Tab from './common/layouts/TabLayout/Tab'
import WorkareaActions from './WorkareaActions'
import WorkareaForm from './WorkareaForm'
import WorkareaTabs from './WorkareaTabs'

export default function Workarea({data}) {
    return <div>
        <WorkareaActions />
        <div className='workareaContainer'>
            <WorkareaForm data={data?.formData}/>
            <WorkareaTabs data={data?.tabData}/>
        </div>
    </div>
}