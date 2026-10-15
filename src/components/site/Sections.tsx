import { useEffect, useRef, useState } from "react";
import { Award, ChevronLeft, ChevronRight, Clock3, ExternalLink, Mail, MapPin, Phone, UserRound, X, Sparkles, ShieldCheck, Home, HeartHandshake, Target, Microscope } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { siteContent } from "@/content/siteContent";
import { useLang, useReveal } from "@/lib/site";
import { CtaButtons, SectionHead } from "./Cta";
import { FacebookIcon, InstagramIcon } from "./icons";
import { Logo, SocialLinks } from "./Header";

const benefitIcons = [HeartHandshake, ShieldCheck, Home, Sparkles, Target, Microscope];

export function Why() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  return (
    <section id="pse-atlas" ref={ref} className="section-y bg-muted/60">
      <div className="container-site">
        <SectionHead center eyebrow={t({ sq: "Pse ATLAS", en: "Why ATLAS" })} title={t({ sq: "Më shumë se një trajtim. Një përkushtim.", en: "More than a treatment. A commitment." })} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.map((b, i) => {
            const Icon = benefitIcons[i % benefitIcons.length]!;
            return (
              <li key={b.title.sq} className="reveal card-lift rounded-3xl border border-border bg-card p-7 shadow-soft" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary"><Icon className="size-5" /></span>
                <h3 className="mt-5 text-lg font-semibold">{t(b.title)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(b.copy)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Credentials() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  if (!siteContent.credentials.length) return null;
  return (
    <section ref={ref} className="section-y">
      <div className="container-site">
        <SectionHead eyebrow={t({ sq: "Certifikime", en: "Credentials" })} title={t({ sq: "Besimi ndërtohet me prova.", en: "Trust is built on proof." })} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.credentials.map((c) => (
            <li key={c.title.sq} className="reveal flex gap-4 rounded-2xl border border-border bg-card p-5"><Award className="size-6 shrink-0 text-accent-foreground" /><div><strong>{t(c.title)}</strong>{c.issuer && <p className="text-sm text-muted-foreground">{t(c.issuer)}</p>}</div></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FirstVisit() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  const listRef = useRef<HTMLOListElement>(null);
  const steps = siteContent.firstVisit;
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setShown(steps.length);
    const timers: number[] = [];
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      steps.forEach((_, i) => timers.push(window.setTimeout(() => setShown(i + 1), i * 350)));
    }, { threshold: 0.25 });
    io.observe(el);
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, [steps.length]);
  const fill = steps.length > 1 ? Math.max(0, (shown - 1) / (steps.length - 1)) * 100 : 0;
  return (
    <section ref={ref} className="section-y">
      <div className="container-site">
        <SectionHead eyebrow={t({ sq: "Vizita e parë", en: "Your first visit" })} title={t({ sq: "Çfarë të prisni në vizitën e parë", en: "What to expect at your first visit" })} />
        <ol ref={listRef} className="relative mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <span aria-hidden className="absolute left-5 top-5 bottom-5 w-0.5 bg-border lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:h-0.5 lg:w-auto" />
          <span aria-hidden className="absolute left-5 top-5 w-0.5 bg-primary transition-all duration-500 ease-out lg:hidden" style={{ height: `calc((100% - 2.5rem) * ${fill / 100})` }} />
          <span aria-hidden className="absolute left-[12.5%] top-5 hidden h-0.5 bg-primary transition-all duration-500 ease-out lg:block" style={{ width: `calc(75% * ${fill / 100})` }} />
          {steps.map((s, i) => {
            const on = i < shown;
            return (
              <li key={s.title.sq} className={`relative flex gap-5 transition-all duration-500 lg:flex-col lg:items-center lg:text-center ${on ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
                <span className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full font-display font-semibold transition-colors duration-500 ${on ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"}`}>{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold">{t(s.title)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(s.copy)}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Gallery() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  const g = siteContent.gallery;
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    if (idx === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % g.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + g.length) % g.length);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [idx, g.length]);
  const cur = idx !== null ? g[idx] : undefined;
  if (!g.length) return null;
  return (
    <section id="galeria" ref={ref} className="section-y">
      <div className="container-site">
        <SectionHead eyebrow={t({ sq: "Galeria", en: "Gallery" })} title={t({ sq: "Njihuni me hapësirën tonë.", en: "Get to know our space." })} />
        <ul className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {g.map((img, i) => (
            <li key={i} className={`reveal ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`} style={{ transitionDelay: `${i * 90}ms` }}>
              <button type="button" onClick={() => setIdx(i)} className="group relative size-full overflow-hidden rounded-3xl" aria-label={t(img.alt)}>
                <img src={img.src} alt={t(img.alt)} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute bottom-4 left-4 rounded-full bg-card/90 px-4 py-1.5 text-sm font-semibold backdrop-blur">{t(img.label)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Dialog open={idx !== null} onOpenChange={(o) => !o && setIdx(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none [&>button]:hidden">
          {cur && (
            <figure className="relative">
              <DialogTitle className="sr-only">{t(cur.alt)}</DialogTitle>
              <img src={cur.src} alt={t(cur.alt)} className="max-h-[80vh] w-full rounded-3xl object-contain" />
              <figcaption className="mt-3 text-center text-sm text-primary-foreground">{t(cur.label)} · {(idx ?? 0) + 1}/{g.length}</figcaption>
              <button onClick={() => setIdx(((idx ?? 0) - 1 + g.length) % g.length)} className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-card shadow-lift" aria-label={t({ sq: "Foto e mëparshme", en: "Previous photo" })}><ChevronLeft /></button>
              <button onClick={() => setIdx(((idx ?? 0) + 1) % g.length)} className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-card shadow-lift" aria-label={t({ sq: "Foto tjetër", en: "Next photo" })}><ChevronRight /></button>
              <button onClick={() => setIdx(null)} className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-card shadow-lift" aria-label={t({ sq: "Mbyll", en: "Close" })}><X className="size-5" /></button>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function Team() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  if (!siteContent.team.length) return null;
  return (
    <section ref={ref} className="section-y bg-muted/60">
      <div className="container-site">
        <SectionHead center eyebrow={t({ sq: "Ekipi", en: "Team" })} title={t({ sq: "Njihuni me ekipin.", en: "Meet the team." })} intro={t({ sq: "Një ekip i vogël, me vëmendje të madhe dhe përkushtim ndaj rikuperimit tuaj.", en: "A small team with great attention and dedication to your recovery." })} />
        <ul className="mt-12 mx-auto grid max-w-3xl justify-center gap-6 sm:grid-cols-2">
          {siteContent.team.map((m, i) => (
            <li key={m.name} className="reveal overflow-hidden rounded-3xl border border-border bg-card shadow-soft" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="aspect-[4/3] bg-secondary">
                {m.photo ? <img src={m.photo} alt={m.name} loading="lazy" className="size-full object-cover object-top" /> : <div className="grid size-full place-items-center text-primary/40"><UserRound className="size-20" strokeWidth={1.2} /></div>}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-foreground">{t(m.role)}</p>
                {t(m.bio) && <p className="mt-3 text-sm leading-6 text-muted-foreground">{t(m.bio)}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { t } = useLang();
  const list = siteContent.testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (list.length < 2 || paused) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % list.length), 6000);
    return () => window.clearInterval(id);
  }, [list.length, paused]);
  const cur = list[i];
  if (!cur) return null;
  return (
    <section className="section-y">
      <div className="container-site text-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        <SectionHead center eyebrow={t({ sq: "Fjalët e klientëve", en: "What clients say" })} title={t({ sq: "Përvoja e pacientëve tanë", en: "Our patients' experience" })} />
        <blockquote className="mx-auto mt-10 max-w-2xl" aria-live="polite">
          <p className="font-display text-2xl leading-snug">“{t(cur.quote)}”</p>
          <footer className="mt-4 text-sm font-semibold text-muted-foreground">— {cur.name}</footer>
        </blockquote>
        {list.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {list.map((q, k) => (
              <button key={k} type="button" onClick={() => setI(k)} aria-label={`${k + 1}/${list.length}`} aria-current={k === i} className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function Social() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  const s = siteContent.socials;
  return (
    <section ref={ref} className="section-y bg-muted/60">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow={t({ sq: "Na ndiqni", en: "Follow us" })} title={t({ sq: "Na ndiqni në rrjete sociale", en: "Follow us on social media" })} />
          <div className="reveal flex flex-wrap gap-3">
            <a href={s.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-deep"><InstagramIcon className="size-4" />{s.instagram.handle}</a>
            <a href={s.facebook.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary hover:text-primary"><FacebookIcon className="size-4" />Facebook</a>
          </div>
        </div>
        {(() => { const posts = siteContent.socialPosts.filter((p) => p.real); return siteContent.socialFeedWidgetUrl ? (
          <iframe src={siteContent.socialFeedWidgetUrl} title="Social feed" loading="lazy" className="mt-10 h-[640px] w-full rounded-3xl border-0" />
        ) : posts.length > 0 ? (
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {posts.map((p, i) => {
              const Icon = p.platform === "facebook" ? FacebookIcon : InstagramIcon;
              return (
                <li key={i} className="reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="card-lift group block overflow-hidden rounded-2xl bg-card shadow-soft">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={p.image} alt={t(p.alt)} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-card/90 text-primary"><Icon className="size-4" /></span>
                    </div>
                    <p className="flex items-start justify-between gap-2 p-3 text-xs leading-5 text-muted-foreground sm:text-sm">{t(p.caption)}<ExternalLink className="mt-0.5 size-3.5 shrink-0" /></p>
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="reveal mt-8 max-w-xl text-muted-foreground">{t({ sq: "Ndiqni ATLAS në Instagram dhe Facebook për këshilla, ushtrime dhe të reja nga klinika.", en: "Follow ATLAS on Instagram and Facebook for tips, exercises and clinic news." })}</p>
        ); })()}
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  return (
    <section id="pyetje" ref={ref} className="section-y">
      <div className="container-site grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><SectionHead eyebrow={t({ sq: "Pyetje të shpeshta", en: "FAQ" })} title={t({ sq: "Përgjigje para se të vini", en: "Answers before you visit" })} /><div className="reveal mt-8"><CtaButtons /></div></div>
        <Accordion type="single" collapsible className="reveal">
          {siteContent.faq.map((f, i) => (
            <AccordionItem key={i} value={`q${i}`}>
              <AccordionTrigger className="py-5 text-left text-base font-semibold">{t(f.q)}</AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-foreground">{t(f.a)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  const b = siteContent.business;
  return (
    <section id="kontakt" ref={ref} className="section-y bg-muted/60">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow={t({ sq: "Kontakt", en: "Contact" })} title={t({ sq: "Le ta nisim bisedën.", en: "Let's start the conversation." })} intro={t({ sq: "Keni pyetje? Jemi këtu për t'ju dëgjuar dhe për t'ju ndihmuar të gjeni hapin e duhur.", en: "Have a question? We're here to listen and help you find the right next step." })} />
          <ul className="reveal mt-8 space-y-4">
            <li className="flex gap-4"><MapPin className="size-5 shrink-0 text-primary" /><div><strong className="block text-sm">{t({ sq: "Adresa", en: "Address" })}</strong><a href={b.mapLink} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">{b.address.street}, {b.address.city}</a><a href={b.mapLink} target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-sm font-semibold text-primary hover:underline">{t({ sq: "Merr drejtimet", en: "Get directions" })}<ExternalLink className="size-3.5" /></a></div></li>
            <li className="flex gap-4"><Phone className="size-5 shrink-0 text-primary" /><div><strong className="block text-sm">{t({ sq: "Telefoni / WhatsApp", en: "Phone / WhatsApp" })}</strong><a href={b.phoneHref} className="text-muted-foreground hover:text-primary">{b.phoneDisplay}</a></div></li>
            {b.email && <li className="flex gap-4"><Mail className="size-5 shrink-0 text-primary" /><div><strong className="block text-sm">Email</strong><a href={`mailto:${b.email}`} className="text-muted-foreground hover:text-primary">{b.email}</a></div></li>}
            {b.hours.length > 0 && <li className="flex gap-4"><Clock3 className="size-5 shrink-0 text-primary" /><div><strong className="block text-sm">{t({ sq: "Orari", en: "Hours" })}</strong>{b.hours.map((h) => <p key={h.days.sq} className="text-muted-foreground">{t(h.days)}: {h.time}</p>)}</div></li>}
          </ul>
          <div className="reveal mt-8 space-y-5"><CtaButtons showCall /><SocialLinks /></div>
        </div>
        <div className="reveal min-h-[360px] overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe src={b.mapEmbed} title={t({ sq: "Harta e lokacionit të ATLAS në Viti", en: "Map of ATLAS location in Viti" })} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full min-h-[360px] border-0" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  const b = siteContent.business;
  return (
    <footer className="bg-deep pb-24 pt-14 text-primary-foreground md:pb-10">
      <div className="container-site grid gap-8 md:grid-cols-3">
        <div><Logo light /><p className="mt-4 max-w-xs text-sm text-primary-foreground/70">{t({ sq: "Fizioterapi e kujdesshme për lëvizje më të mirë dhe mirëqenie të përditshme.", en: "Careful physiotherapy for better movement and everyday wellbeing." })}</p></div>
        <div className="text-sm text-primary-foreground/80"><p>{b.address.street}, {b.address.city}</p><a href={b.phoneHref} className="mt-1 block hover:text-primary-foreground">{b.phoneDisplay}</a>{b.email && <a href={`mailto:${b.email}`} className="mt-1 block">{b.email}</a>}</div>
        <div className="md:justify-self-end"><SocialLinks light /></div>
      </div>
      <p className="container-site mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">© {new Date().getFullYear()} ATLAS Fizioterapi. {t({ sq: "Të gjitha të drejtat e rezervuara.", en: "All rights reserved." })}</p>
    </footer>
  );
}