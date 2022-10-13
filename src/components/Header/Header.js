import React from 'react'
import matruvaniLogo from '../../images/matruvani-logo.svg'
import ammaBanner from '../../images/amma-banner-image.jpg'
function Header() {
	return (
		<section className="banner-section">
			<header className="header_block">
				<div className="header-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<img src={matruvaniLogo} alt="logo" />
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="banner-object">
				<img src={ammaBanner} alt="banner" />
			</div>
			<div className="sp-header-content">
				<div className="container">
					<div className="row">
						<div className="sp-header-text">
							<h1 className="sp-title">Matruvani Online</h1>
							<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
							<p><a className="sub_scribe" href="/">Subscribe</a></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Header