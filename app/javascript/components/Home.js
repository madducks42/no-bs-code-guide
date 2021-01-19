import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <div className="callout m-sm p-sm">
        <h3 className="is-size-3">About This Site</h3>
        <p>As someone who took a somewhat circuitous to becoming a software developer, first by teaching myself as much as possible and then completing a bootcamp, I find most articles and forums to be rather useless. They're either outdated or they don't include important context because they assume that the reader has a strong background in software development.</p>
        <p>I decided to put this guide together for purely selfish reasons. It gives me a place to store notes and guides that I find useful for myself. It allows me to practice my coding skills. And it allows me to talk a lot of bullshit. The latter is the main motivation.</p>
      </div>
      <div className='flex-column m-sm'>
        <h4 className='is-size-4'>Guides</h4>
        <div className='guide-link'>
          <Link
            className="is-size-6 article-link"
            to='/new-rails-react-project'
          >
            New Rails/React project
          </Link>
          <p>Simple guide on how to setup a basic Rails/React project with Webpack.</p>
        </div>
        <div className='guide-link'>
          <Link
            className="is-size-6 article-link"
            to='/bulma'
          >
            Adding Bulma to Rails/React Project
          </Link>
          <p>Simple guide on how to add the Bulma style framework to your project along with some basic style sheets.</p>
        </div>
        <div className='guide-link'>
          <Link
            className="is-size-6 article-link"
            to='/bootstrap'
          >
            Adding Bootstrap to Rails/React Project
          </Link>
          <p>Simple guide on how to add Bootstrap to your Rails/React project. Personally I hate Bootstrap but whatevs.</p>
        </div>
        <div className='guide-link'>
          <Link
            className="is-size-6 article-link"
            to='/prettier-eslint'
          >
            Setup Prettier & ES Lint (Coming Soon!)
          </Link>
          <p>Simple guide on how to add Prettier and ES Lint to your Rails/React project.</p>
        </div>
      </div>
    </div>
  )
}
  export default Home