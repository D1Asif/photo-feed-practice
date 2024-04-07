import Image from "next/image"

export default function Logo() {
    return (
        <a href="/">
            <Image 
                className="max-w-[100px] md:max-w-[165px]" 
                src="/lws_logo.png" 
                height={50}
                width={120}
                alt="Lws"
            />
        </a>
    )
}
