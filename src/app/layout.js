import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css'


export const metadata = {
  metadataBase: new URL('https://gsdesigns.vercel.app'),
  title: {
    default:"GSDESIGNS"
  },
 
  openGraph:{
    image: 'https://gsdesign.vercel.app/opengraph-image.png',
    title:"GSDESIGNS",
    description:"My name is Gurpinder Singh, a Frontend React developer. Visit my portfolio site for more information"
  },
  keywords:["Gurpinder Singh","Gurpinder Singh React developer","Gurpinder Singh Frontend developer"],
  description: 'My name is Gurpinder Singh, a Frontend React developer. Visit my portfolio site for more information ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}



