import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./library/registry";
import ClientLayout from "./clientlayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoTherapy",
  description: "An upcoming therapy service from a genius in Jos",
};

export default function RootLayout({ children }) {
  return (
   <ClientLayout children={children}/>
  );
}
