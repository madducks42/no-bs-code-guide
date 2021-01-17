import React from "react";


export const NewRailsReactProject = () => {
  return (
    <div className="container">
      <div className="flex-column p-sm">
        <h2 className='is-size-2'>New Rails/React Project</h2>
        <ul>
          <li>Basic details about project</li>
        </ul>
        <h6 className='step-title'>Step 1) Create the project</h6>
        <p>Open a terminal window, make sure your working directory is the one where you want your file to be created. Run the following command:</p>
        <p className='code-block'>rails new new-rails-react-project --webpack=react -d=postgresql</p>
        <p>This will create a Rails project with the latest stable versions of Rails, Webpack, React, and Postgresql</p>
        <p>I use VScode so at this point I open the project there and use the terminal within VScode. If you’re using a different editor like Atom that doesn’t have a built-in terminal, just make sure to navigate to your project in terminal for the remainder of the instructions. (And yes I could say “Duh” here but we all know that we’ve tried to run commands in terminal when we weren’t in the right directory and it took us a good five minutes to realize what the problem was. You will find no holier than thou attitude here.)</p>

        <h6 className='step-title'>Step 2) Install relevant components</h6>
        <p>Run the following command:</p>
        <p className='code-block'>yarn add react-router-dom redbox-react</p>
        <p>Because we included ‘--webpack=react -d=postgresql’ when we created the project, Webpack and React were already installed. You can view all this in the ‘package.json’ file. Plus if you have that file open when you run the above commands you can see them appear in the file. I find it very satisfying. Don’t judge.</p>

        <h6 className='step-title'>Step 3) Add Webpack script</h6>
        <p>If you haven’t already opened package.json do so now. Add a comma after the curly bracket for devDependencies and add the following:</p>
        <p className='code-block'>
          <pre>
            <code>{`
"scripts": {
  "start": "./bin/webpack-dev-server"
}
          `}</code>
          </pre>
        </p>
        <p>At this point your 'package.json' file should looke like this:</p>
        <pre>
          <code>
            {`
{
  "name": "no-bs-code-guide",
  "private": true,
  "dependencies": {
    "@babel/preset-react": "^7.12.10",
    "@rails/actioncable": "^6.0.0",
    "@rails/activestorage": "^6.0.0",
    "@rails/ujs": "^6.0.0",
    "@rails/webpacker": "5.2.1",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "redbox-react": "^1.6.0",
    "turbolinks": "^5.2.0"
  },
  "version": "0.1.0",
  "devDependencies": {
    "webpack-dev-server": "^3.11.2"
  },
  "scripts": {
    "start": "./bin/webpack-dev-server"
  }
}       
            `}
          </code>
        </pre>
        <p>This will allow you to run the command ‘yarn start’ which will start the webpack-dev-server which will automatically reload the page as you make changes to your code and thus make your life slightly easier.</p>

        <h6 className='step-title'>Step 4) Start server</h6>
        <p>In your terminal window run the command below to get your tables setup. We’re not going to do anything else with the tables for now but they have to be created in order to run your server.</p>
        <p className='code-block'>rails db:create</p>
        <p>Run this command next to start the webpack-dev-server</p>
        <p className='code-block'>yarn start</p>
        <p>Then open another tab in your terminal and run this command to start your server</p>
        <p className='code-block'>rails s</p>
        <p>In a browser window go to localhost:3000 and you should see the standard, “Yay you’re on Rails page!”</p>
        <img className="image-md" src="https://no-bs-code-production.s3.amazonaws.com/RailsNew.png" />

        <h6 className='step-title'>Step 5) Add some Rails stuff</h6>
        <p>Stop running the rails server (ctrl-c) and run the following command:</p>
        <p className='code-block'>rails g controller homepages index</p>
        <p>This nifty command creates a bunch of Rails files for you.</p>
        <pre>
          <code>{`
route  get 'homepages/index'
invoke  erb
create  app/views/homepages
create  app/views/homepages/index.html.erb
invoke  test_unit
create  test/controllers/homepages_controller_test.rb
invoke  helper
create  app/helpers/homepages_helper.rb
invoke  test_unit
invoke  assets
invoke  scss
create  app/assets/stylesheets/homepages.scss
          `}</code>
        </pre>

        <h6 className='step-title'>Step 6) Add some rails stuff</h6>
        <p>Open up routes.rb and change `get 'homepages/index' to ‘root 'homepages#index’’. I personally just move the '# For details…' comment to the top of the file but you can delete it if you’re feeling wild.</p>
        <p>At this point your routes.rb file should look like this:</p>
        <pre>
          <code>{`
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  root 'homepages#index'
end
          `}</code>
        </pre>
        <p>Go back to your browser and reload the page, you should now see:</p>
        <pre>
          <code>
            {`
