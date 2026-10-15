import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent, ui } from "@/content/siteContent";
import { useLang, waLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#ballina" className="flex items-center gap-2.5" aria-label="ATLAS Fizioterapi">
      <img src={light ? "/logo-mark-white.svg" : "/logo-mark.svg"} alt="" width={40} height={40} className="size-10 shrink-0" />
      <span className="leading-none">
        <span className="font-display block text-xl font-semibold">ATLAS</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Fizioterapi</span>
      </span>
    </a>
  );
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border border-border bg-card p-0.5 text-xs font-bold" role="group" aria-label="Gjuha / Language">
      {(["sq", "en"] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l} className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
          {l === "sq" ? "AL" : "EN"}
        </button>
      ))}
    </div>
  );
}

export function SocialLinks({ light = false }: { light?: boolean }) {
  const cls = `grid size-9 place-items-center rounded-full transition-colors ${light ? "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"}`;
  return (
    <div className="flex gap-2">
      <a href={siteContent.socials.instagram.url} target="_blank" rel="noreferrer" className={cls} aria-label="Instagram"><InstagramIcon className="size-4" /></a>
      <a href={siteContent.socials.facebook.url} target="_blank" rel="noreferrer" className={cls} aria-label="Facebook"><FacebookIcon className="size-4" /></a>
    </div>
  );
}

export function Header() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const n = ui.nav;
  const items: [string, string][] = [["#rreth-nesh", t(n.about)], ["#sherbimet", t(n.services)], ["#pse-atlas", t(n.why)], ["#rezervo", t(n.booking)], ["#galeria", t(n.gallery)], ["#pyetje", t(n.faq)], ["#kontakt", t(n.contact)]];

  return (
    <>
      <div className="bg-brand-deep text-xs text-primary-foreground/85">
        <div className="container-site flex h-9 items-center justify-between gap-4">
          <span className="truncate">{t({ sq: "Terminet caktohen vetëm me WhatsApp ose telefon", en: "Appointments by WhatsApp or phone only" })}</span>
          <a href={siteContent.business.phoneHref} className="shrink-0 font-semibold text-primary-foreground hover:underline">{siteContent.business.phoneDisplay}</a>
        </div>
      </div>
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-shadow duration-300 ${scrolled ? "border-border bg-background/90 shadow-soft" : "border-transparent bg-background/70"}`}>
        <div className="container-site flex h-[72px] items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-6 xl:flex" aria-label={t({ sq: "Navigimi kryesor", en: "Main navigation" })}>
            {items.map(([h, l]) => <a key={h} href={h} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{l}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:block"><SocialLinks /></div>
            <LangToggle />
            <a href={waLink(lang)} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-deep sm:inline-flex"><WhatsAppIcon className="size-4" />{t(ui.bookWa)}</a>
            <button type="button" className="rounded-full p-2 xl:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t({ sq: "Mbyll menunë", en: "Close menu" }) : t({ sq: "Hap menunë", en: "Open menu" })} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav id="mobile-menu" className="container-site flex flex-col gap-1 border-t border-border bg-background py-4 xl:hidden">
            {items.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-medium hover:bg-secondary">{l}</a>)}
            <div className="mt-3 flex items-center justify-between px-3"><SocialLinks /><a href={siteContent.business.phoneHref} className="font-semibold text-primary">{siteContent.business.phoneDisplay}</a></div>
          </nav>
        )}
      </header>
    </>
  );
}
