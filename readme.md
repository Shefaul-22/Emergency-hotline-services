1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

    Ans: getElementById() returns a single element with the given id.Id must be unique. getElementsByClassName() returns a live collection of elements whose have same class , while querySelector() returns the first match and querySelectorAll() returns all matches.


2. How do you create and insert a new element into the DOM?

    Ans: Create a new element using document.createElement() and then add it to the page with methods like appendChild() or append().


3. What is Event Bubbling and how does it work?

    Ans: When an event happens on a child element, it moves up and also triggers on its parent elements.



4. What is Event Delegation in JavaScript? Why is it useful?

    Ans: Event delegation is adding a single event listener to a parent element to manage events on its children. It is useful because it saves performance and works for dynamically added elements.


5. What is the difference between preventDefault() and stopPropagation()?

    Ans: preventDefault() stops the browser default action, while stopPropagation() stops the event from bubbling up the DOM tree.