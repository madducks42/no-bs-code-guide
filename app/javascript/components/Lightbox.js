import React from "react";

export const Lightbox = () => {
  return (
    <div className="container">
      <h2 className="is-size-2">Lightbox2</h2>
      <p>
        Lightbox2 is what I&apos;ve been using when I need a Lightbox, aka the ability to click on an image and have it pop-up in a window. I find it fairly easy to use and customize for my needs but it&apos;s definitely not perfect. Documentation for Lightbox2 can be viewed here
        -{" "}
        <a href="https://lokeshdhakar.com/projects/lightbox2/" target="_blank" rel="noreferrer">
          Lightbox2
        </a>
      </p>
      <br />
      <h6 className="step-title">Step 1) Install Lightbox2</h6>
      <p>
        Add this gem to your gem list and then run bundle install.
      </p>
      <p className="code-block">
        gem 'lightbox2-rails'
      </p>
      <p>Then run </p>
      <p className="code-block">
        npm install lightbox2 --save
      </p>
      <p>You then need to require Lightbox2, and jquery if you haven&apos;t already. This might very depending on how you have your project setup. In my projects I add this in the Application.js file:</p>
      <pre>
          <code>
            {`
//= require jquery
//= require jquery_ujs
//= require lightbox
            `}
          </code>
        </pre>
        <h6 className="step-title">Step 2) Download and add JS, CSS, and icon files</h6>
      <p>
        There are three things you&apos;ll need to add to your project. Lightbox.js, lightbox.css (you should rename this one to lightbox.css.scss), and then the image files close.png, loading.png, next.png, and previous.png. I save all the image files in /public/images. All of these files can be downloaded from the Lightbox2 link at the top of this article.
      </p>
      <h6 className="step-title">Step 3) Example Lightbox2 Code</h6>
      <p>
        This is some example code for Lightbox but it can be adapted to work better within React components.
      </p>
      <pre>
        <code>
          {`
//= require jquery
//= require jquery_ujs
//= require lightbox
          `}
        </code>
      </pre>
      <p>Examples of using Lightbox can be seen in these projects:</p>
      <ul>
        <li><a href="https://github.com/madducks42/outworld-reptiles">Outworld Reptiles</a></li>
        <li><a href="https://github.com/madducks42/perpetually-lost-photography">Perpetually Lost Photography</a></li>
      </ul>
    </div>
  );
};

export default Lightbox;
