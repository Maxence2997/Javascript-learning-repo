# Note

- CamelCase variable name
- Don't ust keyword like **name**, **function**
- **$** and **_** are only accepted sign in naming of variables.
- **Const** is named with all **UPPERCASE**, editor will show it with different color.
- String can use both **"** and **'**
- The 7 primitive types:
  
    1. Number

        ```javascript
        let age = 23;
        ```

    2. String

        ```javascript
        let firstName = 'Marc';
        ```

    3. Boolean

        ```javascript
        let fullAge = true;
        ```

    4. Undefined

        ```javascript
        let child;
        ```

    5. Null
    6. Symbol (ES2015): Value is unique nad cannot be changed. **_Not useful for now_**
    7. BigInt (ES2020): Larger integer than Number.
<br>
- If a variable declared without **let**, **var** or **const** it will be global variable.

    |       let         |       var         |
    | ----------------- | ----------------- |
    | Block scope       | function scoped   |
    | does not allow to redeclare variables     | allows to redeclare variables      |
    |Hoisting does not occur in let |   Hoisting occurs in var.|

- JavaScript has power operator **double stars**

- String template (since ES6)
  
  ```Javascript
    const firstName = 'Max';
    const job = 'Programmer';
    const birthYear = 1997;
    const year = 2037;

    const maxence = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

    const maxenceNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
  ```
  
  - maxence use **+** for concatenating strings.
  - maxenceNew use **\` \`** for creating **string template**.
  - With string template, we can create cross-line string.
  
  ```Javascript
    console.log(`Today is  \n
    thursday`);                                     //Success

    console.log("Today is \n
    thursday");                                     //SyntaxError
  ```
  