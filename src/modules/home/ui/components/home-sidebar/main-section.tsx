"use client"

import { 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarMenu, 
    SidebarMenuButton , 
    SidebarMenuItem } from "@/components/ui/sidebar";
import { FlagIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import Link from "next/link";

import { useAuth, useClerk } from "@clerk/nextjs";

const items = [
    {
        title:"Home",
        url:"/",
        icon:HomeIcon,
    },
    {
        title:"Subscriptions",
        url:"/feed/subscriptions",
        icon:PlaySquareIcon,
        auth:true
    },
    {
        title:"Trending",
        url:"/feed/trending",
        icon:FlagIcon,
    },
    
];


export const MainSection = ()=>{

    const clerk = useClerk();
    const {isSignedIn} = useAuth();
    
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    { items.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={false} //TODO: change to look at current pathname
                                onClick={(e)=>{
                                    if(!isSignedIn && item.auth){
                                        e.preventDefault();
                                        return clerk.openSignIn();
                                    }
                                    // if i clicked in subscription if not login then loginin page will come

                                }} //TODO: Do something on click
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon/>
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))

                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}