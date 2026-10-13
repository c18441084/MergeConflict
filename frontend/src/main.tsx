//This is the first file loaded when the project starts up

import { StrictMode } from 'react' //Makes sure app is being extra strict on code, produces warnings
import { createRoot } from 'react-dom/client' //Looks for Root ID in HTML
import App from './App.tsx'
import "tailwindcss";

//"!" means you know this element exists so can't be null
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
