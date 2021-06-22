import React from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import actionCreators from '../bll/reducers/index'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)
}
