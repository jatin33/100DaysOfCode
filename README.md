# 100DaysOfCode
Here I try to code for 100 days by creating projects in javascript
- 30 to 40 days JS30
- Learn core NodeJS https://www.codeproject.com/Articles/1264218/All-About-Core-NodeJS-Part-1

# Day 1
## JS clock
https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/JS+and+CSS+Clock/index-START.html


# Day 2
## CSS variables
https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/CSS+Variables/index-START.html

Learning published on blog: https://technovice796222167.wordpress.com/2018/11/28/difference-between-queryselectorall-and-getelementsbyclassname-methods-used-for-javascript-dom-scripting/

# Day 3
## Array Cardio

Methods covered
- map(), filter(),reduce(),sort()
- Understanding **this** keyword in Javascript 
   - https://www.geeksforgeeks.org/this-in-javascript/
   - http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
- Understanding closures http://javascriptissexy.com/understand-javascript-closures-with-ease/

# Day 4
## Flex Panel Gallery

https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/Flex+Panel+Gallery/index.html
 
Flex panel hosted on Amazon S3

Things learnt:
- Flexbox
- css Pseudo-elements
- css Pseudo-classes

# Day 5 
## Type Ahead
https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/Type+Ahead/index.html

- This mini project can be further improved by using Templating engines like Handlebar.js
   - https://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/

Things Learnt:
- RegExp()
- match(),replace() methods of string class
- join() method of Array class

# Day 6
## Array Cardio 2

Things Learnt:
- some(),every() returns boolean value after invoking testing function on each element until it returns true else returns false
- find(),findIndex() returns element , index of element respectively  after passing some testing function
- splice() method removes element/s from the array based on the index passed to it and number of elements to delete.

Note splice() method mutates the original array

# Day 7
## Fun with HTML5 Canvas
https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/Fun+with+HTML5+Canvas/index-START.html

Line properties learnt
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#Line_styles

Mouse events learnt
- onmouseover/onmouseout - When the mouse passes over an element
- onmousedown/onmouseup - When pressing/releasing a mouse button
- onmousedown - When mouse is clicked: Alert which element
- onmousedown - When mouse is clicked: Alert which button
- onmousemove/onmouseout - When moving the mouse pointer over/out of an image
- onmouseover/onmouseout - When moving the mouse over/out of an image
useover an image map


Questions that came to my mind:
Difference between screenX|Y, clientX|Y and pageX|Y.
https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y

Difference between var, const and let
https://medium.freecodecamp.org/javascripts-var-let-and-const-variables-explained-with-a-story-2038e3c6b2f9

What is HSL function in CSS : https://www.w3schools.com/colors/colors_hsl.asp

beginPath() method of Canvas element : https://www.w3schools.com/tags/canvas_beginpath.asp

# Day 8
## Devtools Domination

This day was all about getting familiar with dev tools like profiler,debugger and learning about console object of window.

Resources collected while learning dev tools

https://stackoverflow.com/questions/21876461/difference-between-console-log-and-console-debug/53355565#53355565

https://stackoverflow.com/questions/11954152/whats-the-difference-between-console-dir-and-console-log

https://www.geeksforgeeks.org/ways-reduce-loading-time-website-set-1/

Javascript Profiler:
https://stackoverflow.com/questions/49502744/how-to-see-results-of-console-profile

https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution

How to improve website performance using Audits done by LightHouse
https://developers.google.com/web/tools/chrome-devtools/speed/get-started

# Day 9
## Hold Shift and Check Checkboxes
https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/Hold+Shift+and+Check+Checkboxes/index.html

Things learnt:
- CSS Combinators https://www.w3schools.com/css/css_combinators.asp
- Javascript Truthy and Falsy values : https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy
- Difference between null and undefined in javascript : https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript

# Day 10 

