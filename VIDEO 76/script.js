// Simulate fetching data asynchronously
async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455) // Resolve with value after 3.5 seconds
        }, 3500);
    })
}

// Main function to run tasks sequentially
async function main(){
    console.log('Loading Modules'); // Step 1
    console.log('Arranging Modules'); // Step 2
    console.log('Loading Data'); // Step 3
    let data = await getData() // Wait for data to load
    console.log('Process Data'); // Step 4
    console.log('Task 2 intialized'); // Step 5
    console.log('Collection Modules'); // Step 6
}
main() // Start the main function