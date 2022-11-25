import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import constants from '../Constants'
import axios from 'axios'

import ProgressBar from 'react-progressbar-on-scroll'
import Loading from '../Loading/Loading'

function BlogContents() {

  const { slug } = useParams()

  const [blogImage, setBlogImage] = useState('')
  const [loading, setloading] = useState(true)
  const [blogDetails, setBlogDetails] = useState({
    blogContent: '',
    publishedAt: '',
  })

  async function fetchData() {
    const apiEndPoint = constants.apiEndPoint + `blogs?filters[slug]=${slug}&populate=blogImage`
    // apiEndpoint for strapi get one blog details based on slug
    const resp = await axios.get(apiEndPoint)
    if (resp) {
      console.log()

      // blog banner image url
      setBlogImage(resp.data.data[0].attributes.blogImage.data[0].attributes.url);
      setBlogDetails(resp.data.data[0].attributes);
      setloading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='p-3 blog-content-sec'>
      {
        loading ? <Loading /> :
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h3 className="blog-title">{blogDetails.blogName}</h3>
                  <div className="author-and-date">
                    <strong className='author-name'>{blogDetails.authorName}</strong>
                    <p className='date'>{blogDetails.publishedAt.slice(0, 10)}</p>
                  </div>
                </div>

                <div className="col-md-5">
                  <img className='featured-img' src={blogImage} alt="blog-post" />
                </div>

                <div className="col-md-12 blog-content">
                  <p className="paras" style={{ whiteSpace: 'pre-line' }}>
                    <ProgressBar color="#fff"
                      height={5}
                      direction="right"
                      position="top"
                      color="#D6E4E5"
                      gradient={true}
                      gradientColor="#497174"
                    />
                    {blogDetails && blogDetails.blogContent}
                  </p>
                </div>
              </div>
            </div>
          </>
      }

    </section>
  )
}

export default BlogContents