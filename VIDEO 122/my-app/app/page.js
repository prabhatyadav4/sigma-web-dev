import fs from "fs/promises" // Import fs module for file operations
import Navbar from "@/components/Navbar"; // Import Navbar component


export default function Home() {
  console.log("Hey, this is KernalPrab") // Log a message to the console
  let a = fs.readFile(".gitignore") // Read the .gitignore file
  a.then(e=>{console.log(e.toString())}) // Convert file content to string and log it
  return (
    <div>
      <Navbar/> {/* Render the Navbar component */}
      I am a component {/* Simple text content */}
    </div>
  );
}
