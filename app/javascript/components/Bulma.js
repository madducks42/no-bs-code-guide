import React from "react";

export const Bulma = () => {
  return (
    <div>
      <div className="flex-column p-sm">
        <h2 className='is-size-2'>Setting Up Bulma</h2>
        <p>Bulma is the CSS framework that I prefer. It's not perfect but to me it strikes a good balance of providing a useful framework but also allowing customization.</p>
        <p>Despite the instructions on the Bulma website, I actually find it easier to add it as a gem. All I do to add it to a project is add this gem to your Gem file:</p>
        <div className="code-block"> {`
          gem "bulma-rails", "~> 0.8.0"
          `}
        </div>
        <p>After that just run 'bundle install' and bam. You've got Bulma. Now you just have to actually use it.</p>
        <p>To actually start using Bulma go to your stylesheets folder which is located under Assets and change the application.css file to application.scss. This changes your main style sheet from a Cascading Style Sheet (CSS) to a Syntactically Awesome Style Sheet (SCSS). I'm not making that up, that's really what SCSS stands for. SCSS is basically more advanced CSS and lets you do cool things like import SCSS files and use variables. In your application.scss file you just need to add: '@import "bulma";' and you can now use Bulma style in your app! Just remember that this line always needs to be the LAST line in the file.</p>
        <p>At some point you're going to want to override some of the default settings provided by Bulma. Maybe you want links to be a different color when you hover over them or maybe you want 'is-size-7' to be a different size. To overwrite the default settings of Bulma you need to find the variable name in their documenation and then add that variable name with the settings you want in the application.scss file.</p>
        <p>To view the values of the variables that Bulma has set by default you can look here - <a href='http://bulma.io/documentation/customize/variables/'>Bulma Variables</a></p>
        <p>For example, by default Bulma gives links a blue color. You can see this in the documentation:</p>
        <img className='mb-3' src="https://no-bs-code-production.s3.amazonaws.com/LinkColor.png" />
        <p>If you wanted to change the color of links you would add this line of code to your application.scss file:</p>
        <div className="code-block">$link: #0077b6;</div>
        <p>As another example, these are the default settings I almost always start with in any new project. I change the colors once I decide on a theme.</p>
        <pre>
          <code>{`
  /*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, or any plugin's
 * vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any other CSS/SCSS
 * files in this directory. Styles in this file should be added after the last require_* statement.
 * It is generally better to create a new file per style scope.
 *
 *= require_tree .
 *= require_self
 */

// Header Overrides
$navbar-background-color: #00B4D8;
$navbar-height: 10rem;
$navbar-item-img-max-height: 8rem;
$navbar-item-color: #f7f9fb;
$navbar-item-hover-color: #f7f9fb;
$navbar-item-hover-background-color: #ea3546;
$navbar-dropdown-background-color: #00B4D8;

// Footer Overrides
$footer-background-color: #00B4D8;
$footer-color: true;
$footer-padding: 2rem;

// Font Overrides
$is-family-primary: "Source Serif Pro";
$is-family-secondary: serif;
$size-1: 3rem;
$size-2: 2.5rem;
$size-3: 2.25rem;
$size-4: 2rem;
$size-5: 1.5rem;
$size-6: 1.25rem;
$size-7: 1.1rem;

// Button Overrides
$button-text-color:#f7f9fb;
$button-color:#f7f9fb;
$button-background-color: #0077b6;
$button-border-color: #0077b6;

// Button Active/Focus Overrides
$button-hover-color: #f7f9fb;
$button-focus-color: #f7f9fb;
$button-focus-border-color: #0077b6;
$button-focus-box-shadow-size: 0 0 0 0em;

// Button Hover Overrides
$button-hover-border-color: #ea3546;
$button-text-hover-color:#f7f9fb;

// Link Overrides
$link: #0077b6;
$link-hover:  #ea3546;

@import "bulma";
          `}</code>
        </pre>
        <p>In case you didn't read the text at the top of the application.scss file (shame on you) you can create more stylesheets in the Stylesheets folder and they'll be automaticaly compiled for you. This makes organizing the style for your app easy because you can make stylesheets for each section/component/page however you want to organize it. Just to give you some ideas. Here are some stylesheets that I include in every project I work in.</p>
        <p>general.scss -- I use this stylesheet to setup general style for the app which mostly addresses the layout of html and body. I include the colors at the top soley so that I document my color scheme somewhere. VSCode also displays the colors which is a nice visual.</p>
        <pre>
          <code>
            {`
// general.scss
// Color Scheme
.color-bg-white {
  background-color: #f7f9fb;
}

.color-bg-black {
  background-color: #101419;
}

.color-bg-blue {
  background-color: #00B4D8;
}

.color-bg-purple {
  background-color: #52489c;
}

.color-bg-red {
  color: #ea3546;
}

// General Page Setup
html {
  font-size: 62.5%;
  height: 100%;
  position: relative;
  margin: 0px;
  width: 100%;
}

body {
  background-color: white;
  font-family: "Source Serif Pro", serif;
  font-size: 1.4rem;
  color: #101419;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
            
            `}
          </code>
        </pre>

        <p>font.scss -- There is where I list the general settings for the fonts I'll use in the app along with tags such as {`<p>`} or {`<li>`}</p>
        <pre>
          <code>
            {`
// font.scss
// General Font Style
h1, h2, h3, h4, h5, h6, p, a, li {
  font-family: "Source Serif Pro", serif;
}

html p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

li {
  font-size: 1.1rem;
}

.font-white {
  color: #f7f9fb;
}

.font-black {
  color: #101419;
}

.font-red {
  color: #ea3546;
}

.font-lt-blue {
  color: #00B4D8;
}

.font-dk-blue {
  color: #0077b6;
}
            
            `}
          </code>
        </pre>

        <p>spacing.scss -- Bulma does provide some default spacing variables but I didn't like them so I created my own. This gives me a way to easily add margins or padding to elements.</p>
        <pre>
          <code>
            {`
// spacing.scss
// Margin All Around
.m-sm {
  margin: 1rem;
}

.m-md {
  margin: 2rem;
}

.m-lg {
  margin: 3rem;
}

// Margin Top
.mt {
  margin-top: 0px;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

// Margin Bottom
.mb {
  margin-bottom: 0px;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

// Margin Right
.mr {
  margin-right: 0px;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mr-5 {
  margin-right: 1.25rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

// Margin Left
.ml {
  margin-left: 0px;
}

.ml-1 {
  margin-left: 0.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.ml-4 {
  margin-left: 1rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.ml-6 {
  margin-left: 1.5rem;
}

// Padding All Around
.p-sm {
  padding: 1rem;
}

.p-md {
  padding: 2rem;
}

.p-lg {
  padding: 3rem;
}

// Padding Top
.pt {
  padding-top: 0px;
}

.pt-1 {
  padding-top: 0.25rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pt-3 {
  padding-top: 0.75rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

// Padding Bottom
.pb {
  padding-bottom: 0px;
}

.pb-1 {
  padding-bottom: 0.25rem;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pb-3 {
  padding-bottom: 0.75rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pb-5 {
  padding-bottom: 1.25rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

// Padding Right
.pr {
  padding-right: 0px;
}

.pr-1 {
  padding-right: 0.25rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pr-5 {
  padding-right: 1.25rem;
}

.pr-6 {
  padding-right: 1.5rem;
}

// Padding Left
.pl {
  padding-left: 0px;
}

.pl-1 {
  padding-left: 0.25rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.pl-3 {
  padding-left: 0.75rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.pl-6 {
  padding-left: 1.5rem;
}
            
            `}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default Bulma