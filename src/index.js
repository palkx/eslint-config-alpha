const base = {
  'for-direction': 0,
  'getter-return': 0,
  'no-await-in-loop': 0,
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'warn',
  'no-console': 0,
  'no-constant-condition': 0,
  'no-control-regex': 0,
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'warn',
  'no-empty-character-class': 'error',
  'no-ex-assign': 0,
  'no-extra-boolean-cast': 0,
  'no-extra-parens': 0,
  'no-extra-semi': 'error',
  'no-func-assign': 0,
  'no-inner-declarations': 0,
  'no-invalid-regexp': 'warn',
  'no-irregular-whitespace': ['error', { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true }],
  'no-obj-calls': 'warn',
  'no-prototype-builtins': 0,
  'no-regex-spaces': 'warn',
  'no-sparse-arrays': 'warn',
  'no-template-curly-in-string': 0,
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'warn',
  'no-unsafe-finally': 'warn',
  'no-unsafe-negation': 'error',
  'use-isnan': 'error',
  'valid-jsdoc': 0,
  'valid-typeof': 'error',
  'accessor-pairs': 0,
  'array-callback-return': 0,
  'block-scoped-var': 'error',
  'class-methods-use-this': 0,
  'complexity': 0,
  'consistent-return': 0,
  'curly': ['error', 'multi-line', 'consistent'],
  'default-case': 0,
  'dot-location': ['error', 'property'],
  'dot-notation': ['error', { allowKeywords: true, allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)' }],
  'eqeqeq': ['error', 'smart'],
  'guard-for-in': 'warn',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-div-regex': 0,
  'no-else-return': 'warn',
  'no-empty-function': 0,
  'no-empty-pattern': 0,
  'no-eq-null': 'warn',
  'no-eval': 'warn',
  'no-extend-native': 'warn',
  'no-extra-bind': 0,
  'no-extra-label': 'warn',
  'no-fallthrough': 0,
  'no-floating-decimal': 'error',
  'no-global-assign': 0,
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 0,
  'no-implied-eval': 'error',
  'no-invalid-this': 0,
  'no-iterator': 0,
  'no-labels': 0,
  'no-lone-blocks': 0,
  'no-loop-func': 0,
  'no-magic-numbers': 0,
  'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  'no-multi-str': 'error',
  'no-new': 0,
  'no-new-func': 'warn',
  'no-new-wrappers': 'warn',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 0,
  'no-proto': 0,
  'no-redeclare': 'error',
  'no-restricted-properties': 0,
  'no-return-assign': 0,
  'no-return-await': 'warn',
  'no-script-url': 0,
  'no-self-assign': 'error',
  'no-self-compare': 'warn',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 0,
  'no-unused-expressions': 0,
  'no-unused-labels': 'error',
  'no-useless-call': 0,
  'no-useless-concat': 'warn',
  'no-useless-escape': 'warn',
  'no-useless-return': 'warn',
  'no-void': 0,
  'no-warning-comments': 0,
  'no-with': 'error',
  'prefer-promise-reject-errors': 0,
  'radix': 'error',
  'require-await': 'warn',
  'vars-on-top': 0,
  'wrap-iife': ['error', 'inside'],
  'yoda': 'error',
  'strict': ['error', 'never'],
  'init-declarations': 0,
  'no-catch-shadow': 'error',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': 0,
  'no-shadow': 'warn',
  'no-shadow-restricted-names': 'error',
  'no-undef': 'error',
  'no-undef-init': 0,
  'no-undefined': 'error',
  'no-unused-vars': 'warn',
  'no-use-before-define': 'error',
  'callback-return': 0,
  'global-require': 0,
  'handle-callback-err': 0,
  'no-buffer-constructor': 'error',
  'no-mixed-requires': 'error',
  'no-new-require': 'error',
  'no-path-concat': 'warn',
  'no-process-env': 0,
  'no-process-exit': 0,
  'no-restricted-modules': 0,
  'no-sync': 0,
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': ['error', 'never', { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
  'array-element-newline': 0,
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  'camelcase': 'warn',
  'capitalized-comments': 0,
  'comma-dangle': ['error', 'never'],
  'comma-spacing': ['error', { before: false, after: true }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'consistent-this': ['error', 'self'],
  'eol-last': ['error', 'always'],
  'func-call-spacing': ['error', 'never'],
  'func-name-matching': ['warn', 'always'],
  'func-names': ['warn', 'as-needed'],
  'func-style': 0,
  'function-paren-newline': ['error', 'consistent'],
  'id-blacklist': 0,
  'id-length': 0,
  'id-match': 0,
  'indent': ['error', 2],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
  'keyword-spacing': ['error', {
    overrides: {
      'if': { before: true, after: true },
      'for': { before: true, after: true },
      'while': { before: true, after: true },
      'catch': { before: true, after: true },
      'switch': { before: true, after: true }
    }
  }],
  'line-comment-position': 0,
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': 0,
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'max-depth': 0,
  'max-len': 0,
  'max-lines': 0,
  'max-nested-callbacks': 0,
  'max-params': 0,
  'max-statements': 0,
  'max-statements-per-line': ['error', { max: 2 }],
  'multiline-comment-style': 0,
  'multiline-ternary': ['error', 'always-multiline'],
  'new-cap': 'warn',
  'new-parens': 'error',
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
  'no-array-constructor': 0,
  'no-bitwise': 0,
  'no-inline-comments': 0,
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
  'no-multi-assign': 'warn',
  'no-multiple-empty-lines': 'error',
  'no-negated-condition': 'warn',
  'no-nested-ternary': 0,
  'no-new-object': 'error',
  'no-plusplus': 0,
  'no-restricted-syntax': 0,
  'no-tabs': 0,
  'no-ternary': 0,
  'no-trailing-spaces': 'error',
  'no-underscore-dangle': 0,
  'no-unneeded-ternary': 0,
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': 0,
  'object-curly-newline': ['error', { multiline: true, consistent: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': 0,
  'one-var': ['error', 'never'],
  'one-var-declaration-per-line': 0,
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
  'padded-blocks': ['error', 'never'],
  'padding-line-between-statements': 0,
  'quote-props': ['error', 'consistent-as-needed', { keywords: true, unnecessary: true, numbers: false }],
  'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'require-jsdoc': 0,
  'semi': ['error', 'always', { omitLastInOneLineBlock: false }],
  'semi-spacing': ['error', { before: false, after: true }],
  'semi-style': ['error', 'last'],
  'sort-keys': 0,
  'sort-vars': 0,
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error', { int32Hint: true }],
  'space-unary-ops': ['error', { words: true, nonwords: false }],
  'spaced-comment': ['error', 'always'],
  'switch-colon-spacing': ['error', { after: true, before: false }],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'wrap-regex': 0,
  'arrow-body-style': ['error', 'as-needed'],
  'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
  'arrow-spacing': ['error', { before: true, after: true }],
  'constructor-super': 'error',
  'generator-star-spacing': ['error', 'before'],
  'no-class-assign': 'warn',
  'no-confusing-arrow': ['error', { allowParens: true }],
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': ['error', { includeExports: false }],
  'no-new-symbol': 'warn',
  'no-restricted-imports': 0,
  'no-this-before-super': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-var': 'error',
  'object-shorthand': 0,
  'prefer-arrow-callback': 'error',
  'prefer-const': ['error', { destructuring: 'all' }],
  'prefer-destructuring': 0,
  'prefer-numeric-literals': 0,
  'prefer-rest-params': 'warn',
  'prefer-spread': 'error',
  'prefer-template': 'warn',
  'require-yield': 'warn',
  'rest-spread-spacing': ['error', 'never'],
  'sort-imports': 0,
  'symbol-description': 'warn',
  'template-curly-spacing': ['error', 'never'],
  'yield-star-spacing': ['error', 'before']
};

module.exports = {
  'parserOptions': {
    ecmaVersion: 2018
  },
  'rules': Object.assign(base, {}),
  'plugins': [
    'promise'
  ],
  'extends': [
    'plugin:promise/recommended'
  ]
};
