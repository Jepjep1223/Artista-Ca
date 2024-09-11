import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery3.css'

const Gallery3 = (props) => {
  return (
    <div
      id={props.gallery3Id}
      className="gallery3-gallery3 thq-section-padding"
    >
      <div className="gallery3-max-width thq-section-max-width">
        <div className="gallery3-section-title">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="gallery3-text3 thq-heading-2">Photo Gallery</h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="gallery3-text4 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery3-container1 thq-grid-4">
          <div className="gallery3-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery3-image1 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container3">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery3-image2 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container4">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery3-image3 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container5">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery3-image4 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container6">
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="gallery3-image5 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container7">
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="gallery3-image6 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container8">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="gallery3-image7 thq-img-ratio-16-9"
            />
          </div>
          <div className="gallery3-container9">
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="gallery3-image8 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery3.defaultProps = {
  image7Alt: 'PlaceholderImage1302',
  image8Alt: 'PlaceholderImage1302',
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  gallery3Id: '',
  image5Src:
    'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  heading1: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image5Alt: 'PlaceholderImage1302',
  image3Alt: 'PlaceholderImage1302',
  image8Src:
    'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image6Src:
    'https://images.unsplash.com/photo-1561212044-bac5ef688a07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  image2Alt: 'PlaceholderImage1302',
  image6Alt: 'PlaceholderImage1302',
  image1Alt: 'PlaceholderImage1302',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image4Alt: 'PlaceholderImage1302',
  content1: undefined,
}

Gallery3.propTypes = {
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  gallery3Id: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.element,
  image7Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image6Src: PropTypes.string,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image4Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Gallery3
