import { getPhotoDetails } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(_request, { params: { id } }) {
    const data = getPhotoDetails(id);
    
    return NextResponse.json(data);
}