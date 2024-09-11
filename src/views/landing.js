import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Features24 from '../components/features24'
import Hero17 from '../components/hero17'
import Features25 from '../components/features25'
import Team8 from '../components/team8'
import Contact3 from '../components/contact3'
import Features15 from '../components/features15'
import Footer3 from '../components/footer3'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Artista-Ca</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="landing-text10 thq-body-small thq-link">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="landing-text11 thq-body-small thq-link">
              Gallery
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="landing-text12 thq-body-small thq-link">
              Artists
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="landing-text13 thq-body-small thq-link">
              Contact Us
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="landing-text14 thq-body-small thq-link">
              About Us
            </span>
          </Fragment>
        }
        logoSrc="/image/artistaca-1500h.png"
        link1Url="#Navbar2"
        link2Url="/art-gallery"
        link3Url="/artists"
        link4Url="#Contact3"
        link5Url="#Features15"
        navbar2Id="Navbar2"
      ></Navbar2>
      <img
        alt="image"
        src="/image/orange%20beige%20black%20vintage%20plein%20air%20instagram%20post-300h.png"
        className="landing-image1"
      />
      <img
        alt="image"
        src="/image/artista%20(3)-400w.png"
        className="landing-image2"
      />
      <img
        alt="image"
        src="/image/black1-1500w.jpg"
        className="landing-image3"
      />
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="landing-text15 thq-heading-2">Feature #1</span>
          </Fragment>
        }
        feature1ImgSrc="/image/untitled%20design-1500w.jpg"
        feature1Description={
          <Fragment>
            <span className="landing-text16 thq-body-small">AR Iligan</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="landing-text17 thq-body-small">
              This painting is a vivid and expressive portrayal of three women
              sharing an intense moment of laughter. Their exaggerated,
              cartoon-like facial features, especially the large mouths and
              wide-open smiles, evoke a sense of contagious joy and camaraderie.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="landing-text18 thq-body-small">
              The background is filled with bold, energetic brushstrokes and the
              word &quot;HA&quot; repeated in various sizes and colors,
              amplifying the playful, carefree mood of the scene. The vibrant
              colors of their clothing and the background contribute to the
              lively, humorous atmosphere. This artwork captures the essence of
              happiness and shared moments of laughter, celebrating human
              connection and light-heartedness.
            </span>
          </Fragment>
        }
      ></Features24>
      <Hero17
        action1={
          <Fragment>
           <a href="/artists" className="landing-text19 thq-body-small">Artists</a>
          </Fragment>
        }
        action2={
          <Fragment>
            <a href="/art-gallery" className="landing-text20 thq-body-small">All Gallery</a>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="landing-text21 thq-body-large">
              The Artista-ca is a dynamic collective of visual artists based in
              Calamba City, Laguna. This group brings together a diverse range
              of creative individuals passionate about promoting local culture
              and the arts. Artista-ca&apos;s mission is to foster
              collaboration, artistic growth, and cultural awareness within the
              community through exhibitions, workshops, and outreach programs.
              The association provides a platform for both emerging and
              established artists to showcase their talents, exchange ideas, and
              contribute to the cultural heritage of Calamba.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="landing-text22 thq-heading-1">
              ARTISTS ASSOCIATION OF CALAMBA
            </span>
          </Fragment>
        }
        hero17Id="Hero17"
        image1Src="/image/untitled%20design-1500w.jpg"
        image2Src="/image/9-1500w.jpg"
        image3Src="/image/7-1500w.jpg"
        image4Src="/image/14-1500w.jpg"
        image5Src="/image/10-1500w.jpg"
        image6Src="/image/16-1500w.jpg"
        image7Src="/image/13-1500w.jpg"
        image8Src="/image/11-1500w.jpg"
        image9Src="/image/15-1500w.jpg"
        image10Src="/image/12-1500w.jpg"
        image11Src="/image/8-1500w.jpg"
        image12Src="/image/2-1500w.jpg"
      ></Hero17>
      <Features25
        features25Id="Features25"
        feature1Title={
          <Fragment>
            <span className="landing-text23 thq-heading-2">Feature #2</span>
          </Fragment>
        }
        feature1ImgSrc="/image/7-1500w.jpg"
        feature1Description={
          <Fragment>
            <span className="landing-text24 thq-body-small">Jewel A.</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="landing-text25 thq-body-small">
              This abstract painting features a calming blend of purples, blues,
              and hints of white, creating a dreamy and ethereal atmosphere. The
              brushstrokes are soft yet textured, forming layers of shapes and
              blocks that overlap and blur together, evoking a sense of depth
              and mystery.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="landing-text26 thq-body-small">
              The muted color palette and the abstract forms give the painting
              an impression of a foggy cityscape or a distant, imagined world.
              The use of cool tones adds to the overall tranquil and reflective
              mood, inviting viewers to interpret the composition in their own
              personal way.
            </span>
          </Fragment>
        }
      ></Features25>
      <Team8
        member1={
          <Fragment>
            <span className="landing-text27 thq-body-small">
              Henry “Hengels” Dayawon
            </span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="landing-text28 thq-body-small">
              Marie “FORT” Fortades
            </span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="landing-text29 thq-body-small">Jewel A.</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="landing-text30 thq-body-small">
              Jomarie “Goms” Alcantara
            </span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="landing-text31 thq-body-small">
              Timothy Estacio
            </span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="landing-text32 thq-body-small">
              Lady Morraofa “Morr” Bumatay
            </span>
          </Fragment>
        }
        team8Id="Team8"
        member1Job={
          <Fragment>
            <span className="landing-text33 thq-body-small">
              ‎
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member1Src="/image/henry-1400w.png"
        member2Job={
          <Fragment>
            <span className="landing-text34 thq-body-small">
              ‎
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member2Src="/image/fort-1400w.png"
        member3Job={
          <Fragment>
            <span className="landing-text35 thq-body-small">
              ‎
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member3Src="/image/jewel-1400w.png"
        member4Job={
          <Fragment>
            <span className="landing-text36 thq-body-small">
              ‎
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member4Src="/image/goms-1400w.png"
        member5Job={
          <Fragment>
            <span className="landing-text37 thq-body-small">
              ‎
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member5Src="/image/timo-1400w.png"
        member6Job={
          <Fragment>
            <span className="landing-text38 thq-body-small">
              ‎
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member6Src="/image/mor-1400w.png"
        member1Content={
          <Fragment>
            <span className="landing-text39 thq-body-small">
              He is a Filipino visual artist raised in the Town of Sto Tomas
              Batangas and current living in Calamba since 1996. He was an
              undergraduate under Architectural &amp; Design Drafting course at
              Malvar Polytechnic College (BSU) with strong ambitions and
              recognized for his versatility across various styles and mediums.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="landing-text40 thq-body-small">
              A 25-year-old artist from Lucban, Quezon, born on September 4,
              1998, in Gubat, Bicol, Sorsogon. Her mediums are acrylic paint and
              charcoal. She began her artistic journey by joining her first art
              workshop in the 5th grade. However, she lacked the courage to
              continue until she joined the Art Association in Calamba (AAOC).
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="landing-text41 thq-body-small">
              Born in 2002 in Calamba, Laguna, Jewel A. is a visionary Filipina
              artist, Computer Science scholar, and Junior Software Design
              Engineer who primarily uses oil-on-canvas. Her artistic journey
              spans traditional, digital, and 3D art, showcasing her tech-savvy
              background and love for innovation.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="landing-text42 thq-body-small">
              Goms inherited his talent from his father, he is a mural and
              graffiti artist and his artworks have a different style which is
              mixed, traditional and contemporary art that also has a styled
              letter called wild style an artistic movement and flow of letters
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="landing-text43 thq-body-small">
              Timothy, born on April 14, 2001, hails from Calamba City. His
              journey has been diverse, having worked as an apartment collector,
              lending collector, company worker, painter, vendor, and carpenter.
              But his love for arts and painting truly sets him apart.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="landing-text44 thq-body-small">
              Most of my artworks currently are acrylic paintings such as
              landscapes and customized paintings. I also do abstract and really
              enjoyed learning other types of painting as my art journey is
              still a growing process for me.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
      ></Team8>
      <Contact3
        content2={
          <Fragment>
            <span className="landing-text45 thq-body-small">
              Get in touch with us today!
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="landing-text46 thq-body-large">
              &quot;Contact us at henrydayawon8@gmail.com for inquiries and
              bookings.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="landing-text47 thq-body-large">
              Call us at 0950-163-295 for assistance.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="landing-text48 thq-body-large">
              Visit us at 123 Art Street, Calamba, Philippines
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="landing-text49 thq-heading-2">Contact us</span>
          </Fragment>
        }
        contact3Id="Contact3"
      ></Contact3>
      <Features15
        imageSrc="/image/orange%20beige%20black%20vintage%20plein%20air%20instagram%20post-300h.png"
        image1Src="/image/black1-1500w.jpg"
        features15Id="Features15"
        feature1Title={
          <Fragment>
            <span className="landing-text50 thq-heading-3">ARTISTA-CA</span>
          </Fragment>
        }
        rootClassName="features15root-class-name"
        feature2Title1={
          <Fragment>
            <span className="landing-text51 thq-heading-3">
              Discover artists from Calamba
            </span>
          </Fragment>
        }
        feature2Action1={
          <Fragment>
            <a href="art-gallery" className="landing-text52 thq-body-small">Gallery</a>
          </Fragment>
        }
        feature2Action2={
          <Fragment>
            <a href="artists" className="landing-text53 thq-body-small">Artist</a>
          </Fragment>
        }
        feature2Description1={
          <Fragment>
            <span className="landing-text54 thq-body-small">
              A city rich in history and culture, where creativity thrives.
              These talented individuals showcase a wide array of artistic
              expressions, from traditional painting and sculpture to
              contemporary digital art. By supporting these artists, you’re not
              only celebrating their unique talents but also contributing to the
              vibrant cultural landscape of Calamba. Explore their art and
              witness the creative spirit that defines this city!
            </span>
          </Fragment>
        }
      ></Features15>
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
        privacyLink={
          <Fragment>
            <span className="landing-text59 thq-body-small">
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

export default Landing
