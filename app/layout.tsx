import { Toaster } from "./components/ui/toaster"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Your Name - Full Stack Developer",
  description: "Professional portfolio of Your Name, a full stack developer specializing in web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster />
        </body>
    </html>
  )
}

