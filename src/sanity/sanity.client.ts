
import { createClient, type ClientConfig } from "next-sanity";


export const SanityClient:ClientConfig = {
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion:'2025-01-12',
    useCdn:false
}
export default createClient(SanityClient)