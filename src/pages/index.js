import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/img/screenshots/splash.png';
import pic22 from '../assets/img/screenshots/chart.png';
import pic3 from '../assets/img/screenshots/Elmprints.jpeg';
import pic4 from '../assets/img/screenshots/UNITY.png';
import pic42 from '../assets/img/screenshots/UNITY3.png';
import pic43 from '../assets/img/screenshots/UNITY4.png';
import pic44 from '../assets/img/screenshots/UNITY2.png';
import pic6 from '../assets/img/screenshots/GuitStrum.png';
import pic62 from '../assets/img/screenshots/GuitStrum2.png';
import pic63 from '../assets/img/screenshots/GuitStrum3.png';
import pic8 from '../assets/img/screenshots/stage2.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  // { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt txtshad">
              Welcome to my portfolio site
              <br />
              I'm <strong>Pete</strong>!
              <br />
              a <em>Full-Stack Web Developer</em>
            </h2>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Check out my work!
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Below is a curated selection of my projects with descriptions,
            links to the GitHub repositories & deployed websites, and a list of technologies used.
            <br />
            <br />
            Quickly scroll to a Project:
            <br />
            <br />
            <Scroll type="id" element={'chartizard'}>
              <a href="#chartizard" className="button">
                CHARTizard
              </a>
            </Scroll>
            <br />
            <br />
            <Scroll type="id" element={'elmprints'}>
              <a href="#elmprints" className="button">
                ELM PRINTS
              </a>
            </Scroll>
            <br />
            <br />
            <Scroll type="id" element={'unity'}>
              <a href="#unity" className="button">
                UNITY
              </a>
            </Scroll>
            <br />
            <br />
            <Scroll type="id" element={'guitstrum'}>
              <a href="#guitstrum" className="button">
                GuitStrum
              </a>
            </Scroll>
          </p>

                  <div className="row">
                    <div className="col-12 col-12-mobile">
                      <article className="item" id="chartizard">
                        <h2>CHARTizard</h2>
                        <a href="/#" className="image fit">
                          <img src={pic2} alt="" />
                          <img src={pic22} alt="" />
                        </a>
                        <header>
                          <p style={{"font-size": "1.25em", "padding-left": "40px", "padding-right": "40px"}}><strong>CHARTizard</strong> is a data visualization website for viewing Pokemon statistics.
                          It was created using D3.JS within a simple Flask server made static with Frozen-Flask.
                          I also initially explored the data within a Jupyter notebook with Pandas. Styling for
                          the site was entirely HTML, CSS, and where D3 was used: JavaScript. I also utilized
                          Photosensitive Epilepsy Analysis Tool (PEAT) to test for the site's safety and appreciated
                          learning more about producing more accessible content in the process.
                          <br />
                          <br />
                          I loved learning D3.JS. It was relatively difficult to learn, but produced a
                          high-quality chart replete with animations and integrated filtering with the capability to
                          change the variables mapped on the x and y axes.
                          <br />
                          <br />
                          <strong>Deployed website link: <a href="http://chartizard.netlify.com/">http://chartizard.netlify.com/</a></strong>
                          <br />
                          <br />
                          <strong>GitHub repo: <a href="https://github.com/petefitton/CHARTizard">https://github.com/petefitton/CHARTizard</a></strong>
                          </p>
                        </header>
                      </article>
                      <article className="item" id="elmprints">
                        <h2>ELM PRINTS</h2>
                        <a href="/#" className="image fit">
                          <img src={pic3} alt="" />
                        </a>
                        <header>
                          <p style={{"font-size": "1.25em", "padding-left": "40px", "padding-right": "40px"}}><strong>ELM PRINTS</strong> is 
                          an eCommerce site for selling movie and art posters. This website was created by a
                          team of three developers. We took a very collaborative approach and performed most work
                          while together on a zoom call. We frequently did mob and pair programming on issues that
                          cropped up and were always clear with each other about what we were working on. My role in
                          the project was primarily visual and included making the website as mobile-friendly as possible.
                          I also was responsible for doing the initial Stripe setup and helped with paired programming
                          on most other aspects of the site. Additionally, I organized the Sprint Plan and held informal
                          check-ins daily to assess where we were in the project according to our goals.
                          <br />
                          <br />
                          ELM PRINTS was made using React with TypeScript with Material-UI & Sass for the front-end with
                          Node, Express and MongoDB with Mongoose for the back-end. We utilized Stripe to handle
                          purchases and JSON Web Tokens for authentication/authorization.
                          <br />
                          <br />
                          This was an incredibly rewarding project. I had an incredible team that took on the challenges
                          of this project with excitement and vigor. We had great teamwork and made a great product given
                          our time constraints and prior experiences with the technology we used.
                          <br />
                          <br />
                          <strong>Deployed website link: <a href="http://elmprints.herokuapp.com/">http://elmprints.herokuapp.com/</a></strong>
                          <br />
                          <br />
                          <strong>My GitHub repo for this project: <a href="https://github.com/petefitton/elmprints">https://github.com/petefitton/elmprints</a></strong>
                          <br />
                          <br />
                          <strong>The master repo: <a href="https://github.com/snipspin/elmprints">https://github.com/snipspin/elmprints</a></strong>
                          </p>
                        </header>
                      </article>
                    </div>
                    <div className="col-12 col-12-mobile">
                      <article className="item" id="unity">
                        <h2>UNITY</h2>
                        <a href="/#" className="image fit">
                          <img src={pic4} alt="" />
                          <img src={pic42} alt="" />
                          <img src={pic43} alt="" />
                          <img src={pic44} alt="" />
                        </a>
                        <header>
                          <p style={{"font-size": "1.25em", "padding-left": "40px", "padding-right": "40px"}}><strong>UNITY</strong> is 
                          a browser-based game written purely in HTML, CSS, and JavaScript. This was my first
                          large-scale browser project and was incredibly exciting for me to develop. From the
                          very beginning, the conception of the game grabbed me and drove me forward to write
                          thousands of lines of code within the week timeframe my class had for this project.
                          <br />
                          <br />
                          UNITY tells the story of a zero-dimensional being, Sisyphus, who is pulled from his
                          zero-dimensional space by a mysterious being. Unable to cope with his expanded reality,
                          he seeks to reduce everything into zero-dimensional space. The battle mechanics are
                          similar to Pokemon which inspired the battle screen's layout as well. The game was
                          made with a grayscale color palette, and it has a title screen, main menu with 
                          options & instructions menus, opening and closing stories, a level-up screen, a credit screen, and two 
                          enemy battles. After winning the game, you unlock Infinite Mode as well which allows
                          a player to battle enemies at random indefinitely. And like any good video game, there's sound!
                          <br />
                          <br />
                          This project was an absolute blast for me. I loved working on the battle animations 
                          and feel like I created something I am really proud of. Because I made this project
                          with vanilla JavaScript and HTML/CSS, I feel that this project highly strengthened
                          those fundamentals.
                          <br />
                          <br />
                          <strong>Deployed website link: <a href="https://petefitton.github.io/UNITY/">https://petefitton.github.io/UNITY/</a></strong>
                          <br />
                          <br />
                          <strong>GitHub repo: <a href="https://github.com/petefitton/UNITY">https://github.com/petefitton/UNITY</a></strong>
                          </p>
                        </header>
                      </article>
                    </div>
                    <div className="col-12 col-12-mobile">
                      <article className="item" id="guitstrum">
                        <h2>GuitStrum</h2>
                        <a href="/#" className="image fit">
                          <img src={pic6} alt="" />
                          <img src={pic62} alt="" />
                          <img src={pic63} alt="" />
                        </a>
                        <header>
                          <p style={{"font-size": "1.25em", "padding-left": "40px", "padding-right": "40px"}}><strong>GuitStrum</strong> is 
                          a website built for beginner/intermediate guitarists. It consists of two main parts: 
                          a section of the website for exploring/learning Chords and another section for writing
                          and viewing other user's songs (chord progressions).
                          <br />
                          <br />
                          The site was made using Node, Express, PostGreSQL, Axios, EJS, RegEx, Materialize with jQuery & CSS, and HTML.
                          I worked with a UX Designer in the early stages to review my wireframes and improve
                          the user experience of the site. My early conversations with the UX Designer were 
                          very helpful and really got me thinking about the user experience of the site in a critical
                          way. These conversations still influence my approach to website design and improving the
                          usability of my products.
                          <br />
                          <br />
                          This site was a real challenge at a couple points: searching for and rendering chords
                          required doing a mixture of Axios calls with pulling the images directly from a URL
                          that created the chord images. Handling the various ways in which the chords were named/
                          the syntax used in their names was also a bit challenging at times. The song rendering
                          both for the forms for creating songs and displaying created songs was not as difficult
                          as I had anticipated; however, I was only able to offer simple settings as integrating 
                          more complexity would have taken more time. I definitely realized coming out of the project
                          that this idea is probably better suited to a stand-alone application more than a web app.
                          I still had a great time and learned a lot though!
                          <br />
                          <br />
                          <strong>Deployed website link: <a href="https://guitstrum.herokuapp.com/">https://guitstrum.herokuapp.com/</a></strong>
                          <br />
                          <br />
                          <strong>GitHub repo: <a href="https://github.com/petefitton/GuitStrum">https://github.com/petefitton/GuitStrum</a></strong>
                          </p>
                        </header>
                      </article>
                    </div>
                  </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p style={{"margin": "20px"}}>
            I was born in the small town of Harrison, Arkansas. 
            I have gone on to live in New Mexico, Vermont, Berlin (Germany), and Seattle. 
            I love traveling and have been an active musician since I was four years old 
            and performed in my first musical. I experimented with coding in the past, but 
            more recently attended General Assembly's Software Development Immersive
            program where I learned how to use a plethora of web development tools and 
            technologies. I am excited to continue growing my coding skills and happy to be 
            in a field where constant learning isn't just possible, but expected!
            <br />
            <br />
            Send me an email: petefitton@gmail.com
            <br />
            <br />
            You can download my resume in the side bar menu to the left.
          </p>
        </div>
      </section>

      {/* <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section> */}
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
