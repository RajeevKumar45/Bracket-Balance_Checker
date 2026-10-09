# Bracket Balance Checker

A beginner-friendly JavaScript project that demonstrates how to solve the **Minimum Insertion Steps to Make a String Valid** problem using a greedy algorithm.

## 📌 Project Overview

This project implements a solution to determine the minimum number of parentheses that must be inserted to make a string valid.

In this problem, every opening parenthesis `(` must be followed by **two consecutive closing parentheses `))`**.

The goal is to calculate the minimum number of insertions needed to satisfy this rule.

## 🎯 Problem Examples

| Input | Minimum Insertions |
|---|---:|
| `())` | 0 |
| `(()))` | 1 |
| `))())(` | 3 |
| `)` | 2 |
| `(` | 2 |

## 🧠 Algorithm and Approach

The solution uses a greedy approach with two variables:

- `open`: Tracks unmatched opening parentheses.
- `insertions`: Counts the number of parentheses that must be inserted.

### Algorithm Steps

1. Traverse the string character by character.
2. If the current character is `(`, increment `open`.
3. If the current character is `)`, check whether the next character is also `)`.
4. If the next character is `)`, consume the pair. Otherwise, count one insertion for the missing closing parenthesis.
5. If an unmatched opening parenthesis exists, match it with the closing pair by decrementing `open`.
6. Otherwise, count one insertion for a missing opening parenthesis.
7. After processing the string, add two insertions for every unmatched opening parenthesis.
8. Return the total number of insertions.

## 💻 Implementation

```javascript
function minInsertions(s) {
    let open = 0;
    let insertions = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else {
            // Check whether we have a closing pair '))'
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++;
            } else {
                // Insert the missing closing parenthesis
                insertions++;
            }

            if (open > 0) {
                open--;
            } else {
                // Insert a missing opening parenthesis
                insertions++;
            }
        }
    }

    // Every unmatched '(' needs two ')'
    insertions += open * 2;

    return insertions;
}

console.log(minInsertions("())"));     // 0
console.log(minInsertions("(()))"));   // 1
console.log(minInsertions("))())("));  // 3
console.log(minInsertions(")"));       // 2
console.log(minInsertions("("));       // 2
```

## ▶️ How to Run the Project

### Prerequisites

- [Node.js](https://nodejs.org/en/download) installed on your computer.
- A code editor such as Visual Studio Code.

### Steps

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open the integrated terminal.
4. Run the following command:

```bash
node script.js
```

Make sure you have saved the implementation in a file named `script.js`.

### Expected Output

```text
0
1
3
2
2
```

## ⏱️ Complexity Analysis

**Time Complexity: O(n)**

The algorithm traverses the string once. Each character is processed at most once, so the running time grows linearly with the length of the input.

**Space Complexity: O(1)**

The algorithm uses only two counters, `open` and `insertions`, and does not allocate additional data structures proportional to the input size.

## 🛠️ Technologies Used

- JavaScript
- Node.js
- Visual Studio Code

## 📚 What I Learned

Through this project, I practised:

- String traversal and zero-based indexing.
- Variables, loops, and conditional statements in JavaScript.
- Greedy algorithms.
- Tracking unmatched parentheses.
- Understanding time and space complexity.
- Running JavaScript programs using Node.js.
- Debugging file path and module resolution errors in PowerShell.

## 🚀 Future Improvements

- Build an interactive web interface using HTML, CSS, and JavaScript.
- Allow users to enter their own strings.
- Display the minimum number of insertions dynamically.
- Show a step-by-step visualization of the algorithm.
- Add automated test cases for edge cases and invalid input.

## 👨‍💻 Author

Rajeev Kumar

Computer Science Engineering Student

---

*This project is part of my journey to strengthen my problem-solving skills by building practical applications around coding problems.*
