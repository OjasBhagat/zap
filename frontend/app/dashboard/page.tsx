"use client"

import { AppBar } from "@/components/AppBar";
import { DarkButton } from "@/components/buttons/DarkButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { LinkButton } from "@/components/buttons/LinkButton";
import { useRouter } from "next/navigation";
interface Zap{
    "id" : string,
    "triggerId":string,
    "userId":number,
    "actions":{
        "id" : string,
        "actionId":string,
        "sortingOrder" : number,
        "type":{
            "id":string,
            "name":string
        }
    }[],
    "trigger":{
        "id":string,
        "zapId":string,
        "triggerId":string,
        "Type":{
            "id":string,
            "name":string
        }
    }    
    
    
}
function useZaps(){
    const [loading,setLoading] = useState(true);
    const [zaps,setZaps] = useState<Zap[]>([]);

    useEffect( () =>{
         axios.get(`${BACKEND_URL}/api/v1/zap`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
         })
         .then(res =>{
            setZaps(res.data.zaps);
            setLoading(false);
         })
    }, []);

    return {
        loading, zaps
    }
}

export default function Dashboard() {
    const router = useRouter();
    const {loading,zaps} = useZaps();
    return <div>
        <AppBar />
        <div className="flex justify-center pt-8">
            <div className="pt-8 max-w-screen-lg w-full">
                <div className="flex justify-between pr-8">
                    <div className="pl-4 text-2xl font-bold">
                        My Zaps
                    </div>
                    <DarkButton onClick ={()=>{
                        router.push("/zap/create");
                    }} >Create</DarkButton>
                </div>
            </div>
        </div>
        {loading ? "Loading": <div className="flex justify-center w-full"><ZapTable zaps = {zaps} /></div>}
 </div>
}

function ZapTable({zaps} : {zaps:Zap[]}){
    const router = useRouter();
    return  <div className="p-8 max-w-screen-lg w-full">
    <div className="flex pb-4 border-b">
            <div className="flex-1">Name</div>
            <div className="flex-1">Use</div>
            <div className="flex-1">last Edit</div>
            <div className="flex-1">running</div>
            <div className="flex-1">Go</div>
    </div>
  {zaps.map(z => <div className="flex border-b  py-4 " key={z.id}>
            <div className="flex-1">{z.trigger.Type.name} </div>
            <div className="flex-1">{z.actions.map(x=>x.type.name + " ")} </div>
            <div className="flex-1">{z.id}</div>
            <div className="flex-1">Nov 12,2024</div>
            <div className="flex-1"><LinkButton onClick={()=>{
                router.push("/zap/" + z.id)
            }}>Go</LinkButton></div>
          </div>)}
  </div>
    
}