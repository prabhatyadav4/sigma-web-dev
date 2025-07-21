import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    return NextResponse.json({message: 'Hello, My name is KernalPrab'})
  return NextResponse.redirect(new URL('/home', request.url))
}
// Check Documentation for more examples
export const config = {
  matcher: '/about/:path*',
}