# range.js – JavaScript's missing range function [![Build Status](https://travis-ci.org/florian/range.js.png?branch=master)](https://travis-ci.org/florian/range.js) [![CDNJS](https://img.shields.io/cdnjs/v/range.js.svg)](https://cdnjs.com/libraries/range.js)

Features:

- The browser and node are both supported.
- Simple: Always returns an array.
- Numeric and decimal ranges.
- Letter ranges.
- Plain syntax `range('a', 'z')` and Ruby-style `range('a..z')`.
- Reversed ranges.
- Ranges with steps.

## Usage

### Node

```sh
$ npm install range.js
```

```js
var range = require('range.js');
```

### Browser

Grab [lib/range.js](https://github.com/js-coder/range.js/blob/master/lib/range.js) and include it in your HTML document. If an AMD or CommonJS loader is present it will be used, otherwise `range` is assigned to `window.range`.

- - -

In case you are using [component](https://github.com/component/component) (you should, it's awesome!):

```sh
$ component install js-coder/range.js
```

```js
var range = require('range.js');
```

- - -


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

## `range.equals(rangeA, rangeB)`

Compares ranges by value.

```js
var a = range(1, 5);
var b = range(1, 5);
var c = range('a..z');

range.equals(a, b); // true
range.equals(a, c); // false
```

## `range.overlaps(rangeA, rangeB)`

```js
range.overlaps(range('a..z'), range('e..f')); // true
range.overlaps(range(1, 10), range(1, 9)); // true
range.overlaps(range(1, 5), range(6, 10)); // false
```

- - -

## Test suite
The test suite uses the [mocha](http://mochajs.org/) testing framework and the [chai](http://chaijs.com) assertion library.

Running the tests from the command line:

```sh
$ git clone git://github.com/js-coder/range.js.git && cd range.js
$ npm install
$ grunt test
```

To run the tests in your browser, Clone this repository, and visit *./spec/index.html*.


- - -

## Todo

- [ ] Add benchmarks
