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

## css ##

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

https://www.youtube.com/watch?v=FHZn6706e3Q&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&index=5