[![sonar.css](https://raw.githubusercontent.com/aurbano/sonar.css/master/assets/sonar.png)](http://urbanoalvarez.es/sonar.css/)

[![npm version](http://img.shields.io/npm/v/sonar.css.svg?style=flat-square)](https://www.npmjs.org/package/sonar.css)
[![Dependency Status](http://img.shields.io/david/dev/aurbano/sonar.css.svg?style=flat-square)](https://david-dm.org/aurbano/sonar.css)
[![license](http://img.shields.io/github/license/aurbano/sonar.css.svg?style=flat-square)](https://www.npmjs.org/package/sonar.css)

> CSS3 Animated Attention Seekers

[![Demo](https://raw.githubusercontent.com/aurbano/sonar.css/master/assets/demo.gif)](http://urbanoalvarez.es/sonar.css/)

## Getting started

Bower
```bash
$ bower install sonar.css
```

npm
```bash
$ npm install sonar.css --save
```

Or manually add [`sonar.css`](https://github.com/aurbano/sonar.css/blob/master/css/sonar.css) or [`sonar.min.css`](https://github.com/aurbano/sonar.css/blob/master/css/sonar.min,css) to your website.

## [Documentation](http://urbanoalvarez.es/sonar.css/#getting-started)

Add `sonar` as a class to any element to activate.

Use `sonar-infinite` to make the animation loop forever.

### Animations

You can use `sonar-stroke` for border animation, or `sonar-fill` for background animation.

### Triggers

Use `sonar-hover` or `sonar-click` for custom triggers.

### Delay

Use `sonar-delay` to set the animation delay to 1s. You can also use `sonar-delay-short`, `sonar-delay-shorter`, `sonar-delay-long` and `sonar-delay-longer` for different timings.

### Colors
Sonar will inherit the border/background colors. But sonar supports all the bootstrap colors, so you can use `sonar-default`, `sonar-primary`, `sonar-success`, `sonar-info`, `sonar-warning`, and `sonar-danger`.

All colors are compatible with `sonar-stroke` and `sonar-fill`.

## Using the SASS version

If you want to customize anything, clone the project and edit the sass files. If you just want to change some behavior, editing the [_variables.sccs](https://github.com/aurbano/sonar.css/blob/master/sass/sonar/_variables.scss) file is recommended.

You can use Grunt with the following tasks:

* `grunt`: This will setup up a watch on the sass files, so you can test your changes more easily. Use the `index.html` file provided for this.
* `grunt build`: This will just generate the `sonar.css` and `sonar.min.css` files.

--------

Developed by [Alejandro U. Alvarez](http://urbanoalvarez.es) - MIT License

[![Analytics](https://ga-beacon.appspot.com/UA-3181088-16/sonar/readme)](https://github.com/aurbano)
