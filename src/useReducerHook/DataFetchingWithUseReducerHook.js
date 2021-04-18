import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (currentState, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.data,
                error: ''
            }
        
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something Error Wrong',
                post: {}
            }

        default:
            return currentState
    }
}

function DataFetchingWithUseReducerHook() {

    const [newState, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then( (res) => {
                dispatch({type: 'FETCH_SUCCESS', data: res.data})
            })
            .catch( (err) => {
                dispatch({type: 'FETCH_ERROR'})
            })
    }, []);

    return (
        <div>
            {newState.loading ? 'Loading' : newState.post.title}
            {newState.error ? newState.error : null}
        </div>
    )
}

export default DataFetchingWithUseReducerHook;
