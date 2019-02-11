# Arrays

An array is a type of variable that can be used to group values. Arrays in javascript can include different types of values. Array values can include numbers, letters, words, boolean(true/false) etc.

```

var numbers = [1,2,3];

var letters = ["a","b","c"];

// To access array values you need to use indices start from 0

console.log(letters[0]); // Will print out "a"

console.log(letters.length); // Will print out 3


```

# For Loops

Are designed to run a

```
for(var i = 0; i < 10; i++){
  console.log(i); // prints 0 - 9
}
```
### var i = 0; (Initializor)

Initiates the beginning of the loop.

### i < 10; (Condition)

Sets the rule for when the loop should stop. In this example, the loop will execute 10 times. i will stop when the loop reaches 10, but will not execute the code with i = 10.

### i++ (Iterator)

Sets the rule for counting. I this case i will increase by 1 every loop.
