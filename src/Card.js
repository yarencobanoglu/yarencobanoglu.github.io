import React from 'react'; //JSX Kullanmak için

const Card = ({id,name,email}) => {
    return ( 
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
 
export default Card;