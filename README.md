# range.js – JavaScript's missing range function

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