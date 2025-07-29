# Notes

## Accessibility

- only use 1 h1 per page
- use alt for images or blank alt for non important images
- labels and placeholders in forms
- use non-ambiguous link text
- use rem for font-size
- use semantic tags like `main` where appropriate
- skip navigation using a "hidden" element
	- hide using positioning or opacity
	- `display: none` and `visibility: hidden` remove the content from accessibility tree
- aria attributes can add context or roles when elements dont implicitly have it. try not to use aria - use semantic html instead

## Javascript

- html attributes with dashes convert to camelcase in javascript
- access data attributes with the `.dataset` property, which returns a DOMStringMap
- arrays can have empty slots, which are sometimes treated differently than undefined slots
- generator functions are like `function* generator()` and `yield` results, use them like `let something = generator(); something.next().value`
- `array.fill` only changes values, does not populate
- `event.target` is the triggering element, event.currentTarget is the handling element
- object property access can be dot notation or bracket notation. dot notation preferred, brackets can be used if accessing a variable object property
- use `array.map()` when you need the new array, `.foreach()` otherwise
- constructor invocation must have capital first letter and parentheses
- arrow functions handle `this` differently than regular function or anonymous functions
- constructor functions are hoisted; class definitions are not
- destructuring props like `const {name, email} = person` where person is an object with name and email (and potentially more) props
- you can rename props when destructuring like `const {name: realName, email} = person` where `person.name` exists and we want `realName` as the variable name

document.getElementById(..)
element.addEventListener(event, func)
localStorage.setItem(key, val)
	strings only, use JSON.stringify and JSON.parse
localStorage.getItem(key)

## UUID (or guid)

- 36 characters, globally unique
- version 4 uuid most common
- uuid JS available in cdn

## React

### JSX

- used to use createElement
```
import { createElement } from "react"
const reactElement = createElement("h1", null, "Hello from createElement!")
```
- this was clunky so `.jsx` was invented to be able to write HTML directly into javscript
