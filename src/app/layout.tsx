import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="fundo">
        <nav className="navbar-style">
          <div className="navbar-title">
            <h1 className="nome">AAG - CRUD Empresas</h1>
          </div>
        </nav>

        <div className="menu">
          {children}
        </div>

        <footer className="footer-style">
          <p>
            <span className="bold">AAG - Gestão de Empresas</span> &copy; 2024
          </p>
        </footer>
      </body>
    </html>
  );
}
