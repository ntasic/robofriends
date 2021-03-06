import React from 'react';


const Card = ({name, email, id} ) => {
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2 className='f6 lh-copy' >{name}</h2>
        <p className='f6 lh-copy'>{email}</p>
      </div>
    </div>
  );
}

export default Card;
