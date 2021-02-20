import React from "react";

export const PrettierESLint = () => {
  return (
    <div className="container">
      <h2 className="is-size-2">Prettier & ESLint</h2>
      <p>
        Prettier is a code formatter that was designed for JavaScript but works
        with several other languages/tools. You can visit their website to see
        the full list of supported tools as well as community developed plugins
        -{" "}
        <a href="https://prettier.io" target="_blank" rel="noreferrer">
          Prettier
        </a>
        . Once you have Prettier installed and configured you don&apos;t have to
        worry about having the correct amount of spacing/tabs as it will do that
        for you. It is very opinionated but it makes the formatting for your
        code uniform.
      </p>
      <p>
        Technically you can also use ESLint for formatting but you
        shouldn&apos;t, Prettier is much better at it. But ESLint is useful for
        identifying problematic code as well as making sure your code adheres to
        basic accessibility guidelines.
      </p>
      <br />
      <h6 className="step-title">Step 1) Install Prettier & ESLint Plugins</h6>
      <p>
        I use VScode but it&apos;s probably similar in other editors. Go to
        their marketplace and install the plugins for Prettier & ESLint. VScode
        has a setting that will apply Prettier on save which is useful,
        especially if you have autosave configured. If you search for
        &quot;format on save&quot; in preferences you should find it.
      </p>
      <h6 className="step-title">Step 2) Install Prettier & ESLint</h6>
      <p>
        Open a terminal window, make sure your working directory is the one
        where you want your file to be created. Run the following command:
      </p>
      <p className="code-block">
        npm install --save-dev prettier eslint eslint-config-prettier
        eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
        eslint-plugin-react-hooks
      </p>
      <p>
        That will install Prettier & ESLint and some related libraries as dev
        dependencies. Included in this is AirBnB style guidelines. After
        they&apos;ve been installed you should see them in your package.json
        file under dev dependencies.
      </p>
      <pre>
        <code>
          {`
"devDependencies": {
"eslint": "^7.13.0",
"eslint-config-prettier": "^6.15.0",
"eslint-plugin-import": "^2.22.1",
"eslint-plugin-jsx-a11y": "^6.4.1",
"eslint-plugin-react": "^7.21.5",
"eslint-plugin-react-hooks": "^4.2.0",
"prettier": "^2.2.1",
},      
          `}
        </code>
      </pre>
      <h6 className="step-title">Step 3) Configure Prettier</h6>
      <p>
        Prettier is pretty straight forward to configure. Create a file called
        &quot;.prettierrc&quot;, note the &quot;.&quot; is important. The file
        should be located in the root of your project, so same location as the
        Gemfile for example. Assuming you want to use the default settings the
        file should look like this:
      </p>
      <pre>
        <code>
          {`
{}     
          `}
        </code>
      </pre>
      <p>
        That&apos;s seriously it. If you want to change the default settings you
        can do so here. I use the default settings but if for example you wanted
        to allow the use of single quotes (by default Prettier will change
        single quotes to double) you could add the following line:
      </p>
      <pre>
        <code>
          {`
{
  "singleQuote": true
}     
          `}
        </code>
      </pre>
      <h6 className="step-title">Step 4) Configure ESLint</h6>
      <p>
        ESLint requires a little more configuration but it still pretty easy.
        Similar to the steps for Prettier, create a file called
        &quot;.eslintrc.json&quot; in the root of your app. Add the following
        code to the file:
      </p>
      <pre>
        <code>
          {`
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
  "rules": {
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": "warn",
    "no-dupe-keys": "warn",
    "jsx-a11y/rule-name": 0,
    "jsx-a11y/anchor-has-content": "warn"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
  
          `}
        </code>
      </pre>
      <p>
        These are the base settings that I use for my projects. You might have
        to play around with them more depending on your environment but
        it&apos;s a good starting point.
      </p>
    </div>
  );
};

export default PrettierESLint;
