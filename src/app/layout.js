import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PlanProvider } from "./components/PlanProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-right" />
        </PlanProvider>
      </body>
    </html>
  );
}
