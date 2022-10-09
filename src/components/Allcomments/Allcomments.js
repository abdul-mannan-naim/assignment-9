import React from 'react';

const Allcomments = (props) => {
    const { comment } = props;
    const { name, age, picture, email, opinion, rating } = comment;
    return (
        <div className="body">
            <div className='cart'>
                <div className='picture'>
                    <img src={picture} alt="" />
                </div>
                <div className="details">

                    <h4>{name}</h4>
                    <p>Age:{age}</p>
                    <p>Email:{email}</p>
                </div>
            </div>
            <div className='comment'>
                <div>
                    <p className='p'>Comment: <small className='opinion'> {opinion}</small></p>
                    <p className='Rating'>Rating:<small className='rating'> {rating}</small></p>
                </div>
            </div>
        </div>
    )
};

export default Allcomments;