Homepages#index
Find me in app/views/homepages/index.html.erb
            `}
          </code>
        </pre>

        <h6 className='step-title'>Step 7) Setup React in Rails</h6>
        <p>We’re in the thick of it now guys. Open up application.html.erb and underneath yield add this code block:</p>
        <pre>
          <code>
            {`
<%- if Rails.env.development? || Rails.env.test? -%> 
  <%= javascript_tag do %>
    window.railsEnv = '<%= Rails.env %>'
  <%- end -%>
<%- end -%>
<%= javascript_pack_tag 'index' %>
            `}
          </code>
        </pre>
        <p>Oh my gods I just broke your app! WHY WOULD I DO THAT TO YOUR POOR INNOCENT SOUL! Don’t worry about it, we’ll fix it in the next few steps and I’ll explain this madness.</p>
        <h6 className='step-title'>Step 8) Create some React files</h6>
        <p>Go to the javascript folder located in the app folder. Currently there are two folders there, channels and packs. In the packs folder change the name of the ‘hello_world.jsx’ file to ‘index.js’</p>
        <p>Highlight everything in the newly renamed ‘index.js’ and delete it and replace it with this:</p>
        <pre>
          <code>
            {`
import React from 'react'
import { render } from 'react-dom'
import RedBox from 'redbox-react'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if (window.railsEnv && window.railsEnv === 'development') {
      try {
        render(<App />, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(<App />, reactElement)
    }
  }
})
            `}
          </code>
        </pre>
        <p>Yes your app is still broken. There’s no getting off this ride though so you’re just going to have to follow through with the next steps to fix it. What the hell is with these code blocks that I’ve had you copy in twice now with no explanation though? I even made you delete a huge chunk of code. Y’all are really trusting and it’s adorable.</p>
        <p>Alright fine. Basically what we’ve setup up is React to load on page load. That’s what ‘document.addEventListener('DOMContentLoaded', () ‘ is waiting for, the page to load. Then when the page loads it looks for an ID called ‘app’ in a document (we’ll add this in the next step). After that it says if I’m in a development environment then I want you to try and render the React element ‘App’ but if you can’t do that then I want you to use Redbox (which I imported at the top of this file) to throw an error page and tell me what the hell I did wrong preferably not in vague terms but this is coding so it’s probably going to be vague. But if we’re not in development mode, if this app is running for realsies on the big scary internet, then just show the React element ‘App’. If it breaks it breaks, I don’t want to flaunt my dirty laundry to the entire world and detail my errors for everyone to see.</p>

        <h6 className='step-title'>Step 9) We’re getting closer to fixing the app I made you break. </h6>
        <p>Go to homepages.index.erb and replace the code that’s there with:</p>
        <pre>
          <code>
            {`
<div id="app">

</div>
            `}
          </code>
        </pre>
        <p>This is related to this line of code from the previous step, ‘let reactElement = document.getElementById('app’)’ We’re now providing that ever so important ID with the name of ‘app’</p>
        <h6 className='step-title'>Step 10) Homestretch I swear</h6>
        <p>Create a new folder in the javascript folder called components. In that folder add two files:</p>
        <img className="image-md" src="https://no-bs-code-production.s3.amazonaws.com/ReactFiles.png" />
        <p>Add the following code in the App.js file:</p>
        <pre>
          <code>
            {`
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./Home"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
            `}
          </code>
        </pre>
        <p>Add the following code in the Home.js file:</p>
        <pre>
          <code>
            {`
import React from "react";

export const Home = () => {
  return (
    <p>See I told you this would work and I wasn't full of lies.</p>
  )
}

export default Home
            `}
          </code>
        </pre>
        <p>Now start your server again and refresh your browser window and your app should be working again.</p>
      </div>
    </div>
  )
}
  export default NewRailsReactProject