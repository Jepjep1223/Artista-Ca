import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar21 from '../components/navbar21'
import Hero11 from '../components/hero11'
import Features20 from '../components/features20'
import Gallery3 from '../components/gallery3'
import Footer3 from '../components/footer3'
import './art-gallery.css'

const ArtGallery = (props) => {
  return (
    <div className="art-gallery-container">
      <Helmet>
        <title>Artista-Ca</title>
      </Helmet>
      <Navbar21
        link1={
          <Fragment>
            <span className="art-gallery-text10 thq-body-small thq-link">
              Home
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="art-gallery-text11 thq-body-small thq-link">
              Gallery
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="art-gallery-text12 thq-body-small thq-link">
              Artists
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="art-gallery-text13 thq-body-small thq-link">
              Contact Us
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="art-gallery-text14 thq-body-small thq-link">
              About Us
            </span>
          </Fragment>
        }
        logoSrc="/image/artistaca-1500h.png"
        link1Url="/"
        link2Url="#Footer3"
        link3Url="/artists"
        link4Url="#Footer3"
        link5Url="#Footer3"
        navbar21Id="Navbar21"
      ></Navbar21>
      <Hero11
        action1={
          <Fragment>
            <a href="#Gallery3" className="art-gallery-text15 thq-body-small">Gallery</a>
          </Fragment>
        }
        action2={
          <Fragment>
            <a href="/artists" className="art-gallery-text16 thq-body-small">Artists</a>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="art-gallery-text17 thq-body-large">
              Welcome to the Artista-ca Art Gallery, where the vibrant talents
              of our local artists come to life. This curated collection
              showcases a diverse range of art forms, from captivating paintings
              to thought-provoking sculptures and modern digital art. Each piece
              reflects the unique vision, cultural heritage, and creative
              expression of the artists behind them. Immerse yourself in the
              rich textures, bold colors, and imaginative concepts that define
              the Artista-ca community. Discover new perspectives and be
              inspired by the artistry that continues to shape and enrich our
              local culture.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="art-gallery-text18 thq-heading-1">
              Explore the Artistic Brilliance of Artista-Ca: A Journey Through
              Creativity
            </span>
          </Fragment>
        }
        hero11Id="Hero11"
        image1Src="/image/5-1400w.jpg"
        image2Src="/image/11-1400w.jpg"
        image3Src="/image/13-1400w.jpg"
        image5Src="/image/8-1400w.jpg"
        image6Src="/image/12-1400w.jpg"
      ></Hero11>
      <Features20
        feature1Title={
          <Fragment>
            <span className="art-gallery-text19 thq-heading-2">
              Discover the Key Feature #1
            </span>
          </Fragment>
        }
        feature1Slogan={
          <Fragment>
            <span className="art-gallery-text20 thq-body-small">Slogan</span>
          </Fragment>
        }
        feature1ImageSrc="/image/15-1400w.jpg"
        feature1Description={
          <Fragment>
            <span className="art-gallery-text21 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor
              interdum nulla.
            </span>
          </Fragment>
        }
      ></Features20>
      <Gallery3
        content1={
          <Fragment>
            <span className="art-gallery-text22 thq-body-large">
              Discover the Inspirations and Techniques
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="art-gallery-text23 thq-heading-2">
              Art Gallery
            </span>
          </Fragment>
        }
        image1Src="/image/12-1400w.jpg"
        image2Src="/image/11-1400w.jpg"
        image3Src="/image/6-600w.jpg"
        image4Src="/image/9-600w.jpg"
        image5Src="/image/14-600w.jpg"
        image6Src="/image/13-1400w.jpg"
        image7Src="/image/7-600w.jpg"
        image8Src="/image/10-600w.jpg"
        gallery3Id="Gallery3"
      ></Gallery3>
      <Footer3
        link1={
          <Fragment>
            <a href="/" className="artists-text234 thq-body-small">Product</a>
          </Fragment>
        }
        link2={
          <Fragment>
            <a href="/" className="artists-text235 thq-body-small">Explore</a>
          </Fragment>
        }
        link3={
          <Fragment>
            <a href="/" className="artists-text236 thq-body-small">About Us</a>
          </Fragment>
        }
        link4={
          <Fragment>
            <a href="/art-gallery" className="artists-text237 thq-body-small">Gallery</a>
          </Fragment>
        }
        logoSrc="/image/artistaca-1500h.png"
        footer3Id="Footer3"
        privacyLink={
          <Fragment>
            <span className="art-gallery-text28 thq-body-small">
              © 2024 Artists Association of Calamba. All rights reserved.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
      ></Footer3>
    </div>
  )
}

export default ArtGallery
