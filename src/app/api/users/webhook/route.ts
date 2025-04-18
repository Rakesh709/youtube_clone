import {Webhook} from 'svix';
import {headers} from "next/headers";
import {WebhookEvent} from "@clerk/nextjs/server"
import { db } from '@/db';
import { users } from '@/db/schema';



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
    const svix_signature= headerPayload.get('svix-signature')

    //IF THERE ARE NO HEADERS, ERROR OUT
    if(!svix_id || !svix_timestamp || !svix_signature){
        return new Response('Error:Missing Svix headers',{
            status:400,
        })
    }

    //GET BODY
    const payload = await req.json()
    const body = JSON.stringify(payload)

    let evt : WebhookEvent

    //VERIFY PAYLOAD WITH HEADERS

    try {
      evt = wh.verify(body,{
        'svix-id':svix_id,
        'svix-timestamp':svix_timestamp,
        'svix-signature':svix_signature,
      }) as WebhookEvent
    } catch (err) {
        console.error('Error: Could not verify webhook:',err);
        return new Response('Error:Verification error',{
            status:400,
        })
        
    }

    //DO SOMETHING WITH PAYLOAD
    //FOR THIS GUID, LOG PAYLOAD TO CONSOLE
    
    const eventType = evt.type;

    // console.log(`Recived webhook with id ${data.id} and event type of ${eventType}`);
    // console.log('Webhook payload',body);

    if(eventType ==='user.created'){
        const {data} = evt;

        await db.insert(users).values({
            clerkId:data.id,
            name:`${data.first_name} ${data.last_name}`,
            //google sign in to get first +last name
            imageUrl:data.image_url,

        })
    }

    if(eventType==='user.deleted'){
        const {data} = evt
    }

    return new Response('webhook recived',{status:200})
    
    
}