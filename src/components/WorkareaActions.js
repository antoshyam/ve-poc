import React from 'react'
import './WorkareaActions.css'

export default function WorkareaActions() {
    return <div className='actionBar'>
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
}