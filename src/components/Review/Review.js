import React from 'react';
import useCart from '../../hook/useCart';
import useProducts from '../../hook/useComments';
import Allcomments from "../Allcomments/Allcomments"
import './Review.css'

const Review = () => {
    const [comments, setComments] =useProducts()
    const [cart, setCart] =useCart(comments)
    return (
        <div>
            <h1 className='heading'>ALL Review </h1>
            <div className='comments'>
                        {
                            comments.map(comment => <Allcomments
                                key={comment.id}
                                comment={comment}
                            ></Allcomments>)
                        }
                    </div>
        </div>
    );
};

export default Review;