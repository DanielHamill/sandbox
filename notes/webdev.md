# HTML #
## basic tags ##

<P>paragraph</p>
<strong>bold</strong>
<em>italics</em>
<small>small</small>
- headings
    - <h1>heading 1</h1>
    - <h2>heading 2</h2>
    - <h3>heading 3</h3>
    - ...
<ul>
    <li> ordred list </li>
    <li> ordred list </li>
</ul>
<ol>
    <li> ordred list </li>
    <li> ordred list </li>
</ol>
<div>div, divide area into sections</div>
<span>add css or javascript hook into text/html</span>
line<br>break
<hr> horizontal rule <hr>
images
<img src="jujube.jpg" width=300 alt="fat cat"> <br>
<a href="">anker</a>
<blockquote cite="">info here </blockquote>
<p style="color: orange">styled text!</p>
<input>input field

## example - web form ##

```hml
<label for="username"> like text but assocated with "username"
<input type="radio" name="gender"> radio buttons, grouped on "gender"
<select name="question" id="question"> 
    <option value="q1"> what blah blah </option>
</select> dropdown
<textarea name="bio" cols="30" rows="10"> text area
```

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Forms</title>
</head>
<body>
    <h1>HTML Forms</h1>

    <form>
        <input type="text">
    </form>
</body>
</html>
```

## css Basics ##

single rule/ruleset:
div - selector {
    color: red; - declarations
}


```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

```css
h1{
    color: orange
    background-color: slategray
}
p{
    color: slategray
    column-count: 3; /*split text into 3 columns*/
}
div{
    display: block; /* default, take up whole line*/
    margin: 1; /* space outside of element */
    padding: 1; /* space inside of element */
}
span{
    display: inline; /*default, take up only space it needs (within line) */
    disaply: inline-block; /*same as inline, but also has top and bottom margin*/
}
- margin will only be added to left and right on span
```

- selectors:
    - <p class="error success">
        - .error{}: select all "error" classes
        - p.error{}: select all p tag with error class
        - p.error.success{}: must have both error and success classes
    - ids:
        - #content{}: target content id
        - div#content{}: target content in divs
        - id can only be unique on each page
    - descendent selectors:
        - div p a{}: target a inside p inside div
        - div .error{}: target .error class inside a div
    - attribute selectors:
        - a[href]{}: all href inside an ankor tag
        - a[href="mylink"]{}: all href inside ankor with "mylink"
        - a[href*="li"]{} - "li" included in href value
        - a[href$=".com"]{} - ends with .com

- cascade
    - default:
        - <div> <p> hi </P> </div>
        - div{color:red;} ----- p also red
    - inherit
        ```
        div{
            margin: 40px;
        }
        p {
            border: inherit;
            margin: inherit;
        } --- look at parent of p tag for border/margin
        ```
    - overridding parents:
        - more specific selector used
            div p{} more specific than p{}
        - top to bottom, further down takes precedence 

## Semantics ##
semantic tags
- semantically sparate section of website
- by default divs don't know anything about their contents

```html
<body>

    <header>
        <h1>Marioclub</h1>
    </header>

    <section class="banner">
        <img serc="img/banner.png" alt="marioclub weclonme banner">
        <div class = "welcome">
            <h2>Welcome to <br><span>Marioclub</span></h2>
        </div>
    </section>

    <nav class="main-nav">
        <ul>
            <li><a href="/join.html" class="join">Join the club</a></li>
        </ul>
    </nav>

    <main>
        <article>
            <h2>it's a me, mario</h2>
        </article>
    </main>
</body>
```

## Chrome DevTool ##
- general
    - top right "arrow" button: hover over and inspect all elements on page
- inspect html
    - get specific selector for element: right click > copy > copy selector
    - add text on the fly: click in elements
    - hide element: right click > hide element
    - find specific element: right click (on actual page)> inspect
- styles
    - element.styles: play around with syles of specific element

## CSS position and layout ##

<style>
    body {
        margin: 0;
        height: 100vh;           /* full height viewport */
        display: flex;
        justify-content: center; /* center horizontally */
        align-items: center;      /* center vertically */
    }

    .square {
        width: 150px;
        height: 150px;
        background: red;
        position: relative;
    }
</style>

<div class="square"></div>

## CSS Layout and Position ##

- static
    - regular document flow
- relative
    - position relative to original position
    - shift pixels/percent left, right, etc.
- fixed
    - fixed position on screen
- absolute
    - fixed in relation to parent

https://www.youtube.com/watch?v=XQaHAAXIVg8&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&index=8