import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import constants from '../Constants'
import axios from 'axios'
import Loading from '../Loading/Loading'

function Blogs() {

    // apiendpoint for strapi
    const apiEndPoint = constants.apiEndPoint + 'blogs?populate=blogImage'
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    // API call to backend and set blogs data to state
    async function fetchData() {
        const response = await axios.get(apiEndPoint)
        if (response) {
            setBlogs(response.data.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const options = {
        responsiveClass: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        },
    };

    return (
        <>
            <section id="demos" className="product_info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Blogs</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to<br /> demonstrate the visual form of a document or</p>
                        </div>
                    </div>
                    {/* cards */}
                    <div className="row">
                        {
                            loading ? <Loading /> :
                                <>
                                    <OwlCarousel {...options}>
                                        {
                                            blogs.map((eachBlog) => {
                                                const blogImageUrl = constants.imageUrl + eachBlog.attributes.blogImage.data[0].attributes.formats.small.url ? constants.imageUrl + eachBlog.attributes.blogImage.data[0].attributes.formats.small.url : ''
                                                return (
                                                    <Fragment key={eachBlog.id}>
                                                        <Link to={`/${eachBlog.attributes.slug}`} state={eachBlog.attributes.slug} className='blog-link'>
                                                            <div className="item">
                                                                <div className="pr-thumb">
                                                                    <img className='img-fluid' src={blogImageUrl} alt="blog" />
                                                                    <h4>{eachBlog.attributes.blogName}</h4>
                                                                    {/* long text making to short */}
                                                                    <p>{eachBlog.attributes.blogContent.slice(0, 100)}...</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </OwlCarousel>
                                </>
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blogs