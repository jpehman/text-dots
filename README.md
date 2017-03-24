# text-dots, A Dependency Free Loading Dots Utility
[ [text-dots on npm](https://www.npmjs.com/package/text-dots "npm") ]

The "text-dots" utility allows you to add loading dots (...) that appear at an interval to any DOM element.

### HTML
	  <div class="blinder">
		<div class="loading-parent">
		  <span id="loadingText"></span>  
		</div>
	  </div>

### JavaScript
	  var textDots = require("text-dots");
	  var dots = textDots(5);

	  // call start when you want the ..... to begin appearing
	  dots.start("Loading", document.getElementById("loadingText"));  

	  // call stop when you want the ..... to stop
	  dots.stop();


### CodePen Example

[https://codepen.io/anon/pen/WpyRvB](https://codepen.io/anon/pen/WpyRvB "https://codepen.io/anon/pen/WpyRvB")

# License #

Published under the [MIT license](https://github.com/jpehman/pause-mejs/blob/master/LICENSE "MIT License").