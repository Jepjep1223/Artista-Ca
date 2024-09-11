import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar21 from '../components/navbar21'
import Hero3 from '../components/hero3'
import Features17 from '../components/features17'
import Footer33 from '../components/footer33'
import './artists.css'

const Artists = (props) => {
  return (
    <div className="artists-container">
      <Helmet>
        <title>Artists-Artista-Ca</title>
        <meta property="og:title" content="Artists - exported project" />
      </Helmet>
      <Navbar21
        link1={
          <Fragment>
            <span className="artists-text100 thq-body-small thq-link">
              Home
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="artists-text101 thq-body-small thq-link">
              Gallery
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="artists-text102 thq-body-small thq-link">
              Artists
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="artists-text103 thq-body-small thq-link">
              Contact Us
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="artists-text104 thq-body-small thq-link">
              About Us
            </span>
          </Fragment>
        }
        logoSrc="/image/artistaca-1500h.png"
        link1Url="/"
        link2Url="/art-gallery"
        link3Url="/artists"
        link4Url="#Navbar21"
        link5Url="#Footer33"
      ></Navbar21>
      <Hero3
        action1={
          <Fragment>
            <a href="/" className="artists-text105 thq-body-small">Home</a>
          </Fragment>
        }
        action2={
          <Fragment>
            <a href="/art-gallery" className="artists-text106 thq-body-small">Gallery</a>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="artists-text107 thq-body-large">
              Meet the dynamic and diverse artists of Artista-ca, an association
              that celebrates the rich artistic heritage of Calamba. Each artist
              brings unique creativity and cultural depth to their work,
              showcasing their skills through various mediums and styles
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="artists-text108 thq-heading-1">
              Discover the Talents of Artista-ca&apos;s Artists
            </span>
          </Fragment>
        }
        image1Src="/artists/artista-1500w.jpg"
      ></Hero3>
      <Features17
        date={
          <Fragment>
            <span className="artists-text109 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text110 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text111 thq-body-small">
              <span>
                Henry Gerez Dayawon, known as &quot;Hengels&quot; by many, was
                born 1977 in Pasay City, . He is a Filipino visual artist raised
                in the Town of Sto Tomas Batangas and current living in Calamba
                since 1996. He was an undergraduate under Architectural &amp;
                Design Drafting course at Malvar Polytechnic College (BSU) with
                strong ambitions and recognized for his versatility across
                various styles and mediums. Growing up in the Philippines, his
                passion for art ignited a journey of self-expression and
                exploration. His talent and skills made this his source of
                income since a young age and a stepping stone for him to accept
                offers to go to other countries to pursue working with his
                knowledge of arts for such a long time in Art &amp; Design
                Advertising Company and Interior Art Decorations. He is also an
                Editorial Cartoonist for Ronda Balita Newspaper since 2022.
              </span>
              <br></br>
              <br></br>
              <span>
                His artistic endeavors span painting, drawing, and traditional
                techniques, allowing him to explore differences in subjects and
                themes. Graphical Arts are also one of his expertise from
                capturing the complexities of human emotions in portraits to
                breathing life into urban landscapes through expansive murals;
                his work reflects the diverse types of life. Themes of the human
                experience, the beauty of nature, and the vibrant culture of his
                homeland often inspire his work, infusing each piece with depth
                and meaning.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        features17Id="Features17"
        blogPostTitle={
          <Fragment>
            <span className="artists-text116 thq-heading-1">
              Henry “Hengels” Dayawon
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/1-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text117 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text118 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text119 thq-body-small">
              <span>
                Timothy, born on April 14, 2001, hails from Calamba City. His
                journey has been diverse, having worked as an apartment
                collector, lending collector, company worker, painter, vendor,
                and carpenter. But his love for arts and painting truly sets him
                apart.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Despite facing challenges, Timothy pursued education with
                determination. He completed up to the 2nd year of college at
                Laguna College for Business and Arts. His efforts were rewarded
                with a Leadership award and recognition as a Dean’s Lister. The
                valuable lesson he learned? To persist, keep trying, and never
                give up.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Timothy’s major choice reflects his practical mindset. He opted
                for Business Administration with a focus on Marketing. This
                decision not only helps him market and sell his artworks but
                also sharpens his skills in management and communication.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                In summary, Timothy L. Estacio embodies resilience, creativity,
                and a strategic outlook—a promising blend for success in both
                art and business.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        features17Id="Features17"
        blogPostTitle={
          <Fragment>
            <span className="artists-text132 thq-heading-1">
              Timothy Estacio
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/2-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text133 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text134 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text135 thq-body-small">
              <span>
                A full-time artist who dedicated his life to arts since a young
                age. Got formal training from the late Hal Santiago, which
                served as his avenue to land in Comics &amp; Magazines world as
                an Illustrator in comic industry in the late 90s.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                From Comic industry, he shifted to Animation doing projects for
                Warner Bros. projects. Eventually transferred to Dubai and
                worked as a freelance storyboard artist using different mediums
                for 8 years serving various multi-national clients who were
                based in the country.
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                But as a family man, he decided to return to the Philippines to
                be closer to the family and concentrated on painting using
                acrylic and oil mediums.
              </span>
              <br></br>
              <br></br>
              <span>
                Currently an active member of respectable art organizations
                headed by art masters and continue to work with various art
                gurus and did some collaboration work including Master Romulo
                Galicano in the past. Had successfully done various exhibits
                locally and internationally.
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text147 thq-heading-1">AR Iligan</span>
          </Fragment>
        }
        feature1ImageSrc="/artists/3-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text148 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text149 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text150 thq-body-small">
              <span>
                Born in 2002 in Calamba, Laguna, Jewel A. is a visionary
                Filipina artist, Computer Science scholar, and Junior Software
                Design Engineer who primarily uses oil-on-canvas. Her artistic
                journey spans traditional, digital, and 3D art, showcasing her
                tech-savvy background and love for innovation.
              </span>
              <br></br>
              <br></br>
              <span>
                Inspired by her dreams, her work explores surreal and profound
                themes that reflect the hidden layers of human experience. She
                believes art bridges the gap between the conscious and
                subconscious, transforming dreams and feelings into tangible
                forms. Through her work, Jewel allows viewers to experience and
                connect with the deeper, often unexplained facets of life.
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text155 thq-heading-1">Jewel A.</span>
          </Fragment>
        }
        feature1ImageSrc="/artists/10-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text156 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text157 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text158 thq-body-small">
              My name is Christian O. Urtesuela, and I am from Mayapa, Calamba
              City, Laguna. Currently studying at the Polytechnic University of
              the Philippines, Sto. Tomas Campus is taking up a Bachelor of
              Technology Livelihood Education Major in Information Communication
              Technology. One of the board members of the Artist Association of
              Calamba and a member of the art organization of our university
              which is the Dibujo Art Society. When I was a child, I loved the
              world of Arts. With a simple pencil and paper to draw my
              imagination, I participated in competitions. In our school, and
              with the help of the Lord, who gave me the title of Champion,
              there are times when I don&apos;t win, and that&apos;s not the way
              for me to stop my drawing, but that defeat experience use as your
              inspiration so that I can win in other art competitions.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text159 thq-heading-1">
              Christian Urtesuela
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/4-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text160 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text161 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text162 thq-body-small">
              <span>
                Jomarie also known as GOMS is an 18-year-old street artist who
                came from the City of Calamba &quot;The City of Heroes&quot;, He
                is also a current first-year college student.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Goms inherited his talent from his father, he is a mural and
                graffiti artist and his artworks have a different style which is
                mixed, traditional and contemporary art that also has a styled
                letter called wild style an artistic movement and flow of
                letters he is also primarily influenced by realism and
                surrealism art. During this time he became more focused on art,
                especially introducing his art in the street.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                The name GOMS has a deep meaning GOMS stands for Go Out Make
                Something, presenting the generation now that is more focused on
                social media and not on self-experience, expression, and
                enhancing theirselves.For him as an artist create and create,
                what ever you feel put into your art.
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text170 thq-heading-1">
              Jomarie “Goms” Alcantara
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/5-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text171 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text172 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text173 thq-body-small">
              Hi! My name is Lady Morraofa “Morr” Flores Bumatay, a local artist
              based in Los Baños, Laguna, Philippines. After graduating with a
              Bachelor’s Degree in Entrepreneurship, I took a job and decided to
              paint as well. Hand-painted tote bags, wallets, and letters on the
              frame where I first started my painting journey. Most of my
              artworks currently are acrylic paintings such as landscapes and
              customized paintings. I also do abstract and really enjoyed
              learning other types of painting as my art journey is still a
              growing process for me.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text174 thq-heading-1">
              Lady Morraofa “Morr” Bumatay
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/6-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text175 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text176 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text177 thq-body-small">
              <span>
                A 25-year-old artist from Lucban, Quezon, born on September 4,
                1998, in Gubat, Bicol, Sorsogon. Her mediums are acrylic paint
                and charcoal.
              </span>
              <br></br>
              <br></br>
              <span>
                She began her artistic journey by joining her first art workshop
                in the 5th grade. However, she lacked the courage to continue
                until she joined the Art Association in Calamba (AAOC). As a
                member, she experienced numerous opportunities, including
                participating in her first art competition at the GSIS Art
                Competition in 2023, attending workshops, and exhibiting her
                work.
              </span>
              <br></br>
              <br></br>
              <span>
                Before embarking on her journey in the art industry, she
                struggled with insecurities about her drawings. After many years
                and missed opportunities, she realized that if you love what you
                do, there is nothing wrong with your art. She believes that all
                feelings are valid in creating art. Whether you are mad, happy,
                stressed, or experiencing any other emotion, use it as
                inspiration for your masterpiece.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text186 thq-heading-1">
              Marie “FORT” Fortades
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/7-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text187 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text188 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text189 thq-body-small">
              <span>
                Hello! I’m James Kyle A. Alarcon, a dedicated student at Mapúa
                Malayan Colleges in Laguna, where I am currently pursuing a
                Bachelor of Science in Biology. My journey is one of curiosity,
                passion, and a deep-seated love for the natural world.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                From a tender age, the mysteries of the universe and the
                intricate workings of nature have captivated me. I spent
                countless hours engrossed in books, trying to unravel the
                complexities of life and the enigmatic concept of existence. As
                I grew, so did my curiosity, leading me to the decision to
                dedicate my life to uncovering the secrets of the natural world.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                But my interests are not confined to the realm of biology. I am
                also an artist in the making, exploring the vibrant world of
                acrylic painting. My art is a journey in itself, as I am still
                in the process of discovering my unique style. I believe that
                every stroke of the brush brings me closer to finding my
                artistic voice.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                I am also a proud member of the Artist Association of Calamba,
                where I continue to learn and grow as an artist. This community
                has been instrumental in my artistic journey, providing me with
                invaluable insights and experiences.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                In both science and art, I strive for discovery and
                understanding. Whether it’s uncovering the secrets of the
                natural world or creating a masterpiece on canvas, my journey is
                one of passion, curiosity, and continuous learning.
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text203 thq-heading-1">
              James Kyle A. Alarcon
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/9-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text204 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text205 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text206 thq-body-small">
              <span>
                A beginner in the world of arts, her journey began when she
                participated in the &quot;Pintang Likha sa Panahon ng
                Pandemya&quot; art competition in Calamba on June 6, 2021. She
                also showcased her talent at the 1st Artista-Ca Exhibit on
                December 16, 2022, and participated in an art workshop and
                exhibit at the Dr. Jose Rizal Shrine in Calamba City on August
                18 and 19, 2023.
              </span>
              <br></br>
              <br></br>
              <span>
                Since 2021, she has served as the Public Relations Officer (PRO)
                for the Artista-Ca Artist Association of Calamba. In addition to
                her role with Artista-Ca, she is actively involved in other
                organizations in Calamba. She has been the Auditor for the
                LGBTQIA Community in Barangay Real Calamba Chapter since 2019
                and is a member of the Provincial Crisis Management Council
                (PCMC), headed by Governor Ramil Hernandez and Congresswoman
                Ruth Mariano Hernandez.
              </span>
              <br></br>
              <br></br>
              <span>
                Despite having created only a few artworks, including &quot;The
                Unity,&quot; &quot;Burning Souls in Hell,&quot; and
                &quot;Enchanted Flower,&quot; she continues to develop her
                skills by participating in workshops and exhibits.
              </span>
              <br></br>
              <br></br>
              <span>
                Her philosophy in life is to keep going, no matter what people
                say. She believes in unlocking her talent, skills, and potential
                to be limitless. Life is too short for negativity and absorbing
                toxicity. She strives to be happy, enjoy life, and keep praying,
                trusting that the Lord will always guide her in the right way.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text218 thq-heading-1">
              Leann Obsuna Dimapilis
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/11-1400w.png"
      ></Features17>
      <Features17
        date={
          <Fragment>
            <span className="artists-text219 thq-body-small"> 2024</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="artists-text220 thq-body-small">5 min read</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="artists-text221 thq-body-small">
              <span>
                Ramcie Bergonio, affectionately known as Ram, was born on August
                5, 1991, in the vibrant city of Calamba. His artistic journey
                began in high school, where he discovered a passion for creating
                art. In 2008, Ram found a unique way to blend his love for
                painting and entrepreneurship by offering freehand-painted
                t-shirts to customers, a skill he attributes to his father’s
                love for creative projects.
              </span>
              <br></br>
              <br></br>
              <span>
                Ram&apos;s journey in the art world took a significant turn when
                he joined the Artists Association of Calamba (AAC),
                participating in group exhibits at the Calamba City Hall and the
                historic Jose Rizal Shrine.
              </span>
              <br></br>
              <br></br>
              <span>
                For Ram, art is more than just a visual experience. He describes
                his works as treasures, each piece containing hidden stories,
                feelings, and emotions that remain a mystery to the viewer. He
                believes that art is a unique form of self-expression, allowing
                individuals to explore extraordinary ideas beyond the grasp of
                ordinary perception.
              </span>
              <br></br>
              <br></br>
              <span>
                Ram&apos;s motto, &quot;Enjoy life, without worries,&quot;
                reflects his approach to both life and art. His works embody
                this philosophy, inviting viewers to find solace in navigating
                life&apos;s problems through art.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="artists-text233 thq-heading-1">
              Ramcie “Ram” Bergonio
            </span>
          </Fragment>
        }
        feature1ImageSrc="/artists/12-1400w.png"
      ></Features17>
      <Footer33
        link1={
          <Fragment>
            <a href="/" className="artists-text234 thq-body-small">Product</a>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="artists-text235 thq-body-small">Explore</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="artists-text236 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="artists-text237 thq-body-small">Gallery</span>
          </Fragment>
        }
        logoSrc="/image/artistaca-1500h.png"
        footer33Id="Footer33"
        privacyLink={
          <Fragment>
            <span className="artists-text238 thq-body-small">
              © 2024 Artists Association of Calamba. All rights reserved.
            </span>
          </Fragment>
        }
      ></Footer33>
    </div>
  )
}

export default Artists
