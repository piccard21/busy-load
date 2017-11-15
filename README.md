# busy-load

A simple, but flexible loading-mask plugin for jQuery.

## Demo

You can find some examples [here](https://piccard21.github.io/busy-load/).

## Getting started

* Install from **npm** 
 
```
npm i busy-load
```

... or **cdn** and include jquery and **busy-load** in your page:

```
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

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

Here's a list of all options you can use on the plugin

```    
color: "#fff",
background: "rgba(0, 0, 0, 0.21)",
text: false,
textColor: false, // default is color
textMargin: ".5rem", 
fontSize: "1rem",
image: false,
fontawesome: false, // "fa fa-refresh fa-spin fa-2x fa-fw"
custom: false, // jQuery Object
spinner: "pump", // pump, accordion, pulsar, cube, cubes, circle-line, circles, cube-grid
fullScreen: false, 
animation: false,	// fade, slideDown/slideUp
animationOptions: false,	// String, Integer, Object - same as jQuery
maxSize: "50px", // Integer/String only for spinners & images, not fontawesome & custom
minSize: "20px", // Integer/String 
textPosition: "right", // left, right, top, bottom  
containerClass: "busy-load-container", // String 
containerItemClass: "busy-load-container-item",  // String 
spinnerClass: "busy-load-spinner",  // String 
textClass: "busy-load-text",  // String  
```

## Full

For a fullscreen-overlay use **$.busyLoadSetup()**:

```        
$.busyLoadFull("show", {
	background: "blue"
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


<ul>
    <li>Getting started</li>
    <li>Basic usage</li>
    <li>Full page loader</li>
    <li>Events</li>
    <li>Full list of options</li> 
</ul>