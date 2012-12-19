# range.js – JavaScript's missing range function [![Build Status](https://travis-ci.org/js-coder/range.js.png?branch=master)](https://travis-ci.org/js-coder/range.js)

Features:
- The browser and node are both supported.
- Simple: Always returns an array.
- Numeric and decimal ranges.
- Letter ranges.
- Plain syntax `range('a', 'z')` and Ruby-style `range('a..z')`.
- Reversed ranges.
- Ranges with steps.

## Usage

- **Node**: `$ npm install range.js`

  ```js
  var range = require('range.js');
  ```

- **Browser:** Grab lib/strukt.js and include it in your HTML document.

  If an AMD or CommonJS loader is present it will be used, otherwise `range` is assigned to `window.range`.

## Syntax

There are two different syntaxes, the plain one and the Ruby style one.

```js
// Plain syntax:
range(from, to, step);

// Ruby style syntax:
range('from..to', step);
```

For convience, the rest of this documentation will use the plain syntax.

## Numeric ranges

```javascript
range(1, 5); // [1, 2, 3, 4, 5]
range(-2, 2); // [-2, -1, 0, 1, 2]
range(0, 0.5, 0.1); // Approximately, JS floats are not exact: [0.1, 0.2, 0.3, 0.4, 0.5]
```

## Letter ranges

```js
range('a', 'd'); // ['a', 'b', 'c', 'd']
range('A', 'D'); // ['A', 'B', 'C', 'D']
range('y', 'B'); // ['y', 'z', 'A', 'B']
range('Y', 'b'); // ['Y', 'Z', 'a', 'b']
```

## Ranges with steps

```js
range(0, 9, 3); // [0, 3, 6, 9]
range('a', 'e', 2); // ['a', 'c', 'e']
```

## Reversed ranges
```js
range(5, 0); // [5, 4, 3, 2, 1, 0]
range('e', 'a'); ['e', 'd', 'c', 'b', 'a']
```

## Ruby style syntax

```js
range('1..5'); // range(1, 5)
range('a..z'); // range('a', 'z')

// Steps:
range('1..5', 2); // range(1, 5, 2)

// Exclusive ranges:
range('1...5'); // [1, 2, 3, 4]
```

- - -

## Test suite
The test suite uses the [mocha](http://visionmedia.github.com/mocha) testing framework and the [chai](http://chaijs.com) assertion library.

Running the tests from the command line:

```sh
$ git clone git://github.com/js-coder/struct.js.git && cd struct.js
$ npm install
$ grunt test
```

Clone this repository, then visit *./spec/index.html* in your browser.