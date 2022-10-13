import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import constants from '../Constants'
import axios from 'axios'

// import ScrollProgressRead from 'react-scroll-progress-read';
// import ScrollProgress from 'react-scrolling-progress';
import ProgressBar from 'react-progressbar-on-scroll'

function BlogContents() {
  const { slug } = useParams()
  const [blogImage, setBlogImage] = useState('')
  const [blogDetails, setBlogDetails] = useState({
    blogContent: '',
    publishedAt: '',
  })

  // apiEndpoint for strapi get one blog details based on slug
  const apiEndPoint = constants.apiEndPoint + `blogs?filters[slug]=${slug}&populate=blogImage`
  useEffect(() => {
    axios.get(apiEndPoint).then((resp) => {
      // blog banner image url
      setBlogImage(constants.imageUrl + resp.data.data[0].attributes.blogImage.data[0].attributes.formats.small.url);
      setBlogDetails(resp.data.data[0].attributes);
    })
  }, [])

  return (

    <section className='p-3 blog-content-sec'>

      <div className="container">

        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-md-8 blog-content">

            <h3 className="blog-title">{blogDetails.blogName}</h3>

            <img className='featured-img' src={blogImage} alt="blog-post" />
            <p className="paras" style={{ whiteSpace: 'pre-line' }}>
              <ProgressBar color="#fff"
                height={5}
                direction="right"
                position="top"
                color="#8c4bff"
                gradient={true}
                gradientColor="green"
               />
              {blogDetails && blogDetails.blogContent}
            </p>

            <div className="author-and-date">
              <strong className='author-name'>{blogDetails.authorName}</strong>
              <p className='date'>{blogDetails.publishedAt.slice(0, 10)}</p>
            </div>

          </div>

          {/* Related post */}
          <div className="col-md-12">
            <h3 className="related-title">Related</h3>
          </div>

          <div className="col-md-3">
            <img className="related-post-img" src="https://preview.colorlib.com/theme/magdesign/images/ximg_3.jpg.pagespeed.ic.TsSrvxpHvJ.webp" alt="related-post" />
          </div>
          <div className="col-md-9">
            <p className='date pt-3'>July 2, 2020</p>
            <h5 className='related-sub-title'>Your most unhappy customers are your greatest source of learning.</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          {/* Related post */}

        </div>
      </div>
    </section>
  )
}

export default BlogContents