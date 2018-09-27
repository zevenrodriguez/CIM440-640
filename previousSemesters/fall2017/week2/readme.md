# Week 2

## HTML Basics

HTML is a structured markup language. Tags have a parent-child relationship which determines styling and postion the page.

![Basic html tag](https://citsf221.community.uaf.edu/files/2009/08/taganatomy.png)

https://citsf221.community.uaf.edu/files/2009/08/taganatomy.png

``` <!DOCTYPE HTML>

The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag.

Instruction to the web browser about what version of HTML the page is written in

HTML5 there is only one <!DOCTYPE html>

HTML4 - has multiple types.

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<html></html>

The <html> tag tells the browser that this is an HTML document.

These are the opening tags for your webpage

All markup should be placed inside of these tags


<head><head>

The <head> element can include tags for css, javascript, keywords, here are some: <title>,<style>, <base>, <link>, <meta>, <script>, <noscript> 

The elements placed in the head tag are meant for browsers to preprocess before loading the rest of the document


<body></body>

The <body> tag defines the document's body.

The <body> element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.

```

#### Basic HTML Structure

[Basic HTML Structure](https://github.com/zevenrodriguez/CIM540-640/blob/master/week2/examples/gettingStartedHTML.html)

```
<!DOCTYPE html>

<html>

    <head>
        <title>My super awesome website!!!</title>
    </head>

    <body>
        <h1>Hello World!!!!</h1>
        <p>This is a paragraph.</p>

    </body>


</html>


```

#### Basic Tag Example

[Basic Tag Example](https://github.com/zevenrodriguez/CIM540-640/blob/master/week2/examples/basicTags.html)

For more examples and tutorials visit: https://www.w3schools.com/

## Videos

#### Basic HTML syntax

https://www.lynda.com/Web-Development-tutorials/Basic-HTML-syntax/170427/196130-4.html?org=miami.edu

#### Exploring an HTML Document

https://www.lynda.com/Web-Development-tutorials/Exploring-HTML-document/170427/196135-4.html?org=miami.edu

#### HTML and CSS

https://www.lynda.com/Web-Development-tutorials/HTML-CSS/170427/196178-4.html?org=miami.edu

## Intro to javascript

### Structure

#### What is a variable?

A variable is the smallest unit in a programming language. Variables are used as human readable references to numbers, characters, words, sentences, true, and false. 

``` var num = 100; ```

### [Variable Example](https://github.com/zevenrodriguez/CIM540-640/blob/master/week2/examples/variables.html)


#### Printing/Debugging

To find out what your variables are doing throughout your code use:

console.log(VARIABLE);

#### COMMENTS

A comment is a method of documenting your code. This is always useful not only for you, but for others who want to learn your thought process. Comments can also be useful as a debugging tool to take out or test snippets of code without having to make making big changes.

```
//This is a single line comment

/*
This 
is
a
multi-line
Comment
*/
```


#### Using variables and scope

Variables can be declared throughout your program.

Declaring a variable means saying:

```var num = 100; ```

When declaring a variable location of where the variable is declared is important. If a variable is declared with in a function, that variables scope is only available in that function. Meaning you can only use that variable in that function.


# [Simple Javascript Setup](https://github.com/zevenrodriguez/CIM540-640/blob/master/week2/examples/simpleSetup.html)


#### What is a function?

A function is a way to group a set of instructions so you can use it throughout your program. Functions can take parameters which are options to make your code more modular.

##### [Function Example](https://github.com/zevenrodriguez/CIM540-640/blob/master/week2/examples/functions.html)


#### What is a library?

A library is a collection of variables, functions, and objects that work together. Libraries can be composed of one or more files.



# Homework

#### [Basic Forms Video](https://vimeo.com/231612984)

#### [Form Example](https://github.com/zevenrodriguez/CIM540-640/blob/master/week3/examples/form.html)

Create use a function to calculate a formula:

1.	Puppy age Calculator
2.	Lifetime Supply Calculator
3.	Calculate geometry
4.	Temp Converter



