import React from "react";
import { Link } from "react-router-dom";

import NewRailsReactProject from './NewRailsReactProject'

export const Home = () => {
  return (
    <div className="container">
      <div className="callout m-sm p-sm">
        <h3 className="is-size-3">About This Site</h3>
        <p className='is-size-7'>As someone who took a somewhat circuitous to becoming a software developer, first by teaching myself as much as possible and then completing a bootcamp, I find most articles and forums to be rather useless. They're either outdated or they don't include important context because they assume that the reader has a strong background in software development.</p>
        < br/ >
        <p className='is-size-7'>I decided to put this guide together for purely selfish reasons. It gives me a place to store notes and guides that I find useful for myself. It allows me to practice my coding skills. And it allows me to talk a lot of bullshit.</p>
      </div>
      <div className='flex-column m-sm'>
        <h4 className='is-size-4'>Guides</h4>
        <div className='guide-link'>
          <Link
            className="is-size-6"
            to='/new-rails-react-project'
          >
            New Rails/React project
          </Link>
          <p>Simple guide on how to setup a basic Rails/React with Webpack.</p>
        </div>
      </div>
    </div>
  )
}
  export default Home