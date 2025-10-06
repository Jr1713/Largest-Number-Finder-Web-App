Largest Number Finder Web App
🚀 Project Overview
The Largest Number Finder is a simple, client-side web application designed to solve a common programming challenge: finding the largest element within each sub-array of a nested array structure. This app is built using vanilla JavaScript for core logic and Tailwind CSS for a modern, responsive user interface.

It is a completely static, self-contained HTML file, making it easy to deploy anywhere, including GitHub Pages.

✨ Features
Core Logic: Implements the largestOfAll(arr) function to correctly identify the maximum value in every nested array.

Dynamic Input: Allows users to input their own array of arrays directly into a multiline text area.

JSON Parsing & Validation: Uses JavaScript's JSON.parse() to safely process array input and provides clear error messages for invalid JSON formats.

Fully Responsive Design: The interface adapts smoothly to all screen sizes (mobile, tablet, and desktop) using fluid widths and Tailwind's utility classes.

🛠️ Technology Stack
HTML5: Structure and content.

CSS: Minimal custom CSS combined with the Tailwind CSS CDN for rapid, utility-first styling.

JavaScript (ES6): Core logic for iteration, comparison, input handling, and DOM manipulation.

📝 How to Use
Input Format
The application expects a single input in valid JSON array format (an array containing arrays of numbers):

[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39]]

Steps
Enter Data: Paste your array of arrays into the input text area.

Calculate: Click the "Find Largest Numbers" button.

View Result: The output area will display the resulting array, which contains the largest number from each sub-array in the order they were processed:

[9, 35, 97]
