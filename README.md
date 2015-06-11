# sp-Pie
AngularJS directive for creating pie charts with SVG

__I will love to get feture requests for this directive__

## Demo
[http://shotap.github.io/sp-pie/](goo.gl/cHxrpy)

## Why sp-Pie?
* Very lite! __<1KB__
* Uses SVG

## Install
* Copy `sp-pie.min.js`
* Add reference in the index.html
* Add depedencie in your app `angular.module('myApp', ['sp-pie']);` 

## Init
define the `$scope` object:
```javascript
$scope.slices = [
    { value: 14, color: '#f06'},
    { value: 60, color: 'yellowgreen'},
    { value: 26, color: 'navy'}
];
```
The value is in %

```html
<sp:pie size="200" slices="slices"></sp:pie>
```

### Params
param       | type     | description
------------|----------|----------------------------------------------------
size        | int      | the size of the chart, both width ans height
slices      | string   | name of the `$scope` variable with the slices information

---

This directive was created with ♥ according to keynote by [Lea Verou](http://lea.verou.me/)  
