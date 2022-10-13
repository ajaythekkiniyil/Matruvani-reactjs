import React from 'react'
import matruvaniLogo from '../../images/matruvani-logo.svg'
import facebookLogo from '../../images/facebook.svg'
import twitterLogo from '../../images/twitter.svg'
import instagramLogo from '../../images/instagram.svg'
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer_logo">
                            <img src={matruvaniLogo} alt='matruvani-logo'/>
                        </div>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-md-8">
                        <div className="footer_info">
                            <span>Copyright © 2022 Matruvani. All Rights Reserved.</span>
                            <a target="blank" href="/">Terms &amp; Conditions</a>
                            <a target="blank" href="/">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="col-md-4 text-left">
                        <div className="footer_social">
                            <a target="blank" href="/"><img src={facebookLogo} alt='social-media-logo' /></a>
                            <a target="blank" href="/"><img src={twitterLogo} alt='social-media-logo' /></a>
                            <a target="blank" href="/"><img src={instagramLogo} alt='social-media-logo' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer