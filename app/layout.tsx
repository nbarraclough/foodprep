import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import { getSession } from "@/lib/auth";
import { SyncProvider } from "@/components/SyncProvider";
import { Shell } from "@/components/Shell";
import { Login } from "@/components/Login";
import { KitchenProvider, TimerProvider } from "@/components/Kitchen";
import "./globals.css";

const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "The October Freezer", template: "%s · The October Freezer" },
  description: "Freezer plan for the baby due 4 October: recipes, cook days, shopping and reheating.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f161c" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        {session ? (
          <SyncProvider me={session.name}>
            <KitchenProvider>
              <TimerProvider>
                <Shell name={session.name}>{children}</Shell>
              </TimerProvider>
            </KitchenProvider>
          </SyncProvider>
        ) : (
          <Login />
        )}
      </body>
    </html>
  );
}
