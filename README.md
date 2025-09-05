# B12-A5-Emergency-Hotline
 1. DOM selection methods
    * getElementById()
        * used to select only one element by id
        * return one value or null
        * fastest becouse it work for one unique id
    * getElementByClassName()
        * used to selects all elements with a given class
        * return html collection
        * need loop to access individual items
    * querySelector()
        * used to selects the first element that matches a CSS selector
        * return a single element
        * very flexible
    * querySelectorAll()
        * to select all element that matches a css selector
        * return static NodeList
2. How to create and insert a new element to DOM
   * step 1: create the element by createElement()
       * ex: const newElement = document.createElement("p");
   * step 2: add content/attributes by textContent/innerHTML/innerText/setAttribute()
       * ex: newElement.innerText = 'Programming Hero';
   * step 3: insert into DOM by appendChild, prepend, before, after, replaceWith
       * ex: document.body.appendChild(newElement);
3. Event bubbling
   * Event bubbling is a DOM event propagation mechanism where an event starts from the target element (the element that triggered the event) and then bubbles up through its ancestors (child ->parent ->grandparent -> ... ->document).
   * working process: Event triggers at the target.Than, event moves upward through ancestors until it reaches document. Unless stopped, all matching handlers will execute. We can stop it using event.stopPropagation();
4. Event Delegation
   * Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, you add a single event listener to their parent and use event bubbling to detect which child triggered the event. Useful for dynamic content, performance, and cleaner code.
5. preventDefault() vs stopPropagation()
   * preventDefault() ---> Don't do the browser's default behavior.
   * stopPropagation() ---> Don't let the event bubble up to parents.



   
       

