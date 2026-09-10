import type { Metadata, Viewport } from "next";
import { getSession } from "@/lib/auth";
import { SyncProvider } from "@/components/SyncProvider";
import { Shell } from "@/components/Shell";
import { Login } from "@/components/Login";
import { KitchenProvider, TimerProvider } from "@/components/Kitchen";
import "./globals.css";

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
    { media: "(prefers-color-scheme: light)", color: "#f2f2f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  return (
    <html lang="en">
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
