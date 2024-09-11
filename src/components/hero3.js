import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="hero3-content thq-section-padding">
        <div className="hero3-max-width thq-section-max-width thq-flex-row">
          <div className="hero3-column1">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero3-text5 thq-heading-1">
                    Captivating hero headline for your website
                  </h1>
                </Fragment>
              )}
            </h1>
          </div>
          <div className="hero3-column2">
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero3-text8 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero3-actions">
              <button className="thq-button-filled hero3-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero3-text6 thq-body-small">
                        Main action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero3-button2">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero3-text7 thq-body-small">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero3.defaultProps = {
  heading1: undefined,
  action1: undefined,
  image1Alt: 'Hero Image',
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTEzODIwNzF8MA&ixlib=rb-4.0.3&w=1500',
  content1: undefined,
}

Hero3.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero3
