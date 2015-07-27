#JV jQuery Mobile Menu v2
Mobile menu with hamburger button based on jQuery and GSAP JS.<br/>
[View demo](http://archive.juliusvaart.com/jvmobilemenu/)

##Add jQuery, GSAP TweenMax and the plugin just before the closing /body tag
```HTML
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<script src="jvmobilemenu/jv-jquery-mobile-menu-min.js"></script>
```

##Add the CSS in the head
```HTML
<link rel="stylesheet" type="text/css" href="jvmobilemenu/jv-jquery-mobile-menu.css">
```

##Call the plugin from a JS file and edit the settings
```js
$.jvmobilemenu({
  mainContent: $('.page'),
  theMenu: $('.mobile-nav'),
  slideSpeed: 0.3,
  menuWidth: 240,
  position: 'right',
  menuPadding: '20px 20px 60px'
});
```

##The settings
mainContent	(The Content Wrapper jQuery selector)<br/>
default: ```$('.page')```

theMenu	(Your mobile menu)<br/>
default: ```$('.mobile-nav')```

slideSpeed (Animation speed)<br/>
default: ```0.3``` (seconds)

menuWidth	(Desired menu width)<br/>
default: ```240```

position (Left or right side for hamburger and menu)<br/>
default: ```'right'```

menuPadding	(Padding for the menu content)<br/>
default: ```'20px 20px 60px'```
