import React from 'react'
import Custom from './Custom';

const ComC = () => {
      const [data]  = Custom();
    return (
        <>
            <div>ComC</div>
            {
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