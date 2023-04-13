'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export const Logo = () => {
    const router = useRouter()
    return (
        <div>
            <Image 
                alt="Airbnb Logo"
                src="/images/logo.png"
                className="hidden md:block cursor-pointer"
                width="100"
                height="100"
            />
        </div>
    )
}
