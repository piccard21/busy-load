# busy-load

A simple, but flexible loading-mask plugin for jQuery. There are plenty of options & possibilities to expose an overlay:

* **Overlay**
  * animate it like fade or slide in
  * tinker with the options, like background, color ...  
* **Spinners**
  * css - select from a collection of pure css-spinners from [Tobias Ahlin](http://tobiasahlin.com/spinkit/)
  * image - use an image as a spinner
  * custom - pass in your custom jQuery-Element
  * fontawesome
* **Text**
  * show some text 
  * position it, like top, bottom, ...
  * customize your text, like color, margin, size ... 

## Demo

You can find some examples [here](https://piccard21.github.io/busy-load/).

## Getting started

* Install from **npm** 
 
```
npm i busy-load
```

... or **cdn** and include jquery and **busy-load** in your page:

```
<script src="http://code.jquery.com/jquery-3.2.1.min.js" </script>

<script src="jquery.loading.js"></script>
<link href="jquery.loading.css" rel="stylesheet">
```

* Call the plugin from your element:

```
$("#some-element").busyLoad('show');
$("#some-element").busyLoad('hide');	

// with options
$("#another-element").busyLoad('show', {
	background: '#000',
	spinner: "cube",
	animate: "slide"
});
$("#another-element").busyLoad('hide');

```

## Options

Here's a full list of all the default-options you can use and modify on the plugin:

 
Property              | Description       | value      | Default value
-------------         | -------------     | -------------    | -------------
action                | show or hide the overlay | show, hide | -
spinnerClass          | a CSS-spinner     | pump, accordion, pulsar, cube, cubes, circle-line, circles, cube-grid | pump
image        		  | use an image as spinner  | source for image (location, string)  | false
fontawesome   		  | use a fontawesome-icon as spinner  | $("#el")  | false
custom        		  | use a custom jQuery-element as spinner  | source for image (location, string)  | false
color             	  | color of the spinner  | color-value   | #fff
background             	  | background of the overlay  | color-value   | rgba(0, 0, 0, 0.21)
maxSize        		  | max-size of the spinner  | size-value  | "50px"
minSize        		  | min-size of the spinner  | size-value  | "20px"
text 		          | text next to the spinner | String or false   | false
textColor 		          | color of the  | color-value      | default is color
textMargin 		          | margin of the text - works on every textPosition | size-value   | false
textPosition 		          | where should the text appear | top, bottom, left, right   | right
animation 		          | use an animation, when overlay appears or hides| fade, slide | false 
animationDuration 		          | pass in duration of animation | slow, fast, integer in ms | fast 
containerClass 		          | add a class to the overlay-container | class-name | busy-load-container 
containerItemClass 		          | add a class to the container-item | class-name | busy-load-container-item
spinnerClass 		          | add a class to the spinner | class-name | busy-load-spinner
textClass 		          | add a class to the text | class-name | busy-load-text


To see them in action and learn how to use them [goto this place](https://piccard21.github.io/busy-load/).



## Full

For a fullscreen-overlay use **$.busyLoadFull()**:

```        
$.busyLoadFull("show", {
	background: "blue",
	image: "tardis"
});
$.busyLoadFull("hide");
```    

## Setup

If you don't wanna pass in your options all the time, because it would repeat itself, you can use **$.busyLoadSetup**:
 
```        
$.busyLoadSetup({
	animation: "slide",
	background: "rgba(255, 152, 0, 0.86)"
}); 
```         



## License

busy-load is licensed under the MIT License - see the LICENSE file for details.