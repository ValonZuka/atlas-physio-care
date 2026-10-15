/**
 * ALL editable business data for the ATLAS Fizioterapi website lives here.
 * Every text has an Albanian (sq) and English (en) version.
 * Leave a field empty ("" or []) to hide it on the site — nothing placeholder-like is ever rendered.
 */
import hero from "@/assets/atlas-hero.png.asset.json";
import space from "@/assets/atlas-space.png.asset.json";
import treatment from "@/assets/atlas-treatment.png.asset.json";
import fizioterapiaImg from '../gallery/fizioterapia.jpg';
import rehabilitimFiz from '../gallery/rehabilitim-fizik.jpg';
import terapiaMan from '../gallery/terapia-manuale.jpg';
import masazhTer from '../gallery/masazh-terapeutik.jpg';
import rikuperim from '../gallery/rikuperim-pas-lendimeve.jpg';
import dhimbjeMus from '../gallery/dhimbje-muskulore-dhe-artikulare.jpg';
import trajtimShock from '../gallery/trajtimi-me-shockwawe.jpg'
import rehabFill from '../gallery/image.png'
import stenoz from '../gallery/stenoz.png'
import kinesio from '../gallery/kinesio.png'
import sporti from '../gallery/sporti.jpg'
import lazer from '../gallery/lazer.png'
import shtrat from '../gallery/shtrat.jpg'
import kompresion from '../gallery/kompresion.png'
import fizikaleTerapi from '../gallery/fizikaleTerapi.png'
import shockwave from '../gallery/shockwawe.png'
export type L = { sq: string; en: string };
export type Lang = keyof L;

export type ServiceIcon =
  | "stethoscope"
  | "activity"
  | "hand"
  | "waves"
  | "bandage"
  | "bone"
  | "zap";

