import React from "react"
import styled from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutImage from '../components/AboutImage'

const StyledHR = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #FFE1D9, #FF647D, #FFE1D9);
`;

const StyledYear = styled.h1`
  color: #FF647D;
`;

const BlogPage = () => (
  <Layout>
    <GlobalStyles />
    <SEO title="About" />
    <AboutImage />
    <p>I never planned on becoming a web developer. My goal had always been to become a writer, whether that was as a journalist or an author. It wasn't until years after college that I found my passion for developing.</p>
    <StyledYear>2014</StyledYear>
    <StyledHR />
    <p>In 2014 I graduated from Rutgers University in New Brunswick, NJ with a B.A. in Journalism & Media Studies. I loved the four years I spent digging deep into the world of reporting in college. I spent time honing my writing and communication skills through reporting in articles, on radio, and on television. I reported on everything from music and sports to weather and politics.</p>
    <p>The summer between my junior and senior year I completed an internship at Greater Media NJ in Cedar Knolls. I worked on promoting their two radio stations, WDHA & WMTR, managing events, and interacting with listeners. By the end I was even hired part-time as an assistant to manage and mentor future interns and continue my work on the street team.</p>
    <p>After graduating from college I began working for Fox News as a Production Assistant. I quickly became disenchanted. The work was grueling and the hours were even worse and with no real reward to motivate me, I soon began searching for something else.</p>
    <StyledYear>2016</StyledYear>
    <StyledHR />
    <p>Once I left Fox News I spent a lot of time moving between offices and positions searching for the passion I had lost. In 2016 I met a business owner who loved the website and blog I had designed for myself. He hired me part time to create a similarly styled website for his company. At the time I knew nothing about writing code, but the journalism department at Rutgers made certain I knew how to create beautiful and modern portfolios, blogs, and websites using Wordpress or Wix.</p>
    <p>For the next five months I spent my free hours creating this website and making sure it looked clean, functioned easily, and showcased the product and services well. In November, when I finished the website, my boss was so happy and impressed with my work that he hired me to work full time as a Project Coordinator.</p>
    <p>Though I was no longer in charge of the website, this was an opportunity to carve out a career path and increase my salary.</p>
    <StyledYear>2019</StyledYear>
    <StyledHR />
    <p>For the next two years I greatly enjoyed being a Project Coordinator. I learned how to communicate effectively with dissatisfied clients to let them know I was there to help and to communicate urgency to vendors who were not moving quickly enough. I even picked up skills like reading ceiling plans and blueprints and keeping deadlines on track.</p>
    <p>But by 2019, I was feeling severely stuck. There was no opportunity for growth and nothing new to learn. I had stalled out. So I turned back to what had started this entire journey- the website.</p>
    <p>My brain started churning, what career path could I find that would allow me to satisfy my hunger for learning and my passion for creating? And as I stared at my computer screen it dawned on me that technology was constantly evolving.</p>
    <p>I set about learning from the ground up- HTML, CSS, and JavaScript. I already had a few friends who were developers who helped steer me towards resources like freeCodeCamp and Codecademy. I dove into React and never looked back. Coding opened up a world of opportunity that I never dreamed of.</p>
    <p>With my passion rediscovered, I committed to learning as much as I could on my own with guidance from some of my friends.</p>
    <StyledYear>2020</StyledYear>
    <StyledHR />
    <p>Today I have continued a non-stop journey into becoming a web developer. The constantly changing and evolving ecosystem fulfills my desire to always be learning something new and the endless possibilities of creating something from nothing ignite my creativity.</p>
    <p>I still have much to learn, but one thing I've finally figured out is web development is the career I'm best suited for.</p>
  </Layout>
)

export default BlogPage
