import React from 'react';
import { directive } from '@babel/types';


const Hello = props =>{
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name}
            </h1>
        </div>
    )
}

export default Hello