export const siteContent = {
  business: {
    name: "ATLAS Fizioterapi",
    shortName: "ATLAS",
    phoneDisplay: "045 207 056",
    phoneHref: "tel:+38345207056",
    whatsappNumber: "38345207056",
    email: "", // e.g. "info@atlas-ks.com" — empty hides it
    address: { street: "14 Qershori, përballë Xhamisë", city: "Viti", country: "XK" },
    hours: [] as { days: L; time: string }[], // e.g. [{ days: { sq: "Hën–Sht", en: "Mon–Sat" }, time: "08:00–18:00" }]
    /** Exact clinic coordinates (used for the map and search engines). */
    geo: { lat: 42.3223057, lng: 21.3586494 },
    mapEmbed: "https://www.google.com/maps?q=42.3223057,21.3586494&z=17&output=embed",
    mapLink:
      "https://www.google.com/maps/place/ATLAS+FIZIOTERAPI/@42.3223096,21.3560745,644m/data=!3m1!1e3!4m6!3m5!1s0x135463e56947af7f:0xe2ed2186b4658456!8m2!3d42.3223057!4d21.3586494!16s%2Fg%2F11npl07dfs?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
  },

  socials: {
    instagram: { url: "https://www.instagram.com/atlas.fizioterapi/", handle: "@atlas.fizioterapi" },
    facebook: { url: "https://www.facebook.com/p/ATLAS-Fizioterapi-61591298853529/", handle: "ATLAS Fizioterapi" },
  },

  /** Set a feed widget embed URL (Behold / Elfsight) here later to replace the static grid. */
  socialFeedWidgetUrl: "",
  /**
   * Real social posts only. A post is shown only when `real: true`.
   * When no real posts exist, only the follow buttons are shown.
   * Example: { real: true, platform: "instagram", url: "https://www.instagram.com/p/XXXX/", image: "https://...", caption: { sq: "", en: "" }, alt: { sq: "", en: "" } }
   */
  /**
   * Real social posts only. A post is shown only when `real: true`.
   * When no real posts exist, only the follow buttons are shown.
   */
  socialPosts: [
    {
      real: true,
      platform: "instagram",
      url: "https://www.instagram.com/p/DaBG0WQDMwA/", // Your Instagram link
      image: rehabFill, // A local fallback preview image from your gallery folder
      caption: { 
        sq: "Kujdesi ndaj trupit tuaj fillon me lëvizjen e duhur.", 
        en: "Taking care of your body starts with the right movement." 
      },
      alt: { 
        sq: "Postimi i parë nga klinika në Instagram", 
        en: "First Instagram post from the clinic" 
      }
    },
     {
      real: true,
      platform: "instagram",
      url: "https://www.instagram.com/p/DaiMWWFjBBg/", // Your Instagram link
      image: stenoz, // A local fallback preview image from your gallery folder
      caption: { 
        sq: "Stenozë lumbale – dekompresion kirurgjikal L3–L4 & L4–L5.", 
        en: "Lumbar stenosis – surgical decompression L3–L4 & L4–L5." 
      },
      alt: { 
        sq: "Postimi nga klinika në Instagram", 
        en: "Instagram post from the clinic" 
      }
    },
    {
      real: true,
      platform: "facebook",
      url: "https://www.facebook.com/share/p/1FHN9zVqqr/", // Your Instagram link
      image: kinesio, // A local fallback preview image from your gallery folder
      caption: { 
        sq: "Aplikimi profesional i Kinesio Tape!", 
        en: "Professional application of Kinesio Tape!" 
      },
      alt: { 
        sq: "Postimi nga klinika në Facebook", 
        en: "Facebook post from the clinic" 
      }
    },
     {
      real: true,
      platform: "instagram",
      url: "https://www.instagram.com/p/DbTQC76jIh5/", // Your Instagram link
      image: kompresion, // A local fallback preview image from your gallery folder
      caption: { 
        sq: "Terapi me Kompresion", 
        en: "Therapy with Compression" 
      },
      alt: { 
        sq: "Postimi nga klinika në Instagram", 
        en: "Instagram post from the clinic" 
      }
    },
    {
      real: true,
      platform: "facebook",
      url: "https://www.facebook.com/share/p/19gj3D7tHh/", // Your Instagram link
      image: fizikaleTerapi, // A local fallback preview image from your gallery folder
      caption: { 
        sq: "Terapi fizikale e individualizuar për korrigjim postrual", 
        en: "Individualized physical therapy for postural correction" 
      },
      alt: { 
        sq: "Postimi nga klinika në Facebook", 
        en: "Facebook post from the clinic" 
      }
    },
    {
      real: true,
      platform: "facebook",
      url: "https://www.facebook.com/share/p/19gj3D7tHh/", // Your Instagram link
      image: shockwave, // A local fallback preview image from your gallery folder
      caption: { 
        sq: "Trajtimi me Shockwave ndihmon në reduktimin e dhimbjes", 
        en: "Shockwave therapy helps reduce pain and more" 
      },
      alt: { 
        sq: "Postimi nga klinika në Facebook", 
        en: "Facebook post from the clinic" 
      }
    },
    // You can add more post objects below separating them with commas
  ] as { real: boolean; platform: "instagram" | "facebook"; url: string; image: string; caption: L; alt: L }[],

  /** Leave empty to hide. Only add real, verified numbers. */
  stats: [] as { value: number; suffix?: string; label: L }[],
  /** Leave empty to hide. Only add real certifications. */
  credentials: [] as { title: L; issuer?: L }[],
  /** Leave empty to hide. Only add real client quotes (with permission). */
  testimonials: [] as { quote: L; name: string }[],

  team: [
    { name: "BSc.PT Donat Mehmeti", role: { sq: "Fizioterapeut", en: "Physiotherapist" }, bio: { sq: "", en: "" }, photo: "" },
    { name: "BSc.PT Elizabeta Mehmeti", role: { sq: "Fizioterapeute", en: "Physiotherapist" }, bio: { sq: "", en: "" }, photo: "" },
  ],

  
  gallery: [
    { 
      src: sporti, 
      alt: { sq: "Ambient i qetë i klinikës ATLAS", en: "Calm interior of the ATLAS clinic" }, 
      label: { sq: "Ambient i qetë", en: "A calm space" } 
    },
    { 
      src: lazer, 
      alt: { sq: "Fizioterapeut duke kryer trajtim individual", en: "Physiotherapist giving one-to-one treatment" }, 
      label: { sq: "Kujdes individual", en: "One-to-one care" },
      scale: "115%",            // Scales the image inside the frame to adjust visible area
      position: "center 15%"    // Vertically positions the asset up (e.g., 0% to 30% brings it up)
    },
    { 
      src: shtrat, 
      alt: { sq: "Ushtrim lëvizjeje i udhëhequr", en: "Guided movement exercise" }, 
      label: { sq: "Lëvizje më e mirë", en: "Better movement" } 
    },
  ] as { src: any; alt: L; label: L; scale?: string; position?: string }[], // Definition update allows fields safely


  /** Optional: a real explainer video URL (mp4). When set, it replaces the animated phone demo. */
  bookingVideoUrl: "",

  services: [
    { icon: "stethoscope" as ServiceIcon, title: { sq: "Fizioterapi", en: "Physiotherapy" }, copy: { sq: "Mbështetje profesionale për lëvizje më të mirë dhe mirëqenie të përditshme.", en: "Professional support for better movement and everyday wellbeing." }, details: { sq: "Vlerësim dhe trajtim i përshtatur për të përmirësuar lëvizjen, forcën dhe mirëqenien tuaj të përditshme.", en: "Assessment and tailored treatment to improve your movement, strength and everyday wellbeing." }, image: fizioterapiaImg },
    { icon: "activity" as ServiceIcon, title: { sq: "Rehabilitim fizik", en: "Physical rehabilitation" }, copy: { sq: "Një qasje e strukturuar dhe e përshtatur me nevojat tuaja.", en: "A structured approach adapted to your needs." }, details: { sq: "Program i strukturuar rehabilitimi, i ndërtuar sipas nevojave tuaja dhe ritmit të rikuperimit.", en: "A structured rehabilitation programme built around your needs and recovery pace." }, image: rehabilitimFiz },
    { icon: "hand" as ServiceIcon, title: { sq: "Terapia manuale", en: "Manual therapy" }, copy: { sq: "Teknika të kujdesshme për të mbështetur lehtësimin dhe rikthimin në lëvizje.", en: "Careful techniques to support relief and a return to movement." }, details: { sq: "Teknika të kujdesshme manuale që synojnë lehtësimin e tensionit dhe rikthimin gradual të lëvizjes.", en: "Gentle hands-on techniques aimed at easing tension and gradually restoring movement." }, image: terapiaMan },
    { icon: "waves" as ServiceIcon, title: { sq: "Masazh terapeutik", en: "Therapeutic massage" }, copy: { sq: "Kujdes i fokusuar për relaksim, çlodhje dhe ndjesi më të mirë trupore.", en: "Focused care for relaxation, recovery and a better-feeling body." }, details: { sq: "Kujdes i fokusuar për relaksim, çlodhje dhe mbështetje të qarkullimit.", en: "Focused care for relaxation, recovery and healthy circulation." }, image: masazhTer },
    { icon: "bandage" as ServiceIcon, title: { sq: "Rikuperim pas lëndimeve", en: "Injury recovery" }, copy: { sq: "Udhëzim gjatë procesit të rikuperimit, hap pas hapi.", en: "Guidance through your recovery, step by step." }, details: { sq: "Udhëzim profesional gjatë rikuperimit, me hapa të sigurt drejt aktivitetit tuaj.", en: "Professional guidance during recovery, with safe steps back to your activity." }, image: rikuperim },
    { icon: "bone" as ServiceIcon, title: { sq: "Dhimbje muskulore dhe artikulare", en: "Muscle & joint pain" }, copy: { sq: "Vëmendje e personalizuar për shqetësimet që ndikojnë në përditshmëri.", en: "Personal attention for the aches that affect your daily life." }, details: { sq: "Qasje individuale për shqetësimet muskulore dhe artikulare që ndikojnë në jetën e përditshme.", en: "An individual approach to muscle and joint problems that affect daily life." }, image: dhimbjeMus },
    { icon: "zap" as ServiceIcon, title: { sq: "Trajtimi me Shockwave", en: "Shockwave therapy" }, copy: { sq: "Ndihmon në reduktimin e dhimbjes dhe përmirësimin e funksionit te kalcifikimi i thembrës.", en: "Helps reduce pain and improve function with heel spurs." }, details: { sq: "Trajtimi me Shockwave ndihmon në reduktimin e dhimbjes dhe përmirësimin e funksionit te kalcifikimi i thembrës.", en: "Shockwave therapy helps reduce pain and improve function in heel spur (calcification) cases." }, image: trajtimShock },
  ],

  /** Final "and more" card after the services; opens WhatsApp with this message. */
  moreServices: {
    title: { sq: "Dhe më shumë…", en: "And more…" },
    copy: { sq: "Pyesni për trajtime të tjera", en: "Ask about other treatments" },
    waMessage: { sq: "Përshëndetje, dua të pyes për një trajtim tjetër.", en: "Hello, I'd like to ask about another treatment." },
  },

  benefits: [
    { title: { sq: "Qasje individuale", en: "Individual approach" }, copy: { sq: "Plani juaj ndërtohet pas një bisede dhe vlerësimi personal.", en: "Your plan is built after a personal conversation and assessment." } },
    { title: { sq: "Staf profesional", en: "Qualified staff" }, copy: { sq: "Fizioterapeutë të diplomuar që ju udhëheqin në çdo seancë.", en: "Graduate physiotherapists guide you through every session." } },
    { title: { sq: "Ambient i përshtatshëm", en: "Comfortable setting" }, copy: { sq: "Hapësirë e pastër dhe e qetë, në qendër të Vitisë.", en: "A clean, calm space in the centre of Viti." } },
    { title: { sq: "Trajtime të personalizuara", en: "Personalised treatment" }, copy: { sq: "Teknikat përshtaten me trupin, dhimbjen dhe qëllimet tuaja.", en: "Techniques adapted to your body, pain and goals." } },
    { title: { sq: "Fokus në rikuperim", en: "Recovery-focused" }, copy: { sq: "Ushtrime për shtëpi që përparimi të vazhdojë edhe pas seancës.", en: "Home exercises so progress continues after each session." } },
    { title: { sq: "Metoda moderne", en: "Modern methods" }, copy: { sq: "Përfshirë terapinë me Shockwave për dhimbje kronike.", en: "Including shockwave therapy for chronic pain." } },
  ],

  conditions: [
    { sq: "Dhimbje shpine", en: "Back pain" },
    { sq: "Dhimbje qafe", en: "Neck pain" },
    { sq: "Lëndime sportive", en: "Sports injuries" },
    { sq: "Rehabilitim pas operacionit", en: "Post-surgery rehab" },
    { sq: "Dhimbje artikulare", en: "Joint pain" },
    { sq: "Kalcifikim i thembrës", en: "Heel spur" },
    { sq: "Ndrydhje dhe tendosje", en: "Sprains & strains" },
    { sq: "Dhimbje supi", en: "Shoulder pain" },
    { sq: "Dhimbje gjuri", en: "Knee pain" },
    { sq: "Ngurtësi muskulore", en: "Muscle stiffness" },
  ],

  firstVisit: [
    { title: { sq: "Bisedë fillestare", en: "Initial conversation" }, copy: { sq: "Na tregoni për shqetësimin, historinë dhe qëllimet tuaja.", en: "Tell us about your complaint, history and goals." } },
    { title: { sq: "Vlerësim", en: "Assessment" }, copy: { sq: "Kontrollojmë lëvizjen, forcën dhe zonat me dhimbje.", en: "We check movement, strength and painful areas." } },
    { title: { sq: "Trajtimi i parë", en: "First treatment" }, copy: { sq: "Fillojmë trajtimin që në vizitën e parë, kur është e përshtatshme.", en: "Treatment starts on the first visit when appropriate." } },
    { title: { sq: "Plani i mëtejshëm", en: "Your plan" }, copy: { sq: "Merrni një plan të qartë seancash dhe ushtrime për shtëpi.", en: "You leave with a clear session plan and home exercises." } },
  ],

  faq: [
    { q: { sq: "Si rezervoj një termin?", en: "How do I book an appointment?" }, a: { sq: "Terminet caktohen vetëm përmes WhatsApp (045 207 056) ose me telefon. Na shkruani shërbimin dhe ditën/orën e dëshiruar dhe ne ju konfirmojmë terminin.", en: "Appointments are arranged only via WhatsApp (045 207 056) or by phone. Send us the service and your preferred day/time and we'll confirm." } },
    // TODO confirm with clinic
    { q: { sq: "Çfarë ndodh në vizitën e parë?", en: "What happens at the first visit?" }, a: { sq: "Fillojmë me një bisedë dhe vlerësim të lëvizjes, pastaj ju propozojmë një plan trajtimi. Shpesh trajtimi fillon po atë ditë.", en: "We start with a conversation and movement assessment, then propose a treatment plan. Treatment often starts the same day." } },
    { q: { sq: "Çfarë duhet të sjell?", en: "What should I bring?" }, a: { sq: "Rroba të rehatshme, dokumentacionin mjekësor nëse e keni (raporte, grafi, MRI) dhe listën e barnave që përdorni.", en: "Comfortable clothes, any medical documents you have (reports, X-rays, MRI) and a list of medications you take." } },
    // TODO confirm with clinic
    { q: { sq: "Sa zgjat një seancë?", en: "How long is a session?" }, a: { sq: "Zakonisht 45–60 minuta, varësisht nga trajtimi. Kohëzgjatjen e saktë jua konfirmojmë gjatë rezervimit.", en: "Usually 45–60 minutes depending on treatment. We confirm the exact length when booking." } },
    // TODO confirm with clinic
    { q: { sq: "A më duhet rekomandim nga mjeku?", en: "Do I need a doctor's referral?" }, a: { sq: "Jo, mund të vini edhe pa rekomandim. Nëse keni diagnozë ose raport mjekësor, sillni atë me vete.", en: "No, you can come without a referral. If you have a diagnosis or medical report, please bring it." } },
    { q: { sq: "Çfarë është trajtimi me Shockwave?", en: "What is shockwave therapy?" }, a: { sq: "Valë akustike që aplikohen në zonën me dhimbje për të ulur dhimbjen dhe për të nxitur shërimin, p.sh. te kalcifikimi i thembrës.", en: "Acoustic waves applied to the painful area to reduce pain and support healing, e.g. for heel spurs." } },
    // TODO confirm with clinic
    { q: { sq: "Si e anuloj ose ndryshoj terminin?", en: "How do I cancel or reschedule?" }, a: { sq: "Na njoftoni në WhatsApp ose me telefon sa më herët që të jetë e mundur, që termini t'i jepet dikujt tjetër.", en: "Let us know on WhatsApp or by phone as early as possible so the slot can go to someone else." } },
    { q: { sq: "Çfarë t'i shkruaj në WhatsApp?", en: "What should I write on WhatsApp?" }, a: { sq: "Emrin, shërbimin që ju intereson, shqetësimin shkurtimisht dhe ditën/orën që ju përshtatet. Butoni “Rezervo në WhatsApp” e plotëson mesazhin automatikisht.", en: "Your name, the service, a short description of the problem and the day/time that suits you. The “Book on WhatsApp” button prefills it." } },
  ],
};

export const ui = {
  nav: { about: { sq: "Rreth nesh", en: "About" }, services: { sq: "Shërbimet", en: "Services" }, why: { sq: "Pse ATLAS", en: "Why ATLAS" }, booking: { sq: "Rezervimi", en: "Booking" }, gallery: { sq: "Galeria", en: "Gallery" }, faq: { sq: "Pyetje", en: "FAQ" }, contact: { sq: "Kontakt", en: "Contact" } },
  bookWa: { sq: "Rezervo në WhatsApp", en: "Book on WhatsApp" },
  call: { sq: "Telefono", en: "Call" },
  waMessage: { sq: "Përshëndetje, dua të rezervoj një termin", en: "Hello, I would like to book an appointment" },
  waFor: { sq: "për", en: "for" },
};
