/**
 * largestOfAll
 * * Takes an array of arrays and returns a new array containing the largest 
 * number found within each sub-array.
 * * @param {number[][]} arr - An array containing one or more sub-arrays of numbers.
 * @returns {number[]} - An array of the largest number from each sub-array.
 */
function largestOfAll(arr) {
    // 1. Initialize the result array to store the largest number from each sub-array.
    const results = [];

    // 2. Iterate through the outer array (the array of sub-arrays).
    for (let i = 0; i < arr.length; i++) {
        // Check if the sub-array is empty or not an array
        if (!Array.isArray(arr[i]) || arr[i].length === 0) {
            // Handle empty or invalid sub-arrays by skipping 
            console.error("Skipping invalid or empty sub-array:", arr[i]);
            continue; 
        }

        // Get the current sub-array.
        const subArray = arr[i];

        // 3. Initialize a variable to track the largest number in the current sub-array.
        let largestNumber = subArray[0];

        // 4. Iterate through the current sub-array (inner loop) to find the maximum number.
        for (let j = 0; j < subArray.length; j++) {
            const currentNumber = subArray[j];

            // 5. Compare the current number with the largest number found so far.
            if (currentNumber > largestNumber) {
                largestNumber = currentNumber;
            }
        }

        // 6. Push the largest number found to the results array.
        results.push(largestNumber);
    }

    // 7. Return the final array of largest numbers.
    return results;
}

// --- UI Interaction Logic ---

document.addEventListener('DOMContentLoaded', () => {
    const inputArray = document.getElementById('inputArray');
    const calculateBtn = document.getElementById('calculateBtn');
    const outputResult = document.getElementById('outputResult');
    const errorMessage = document.getElementById('errorMessage');

    // Function to display an error message
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
        outputResult.textContent = 'Error processing input.';
    }

    // Function to clear errors
    function clearError() {
        errorMessage.classList.add('hidden');
        errorMessage.textContent = '';
    }

    calculateBtn.addEventListener('click', () => {
        clearError();
        const input = inputArray.value.trim();

        if (!input) {
            displayError("Please enter a valid array of arrays.");
            return;
        }

        try {
            // Step 1: Parse the JSON string input into a JavaScript array of arrays
            const nestedArray = JSON.parse(input);

            // Basic validation to ensure it's an array
            if (!Array.isArray(nestedArray)) {
                displayError("Input must be a valid JSON Array of Arrays, e.g., [[1, 2], [3, 4]].");
                return;
            }
            
            // Additional check to ensure it's an array of arrays
            if (nestedArray.length > 0 && !Array.isArray(nestedArray[0])) {
                 displayError("Input must be an Array OF Arrays, e.g., [[1, 2], [3, 4]].");
                return;
            }

            // Step 2: Run the core logic
            const result = largestOfAll(nestedArray);

            // Step 3: Display the result by stringifying it back to readable JSON format
            outputResult.textContent = JSON.stringify(result);

        } catch (e) {
            // Handle JSON parsing errors (invalid format)
            console.error(e);
            displayError("Invalid input format. Ensure you are using valid JSON syntax (no single quotes, correct brackets).");
        }
    });
});
