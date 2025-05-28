"use client"
import { AppBar } from "@/components/AppBar";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ZapCell } from "@/components/zapCell";
import { useState } from "react";


export default function Create(){
    const [selectedTrigger , setSelectedTrigger] = useState(""); 
    const [selectedActions , setSelectedActions] = useState<{
        avaliableActionId : string;
        avaliableActionName: string;
    }[]>([]);

    return <div>
        <AppBar />
        <div className="w-full min-h-screen bg-slate-200 flex flex-col justify-center ">
            <div className="flex justify-center">
            <ZapCell name = {selectedTrigger? selectedTrigger : "Trigger"} index={1}/>
            </div>
            <div className=" w-full pt-2 pb-2">
                {selectedActions.map((action, index) => <div className="flex justify-center pb-2" key={index}>
                <ZapCell name = {action.avaliableActionName? action.avaliableActionName : "Action"} index={2+index}/>
                </div> )}
            </div>
            <div className="flex justify-center">
                <div>
                    <PrimaryButton onClick={()=>{
                        setSelectedActions(a=>[...a ,{
                            avaliableActionId:"",
                            avaliableActionName:""
                        }])
                        }}>
                        <div className="text-2xl max-w-2">
                            +
                        </div>
                    </PrimaryButton>
                </div>
            </div>         
        </div>
    </div>
}