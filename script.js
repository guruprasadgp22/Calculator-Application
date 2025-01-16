const listItems = document.getElementsByTagName('li');
const screen = document.querySelector('p'); // No need to use `[0]` with `querySelector`.
const clearButton = document.getElementById('clear');

// Add event listeners to all list items
for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    if (item.innerHTML === '=') {
        item.addEventListener("click", () => calculate());
    } else {
        item.addEventListener("click", () => addToCurrentValue(item.innerHTML));
    }
}

// Add clicked value to the screen
function addToCurrentValue(value) {
    if (value === '*') {
        screen.innerHTML += '*';
    } else {
        screen.innerHTML += value;
    }
}

// Evaluate and display the result
function calculate() {
    try {
        const result = eval(screen.innerHTML); // Evaluate the expression
        screen.innerHTML = result;
    } catch {
        screen.innerHTML = "Error"; // Handle invalid input
    }
}

// Clear the screen
clearButton.onclick = () => {
    screen.innerHTML = "";
};
