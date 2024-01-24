
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css'
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;



export const metadata = {
  title: 'GSDESGINS',
  description: 'Generated by create next app',
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



// <FontAwesomeIcon
// icon={faMagnifyingGlass}
// />