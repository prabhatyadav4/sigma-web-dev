"use client"
export default function Home() {
  const handleClick = async () => {
    // Data to be sent in the request body
    let data = {
      name: "KernalPrab",
      role: "Coder"
    }
    // Making a POST request to the API route /api/add
    let a = await fetch("/api/add" , {
      method: "POST",  // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
      },
      body: JSON.stringify(data), // Convert data to JSON string for the body
    })
    // Parse the JSON response from the API
    let res = await a.json()
    // Log the response to the console
    console.log(res)
  }
  return (
    <div>
      <h1 className="text-xl font-bold">
          Next.js API routes demo
      </h1>
      <button onClick={handleClick}>Click Me</button> {/* Button to trigger the API call */}
    </div>
  );
}
