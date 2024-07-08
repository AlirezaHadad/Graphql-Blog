import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import theme from './mui/theme.js'

import { BrowserRouter } from 'react-router-dom'


const client = new ApolloClient({
  uri : "https://api-ca-central-1.hygraph.com/v2/clxyw5rz402ea07wax1087aiz/master" ,
  cache : new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>  
)
