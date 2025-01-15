/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://gurpinders009.vercel.app/',
    generateRobotsTxt: true,
    sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ]
    }
}