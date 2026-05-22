# JS-practices

A comprehensive JavaScript learning repository containing implementations of core JavaScript concepts, design patterns, and interview preparation materials.

## 
### Core Concepts & Polyfills
- **`call-apply-bind.js`** - Implementation and examples of JavaScript's `call()`, `apply()`, and `bind()` methods for context binding
- **`mybind.js`** - Custom implementation of the `bind()` method from scratch
- **`pollyfills.js`** - Polyfills for common JavaScript methods and features

### Functional Programming
- **`map-reduce-filter.js`** - Demonstrations of Array methods: `map()`, `reduce()`, and `filter()`
- **`debounce.js`** - Debouncing function implementation for optimizing event handlers
- **`throttle.js`** - Throttling function implementation for rate-limiting function calls

### Array Operations
- **`flattern-array.js`** - Recursive array flattening implementation
- **`findRemaningValue.js`** - Algorithm to find missing values in a sequence
- **`removeDups.js`** - Removing duplicate values from arrays
- **`reverse.js`** - Array reversal implementations

### Asynchronous Programming
- **`promise.js`** - Promise concepts and implementations
- **`index.js`** - Async/await patterns and promise handling
- **`setTimeOut.js`** - setTimeout demonstrations and async patterns

### Interview Preparation
- **`interview-prep.js`** - Strict mode, object methods, and context-related questions
- **`interview-pratice.js`** - Additional interview practice problems
- **`questions-asked.js`** - Common JavaScript interview questions and answers

### Projects & UI
- **`stopWatch.html`** & **`stopWatch.js`** - Stopwatch web application with HTML/JavaScript
- **`index.html`** - Main HTML file for demonstrations
- **`play.js`** - Playground/sandbox file for testing concepts

## 
 Function Context & Binding (call, apply, bind)  
 Array Methods & Transformations  
 Debouncing & Throttling  
 Asynchronous JavaScript (Promises, Async/Await)  
 Array Manipulation & Algorithms  
 Strict Mode  
 Object Methods & Prototypes  
 Interview Questions & Solutions  
 Practical Projects (Stopwatch)

## 
1. Clone the repository
```bash
git clone <repository-url>
cd JS-practices
```

2. Open individual files in your editor or browser:
   - For JavaScript files: Open with Node.js or in browser console
   - For HTML projects: Open `stopWatch.html` or `index.html` in a web browser

3. Run JavaScript files with Node.js:
```bash
node filename.js
```

## 
### Debouncing
```javascript
// Debounce a search function with 500ms delay
const debouncedSearch = debounce(searchFunction, 500);
```

### Array Flattening
```javascript
// Flatten nested arrays
const nested = [1, [2, [3, [4, 5]]]];
const flattened = flatten(nested); // [1, 2, 3, 4, 5]
```

### Bind Implementation
```javascript
// Using custom bind implementation
const boundFunction = obj.method.bind(obj);
```

## 
Recommended order for learning:
1. Start with **pollyfills.js** and **call-apply-bind.js** for context understanding
2. Move to **map-reduce-filter.js** for functional programming
3. Explore **promise.js** and **index.js** for async concepts
4. Practice with interview preparation files
5. Build projects like the stopwatch application

## 
- JavaScript (ES6+)
- HTML5
- Node.js (for running scripts)

## 
Feel free to add more JavaScript concepts, interview questions, or improvements to existing implementations.

## 
- Most files are self-contained and can be run independently
- Comments are included for explanation of complex concepts
- This repository is primarily for learning and interview preparation

---

**Last Updated:** 2026-05-22
