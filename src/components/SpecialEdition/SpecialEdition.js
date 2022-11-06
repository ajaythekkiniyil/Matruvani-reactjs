import React from 'react'
import layamritamImage from '../../images/layamritam-app.jpg'
import editionImage from '../../images/edition-image.jpg'

function SpecialEdition() {
    return (
        <>
            <section className="app-layamritam">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <a href="#">
                                <img src={layamritamImage} alt='layamritam' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sp_edition">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={editionImage} alt='Special-Edition'/>
                        </div>
                        <div className="col-lg-8">
                            <h3>Special Edition</h3>
                            <p>This book has been written on the insistence of a few fellow seekers who felt that my life and experiences with some of the real sages of India over the past twenty-eight years would be interesting and useful to other aspirants on the spiritual path. On hearing their request, I was immediately reminded of the words of one of those saints who told me that only a Self-Realized Soul should write a book on spirituality.</p>
                            <p><a target="blank" href="https://amritabooks.in/">Amrita Books</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecialEdition