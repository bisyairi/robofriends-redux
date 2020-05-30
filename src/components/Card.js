import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc dib ba bw2 br4 pa1 ma1 b--orange grow shadow'>
            <img className="db" alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>

            <dl className="mt2 f6 lh-copy">
                <dd className="ml0 fw6 courier hover-white">{name}</dd>
                <dd className="ml0 underline-hover">{email}</dd>
            </dl>
        </div>
    );
}

export default Card;