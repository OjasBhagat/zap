"use client"
import { PrimaryButton } from "./buttons/PrimaryButton"
import { SecondaryButton } from "./buttons/SecondaryButton"
import { Feature } from "./Feature"
import { useRouter } from "next/navigation"


export const Hero = () =>{
    const router = useRouter();
    return <div>
        <div className="flex justify-center">
            <div className="text-5xl font-semibold text-center pt-4 max-w-xl ">
                Automate as fast as you can type.
            </div>
        </div>
        <div className="flex justify-center pt-4">
            <div className="text-xl font-normal text-center pt-4 max-w-2xl ">
                AI gives you automation superpowers, and AutoFlow puts them to work. Pairing AI and AutoFlow helps you turn ideas 
                into workflows and bots that work for you.
            </div>
        </div>
        <div className="flex justify-center pt-4">
            <div className="flex">
                <PrimaryButton onClick ={()=>{router.push("/signup")}} size ="big">Get Started Free</PrimaryButton>
                <div className="pl-4">
                    <SecondaryButton onClick={() =>{}} size ="big">Contact Sales</SecondaryButton>
                </div>
            </div>
        </div>
        <div className="flex justify-center pt-4">
            <Feature title = {"Free Forever"} subtitle={"for core features"} />
            <Feature title = {"More apps"} subtitle={" than any other platform"} />
            <Feature subtitle={"cutting-edge"} title = {"AI features"}  />
        </div>
    </div>
}