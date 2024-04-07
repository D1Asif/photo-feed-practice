"use client"

import { createPortal } from "react-dom";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
    const modalRef = useRef(null);

    const router = useRouter();

    useEffect(() => {
        if (!modalRef.current.open) {
            modalRef.current.showModal();
        }
    }, []);

    const onHide = () => {
        router.back();
    }

    return createPortal(
        <dialog 
            ref={modalRef}
            className="p-7 rounded-lg pt-5 shadow-lg shadow-teal-600/20"
        >
            <span className="flex justify-end pb-4">
                <Image 
                    src="/icons/xmark.svg"
                    className="w-7 h-7 cursor-pointer"
                    alt="Close Icon"
                    height={5}
                    width={5}
                    onClick={onHide}
                />
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root")
    )

}
