import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'

window.Telegram?.WebApp.ready();
window.Telegram?.WebApp.expand();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
