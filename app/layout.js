import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Photo Feed",
  description: "Photo feed app built with Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container my-4 lg:my-8">
          {children}
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
