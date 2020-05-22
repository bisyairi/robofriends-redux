import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='dib ba bw2 br4 pa1 ma1 b--orange grow shadow'>
            <img class="db" alt='robots' src={`https://robohash.org/${id}`}/>

            <dl class="mt2 f6 lh-copy">
                <dd class="ml0 fw6 courier hover-white">{name}</dd>
                <dd class="ml0 underline-hover">{email}</dd>
            </dl>
        </div>
    );
}

export default Card;