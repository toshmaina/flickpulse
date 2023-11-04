import { NextResponse } from "next/server";

export const GET = (req:Request) => {
const origin = req.headers.get("origin");
    return new NextResponse(
        JSON.stringify({ "message": "Hello world" }), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": origin!,
        }
    }
    )
} 