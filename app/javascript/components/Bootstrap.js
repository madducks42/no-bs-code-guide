import React from "react";

export const Bootstrap = () => {
  return (
    <div className="container">
      <div className="flex-column p-sm">
        <h2 className='is-size-2'>Setting Up Bootstrap</h2>
        <p>Bootstrap is a CSS framework that 90% of the internet uses. Okay probably not that high but it feels like it. If you've seen one Bootstrap website you've seen them all. Personally I hate Bootstrap because I don't like using templates and prefer to customize my CSS as much as possible. But I understand that now everyone wants to be frustrated for hours over styling dilemmas and instead worship at the alter of Bootstrap.</p>
        <h6 className='step-title'>Step 1) Add Bootstrap</h6>
        <p>Adding Bootstrap to your Rails/React project is pretty straight forward. Run this command to add the necessary components:</p>
        <pre>
          <code>
            {`
yarn add bootstrap jquery popper.js react-bootstrap
            `}
          </code>
        </pre>
        <h6 className='step-title'>Step 2) Configure Webpack</h6>
        <p>Then go to the config/webpack/environment.s and replace the existing code with this:</p>
        <pre>
          <code>
            {`
const { environment } = require('@rails/webpacker')

// Lines 3-11 are what is added for Bootstrap
const webpack = require('webpack')

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    JQuery: 'jquery',
    Popper: ['popper.js', 'default'], // for Bootstrap 4
  })
)

module.exports = environment
            `}
          </code>
        </pre>
        <h6 className='step-title'>Step 3) Import Bootstrap</h6>
        <p>And lastly, you need to import Bootstrap in two places. Go to application.css in assets/stylesheets. Change the file name to application.scss and add the following line at the end of the file:</p>
        <pre>
          <code>
            {`
@import "bootstrap/scss/bootstrap";
            `}
          </code>
        </pre>
        <p>Then go to application.js in javascript/packs and add this line code:</p>
        <pre>
          <code>
            {`
import 'bootstrap'";
            `}
          </code>
        </pre>
        <p>That&apos;s it. You can now create generic websites with Bootstrap. Yay. Just to be clear, this is a super simple method of setting up Bootstrap. It should be enough to get you started but there are cleaner ways of importing it so that your app isn&apos;t weighed down by the entire Bootstrap library.</p>
        <p>Bootstrap has some sample templates on their <a href="https://getbootstrap.com/docs/5.0/examples/" target="_blank" rel="noreferrer">website</a> that you can use. And of course there are plenty of fancy templates you can buy. I have one some of the example code running <a href="https://bootstrap-project-example.herokuapp.com/" target="_blank" rel="noreferrer">here</a> and the code for it can be viewed <a href="https://github.com/madducks42/bootstrap-project-example" target="_blank" rel="noreferrer">here</a>.</p>
      </div>
    </div>
  )
}

export default Bootstrap