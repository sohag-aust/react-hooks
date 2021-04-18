import React from 'react';
import {UserContext} from '../App';

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (user) => {
                        return (
                            <div>
                                <h2> ComponentF = and got value from UserContext : {user}</h2>
                            </div>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF;
