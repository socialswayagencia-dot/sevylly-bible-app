import './globals.css'

export const metadata = {
  title: 'Evylly — Métodos de Estudo',
  description: 'App de estudo bíblico com Pomodoro e métodos de aprendizagem'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
