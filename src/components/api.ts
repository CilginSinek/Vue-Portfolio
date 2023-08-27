const name ="CilginSinek"
const RepoLink = "PortfolioText" // this link = api.github/repos/contects/{RepoLink}/
interface PinnedRepos {
    owner:string,
    repo:string,
    link:string,
    image:string,
    language:string,
    languageColor:string,
    stars:string,
    forks:string
}
export { name, RepoLink }
export type { PinnedRepos }
