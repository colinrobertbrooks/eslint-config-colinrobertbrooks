# eslint-config-colinrobertbrooks

ESLint rules for my personal projects using [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as a base and exposing some additional extensions.

[![npm version](https://img.shields.io/npm/v/eslint-config-colinrobertbrooks.svg)](https://www.npmjs.com/package/eslint-config-colinrobertbrooks)

## Usage

Install packages:

```
npm install --save-dev eslint eslint-config-colinrobertbrooks
```

Add "extends": "colinrobertbrooks" to your `.eslintrc`:

```javascript
{
  "extends": "colinrobertbrooks",
  "env": {
    "browser": true // be sure to add this for frontend projects
  },
  "rules": {
    // your overrides
  }
}
```

Additional extensions:

- `colinrobertbrooks/cypress`
- `colinrobertbrooks/jest`
- `colinrobertbrooks/prettier`
- `colinrobertbrooks/typescript`

_`colinrobertbrooks/prettier` must come last in the "extends" array so it gets the chance to override other configs._

## License

MIT
