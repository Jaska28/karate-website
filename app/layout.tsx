import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
    title: "Jean-Simon Cyr | Kataté",
    description: "Cours privés de karaté à Sherbrooke, projets éducatifs et jeux d'apprentissage.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="min-h-full flex flex-col">
            <Header/>
            <div className="pageContent">{children}</div>
            <Footer/>
        </body>
        </html>
    );
}
