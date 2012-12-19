# JavaScript range implementation

The range function always returns an array.

If an AMD or CommonJS loader is present it will be used, otherwise `range` is assigned to `window.range`.

## Syntax

There are two different syntaxes, the plain one and the Ruby style one.

```js
// Plain syntax:
range(from, to, step);

// Ruby style syntax:
range('from..to', step);
```

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
range('
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
You can run the tests by visting *./spec/index.html* in your browser.