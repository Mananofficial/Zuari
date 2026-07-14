import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import './index.css'
import { ContactProvider } from './contexts/contact.context'
import PrivacyNotice from './components/PrivacyNotice'

function App() {

  return (
    <>
      <ContactProvider>
        <RouterProvider router={router} />
        <PrivacyNotice />
      </ContactProvider>
    </>
  )
}

export default App