import { Navbar } from "@/components/Navbar/Navbar";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import MobileMenu from "@/components/Navbar/MobileMenu";
import DesktopMenu from "@/components/Navbar/DesktopMenu";

import "./globals.scss";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Brows Studio In-Brows",
  description:
    "Odkryj naszą platformę z usługami laminacji, stylizacji brwi i rzęs oraz permanentnym makijażem. Dołącz do nas i podkreśl swoje naturalne piękno!",
};

export default async function RootLayout({ children, contact_form, params: { lang } }) {
  return (
    <html lang={lang}>
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar>
          <MobileMenu pageLanguage={lang} />
          <DesktopMenu pageLanguage={lang} />
        </Navbar>
        <main className="main-content">{children}</main>
        <Footer pageLanguage={lang} />
        { contact_form }
      </body>
    </html>
  );
}
