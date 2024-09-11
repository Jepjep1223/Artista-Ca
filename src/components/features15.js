import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features15.css'

const Features15 = (props) => {
  return (
    <div
      id={props.features15Id}
      className={`features15-layout226 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="features15-image1"
      />
      <div className="features15-max-width thq-section-max-width">
        <div className="features15-column1">
          <div className="features15-section-title1">
            <div className="features15-content1">
              <h3>
                {props.feature1Title ?? (
                  <Fragment>
                    <h3 className="features15-text1 thq-heading-3">
                      Default value
                    </h3>
                  </Fragment>
                )}
              </h3>
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="features15-image2"
              />
            </div>
            <div className="features15-actions1"></div>
          </div>
        </div>
        <div className="features15-column2">
          <div className="features15-section-title2">
            <div className="features15-content2">
              <h3>
                {props.feature2Title1 ?? (
                  <Fragment>
                    <h3 className="features15-text4 thq-heading-3">
                      Discover the Magic of Lorem Ipsum Text Generation
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.feature2Description1 ?? (
                  <Fragment>
                    <span className="features15-text5 thq-body-small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="features15-actions2">
              <button className="thq-button-filled features15-button1">
                <span>
                  {props.feature2Action1 ?? (
                    <Fragment>
                      <span className="features15-text3 thq-body-small">
                        Main action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline features15-button2">
                <span>
                  {props.feature2Action2 ?? (
                    <Fragment>
                      <span className="features15-text2 thq-body-small">
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

Features15.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1500',
  feature1Title: undefined,
  feature2Action2: undefined,
  imageSrc: '0bda525b-fd8d-49f8-8cca-be0e28069a73',
  feature2Action1: undefined,
  feature2Title1: undefined,
  rootClassName: '',
  feature2Description1: undefined,
  image1Alt: 'Background image',
  imageAlt: 'image',
  features15Id: '',
}

Features15.propTypes = {
  image1Src: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Action2: PropTypes.element,
  imageSrc: PropTypes.string,
  feature2Action1: PropTypes.element,
  feature2Title1: PropTypes.element,
  rootClassName: PropTypes.string,
  feature2Description1: PropTypes.element,
  image1Alt: PropTypes.string,
  imageAlt: PropTypes.string,
  features15Id: PropTypes.string,
}

export default Features15
