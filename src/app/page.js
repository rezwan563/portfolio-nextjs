import Link from "next/link";
// import styles from './styles.module.css'
import global from "./globals.css";
import "./styles.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav>
        <div>
          <p>
            Ma<span>r</span>y
          </p>
        </div>
        <ul>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Hire Me</li>
        </ul>
      </nav>
      <section className="banner">
        <div>
          <p>
            Hi, I am Mary Hardy <br />
            Shot what able cold new see hold.Friendly as an betrayed formerly
            he. Morning because as to society behaved moments.
          </p>
          <button className="cv-btn">Download CV</button>
          <button className="cotact-btn">Contact</button>
        </div>
        <Image src="/images/hardy.png" alt="" width={720} height={360} />
      </section>
      <section>
        <p className="about-me">About me</p>
        <p>
          I, m a designer & developer with a passion for web design. I enjoy
          developing simple, clean and slick websites that provide real value to
          the end user. Thousands of clients have procured exceptional resulfs
          while working with me. Delivering work within time and budget which
          meets clients requirements in our mata.
        </p>
        <div>
          Mary Hardy Email: info@gmail.com Date of birth: 11 November 1987 From:
          Los Angeles, USA
        </div>
      </section>
      <section>
        <p>What I do</p>
        <p>
          I have more than 10 years experience building software for clients all
          over the world. Below is a quick overview of my main technical skill
          sets and technologies i use. Want to find out more about my
          experience? Check out my online resume and project portfolio.
        </p>
        <div className="card-container">
          <div className="card">
            <p>Vanila Javascript</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              debitis, odit dolore molestiae fuga, magni assumenda est
              reiciendis ex voluptatem beatae! Dolor aperiam nostrum cumque modi
              facilis assumenda quia magnam iure non at similique cum nam
              voluptatem ut aut consequuntur ducimus harum, rem dolorum. Itaque
              culpa explicabo vitae similique sequi!
            </p>
          </div>
          <div className="card">
            <p>React</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              debitis, odit dolore molestiae fuga, magni assumenda est
              reiciendis ex voluptatem beatae! Dolor aperiam nostrum cumque modi
              facilis assumenda quia magnam iure non at similique cum nam
              voluptatem ut aut consequuntur ducimus harum, rem dolorum. Itaque
              culpa explicabo vitae similique sequi!
            </p>
          </div>
          <div className="card">
            <p>Node js</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              debitis, odit dolore molestiae fuga, magni assumenda est
              reiciendis ex voluptatem beatae! Dolor aperiam nostrum cumque modi
              facilis assumenda quia magnam iure non at similique cum nam
              voluptatem ut aut consequuntur ducimus harum, rem dolorum. Itaque
              culpa explicabo vitae similique sequi!
            </p>
          </div>
          <div className="card">
            <p>Mongodb</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              debitis, odit dolore molestiae fuga, magni assumenda est
              reiciendis ex voluptatem beatae! Dolor aperiam nostrum cumque modi
              facilis assumenda quia magnam iure non at similique cum nam
              voluptatem ut aut consequuntur ducimus harum, rem dolorum. Itaque
              culpa explicabo vitae similique sequi!
            </p>
          </div>
        </div>
      </section>
      <section>
        <p>A summary of my resume</p>
        <div className="details-container">
          <div>
            <p>My Education</p>
            <div className="card">
              <p>Master in Computer Science</p>
              <small>Harvard University / 2015 - 2017</small>
              <p>
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available.
                Aeneancommodo ligula eget dolor.
              </p>
            </div>
            <div className="card">
              <p>Master in Computer Science</p>
              <small>Harvard University / 2015 - 2017</small>
              <p>
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available.
                Aeneancommodo ligula eget dolor.
              </p>
            </div>
            <div className="card">
              <p>Master in Computer Science</p>
              <small>Harvard University / 2015 - 2017</small>
              <p>
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available.
                Aeneancommodo ligula eget dolor.
              </p>
            </div>
          </div>
          <div>
            <p>My Experience</p>
            <div className="card">
              <p>Master in Computer Science</p>
              <small>Harvard University / 2015 - 2017</small>
              <p>
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available.
                Aeneancommodo ligula eget dolor.
              </p>
            </div>
            <div className="card">
              <p>Master in Computer Science</p>
              <small>Harvard University / 2015 - 2017</small>
              <p>
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available.
                Aeneancommodo ligula eget dolor.
              </p>
            </div>
            <div className="card">
              <p>Master in Computer Science</p>
              <small>Harvard University / 2015 - 2017</small>
              <p>
                List skill/technologies here. You can change the icon above to
                any of the 1500+ FontAwesome 5 free icons available.
                Aeneancommodo ligula eget dolor.
              </p>
            </div>
          </div>
          <button>Download CV</button>
        </div>
      </section>
      <footer className="footer">
        <div>
          <p>Let&apos; Connect</p>
          <p>
            Please fill out the form on this section to contact with me or call
            between 0.00 A.M and 8.00 P.M Monday through Friday.
          </p>
        </div>
        <div>
          <form>
            <input type="text" placeholder="your name"/>
            <input type="text" placeholder="your email"/>
            <input type="text" placeholder="your message"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
}
