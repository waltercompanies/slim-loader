# SLIM Webpack loader

Inspired by `slm-loader`: https://github.com/wealthbar/slm-loader

Install:

    npm install git+ssh://git@github.com/waltercompanies/slim-loader.git --save

And add to rules section in your Webpack config:

```js
    {
        test: /\.slim$/,
        use: {
          loader: 'slim-loader'
        }
    }
```
