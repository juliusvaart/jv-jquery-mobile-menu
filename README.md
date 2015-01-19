# Julius Vaart Mobile Menu
A simple mobile menu based on jQuery and GSAP JS.

# Use body selector.
```
$('body').jvmobilemenu({
  notMenuClick: $('.page'),
  slideSpeed: 0.3,
  menuWidth: 240
});
```

# Settings
notMenuClick: $('.page')<br/>
selector to click outside menu to close

slideSpeed: 0.3<br/>
speed to open and close menu (default in seconds)

menuWidth: 240<br/>
width of the mobile menu (default in pixels). Don't forget to change the mobile-menu width in CSS to the same value.