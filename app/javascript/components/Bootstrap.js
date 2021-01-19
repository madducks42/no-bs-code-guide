import React from "react";

export const Bootstrap = () => {
  return (
    <div className="container">
      <div className="flex-column p-sm">
        <h2 className='is-size-2'>Setting Up Bootstrap</h2>
        <p>Bootstrap is a CSS framework that 90% of the internet uses. Okay probably not that high but it feels like it. If you've seen one Bootstrap website you've seen them all. Personally I hate Bootstrap because I don't like using templates and prefer to customize my CSS as much as possible. But I understand that now everyone wants to be frustrated for hours over styling dilemnas and instead worship at the alter of Bootstrap.</p>
        <p>Adding Bootstrap to your Rails/React project is pretty straight forward. Run this command to add the necessary components:</p>
        <pre>
          <code>
            {`
yarn add bootstrap jquery popper.js react-bootstrap
            `}
          </code>
        </pre>
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
        <p>And lastly, go to application.css in assets/stylesheets. Change the file name to application.scss and add the following line at the end of the file:</p>
        <pre>
          <code>
            {`
@import "bootstrap/scss/bootstrap";
            `}
          </code>
        </pre>
        <p>That's it. You can now create generic websites with Bootstrap. They have a ton of sample templates on their <a href="https://getbootstrap.com/docs/5.0/examples/" target="_blank">website</a> that you can use. If you want to see my sample Bootstrap website you can view it <a href="https://bootstrap-project-example.herokuapp.com/" target="_blank">here</a> and the code for it can be viewed <a href="https://github.com/madducks42/bootstrap-project-example" target="_blank">here</a>.</p>
      </div>
    </div>
  )
}

export default Bootstrap