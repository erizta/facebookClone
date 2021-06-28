import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import React from "react"
import Contact from "./Contact"


function Widgets() {

    const contacts = [
        { src: "https://i.pinimg.com/564x/c1/40/43/c14043e7c338d151913103737fdcbef5.jpg", name: "Nayell Horrah" },
        { src: "https://i.pinimg.com/564x/75/fc/af/75fcaff04b26b3161f62d02285ed8a57.jpg", name: "Ester Expósito" },
        { src: "https://i.pinimg.com/564x/62/bb/60/62bb60f0d8196af0694abf6f222e10d2.jpg", name: "Brandon Flynn" },
        { src: "https://i.pinimg.com/564x/4e/2f/74/4e2f7418630e2ac7b452e15f9e26ceee.jpg", name: "Dean Winchester" },
        { src: "https://i.pinimg.com/564x/ff/92/ea/ff92ea415ea6bbfa63969e1e1dc1201c.jpg", name: "Taylor Swift" },
        { src: "https://i.pinimg.com/564x/21/08/60/21086031fe22e3dc86444441f33802d1.jpg", name: "Queen B" },
        { src: "https://i.pinimg.com/564x/83/71/8b/83718b59e7b7942171d9d23c0aae8c1b.jpg", name: "Jainuddin Malik" }
    ]
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact 
                key={contact.src} 
                src={contact.src} name={contact.name} 
                />
            ))}
        </div>
    )
}

export default Widgets
