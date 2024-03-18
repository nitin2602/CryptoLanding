import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Theme/theme';
import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/source-sans-pro/400.css"; // Specify weight

import "@fontsource/source-sans-pro/600.css"; // Specify weight
import "@fontsource/source-sans-pro/700.css"; // Specify weight
import "@fontsource/source-sans-pro/400-italic.css"; // Specify weight and style

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />

    </ChakraProvider>
  </React.StrictMode>,
)
