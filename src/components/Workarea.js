import React from 'react'
import './workarea.css'
import TabLayout from './common/layouts/TabLayout'
import Tab from './common/layouts/TabLayout/Tab'

export default function Workarea() {
    return <div>
        <div className='actionBar'>
            <div className='actionItem'>
                Trial Balance
            </div>
            <div className='actionItem'>
                Materiality
            </div>
            <div className='actionItem'>
                Notes
            </div>
            <div className='actionItem'>
                Reports
            </div>
            <div className='actionItem'>
                Minutes of Meetings
            </div>
            <div className='actionItem'>
                Document Management
            </div>
            <div className='actionItem'>
                ASO
            </div>
            <div className='actionItem'>
                Mistatements
            </div>
            <div className='online' />
        </div>
        <TabLayout activeTab="Approved">
            <Tab name="Approved">Content for Approved</Tab>
            <Tab name="In Process">Content for In Process</Tab>
            <Tab name="Hold">Content for on Hold</Tab>
            <Tab name="Cancelled">Content for cancelled</Tab>
        </TabLayout>
    </div>
}