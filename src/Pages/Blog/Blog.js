import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Rotate';
import { Link } from 'react-router-dom';
import './Blog.css';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://protected-escarpment-85835.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="features-bg  margin1">
                <h1>Our Blog</h1>
                <p><Link to="/home">HOME</Link> /OUR BLOG</p>
            </div>
            <div className='width'>
                <div className="blog-bg">
                </div>
                {/* blogs details stars here */}
                <div className="row container  mx-auto mt-5">
                    <div className="col-lg-7">
                        {

                            blogs.map(blog => <Fade bottom><div className="card mb-5">
                                <div className="img-hover-zoom image">
                                    <img className="card-img-top" src={blog.img} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p>{blog.name} {blog.blog} {blog.comment}</p>
                                    <p className="card-text">{blog.desc}</p>
                                    <Link href="#" className="btn btn-outline-dark">Read More</Link>
                                </div>
                            </div>
                            </Fade>
                            )
                        }
                    </div>
                    <div className="col-lg-5">
                        <div className="card p-3 text-center" style={{ "width": '15rem' }}>
                            <div className="text-center" >
                                <img className="card-img-top w-50 text-center" src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/sidebar-author-1.png" alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Saima Hayden</h5>
                                <p className="card-text">Nostrud aliquip exrcitation laboris
                                    nisiut temp duis autey. Lorem unt
                                    ipsum sit amet elit dolor.</p>

                            </div>
                        </div>
                        <div>
                            <img src="/Capture.PNG" className=" mt-3" style={{ "width": '15rem' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;