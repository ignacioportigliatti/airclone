'use client'

import { useEffect, useState } from "react"

interface ClientOnlyProps {
    children: React.ReactNode;
}

export const ClientOnly = (props: ClientOnlyProps) => {
    const children = props.children
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, []);

    if (!hasMounted) {
        return null
    }
    
    return (
        <>
            {children}
        </>
    )
}
