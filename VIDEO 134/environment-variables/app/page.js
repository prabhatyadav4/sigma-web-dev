"use client"
export default function Home() {
  console.log("The ID is: ",process.env.NEXT_PUBLIC_ID)
  console.log("The SECRET is: ",process.env.NEXT_PUBLIC_SECRET)
  return (
    <div>
      Hey, This is Home. 
      <div>
        The ID is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.NEXT_PUBLIC_SECRET} and the name is {process.env.NEXT_PUBLIC_NAME}
      </div>
    </div>
  );
}
