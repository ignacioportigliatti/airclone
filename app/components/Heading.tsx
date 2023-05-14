'use client'

interface HeadingProps {
    title?: string;
    subtitle?: string;
    center?: boolean;
}

export const Heading = (props: HeadingProps) => {
    const { title, subtitle, center } = props

    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
        </div>
    )
}
