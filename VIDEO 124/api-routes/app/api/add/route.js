import { NextResponse } from "next/server";

export async function POST(request){
    let data =  await request.json()
    // Log the received data to the console
    console.log(data)
    // Return a JSON response indicating success and echoing the received data
    return NextResponse.json({success: true, data})
}