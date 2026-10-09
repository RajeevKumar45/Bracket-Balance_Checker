
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


const bracketInput = document.getElementById("bracketInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const result = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const insertionCount = document.getElementById("insertionCount");
const explanation = document.getElementById("explanation");
const errorMessage = document.getElementById("errorMessage");

analyzeBtn.addEventListener("click", () => {
    const s = bracketInput.value.trim();

    // Validate the input
    if (s.length === 0) {
        errorMessage.textContent = "Please enter a parentheses string.";
        result.hidden = true;
        return;
    }

    if (!/^[()]+$/.test(s)) {
        errorMessage.textContent =
            "Invalid input! Use only '(' and ')' characters.";
        result.hidden = true;
        return;
    }

    // Clear previous errors
    errorMessage.textContent = "";

    // Run the algorithm
    const answer = minInsertions(s);

    // Display the result
    result.hidden = false;
    resultTitle.textContent = "Analysis Result";
    insertionCount.textContent =
        `Minimum insertions required: ${answer}`;

    if (answer === 0) {
        explanation.textContent =
            "Your parentheses string is already balanced!";
    } else {
        explanation.textContent =
            `You need ${answer} insertion(s) to balance this string.`;
    }
});

