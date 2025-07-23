"use client"
import { useSession, signIn, signOut } from "next-auth/react"

// Define the main component
export default function Component() {
  // Get session data using useSession hook
  const { data: session } = useSession()
  // console.log(session)
  // Conditionally render content based on session status
  if(session) {
    return (
      // Display user information if signed in
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <img src={session.user.image} alt="User Image" width="200px" /> <br/>
        {session.user.name} <br/>
        {session.user.email} <br/>
  
        {/* Sign out button */}
        <button  onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return <>
    Not signed in <br/>
    {/* Sign in buttons for different providers */}
    <button onClick={() => signIn("github")}>Sign in using Github</button>
    <br/>
    <button onClick={() => signIn("google")}>Sign in using Google</button> 
  </>
}