
## id vs class

In html you can add attributes like id's or class's to name or add characteristics to a tag. In javascript you can search your document to find an id or a class. 

id - for use on only one tag.

``` <p id="info">Info here</p> ```

When searching for id, javascript should return only the tag where that id was found.

class - for use on multiple tags

```
<ol>
<li class="desert">Chocolate</li>
<li class="desert">Ice Cream</li>
<li class="desert">Pie</li>
</ol>

```

When searching for a class javascript will return all of the tags sharing the class name


## Grabbing Elements from a HTML Document

document.getElementById("amount")

This grabs an id and returns the tag object

``` var amount = document.getElementById("amount"); ```

By attaching it to a variable you can get access object variables like:

* .value
 * This grabs the value of a form input
 ``` 
var amount = document.getElementById("amount").value;
```
 
* .innerHTML
 * This can return or set the html text of a given tag


``` 
var outputText = document.getElementById("output");
outputText.innerHTML = "The amount= 100";

```

[General Javascript reference](https://www.w3schools.com/jsref/default.asp)

[Accessing DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)


[Attaching Events to tags](https://www.w3schools.com/jsref/dom_obj_event.asp)


Types of Conditionals

Conditionals are statements that allow you to compare 2 variables or values. If the statement is true it evaluates the block of code.


This example reads if 10 is greater than 5, console.log("hello")
```
if(10 > 5){
    console.log("hello")
}
```
```
> Greater then

< Less then

>= Greater or Equal then

<= Less or Equal then

! not Equal

&& And

|| Or

```
# HW [Click here]()
