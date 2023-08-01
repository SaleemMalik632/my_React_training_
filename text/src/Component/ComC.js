import React from 'react'
import Custom from './Custom';
import { ThreeCircles, ThreeDots, Bars } from 'react-loader-spinner';

const ComC = () => {

    const [data, loader] = Custom();
    return (
        <>
            <div>ComC</div>
            <div>
                {
                    loader ?
                        <  Bars color='blue' /> :
                        data.map((user) => (
                            <div key={user.id}>
                                <p>Name: {user.firstName} {user.lastName}</p>
                            </div>
                        ))
                }
            </div>
        </>
 
    )
}

export default ComC 