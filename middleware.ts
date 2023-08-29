import type { RequestContext } from "@vercel/edge";
import { geolocation } from "@vercel/edge";
import { get } from "@vercel/edge-config";

export const config = { matcher: "/api/:path*", runtime: "edge" };

const baseUrl = "https://vue-portfolio-taupe.vercel.app"

export default async function handler(request: Request, context: RequestContext) {
  if (request.method === "GET") {
    //* Repos page
    if (request.url === baseUrl+"/api/repos") {
      const Repos = await GetRepos();
      return new Response(JSON.stringify(Repos));
    } 
    //* About Page
    else if (request.url === baseUrl+"/api/about") {
      const { country } = geolocation(request);
      const about = await getAbout(country || "")
      return new Response(JSON.stringify(about));
    } 
    //* Contact Page
    else if (request.url === baseUrl+"/api/contact") {
      const contacts = await getContacts();
      return new Response(JSON.stringify(contacts));
    } 
    //* Any page
    else {
      return new Response(`Hello, from ${request.url} I'm an Edge Function!`);
    }
  }
}
//* get repo data func
const GetRepos = async (): Promise<Object[]> => {
  const res = await fetch(
    "https://gh-pinned-repos.egoist.dev/?username=CilginSinek"
  ).then((response) => response.json());
  return res;
};
//* get contact data fuc
const getContacts = async (): Promise<Object> => {
  const contacts: Object[] = (await get("contact")) || [{}];
  return contacts;
};
//* get About info
const getAbout = async (location: string): Promise<String> => {
  const About: string =
    (await get(location === "TR" ? "hakkimda" : "aboutMe")) ||
    "Edge-configs connection has lost.";
  return About;
};
