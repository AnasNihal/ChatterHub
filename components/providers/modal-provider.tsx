"use client"

import { useEffect , useState } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal ";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal ";
import { LeaveServerModel } from "@/components/modals/leave-server-model ";
import { DeleteServerModel } from "@/components/modals/delete-server-model";
import { DeleteChannelModel } from "../modals/delete-channel-model ";
import { EditChannelModal } from "../modals/edit-channel-model";
import { MessageFileModal } from "../modals/message-file-modal";


export const ModalProvider = () =>{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    
    return (

        <>
           <CreateServerModal/>
           <InviteModal/>
           <EditServerModal/>
           <MembersModal/>
           <CreateChannelModal/>
           <LeaveServerModel/>
           <DeleteServerModel/>
           <DeleteChannelModel/>
           <EditChannelModal/>
           <MessageFileModal/>
        </>
    )
}