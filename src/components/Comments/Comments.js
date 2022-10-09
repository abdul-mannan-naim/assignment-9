import React from 'react';
import './Comments.css'
import CommentBox from '../CommentBox/CommentBox';
import useCart from '../../hook/useCart';
import useProducts from '../../hook/useComments';
import img from '../../image/aideal-hwa-OYzbqk2y26c-unsplash.jpg'
import { Link } from 'react-router-dom';

const Comments = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <div className="container">
                <div className='first-container'>
                    <div className='text-box'>
                        <div className='about-robots'>
                            <h2 className='introduction'>It's easy to get an impression of the way <br /> robots are changing our daily lives</h2>
                            <p className='core-fact'>  Robots will increase economic growth and productivity
                                and create new career opportunities for many people worldwide.
                                However, there are still warnings out there about massive job losses,
                                forecasting losses of 20 million manufacturing jobs by 2030</p>
                        </div>
                        <div>
                            <button className='btn'>More details</button>
                        </div>
                    </div>
                    <div className='robot'>
                        <img src={img} alt="" />
                    </div>
                </div>

                <div>
                    {/* comment box */}
                    <div>
                        <h2 className='engineers'>Robotics Engineers</h2>
                    </div>
                    <div className='comments'>
                        {
                            products.map(product => <CommentBox
                                key={product.id}
                                product={product}
                            ></CommentBox>)
                        }
                    </div>
                    <div>
                        <Link to='/reviews'><button className='allComments'>All Comments</button></Link>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Comments;