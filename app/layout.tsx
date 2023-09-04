import './globals.css'

export const metadata = {
  title: 'Qaisar-Hussain',
  description: 'Resume Site Of Mr. Qaisar Hussain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
