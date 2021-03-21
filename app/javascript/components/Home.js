import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <div className="callout m-sm p-sm">
        <h3 className="is-size-3">About This Site</h3>
        <p>As someone who took a somewhat circuitous to becoming a software developer, first by teaching myself as much as possible and then completing a bootcamp, I find most articles and forums to be rather useless. They&apos;re either outdated or they don&apos;t include important context because they assume that the reader has a strong background in software development.</p>
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
          <p>Bulma is currently my prefered CSS framework. This is a guide on how to add it along with some basic tips.</p>
        </div>
        <div className='guide-link'>
          <Link
            className="is-size-6 article-link"
            to='/bootstrap'
          >
            Adding Bootstrap to Rails/React Project
          </Link>
          <p>Personally I hate Bootstrap but this is a simple guide with how to get started using it in Rails/React project.</p>
        </div>
        <div className='guide-link'>
          <Link
            className="is-size-6 article-link"
            to='/prettier-eslint'
          >
            Setup Prettier & ES Lint
          </Link>
          <p>Prettier is a code formatter that is widely used and I really like it. ES Lint is a commonly used linter that I also find really useful.</p>
        </div>
        <div className='guide-link'>
          <Link
            className="is-size-6 article-link"
            to='/lightbox'
          >
            Setup Lightbox2
          </Link>
          <p>Lightbox2 is useful for setting up image galleries or pop-up windows for images.</p>
        </div>
      </div>
    </div>
  )
}
  export default Home