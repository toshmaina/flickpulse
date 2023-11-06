import { NextResponse } from "next/server";

/* The middleware file is used to track requests being sent to the app or an api within */
/* It is an edge-runtime hence rate limiters cannot be used to inside its file 'cause limiters are dependant to node runtime environment as dev dependencies  */
/* All the http visualization tools e.g postman | curl do not have an origin */


const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.myWebSite.com']
    : ['http://localhost:3000', 'https://www.google.com'];

export const middleware = (req: Request) => {
    const origin:string | null  = req.headers.get('origin');
    if (origin && !allowedOrigins.includes(origin) ) {
       return  new NextResponse(null, {
            status: 400, statusText: "Not Allowed ", headers: {
            'Content-Type':"text/plain"
        }})

 }
      




    console.log(req.method);
    console.log(req.credentials);




    return NextResponse.next()
    
    
}
export const config = {
    matcher: '/api/:path*',
}