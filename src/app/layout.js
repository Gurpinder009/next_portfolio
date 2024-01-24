import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css'


export const metadata = {
  title: {
    default:"GSDESIGNS"
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



