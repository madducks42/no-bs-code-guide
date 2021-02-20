import React from "react";

export const Bulma = () => {
  return (
    <div className="container">
      <div className="flex-column p-sm">
        <h2 className="is-size-2">Setting Up Bulma</h2>
        <p>
          Bulma is the CSS framework that I prefer. It&apos;s not perfect but to me
          it strikes a good balance of providing a useful framework but also
          allowing customization.
        </p>
        <p>
          Despite the instructions on the Bulma website, I actually find it
          easier to add it as a gem. All I do to add it to a project is add this
          gem to your Gem file:
        </p>
        <div className="code-block">
          {" "}
          {`
          gem "bulma-rails", "~> 0.8.0"
          `}
        </div>
        <p>
          After that just run &apos;bundle install&apos; and bam. You&apos;ve got Bulma. Now
          you just have to actually use it.
        </p>
        <p>
          To actually start using Bulma go to your stylesheets folder which is
          located under Assets and change the application.css file to
          application.scss. This changes your main style sheet from a Cascading
          Style Sheet (CSS) to a Syntactically Awesome Style Sheet (SCSS). I&apos;m
          not making that up, that&apos;s really what SCSS stands for. SCSS is
          basically more advanced CSS and lets you do cool things like import
          SCSS files and use variables. In your application.scss file you just
          need to add: &apos;@import &quot;bulma&quot;;&apos; and you can now use Bulma style in
          your app! Just remember that this line always needs to be the LAST
          line in the file.
        </p>
        <p>
          At some point you&apos;re going to want to override some of the default
          settings provided by Bulma. Maybe you want links to be a different
          color when you hover over them or maybe you want &apos;is-size-7&apos; to be a
          different size. To overwrite the default settings of Bulma you need to
          find the variable name in their documenation and then add that
          variable name with the settings you want in the application.scss file.
        </p>
        <p>
          To view the values of the variables that Bulma has set by default you
          can look here -{" "}
          <a
            href="http://bulma.io/documentation/customize/variables/"
            target="_blank"
            rel="noreferrer"
          >
            Bulma Variables
          </a>
        </p>
        <p>
          For example, by default Bulma gives links a blue color. You can see
          this in the documentation:
        </p>
        <img
          className="mb-3"
          src="https://no-bs-code-production.s3.amazonaws.com/LinkColor.png"
        />
        <p>
          If you wanted to change the color of links you would add this line of
          code to your application.scss file:
        </p>
        <div className="code-block">$link: #0077b6;</div>
        <p>
          As another example, these are the default settings I almost always
          start with in any new project. I change the colors once I decide on a
          theme.
        </p>
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
        <p>
          The style for this website is pretty simple, the stylesheets can be
          viewed here -{" "}
          <a
            href="https://github.com/madducks42/no-bs-code-guide/tree/main/app/assets/stylesheets"
            target="_blank"
            rel="noreferrer"
          >
            Stylesheets
          </a>
          . Some of these stylesheets I basically copy/paste into every new app
          and tweak as necessary although they mostly remain the same.
        </p>
        <div className="content">
          <ul>
            <li>
              <a
                href="https://github.com/madducks42/no-bs-code-guide/blob/main/app/assets/stylesheets/general.scss"
                target="_blank"
                rel="noreferrer"
              >
                general.scss
              </a>
            </li>
            <li>
              <a
                href="https://github.com/madducks42/no-bs-code-guide/blob/main/app/assets/stylesheets/font.scss"
                target="_blank"
                rel="noreferrer"
              >
                font.scss
              </a>
            </li>
            <li>
              <a
                href="https://github.com/madducks42/no-bs-code-guide/blob/main/app/assets/stylesheets/utilities.scss"
                target="_blank"
                rel="noreferrer"
              >
                utilities.scss
              </a>
            </li>
            <li>
              <a
                href="https://github.com/madducks42/no-bs-code-guide/blob/main/app/assets/stylesheets/spacing.scss"
                target="_blank"
                rel="noreferrer"
              >
                spacing.scss
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bulma;
