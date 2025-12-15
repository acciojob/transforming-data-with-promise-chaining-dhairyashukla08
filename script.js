//your JS code here. If required.
const inputElement = document.getElementById('ip');
const buttonElement = document.getElementById('btn');
const outputDiv = document.getElementById('output');

function createDelayedPromise(delayMs, operation, inputVal, resultPrefix = 'Result: ') {
    return new Promise(resolve => {
        setTimeout(() => {
            const result = operation(inputVal);
            outputDiv.textContent = `${resultPrefix}${result}`;
            resolve(result);
        }, delayMs);
    });
}

buttonElement.addEventListener('click', () => {
    outputDiv.textContent = '';
    buttonElement.disabled = true; 

    let initialValue = parseFloat(inputElement.value);

    if (isNaN(initialValue)) {
        outputDiv.textContent = 'Please enter a valid number.';
        buttonElement.disabled = false;
        return;
    }

    new Promise(resolve => {
        setTimeout(() => {
            outputDiv.textContent = `Result: ${initialValue}`;
            resolve(initialValue);
        }, 2000); 
    })
    .then(currentValue => {
        return createDelayedPromise(
            2000, 
            (num) => num * 2, 
            currentValue
        );
    })
    .then(currentValue => {
        return createDelayedPromise(
            1000, 
            (num) => num - 3, 
            currentValue
        );
    })
    .then(currentValue => {
        return createDelayedPromise(
            1000, 
            (num) => num / 2, 
            currentValue
        );
    })
    .then(currentValue => {
        return createDelayedPromise(
            1000, 
            (num) => num + 10, 
            currentValue,
            'Final Result: '
        );
    })
    .catch(error => {
        console.error("Promise chain failed:", error);
        outputDiv.textContent = 'An error occurred during calculation.';
    })
    .finally(() => {
        buttonElement.disabled = false;
    });
});