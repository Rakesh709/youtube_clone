import {Webhook} from 'svix';
import {headers} from "next/headers";
import {WebhookEvent} from "@clerk/nextjs/server"


export async function POST(req:Request){
    const SIGNING_SECRET= process.env.CLERK_SIGNING_SECRET

    if(!SIGNING_SECRET){
        throw new Error('Error: SIGNING_SECRET is missing')
    }

    //create new svix instance with secret
    const wh = new Webhook(SIGNING_SECRET);

    //GET HEADERS
    const headerPayload = await headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get("svix-timestamp")
}