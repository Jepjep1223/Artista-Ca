import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero11.css'

const Hero11 = (props) => {
  return (
    <div id={props.hero11Id} className="hero11-header77">
      <div className="hero11-max-width thq-section-max-width">
        <div className="hero11-column thq-section-padding">
          <div className="hero11-content1">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="hero11-text6 thq-heading-1">
                    Engaging hero headline for your website
                  </h1>
                </Fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="hero11-text8 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="hero11-actions">
              <button className="hero11-button1 thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero11-text5 thq-body-small">
                        Main action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="hero11-button2 thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero11-text7 thq-body-small">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero11-content2">
          <div className="hero11-row1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero11-placeholder-image1 thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero11-placeholder-image2 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero11-placeholder-image3 thq-img-ratio-1-1"
            />
          </div>
          <div className="hero11-row2">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero11-placeholder-image4 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero11-placeholder-image5 thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero11-placeholder-image6 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero11-placeholder-image7 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero11.defaultProps = {
  image1Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=400',
  image2Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image2Src:
    'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image6Alt: 'Hero Image',
  action1: undefined,
  hero11Id: '',
  image7Src:
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image5Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  heading1: undefined,
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1435820394963-a15297f976fd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1500',
  image3Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  content1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1500',
}

Hero11.propTypes = {
  image1Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  action1: PropTypes.element,
  hero11Id: PropTypes.string,
  image7Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  heading1: PropTypes.element,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Src: PropTypes.string,
  content1: PropTypes.element,
  image3Src: PropTypes.string,
}

export default Hero11
