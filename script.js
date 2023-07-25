// When the DOM is fully loaded, execute the following code
document.addEventListener('DOMContentLoaded', () => {

    // Get references to various elements on the page
    let display = document.getElementById('display');
    let exp = document.getElementById('exp');
    let root = document.getElementById('root');
    let del = document.getElementById('del');
    let ac = document.getElementById('ac');
    let dot = document.getElementById('dot');
    let signs = Array.from(document.getElementsByClassName('sign'));
    let numBut = Array.from(document.getElementsByClassName('numBut'));
    let equal = document.getElementById('equal');

    // Define operators and their precedence
    let operators = {
        '+': { precedence: 1 },
        '-': { precedence: 1 },
        'x': { precedence: 2 },
        '÷': { precedence: 2 },
    };

    // Function to apply an operator on two numbers
    function applyOperator(operator, num1, num2) {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case 'x':
                return num1 * num2;
            case '÷':
                return num1 / num2;
            default:
                return NaN; // Invalid operator
        }
    }

    // Function to evaluate the postfix expression
    function evaluatePostfix(postfixExpression) {
        let stack = [];
        for (let token of postfixExpression) {
            if (!isNaN(parseFloat(token))) {
                stack.push(parseFloat(token));
            } else if (operators[token]) {
                let num2 = stack.pop();
                let num1 = stack.pop();
                stack.push(applyOperator(token, num1, num2));
            }
        }
        return stack[0];
    }

    // Function to convert infix expression to postfix using the shunting yard algorithm
    function shuntingYard(input) {
        let output = [];
        let operatorStack = [];

        for (let token of input) {
            if (!isNaN(parseFloat(token))) {
                output.push(token); // Add numbers directly to the output
            } else if (operators[token]) {
                // Process operators
                while (
                    operatorStack.length > 0 &&
                    operators[operatorStack[operatorStack.length - 1]].precedence >= operators[token].precedence
                ) {
                    output.push(operatorStack.pop()); // Pop higher precedence operators from stack to output
                }
                operatorStack.push(token); // Push the current operator onto the stack
            }
        }

        // Pop any remaining operators from the stack to the output
        while (operatorStack.length > 0) {
            output.push(operatorStack.pop());
        }

        return output;
    }

    // Event listener for the "=" button (equal)
    equal.addEventListener('click', () => {
        let expression = display.value.split(/([+\-x÷])/).filter(Boolean); // Split numbers and operators
        let postfixExpression = shuntingYard(expression); // Convert to postfix
        let result = evaluatePostfix(postfixExpression); // Evaluate postfix expression
        display.value = result; // Display the result
    });

    // Event listeners for number buttons
    numBut.forEach(num => {
        num.addEventListener('click', () => {
            display.value += num.innerText; // Append the number to the display
        });
    });

    // Event listeners for operator buttons
    signs.forEach(sign => {
        sign.addEventListener('click', () => {
            display.value += sign.innerText; // Append the operator to the display
        });
    });

    // Event listener for the "AC" button (clear)
    ac.addEventListener('click', () => {
        display.value = ""; // Clear the display
    });

    // Event listener for the "DEL" button (delete)
    del.addEventListener('click', () => {
        let displayContent = display.value.split(''); // Split the display content into characters
        displayContent.pop(); // Remove the last character from the display
        display.value = displayContent.join(''); // Update the display with the modified content
    });

    // Event listener for the "√" button (square root)
    root.addEventListener('click', () => {
        let contentRoot = Math.sqrt(parseFloat(display.value)); // Calculate the square root
        display.value = contentRoot; // Display the result
    });

    // Event listener for the "." button (decimal point)
    dot.addEventListener('click', () => {
        if (!display.value.includes('.')) display.value += '.'; // Add a decimal point if not already present
    });

    // Event listener for the "^2" button (square)
    exp.addEventListener('click', () => {
        let contentExp = ((parseFloat(display.value)) ** 2); // Calculate the square
        display.value = contentExp; // Display the result
    });

});
