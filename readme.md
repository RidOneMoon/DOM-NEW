

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

=>getElementById           ---->  const historyList  = document.getElementById("historyList"); (return singlr elemet or null,it Targets=id)

=>getElementsByClassName   ---->  const heart        = document.getElementsByClassName("myClass");(Return HTML,Element with classes)
=>querySelector            ---->  const copy         = document.querySelector(".myClass");(return singlr elemet or null,css selector)



2. How do you **create and insert a new element into the DOM**?
=>let NewFood=document.createElement('li');
NewFood.textContent='Pasta';
let foodListParent=document.getElementById('foodlist');
foodListParent.appendChild('NewFood');

3. What is **Event Bubbling** and how does it work?
=>Event Bubbling like a tree,where hte DOM is a hierachical tree stractures and events bubble up from the parent node.


4. What is **Event Delegation** in JavaScript? Why is it useful?
=>Event Delegation mean where attach a single event listner to parent element instead of adding listner to each defferent child element.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
=> preventDefault() ---->Stops the browser's default behavior for that event;

=> stopPropagation()---->Stops the event from bubbling up the DOM tree to parent elements;
---
