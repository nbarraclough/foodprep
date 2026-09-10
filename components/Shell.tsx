"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { useSync } from "./SyncProvider";

const NAV = [
  { href: "/", label: "Plan", icon: "plan" },
  { href: "/recipes", label: "Recipes", icon: "recipes" },
  { href: "/cook-days", label: "Cook days", icon: "days" },
  { href: "/shopping", label: "Shopping", icon: "shop" },
  { href: "/reheat", label: "Reheat", icon: "reheat" },
] as const;

function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  switch (name) {
    case "plan":
      return (
        <svg viewBox="0 0 24 24" {...p} aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "recipes":
      return (
        <svg viewBox="0 0 24 24" {...p} aria-hidden>
          <path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z" />
        </svg>
      );
    case "days":
      return (
        <svg viewBox="0 0 24 24" {...p} aria-hidden>
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l3 2M9 2h6" />
        </svg>
      );
    case "shop":
      return (
        <svg viewBox="0 0 24 24" {...p} aria-hidden>
          <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2" />
          <circle cx="10" cy="20" r="1.3" />
          <circle cx="17" cy="20" r="1.3" />
        </svg>
      );
    case "reheat":
      return (
        <svg viewBox="0 0 24 24" {...p} aria-hidden>
          <path d="M8 3c0 2-2 3-2 5s2 3 2 5M13 3c0 2-2 3-2 5s2 3 2 5" />
          <path d="M4 16h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        </svg>
      );
    default:
      return null;
  }
}

function isCurrent(path: string, href: string) {
  return href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
}

export function Shell({ name, children }: { name: string; children: ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const { status, lastSync } = useSync();

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    try {
      localStorage.removeItem("foodprep:ticks:v1");
    } catch {
      /* ignore */
    }
    router.refresh();
  }

  const statusText =
    status === "live"
      ? "Synced"
      : status === "syncing"
        ? "Saving…"
        : status === "offline"
          ? "Offline, will retry"
          : "Connecting…";

  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="wordmark">
            <svg className="snow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
            </svg>
            The October Freezer
          </Link>
          <nav className="tabs" aria-label="Sections">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isCurrent(path, n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <Link href="/print" aria-current={isCurrent(path, "/print") ? "page" : undefined}>
              Print
            </Link>
          </nav>
          <div className="topbar-right">
            <span className="sync" data-status={status} title={lastSync ? `Last synced ${new Date(lastSync).toLocaleTimeString()}` : undefined}>
              <span className="dot" aria-hidden />
              <span className="small">{statusText}</span>
            </span>
            <span className="who" title={name ? `Signed in as ${name}` : undefined}>
              {name && (
                <span className="avatar" aria-label={name}>
                  {name[0].toUpperCase()}
                </span>
              )}
              <button type="button" className="linkbtn small" onClick={logout}>
                Sign out
              </button>
            </span>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <nav className="bottombar" aria-label="Sections">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} aria-current={isCurrent(path, n.href) ? "page" : undefined}>
            <Icon name={n.icon} />
            {n.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
