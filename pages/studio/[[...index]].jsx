import Head from 'next/head'
import {NextStudio} from 'next-sanity/studio'
import config from '../../sanity.config'


// Start the Studio in "dark mode" by defaulting styled-components global styles
// if you have them, or just rely on Sanity's default.

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Portfolio Blog Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <style dangerouslySetInnerHTML={{__html: `
          /* Reset global styles that might interfere with Studio */
          body { 
            margin: 0; 
            padding: 0; 
            overflow: auto !important; 
            background-color: white !important;
            color: black !important;
          }
          /* Ensure studio takes full height */
          html, body, #__next { height: 100%; }
        `}} />
      </Head>
      
      <div style={{height: '100vh', width: '100vw'}}>
         <NextStudio config={config} />
      </div>
    </>
  )
}
