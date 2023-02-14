import React from 'react'
import Form from './common/layouts/Form'
import FormInput from './FormInput'
import './WorkareaForm.css'

const WorkareaForm = ({data}) => {
    return <Form columns={4} className='workareaForm'>
        {
            data?.map(input => <FormInput label={input.label} value={input.value} required/>)
        }
    </Form>
}

export default WorkareaForm