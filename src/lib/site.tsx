import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { siteContent, ui, type L, type Lang } from "@/content/siteContent";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "sq", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sq");
  useEffect(() => {
    const saved = localStorage.getItem("atlas-lang");
    if (saved === "en" || saved === "sq") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  // In-page links (#sherbimet, #galeria, …) scroll smoothly but leave the URL clean (no "#…" added).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = decodeURIComponent(a.getAttribute("href")!.slice(1));
      const target = id ? document.getElementById(id) : document.body;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("atlas-lang", l);
  };
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  const t = (l: L) => l[ctx.lang] || l.sq;
  return { ...ctx, t };
}

export function waLink(lang: Lang, service?: string) {
  const base = ui.waMessage[lang];
  const text = service ? `${base} ${ui.waFor[lang]} ${service}.` : `${base}.`;
  return `https://wa.me/${siteContent.business.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Adds `is-visible` when the element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    if (el.classList.contains("reveal")) io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "li" | "article" }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}