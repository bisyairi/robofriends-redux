import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input type='search' 
                className='pa3 ba bg-lightest-blue shadow-3 br-pill' 
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
        
    );
}

export default SearchBox;