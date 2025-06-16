// Function to add an item to the DOM after a random delay
const addItem = async (item) => {
    await randomDelay(); // Wait for a random delay
    let div = document.createElement("div"); // Create a new div element
    div.innerHTML = item; // Set the inner HTML to the item
    document.body.append(div); // Append the div to the body
};

// Function to return a promise that resolves after a random delay
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random(); // Random timeout between 1 and 7 seconds
        setTimeout(() => {
            resolve(); // Resolve after the timeout
        }, timeout * 1000);
    });
};

async function main() {
    // Set up an interval to animate dots on the last element
    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3); // Remove dots
        } else {
            last.innerHTML = last.innerHTML + "."; // Add a dot
        }
    }, 500);

    // Array of text items to display
    let text = [
        "Initializing Hacking",
        "Reading your Files",
        "Password File Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up",
    ];

    // Add each item to the DOM with a delay
    for (const item of text) {
        await addItem(item);
    }
    await randomDelay(); // Wait one last random delay
    clearInterval(t); // Stop the dot animation
}
main(); // Run the main function
