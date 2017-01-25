#### General Questions:

## What did you learn yesterday/this week?
## What excites or interests you about coding?
## What is a recent technical challenge you experienced and how did you solve it?
## What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
## Talk about your preferred development environment.
## Which version control systems are you familiar with?
## Can you describe your workflow when you create a web page?
## If you have 5 different stylesheets, how would you best integrate them into the site?

## Can you describe the difference between progressive enhancement and graceful degradation?

## How would you optimize a website's assets/resources?

## How many resources will a browser download from a given domain at a time?
### What are the exceptions?
[source](http://stackoverflow.com/questions/7456325/get-number-of-concurrent-requests-by-browser)
IE7 allowed only two concurrent connections per host. But most browsers today allow more than that. IE8 allows 6 concurrent connections, Chrome allows 6, and Firefox allows 8.

So if your web page only has 6 images, for example, then it'd really be pointless to spread your images across multiple subdomains.

## Name 3 ways to decrease page load (perceived or actual load time).

## If you jumped on a project and they used tabs and you used spaces, what would you do?

## Describe how you would create a simple slideshow page.

## If you could master one technology this year, what would it be?

## Explain the importance of standards and standards bodies.

## What is Flash of Unstyled Content? How do you avoid FOUC?

## Explain what ARIA and screenreaders are, and how to make a website accessible.
**Accessible Rich Internet Applications (ARIA)** defines ways to make Web content and Web applications (especially those developed with Ajax and JavaScript) more accessible to people with disabilities. For example, ARIA enables accessible navigation landmarks, JavaScript widgets, form hints and error messages, live content updates, and more.

Attributes:

* State changes: aria-checked, aria-disabled, aria-grabbed
* Visibility changes: aria-hidden
* Rola changes: role
* Asynchronous content changes

## Explain some of the pros and cons for CSS animations versus JavaScript animations.
* Use CSS animations for simpler "one-shot" transitions, like toggling UI element states.
* Use JavaScript animations when you want to have advanced effects like bouncing, stop, pause, rewind, or slow down.
* If you choose to animate with JavaScript, use the Web Animations API or a modern framework that you're comfortable with.
[source](https://developers.google.com/web/fundamentals/design-and-ui/animations/css-vs-javascript)

## What does CORS stand for and what issue does it address?
Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts, images) on a web page to be requested from another domain outside the domain from which the resource originated.
For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts.
[resource](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)


# HTML Questions:

## What does a `doctype` do?

The DOCTYPE Declaration (DTD or Document Type Declaration) does a couple of things:

* When performing HTML validation testing on a web page it tells the HTML (HyperText Markup Language) validator which version of (X)HTML standard the web page coding is supposed to comply with. When you validate your web page the HTML validator checks the coding against the applicable standard then reports which portions of the coding do not pass HTML validation (are not compliant).

* It tells the browser how to render the page in standards compliant mode.


## What's the difference between full standards mode, almost standards mode and quirks mode?

full standards mode - `<!DOCTYPE html>`
Anything before the DOCTYPE, like a comment or an XML declaration will trigger quirks mode in Internet Explorer 9 and older.

**Standards Mode**
In the Standards mode the browsers try to give documents the specification-wise correct treatment to the extent implemented in a particular browser.
Since different browsers are at different stages of compliance, the Standards mode isn’t a single target, either.
The HTML specification calls this mode the “no quirks mode”.

**Quirks Mode**
It was introduces in order to violate contemporary Web format specifications in order to avoid “breaking” pages authored according to practices that were prevalent in the late 1990s. Previously, different browsers implemented different quirks. Recently, browsers have been converging on common behavior in their Quirks modes. But you should avoid it.

**Almost Standards Mode**
Firefox, Safari, Chrome, Opera (since 7.5), IE8, IE9 and IE10 also have a mode known as “the Almost Standards mode”, which implements the vertical sizing of table cells traditionally and not according to the CSS2 specification.

[source](https://hsivonen.fi/doctype/)


## What's the difference between HTML and XHTML?

**HTML** or HyperText Markup Language is the main markup language for creating web pages and other information that can be displayed in a web browser.
Application of Standard Generalized Markup Language (SGML).
HTML is the predominant mark up language for web pages. HTML creates structured documents by denoting structural semantics for text like headings, lists, links, quotes etc. It allows images and objects to be embedded to create interactive forms. It is written as tags surrounded by angle brackets - for example, `<html>`. Scripts in languages like JavaScript can also be loaded.

**XHTML** (Extensible HyperText Markup Language) is a family of XML markup languages that mirror or extend versions of the widely used Hypertext Markup Language (HTML), the language in which web pages are written.
Application of XML
XHTML is a family of XML languages which extend or mirror versions of HTML. It does not allow omission of any tags or use of attribute minimization. XHTML requires that there be an end tag to every start tag and all nested tags must be closed in the right order. For example, while `<br>` is valid in HTML, it would be required to write `<br />` in XHTML.

[source](http://www.diffen.com/difference/HTML_vs_XHTML)


## Are there any problems with serving pages as `application/xhtml+xml`?

* XHTML does not have good browser support. So problems can arise from places like internet explorer, safari etc.
* HTML5 has more descriptive semantics.
* XHTML is not extensible if you hope to support Internet Explorer or the number of other user agents that can’t parse XHTML as XML. They will handle the document as HTML and you will have no extensibility benefit.
* The new version of HTML has features like offline storage or the ability to handle data even when the app is no longer connected to the internet


## How do you serve a page with content in multiple languages?

Always use a language attribute on the html element `<html lang="en">`. This is inherited by all other elements, and so will set a default language for the text in the document head element. 
If you have any content on the page that is in a different language from that declared in the html element, use language attributes on elements surrounding that content. This allows you to style or process it differently.


## What kind of things must you be wary of when design or developing for multilingual sites?
[source](http://stackoverflow.com/questions/3876213/design-patterns-for-multiple-language-website)


## What are `data-` attributes good for?

`data-*` attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, extra properties on DOM, or `Node.setUserData()`.


## Consider HTML5 as an open web platform. What are the building blocks of HTML5?

* **new semantic elements:**
    - article, aside, details, figcaption, figure, footer, header, main, mark, nav, section, summary, time
* **more semantic text markup:**
    - del, s, ins, strong, small, b, cite, i, q, em, code, mark)
* **new form elements:**
    - datalist, keygen, output
* **video and audio**
* **canvas and SVG**
    - canvas is used to draw graphics, on the fly, via JavaScript
    - Scalable Vector Graphics
* **new javascript API**
* **new communication API**
    - A server-sent event is when a web page automatically gets updates from a server.
    - This was also possible before, but the web page would have to ask if any updates were available. With server-sent events, the updates come automatically.
    - Examples: Facebook/Twitter updates, stock price updates, news feeds, sport results, etc.
* **geolocation API**
    - used to get the geographical position of a user
* **web worker API**
    - When executing scripts in an HTML page, the page becomes unresponsive until the script is finished. A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.
* **new data storage**
    - local storage
        + With local storage, web applications can store data locally within the user's browser.
        + Before HTML5, application data had to be stored in cookies, included in every server request. Local storage is more secure, and large amounts of data can be stored locally, without affecting website performance.
        + Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
        + Local storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.
    - cache
        + HTML5 introduces application cache, which means that a web application is cached, and accessible without an internet connection.
        + Application cache gives an application three advantages:
            * Offline browsing - users can use the application when they're offline
            * Speed - cached resources load faster
            * Reduced server load - the browser will only download updated/changed resources from the server


## Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
**localStorage** and **sessionStorage** are both so-called **WebStorages** and features of HTML5.
**localStorage** stores information as long as the user does not delete them.
**sessionStorage** stores information as long as the session goes. Usually until the user closes the tab/browser.
**cookies** are simply cookies, which are supported by older browsers and usually are a fallback for frameworks that use the above mentioned WebStorages.
In contrast cookies can store way less information then WebStorages and the information in WebStorages is never transferred to the server.

## Describe the difference between `<script>`, `<script async>` and `<script defer>`.
* Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag.
* With **async** (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.
* With **defer**, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.)

## Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
because of the way DOM loads on the page (top to bottom)
put script also in head but add defer

## What is progressive rendering?
Progressive rendering is the name given to techniques used to render content for display as quickly as possible.
It used to be much more prevalent in the days before broadband internet but it's still useful in modern development as mobile data connections are becoming increasingly popular (and unreliable!)

Examples of such techniques :
**Lazy loading** of images where (typically) some javascript will load an image when it comes into the browsers viewport instead of loading all images at page load.
**Prioritizing visible content** (or above the fold rendering) where you include only the minimum css/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred javascript (domready/load) to load in other resources and content.


## Have you used different HTML templating languages before?
Mustache, Handlebars, Underscore


# CSS Questions:

## What is the difference between classes and IDs in CSS?

Unlike the id selector, the class selector is most often used on several elements. This allows you to set a particular style for many HTML elements with the same class. The class selector uses the HTML class attribute, and is defined with a "." A simple way to look at it is that an id is unique to only one element.

## What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

Reset.css will remove all the default styling applied by the browser to give you a blank canvas where as normalize is a base stylesheet meaning its the starting point for your website styles and it styles the default elements to be consistent across the browsers.

## Describe Floats and how they work.
The purpose of the CSS float property is to push a block-level element to the left or right, taking it out of the flow in relation to other block elements. This allows naturally-flowing content to wrap around the floated element. 
    - A left-floated box will shift to the left until its leftmost margin edge (or border edge if margins are absent) touches either the edge of the containing block, or the edge of another floated box
    - If the size of the floated box exceeds the available horizontal space, the floated box will be shifted down
    - Non-positioned, non-floated, block-level elements act as if the floated element is not there, since the floated element is out of flow in relation to other block elements
    - Margins of floated boxes do not collapse with margins of adjacent boxes
    - The root element (<html>) cannot be floated
    - An inline element that is floated is converted to a block-level element
Layout issues with floats are commonly fixed using the CSS `clear` property, which lets you “clear” floated elements from the left or right side, or both sides, of an element.
[source](https://www.smashingmagazine.com/2009/10/the-mystery-of-css-float-property/)


## Describe z-index and how stacking context is formed.
The z-index property specifies the stack order of an element.
An element with greater stack order is always in front of an element with a lower stack order.
Note: z-index only works on positioned elements (position:absolute, position:relative, or position:fixed).


## Describe BFC(Block Formatting Context) and how it works.

Boxes in the normal flow belong to a formatting context, which may be block or inline, but not both simultaneously. Block-level boxes participate in a block formatting context. Inline-level boxes participate in an inline formatting context.
**BFC** = Block-level elements (p, h1-h6, ul, ol,) + Block-level boxes (Floats, absolutely positioned elements, block containers, such as inline-blocks, table-cells, and table-captions)
**how it works on the page** 
In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.
In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch). This is true even in the presence of floats (although a box's line boxes may shrink due to the floats), unless the box establishes a new block formatting context (in which case the box itself may become narrower due to the floats).

[source](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
[source](https://www.w3.org/TR/CSS21/visuren.html#block-formatting)

Inline elements: img

## What are the various clearing techniques and which is appropriate for what context?
* element with `clear: both;` after blocks of floated elements
* give `overflow: hidden or auto;` to the container (clip elements)
* with a `.clearfix` class which has pseudo elements `::after` and `::before`
```css
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```
* the future `contain-floats` value (not all support)
.container {
  min-height: contain-floats;
}

## Explain CSS sprites, and how you would implement them on a page or site.
Image sprites are used in numerous web apps where multiple images are used. Rather than include each image as a separate image file, it is much more memory and bandwidth-friendly to send them as a single image, so the number of HTTP requests is reduced.
use will need to manipulate with `background-position`
Compass's sprite tools help creating and maintaining sprite sheets automatically

## What are your favourite image replacement techniques and which do you use when?
at Xing `font-size:0`
[Different techniques of the past](https://www.sitepoint.com/css-image-replacement-text-indent-negative-margins-and-more/)

## How would you approach fixing browser-specific styling issues?
* Using cross-browser CSS coding. 
* Use MS conditional tags with separated styles for old IE
* http://caniuse.com/

## How do you serve your pages for feature-constrained browsers?
### What techniques/processes do you use?
* if it is browsing support - previous question
* if not - ?


## What are the different ways to visually hide content (and make it available only for screen readers)?
Absolutely positioning content off-screen
Using CSS to move hidden elements to a position off-screen is generally accepted as the most useful and accessible method of hiding content visually.

## Have you ever used a grid system, and if so, what do you prefer?
I use bootstrap. 
I tried susy in one of the projects.
Think better not to use grid systems on the webside, because for responsive styles for mobile versions your styling will be in html - separation is better.

## Have you used or implemented media queries or mobile specific layouts/CSS?
yes 
mobile-first 

## Are you familiar with styling SVG?
I use SVG in icon fonts, where you can manupulate appearence with your css. 

## How do you optimize your webpages for print?
...

## What are some of the "gotchas" for writing efficient CSS?
sorting properties in alphabetical order
classes for styling, ids for js

## What are the advantages/disadvantages of using CSS preprocessors?
### Describe what you like and dislike about the CSS preprocessors you have used.
* Nested syntax.
* Ability to define variables.
* Ability to define mixins.
* Mathematical functions.
* Operational functions (such as “lighten” and “darken”)
* Joining of multiple files.
Scss, Sass, Less

## How would you implement a web design comp that uses non-standard fonts?
Google Font - use a link tag
online font-face generator - separate css file

## Explain how a browser determines what elements match a CSS selector.
elements and pseudo-elements, classes and pseudo-classes, ids, inline styles, !important

## Describe pseudo-elements and discuss what they are used for.
Just like pseudo-classes, pseudo-elements are added to selectors but instead of describing a special state, they allow you to style certain parts of a element.

::after
::before
::first-letter
::first-line
::selection
::backdrop
::placeholder 
::marker 
::spelling-error 
::grammar-error 

## Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
CSS Box Model is a CSS module that defines the rectangular boxes, including their padding and margin, that are generated for elements and laid out according to the visual formatting model.
In CSS, each of these rectangular boxes is described using the standard box model. This model describes the content of the space taken by an element. Each box has four edges: the margin edge, border edge, padding edge, and content edge.
`box-sizing: content-box / border-box (without margin) / padding-box (content+padding, not used)`
border-box - in quirks mode in IE


## What does ```* { box-sizing: border-box; }``` do? What are its advantages?
The width and height properties include the content, the padding and border, but not the margin. 
You can play with the paddings and border values without worrying about expanding your box. Very convenient for column layouts. And you can mix percentage and pixel values, so you don’t have to rely on a child element for the padding.

## List as many values for the display property that you can remember.
block and inline
none, inline-block, list-item, table, table-row, table-cell, list-item, flex, grid,

## What's the difference between inline and inline-block?
**inline-block** The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would)

## What's the difference between a relative, fixed, absolute and statically positioned element?
**static** - default, element in flow
**relative** - once the positioned element has taken its place in the normal layout flow, you can then modify its final position, including making it overlap other elements on the page
**absolute** - out of flow, dependent on the first parent relative
**fixed** - relative to the browser viewport 

## The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?
from top to bottom, overwriting the previous styles if were.
the weight of selectors

## What existing CSS frameworks have you used locally, or in production? How would you change/improve them?


## Have you played around with the new CSS Flexbox or Grid specs?
## How is responsive design different from adaptive design?
## Have you ever worked with retina graphics? If so, when and what techniques did you use?
## Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?



# JS Questions:

## Explain event delegation

```html
<ul onclick="alert(event.type + '!')">
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
```
...clicking on li here will aslo execute alert.

Event bubbling provides the foundation for event delegation in browsers. Now you can bind an event handler to a single parent element, and that handler will get executed whenever the event occurs on any of its child nodes (and any of their children in turn). This is event delegation. 

DOM event delegation is a mechanism of responding to ui-events via a single common parent rather than each child, through the magic of event "bubbling" (aka event propagation).


## Explain how `this` works in JavaScript
[source](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Operators/this)

**Global context**
outside of any function this refers to global object - window

**Function context**
1. **Simple call**
*not in stict mode* in default state refers to global object window
*in strict mode* if this was not defined by the execution context, it remains `underfined`

```javascript
function f2(){
  "use strict"; // see strict mode
  return this;
}
f2() === undefined;
```
2. **in call and apply**
if we want to pass this throug the contexts we can use `apply` and `call` methods

```javascript
function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```
3. **bind method**

4. **in arrow functions**

5. **as an object method**
When a function is called as a method of an object, its this is set to the object the method is called on.

```javascript
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37
```

6. **as a construction**
When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.

7. **as a DOM event handler**
When a function is used as an event handler, its this is set to the element the event fired from (some browsers do not follow this convention for listeners added dynamically with methods other than addEventListener).

8. **as an in-line event hamdler in DOM**
`<button onclick="alert((function(){return this})());">...`


## Explain how prototypal inheritance works
[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
th einheritance works throug prototype. Everything is Object at the end (Function.prototype ---> Object.prototype ---> null) and at the end it is null.
we can create a new object using 
* construction with `new`: `var g = new Graph();`
* Object.create(): `var b = Object.create(a);`
* usying `class` from ES6

he native prototypes should never be extended

## What do you think of AMD vs CommonJS?
[source](http://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs)
**CommonJS** and **AMD** are JavaScript module definition APIs that have different implementations, but both come from the same origins.

**AMD** (Asynchronous Module Definition) is more suited for the browser, because it supports asynchronous loading of module dependencies.
RequireJS is an implementation of AMD, while at the same time trying to keep the spirit of CommonJS (mainly in the module identifiers).

**CommonJS** is a way of defining modules with the help of an `exports` object, that defines the module contents.
CommonJS specifies that you need to have a `require()` function to fetch dependencies, an `exports` variable to export module contents and a module identifier (which describes the location of the module in question in relation to this module) that is used to require the dependencies(source). CommonJS has various implementations, including Node.js.

RequireJS implements **AMD**, which is designed to suit the browser environment(source). Apparently, AMD started as an spinoff of the CommonJS Transport format and evolved into its own module definition API. Hence the similarities between the two. The new feature in AMD is the define() -function that allows the module to declare its dependencies before being loaded. 

## Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
### What needs to be changed to properly make it an IIFE?
It’s an Immediately-Invoked Function Expression
`(function foo(){ })();`

The first pair of parentheses `(function(){...})` turns the code within (in this case, a function) into an expression, and the second pair of parentheses `(function(){...})()` calls the function that results from that evaluated expression.
This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.

## What's the difference between a variable that is: `null`, `undefined` or undeclared?
### How would you go about checking for any of these states?

`null`, `undefined` - undefined values, not much difference in them

`undefined` means a variable has been declared but has not yet been assigned a value
`null` is an assignment value. It can be assigned to a variable as a representation of no value
`undeclared` the variable has not been declared, throws an error

## What is a closure, and how/why would you use one?
Being able to reference a specific instance of local variables in an enclosing function — is called closure. 

```javascript
function wrapValue() {
    var myVar = 5
    return function() { return myVar }
}

or:

function wrapValue(n) {
    return function() { return n; };
}

var returnedFun = wrapValue(43)   // () => 43
var returnedFun = wrapValue(43)() // 43
```

## What's a typical use case for anonymous functions?
when you pass function as argument (first-level citizens or higher order function), for example: each, reduce, map


## How do you organize your code? (module pattern, classical inheritance?)
## What's the difference between host objects and native objects?
...


## Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`? (p.110)

it is a constructor for Person (with capital letter - convention)

```javascript
function Person(type) {
    this.type = type;
}
```

`var person = Person()`
underfined, because this function returns nothing

`var person = new Person()`
calling a function with the `new` keyword in front of it causes it to be treated as a constructor. The constructor will have its `this` variable bound to a fresh object, and unless it explicitly returns another object value, this new object will be returned from the call.
**person** is instance of its constructor.

##What's the difference between `.call` and `.apply`? (p 107)
you have an Object: 
var whiteRabbit = { type: white, speak: speaking }

you have a function:
function speaking(line) {
    console.log("Rabbit says:" + line + " and I am " + this.type)
}

this Object has methods:
whiteRabit.speak("Hello guys!")

**apply** - call a function for which object he is method
speaking.apply(whiteRabbit, ["Hello girls!"]);

**call**
speaking.call({type: "white"}, "Hello kids!");

## Explain `Function.prototype.bind`.
The bind method, which all functions have, creates a new function that will call the original function but with some of the arguments already  xed.

ECMAScript 5 introduced Function.prototype.bind. Calling `f.bind(someObject)` creates a new function with the same body and scope as f, but where `this` occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.

```javascript
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty
```

##When would you use `document.write()`?

A script loaded with `document.write` will work asynchronously. That's why you see this on ads or analytics, as such scripts don't influence the page content directly.

```html
<script language="javascript" type="text/javascript">
    document.write("<script type='text/javascript' src='http://addomain/someadd.js'><\/sc" + "ript>");
</script>
```

##What's the difference between feature detection, feature inference, and using the UA string?
**Feature detection** checks a feature for existence, e.g.:

```javascript
if (window.XMLHttpRequest) {
    new XMLHttpRequest();
}
or if('localStorage' in window)...
```

**Feature inference** checks for a feature just like feature detection, but uses another function because it assumes it will also exist, e.g.:

```javascript
if (document.getElementsByTagName) {
    element = document.getElementById(id);
}
```

Checking the **UA (User Agent)** string is an old practice and should not be used anymore. You keep changing the UA checks and never benefit from newly implemented features, e.g.:

```javascript
if (navigator.userAgent.indexOf("MSIE 7") > -1){
    //do something
}
```

## Explain Ajax in as much detail as possible.
...

## What are the advantages and disadvantages of using Ajax?
...

## Explain how JSONP works (and how it's not really Ajax).
JSONP (as in "JSON with Padding") is a method commonly used to bypass the cross-domain policies in web browsers (you are not allowed to make AJAX requests to a webpage perceived to be on a different server by the browser).

JSON and JSONP behave differently on both the client and the server. JSONP requests are not dispatched using the XMLHTTPRequest (and the associated browser methods), instead a `<script>` tag is created, whose source is set to the target URL. This script tag is then added to the DOM (normally the `<head>`).


## Have you ever used JavaScript templating?
### If so, what libraries have you used?
...

## Explain "hoisting".
Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.
And in ECMAScript 5 `strict mode`, assigning to an undeclared variable throws an error.


## Describe event bubbling.
Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

In the bubbling model, the opposite will happen: the event will be first handled by the li, then by the ul, and at last by the div element.

## What's the difference between an "attribute" and a "property"?
Attributes are defined by HTML. Properties are defined by DOM.
Some HTML attributes have 1:1 mapping onto properties. id is one example of such.
Some do not (e.g. the value attribute specifies the initial value of an input, but the value property specifies the current value).


## Why is extending built-in JavaScript objects not a good idea?
...

## Difference between document load event and document DOMContentLoaded event?
The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. 

## What is the difference between `==` and `===`?

## Explain the same-origin policy with regards to JavaScript.
we can exchange ajax requests only to the server with the same domain, due to security reasons, to prevent cross-site-scripting attacks. (CHECK)
<!-- Some Browsers prevent such request -->

## Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
## Why is it called a Ternary expression, what does the word "Ternary" indicate?
? :
unary: !x
binary: a || b
ternary: a ? b : c

## What is `"use strict";`? what are the advantages and disadvantages to using it?

## Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`

## Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

## Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

## Explain what a single page app is and how to make one SEO-friendly.

## What is the extent of your experience with Promises and/or their polyfills?
...

## What are the pros and cons of using Promises instead of callbacks?

## What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

## What tools and techniques do you use debugging JavaScript code?

## What language constructions do you use for iterating over object properties and array items?

## Explain the difference between mutable and immutable objects.
### What is an example of an immutable object in JavaScript?
### What are the pros and cons of immutability?
### How can you achieve immutability in your own code? 
use higher-order functions

**mutable**
a = 0
ar = [1,2,3,4,5]
for (i=0; i<4; i++) {
    if (ar[i] > 1) {
        a += 1
    }
}
* much state (i, a)

**immutable**
ar = [1,2,3,4,5]
a = ar.count(function(q) {q > 1})

* no state

## Explain the difference between synchronous and asynchronous functions.
...

## What is event loop?
### What is the difference between call stack and task queue?
...

## Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`


# Testing Questions:
* What are some advantages/disadvantages to testing your code?
* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?

# Performance Questions:
* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.

# Network Questions:
* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* What are HTTP methods? List all HTTP methods that you know, and explain them.


# Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```
