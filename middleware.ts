import { NextResponse } from "next/server";
/* The middleware file is used to track requests being sent to the app or an api */
/* It is an edge-runtime hence rate limiters cannot be used  inside its file 'cause limiters are dependant to node runtime environment as dev dependencies  */
/* All the http visualization tools e.g postman | curl do not have an origin */

 //This export tracks all the routes that requires authentication in the app
//export { default } from "next-auth/middleware";

 
const allowedOrigins = process.env.NODE_ENV === "production"
    ? ['https://www.myWebSite.com']
    : ['http://localhost:3000', 'https://www.google.com'];

  

export const middlewares = (req: Request) => {
    const origin: string | null = req.headers.get('origin');
    console.log(origin);
    const regex: RegExp = new RegExp('/api/*');
    
     

      if ( regex.test(req.url) &&  origin && !allowedOrigins.includes(origin)) { 
          
        console.log("Unsupported origin");
          
       return  new NextResponse(null, {
           status: 400,
           statusText: "Bad Request",
           headers: {
            'Content-Type':"text/plain"
        }})

  
}


    return NextResponse.next();
}  

export const config = {
    matcher:  '/signin'
};