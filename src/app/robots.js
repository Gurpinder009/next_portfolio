
export default function robots(){
    return {
        rules :[
            {
                userAgent:"*",
                allow:"/",
                disallow:["/admin","privacy"]
            }
        ],
        sitemap: "https://gurpinders009.vercel.app"
    }
}