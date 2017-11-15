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

```    
color: "#fff",
background: "rgba(0, 0, 0, 0.21)",
text: false,	// String
textColor: false, // default is color
textMargin: ".5rem", 
fontSize: "1rem",
image: false,		// String
fontawesome: false, // String, i.e.: "fa fa-refresh fa-spin fa-2x fa-fw" 
custom: false, // jQuery Element
spinner: "pump", // use one of the built-in css-spinners: pump, accordion, pulsar, cube, cubes, circle-line, circles, cube-grid
fullScreen: false, // Boolean or use $.busyLoadFull()
animation: false,	// Boolean/String - fade, slide 
animationOptions: false,	// String, Integer - slow/fast, 4000ms
maxSize: "50px", // Integer/String only for spinners & images, not fontawesome & custom
minSize: "20px", // Integer/String only for spinners & images, not fontawesome & custom 
textPosition: "right", // left, right, top, bottom - default: right  
containerClass: "busy-load-container", // String 
containerItemClass: "busy-load-container-item",  // String 
spinnerClass: "busy-load-spinner",  // String 
textClass: "busy-load-text",  // String  
```


### Usage



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