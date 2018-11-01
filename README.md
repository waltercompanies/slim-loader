# SLIM Webpack loader

Inspired by `slm-loader`: https://github.com/wealthbar/slm-loader

[SLM/SLIM](https://github.com/slm-lang/slm) loader for Webpack

## Installation

Add the NPM package to your project:

    npm install git+ssh://git@github.com/waltercompanies/slim-loader.git --save

And then, add to rules section in your Webpack config:

```js
    {
        test: /\.slim$/,
        use: {
          loader: 'slim-loader'
        }
    }
```

Done! :sparkles:
