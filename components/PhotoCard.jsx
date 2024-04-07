import Link from "next/link";
import Image from "next/image";

export default function PhotoCard({ photo }) {
    return (
        <Link href={`/photos/${photo.id}`} className="group">
            <Image 
                src={photo.url} 
                alt={photo.title} 
                height={400}
                width={400}
            />
            <div className="title-container">
                <h4 className="title">{photo.title}</h4>
            </div>
        </Link>
    )
}
