import { ImageResponse } from '@vercel/og';
import type { RequestContext } from "@vercel/edge";

export const config = {
    matcher: "/Icons/:path*",
    runtime: 'edge',
};
const baseUrl = "https://vue-portfolio-taupe.vercel.app"

export default async function handler(request: Request, context:RequestContext) {
    // if(request.method ==="GET"){
    //     if(request.url ===baseUrl+"/api/discord.png"){
    //         const imageData = await fetch(new URL('./Icons/discord.png', import.meta.url)).then(
    //             (res) => res.arrayBuffer(),
    //         );
    //         new ImageResponse((
    //             <image width="96px" height="96px" src={imageData}/>
    //         ))
    //     }else if(request.url === baseUrl +"/api/github.png"){
    //         const imageData = await fetch(new URL('./Icons/github.png', import.meta.url)).then(
    //             (res) => res.arrayBuffer(),
    //         );
    //         new ImageResponse((
    //             <image width="96px" height="96px" src={imageData}/>
    //         ))
    //     }else if(request.url === baseUrl +"/api/linkedin.png"){
    //         const imageData = await fetch(new URL('./Icons/linkedin.png', import.meta.url)).then(
    //             (res) => res.arrayBuffer(),
    //         );
    //         new ImageResponse((
    //             <image width="96px" height="96px" src={imageData}/>
    //         ))
    //     }else if(request.url === baseUrl +"/api/twitter.png"){
    //         const imageData = await fetch(new URL('./Icons/twitter.png', import.meta.url)).then(
    //             (res) => res.arrayBuffer(),
    //         );
    //         new ImageResponse((
    //             <image width="96px" height="96px" src={imageData}/>
    //         ))
    //     }else{
    //         const imageData = await fetch(new URL('./Icons/null.png', import.meta.url)).then(
    //             (res) => res.arrayBuffer(),
    //         );
    //         new ImageResponse((
    //             <image width="96px" height="96px" src={imageData}/>
    //         ))
    //     }
    // }
}