import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Srisailam Prajvalitha | AI & Software Engineering",
  description:
    "Personal website of Srisailam Prajvalitha, Computer Science and Artificial Intelligence student at Madanapalle Institute of Technology and Science. Focused on building practical intelligent systems across computer vision, machine learning, RAG, and software engineering.",
  keywords: [
    "Srisailam Prajvalitha",
    "Software Engineer",
    "AI Engineer",
    "Computer Science",
    "Artificial Intelligence",
    "Computer Vision",
    "RAG",
    "Machine Learning",
    "MITS",
  ],
  authors: [{ name: "Srisailam Prajvalitha" }],
  openGraph: {
    title: "Srisailam Prajvalitha | AI & Software Engineering",
    description:
      "Personal website of Srisailam Prajvalitha, Computer Science and Artificial Intelligence student at Madanapalle Institute of Technology and Science.",
    url: "https://github.com/prajju661",
    siteName: "Srisailam Prajvalitha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srisailam Prajvalitha | AI & Software Engineering",
    description:
      "Personal website of Srisailam Prajvalitha, Computer Science and Artificial Intelligence student at Madanapalle Institute of Technology and Science.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#E7E9E8] text-[#172126] font-sans antialiased selection:bg-[#123F46] selection:text-[#F4F3EF] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
