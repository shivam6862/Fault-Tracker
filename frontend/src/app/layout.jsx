"use client";
import "../styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import { MetamaskProvider } from "@/utils/useMetamask";
import { NotificationContextProvider } from "@/store/notification/Notification-context";
import Notifications from "@/components/notification/Notifications";

// export const metadata = {
//   title: "Fault Tracker",
//   description: "Fault Tracker",
//   icons: { icon: "/logo.jpg" },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MetamaskProvider>
          <NotificationContextProvider>
            {/* <Header /> */}
            {children}
            <Notifications />
          </NotificationContextProvider>
        </MetamaskProvider>
      </body>
    </html>
  );
}
