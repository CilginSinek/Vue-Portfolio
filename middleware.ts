import type { RequestContext } from "@vercel/edge";
import { get } from "@vercel/edge-config";

export const config = { matcher: "/api/:path*", runtime: "edge" };

const baseUrl = "https://www.sinek.dev"

export default async function handler(request: Request, context: RequestContext) {
  if (request.method === "GET") {
    //* Repos page
    if (request.url === baseUrl+"/api/repos") {
      const Repos = await GetRepos();
      return new Response(JSON.stringify(Repos));
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
//* get contact data fuc
const getContacts = async (): Promise<Object> => {
  const contacts: Object[] = (await get("contact")) || [{}];
  return contacts;
};
//* get repo data func
const GetRepos = async (): Promise<Object[]> => {
  const res = await fetch(
    "https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=CilginSinek"
  ).then((response) => response.json());
  return res;
};
