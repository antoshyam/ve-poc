import React from 'react'
import { useDispatch } from 'react-redux'
import { setUpWorkareaData } from '../store/actions/WorkareaActions'
import DataTree from './common/collection/DataTree'

export default function NavigationArea({data}){
    const dispatch = useDispatch()
    return (
        <DataTree data={data} onItemClick={(nodePath) => dispatch(setUpWorkareaData(nodePath))}/>
    )
}