import { useEffect, useRef, useState } from "react";
import { Check, HeartPulse } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { useLang, useReveal } from "@/lib/site";
import { CtaButtons } from "./Cta";
import ambienti from "@/gallery/ambienti.jpg";
import baba from "@/gallery/BAZA.png";
export function Hero() {
  const { t } = useLang();
  return (
    <section id="ballina" className="bg-hero relative">
      <div className="container-site grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_.95fr]">
        <div className="hero-in max-w-2xl">
          <p className="eyebrow"><span className="size-1.5 rounded-full bg-sage" />{t({ sq: "Fizioterapi në Viti", en: "Physiotherapy in Viti" })}</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            {t({ sq: "Lëvizni lirshëm.", en: "Move freely." })}<br />
            <span className="italic text-primary">{t({ sq: "Jetoni plotësisht.", en: "Live fully." })}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">{t({ sq: "Fizioterapi e përkushtuar dhe kujdes individual për t'ju ndihmuar të ndiheni më mirë në trupin tuaj — çdo ditë.", en: "Dedicated physiotherapy and individual care to help you feel better in your body — every day." })}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5"><CtaButtons /><a href="#sherbimet" className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline">{t({ sq: "Shërbimet", en: "Services" })} →</a></div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            {[{ sq: "Qasje profesionale", en: "Professional approach" }, { sq: "Kujdes individual", en: "Individual care" }, { sq: "Ambient modern", en: "Modern setting" }].map((x) => (
              <li key={x.sq} className="flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-sage-soft text-accent-foreground"><Check className="size-3" /></span>{t(x)}</li>
            ))}
          </ul>
        </div>
        <div className="hero-in relative [animation-delay:150ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/5]">
            <img src={baba} alt={t({ sq: "Fizioterapist duke udhëhequr një ushtrim lëvizjeje", en: "Physiotherapist guiding a movement exercise" })} className="size-full object-cover" fetchPriority="high" />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-card p-4 pr-6 shadow-lift sm:left-[-1.5rem]">
            <span className="grid size-10 place-items-center rounded-full bg-sage-soft text-accent-foreground"><HeartPulse className="size-5" /></span>
            <span><strong className="block text-sm">{t({ sq: "Kujdes që fillon me dëgjimin", en: "Care that starts with listening" })}</strong><small className="text-muted-foreground">{t({ sq: "Çdo trup ka historinë e vet", en: "Every body has its own story" })}</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string | undefined }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / 1400);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function About() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();
  const stats = siteContent.stats;
  return (
    <section id="rreth-nesh" ref={ref} className="section-y">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
          <img src={ambienti} alt={t({ sq: "Ambient i ngrohtë i klinikës ATLAS", en: "Warm interior of the ATLAS clinic" })} loading="lazy" className="size-full object-cover" />
        </div>
        <div className="reveal">
          <p className="eyebrow"><span className="size-1.5 rounded-full bg-sage" />{t({ sq: "Rreth ATLAS", en: "About ATLAS" })}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{t({ sq: "Një hapësirë ku rikuperimi ndihet ", en: "A space where recovery feels " })}<em className="text-primary">{t({ sq: "më i afërt.", en: "closer." })}</em></h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{t({ sq: "ATLAS është krijuar për t'ju ofruar një përvojë më të qetë, më të kujdesshme dhe më njerëzore të fizioterapisë. Këtu, çdo seancë fillon me një bisedë dhe vazhdon me një plan të përshtatur për ju.", en: "ATLAS was created to offer a calmer, more careful and more human physiotherapy experience. Here, every session starts with a conversation and continues with a plan tailored to you." })}</p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{t({ sq: "Kjo është hapësira juaj për t'u rikthyer te lëvizja, me ritmin tuaj.", en: "This is your space to return to movement, at your own pace." })}</p>
          {stats.length > 0 && (
            <dl className="mt-9 grid grid-cols-3 gap-5 border-t border-border pt-7">
              {stats.map((s) => (
                <div key={s.label.sq}><dt className="sr-only">{t(s.label)}</dt><dd className="font-display text-3xl font-semibold text-primary"><CountUp to={s.value} suffix={s.suffix} /></dd><dd className="mt-1 text-xs text-muted-foreground">{t(s.label)}</dd></div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
