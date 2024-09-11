import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features20.css'

const Features20 = (props) => {
  return (
    <div className="features20-layout349 thq-section-padding">
      <div className="features20-max-width thq-section-max-width">
        <div className="features20-content1">
          <div className="features20-section-title">
            <span>
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features20-text4 thq-body-small">
                    Slogan
                  </span>
                </Fragment>
              )}
            </span>
            <div className="features20-content2">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features20-text5 thq-heading-2">
                      Discover the Key Feature #1
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.feature1Description ?? (
                  <Fragment>
                    <p className="features20-text6 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Suspendisse varius enim
                      in eros elementum tristique. Duis cursus, mi quis viverra
                      ornare, eros dolor interdum nulla.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features20-actions"></div>
          </div>
        </div>
        <div className="features20-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features20-placeholder-image thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features20.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  feature1Slogan: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  feature1ImageAlt: 'Image',
}

Features20.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature1Slogan: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
}

export default Features20
