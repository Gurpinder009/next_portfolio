
export default function robots(){
    return {
        rules :[
            {
                userAgent:"*",
                allow:"/",
                disallow:["/admin","privacy"]
            }
        ],
        sitemap: "https://gsdesigns.vercel.app/sitemap.xml"
    }
}