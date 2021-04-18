import React, {useContext} from 'react';
import { ChannelContext, UserContext } from '../App';
import ComponentF from './ComponentF';

// in componentE we use useContext Hook for getting context value

function ComponentE() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            <h2> ComponentE = got value using useContext hook : {user} and {channel} </h2>
            <ComponentF />
        </div>
    )
}

export default ComponentE;