## Understanding github
- How to write a better readme https://help.github.com/articles/basic-writing-and-formatting-syntax/
- Understanding what is inside .git folder https://medium.freecodecamp.org/how-not-to-be-afraid-of-git-anymore-fe1da7415286
- How git works under the hood? https://stackoverflow.com/questions/3689838/whats-the-difference-between-head-working-tree-and-index-in-git
- How to go back to older version of your file/project?(git checkout in detail)
https://github.com/francopestilli/life/wiki/Switch-to-a-previous-state-of-the-repository

- Different ways to go back to previous version of repository https://stackoverflow.com/questions/8358035/whats-the-difference-between-git-revert-checkout-and-reset

- How to automate code/app deployment whenever new commit is made to git repository? https://hackernoon.com/continuous-deployment-with-aws-codedeploy-github-d1eb97550b82

- When to use git bisect and how? https://stackoverflow.com/questions/4713088/how-to-use-git-bisect
- Understanding git merge(Join two or more development histories together) https://git-scm.com/docs/git-merge
- Fighting bad commits with git bisect https://www.complang.tuwien.ac.at/doc/git-doc/git-bisect-lk2009.html

# Day 11

## Custom Video Player
https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/Custom+Video+Player/index.html

- Issues faced while loading in browser via AWS S3 
  - video player was not working well because of Error 403(unable to load css,jsand video file as they were private)
  - Suggestions from where I got Idea to solve the issue https://airbrake.io/blog/http-errors/403-forbidden-error

- What is the purpose of name attribute in html? https://stackoverflow.com/questions/26061651/what-is-the-purpose-of-the-html-name-attribute
- Basics of working with Audio/Video https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs
- To access important properties of working with Audio/Video Tags in HTML https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
- How to access total video duration and time buffered by video? https://stackoverflow.com/questions/6380956/current-duration-time-of-html5-video
- Understanding flex-basis (in context of project: to work with progress bar) https://css-tricks.com/almanac/properties/f/flex-basis/
- How to access data-* attributes in javascript? https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
- Understanding Live streaming https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1
- Understanding HTML5 Audio/Video events https://code.tutsplus.com/tutorials/html5-audio-and-video-what-you-must-know--net-15545
- Understanding CSS positioning https://css-tricks.com/almanac/properties/p/position/

# Day 12

## Key Detection
```
We're given an HTML document with...basically nothing. There's a script tag in the document header that loads a JavaScript file from Cornify.com which will inject an image of a unicorn (🦄🦄🦄!) into the DOM and a p element on the bottom of the page if we call cornify_add(). The goal of this challenge is to generate new unicorns every time the user succesfully enters a letter of 'secret code' that we will decide on.
```
- Understanding document, screen and window in Javascript context https://stackoverflow.com/questions/9895202/what-is-the-difference-between-window-screen-and-document-in-javascript

# Day 13

## Slide in on scroll

https://s3.ap-south-1.amazonaws.com/type-ahead-searchbar/Slide+in+on+Scroll/index.html

- Understanding JS timing functions
   - understand (clear/set)Timeout functions and (clear/set)Interval fucntions https://www.w3schools.com/js/js_timing.asp
- Understanding debounce function 
   - https://davidwalsh.name/javascript-debounce-function
   - https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
   - https://css-tricks.com/debouncing-throttling-explained-examples/

- Determine_if_an_element_has_been_totally_scrolled   
   - https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Determine_if_an_element_has_been_totally_scrolled
   
- Basic Javascript functions https://davidwalsh.name/essential-javascript-functions
- call(),bind(),apply() functions 
   - https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
   - http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
   
# Day 14 

## JavaScript References VS Copying

Mostly a reading exercise to understand how **pass-by-value** and **pass-by-reference** works in javascript 
- https://github.com/nitishdayal/JavaScript30/tree/master/exercises/14%20-%20JavaScript%20References%20VS%20Copying

- https://docstore.mik.ua/orelly/webprog/jscript/ch11_02.htm

# Day 15

## LocalStorage

- Understanding Client-Side storage 
   - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage
   - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
