import React from 'react'
import Custom from './Custom';
import { ThreeCircles  , ThreeDots} from 'react-loader-spinner'

const ComC = () => {

    const [data, loader] = Custom();
    return (
        <>
            <div>ComC</div>
            {
                loader ?
                    <ThreeDots /> : 
                    data.map((user) => (
                        <div key={user.id}>
                            <p>Name: {user.firstName} {user.lastName}</p>
                        </div>
                    ))
            }
        </>

    )
}

export default ComC 