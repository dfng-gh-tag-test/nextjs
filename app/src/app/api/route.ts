import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    headers();
    return NextResponse.json({
        nonSecret: process.env.MY_API_KEY,
        secretKey: process.env.MY_SECRET_KEY,
    })
}