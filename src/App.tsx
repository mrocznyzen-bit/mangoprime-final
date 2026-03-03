/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  MapPin, 
  BedDouble, 
  Bath, 
  Square, 
  ChevronRight, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ArrowRight,
  Wand2,
  Paperclip
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SafeImage = ({ src, alt, className, title, index = 0, hideTitle = false, fontSize, ...props }: any) => {
  // Expanded 9-color luxury palette based on user's reference images
  const luxuryPalette = [
    { bg: "#0A192F", text: "#CBB26A", border: "rgba(203, 178, 106, 0.2)" }, // Exclusive Navy & Gold
    { bg: "#064E3B", text: "#F5F2ED", border: "rgba(245, 242, 237, 0.1)" }, // Deep Emerald & Paper
    { bg: "#F5F2ED", text: "#000000", border: "rgba(0, 0, 0, 0.1)" },       // Paper & Black
    { bg: "#7F1D1D", text: "#CBB26A", border: "rgba(203, 178, 106, 0.3)" }, // Burgundy & Gold
    { bg: "#1A1A1A", text: "#FFFFFF", border: "rgba(255, 255, 255, 0.1)" }, // Charcoal & White
    { bg: "#CBB26A", text: "#000000", border: "rgba(0, 0, 0, 0.2)" },       // Gold & Black
    { bg: "#1E293B", text: "#F5F2ED", border: "rgba(245, 242, 237, 0.1)" }, // Midnight & Paper
    { bg: "#FFFFFF", text: "#CBB26A", border: "rgba(203, 178, 106, 0.3)" }, // White & Gold
    { bg: "#2C2C2C", text: "#FFFFFF", border: "rgba(255, 255, 255, 0.1)" }  // Stone & White
  ];

  const style = luxuryPalette[index % luxuryPalette.length];
  const hoverStyle = luxuryPalette[(index + 2) % luxuryPalette.length];

  return (
    <div 
      className={`${className} relative flex flex-col items-center justify-center p-6 overflow-hidden group transition-all duration-700`}
      style={{ 
        backgroundColor: style.bg, 
        border: hideTitle ? 'none' : `1px solid ${style.border}`,
        '--hover-bg': hoverStyle.bg 
      } as any}
    >
      <div className="absolute inset-0 transition-colors duration-700 group-hover:bg-[var(--hover-bg)]" />
      {/* Subtle texture/noise overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {!hideTitle && (
        <div className="relative z-10 flex flex-col items-center text-center w-full px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`font-serif italic tracking-tighter leading-none mb-6 ${fontSize || 'text-3xl md:text-6xl lg:text-7xl'}`}
            style={{ color: style.text }}
          >
            {title || alt}
          </motion.span>
          
          <div 
            className="w-16 h-[1px] transition-all duration-700 group-hover:w-32" 
            style={{ backgroundColor: style.text, opacity: 0.3 }} 
          />
          
          <span 
            className="mt-6 text-[8px] uppercase tracking-[0.8em] font-bold opacity-40"
            style={{ color: style.text }}
          >
            Beyond Prime
          </span>
        </div>
      )}

      {/* Decorative corner elements - only show if not a background */}
      {!hideTitle && (
        <>
          <div className="absolute top-6 left-6 w-10 h-10 border-t border-l opacity-20" style={{ borderColor: style.text }} />
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r opacity-20" style={{ borderColor: style.text }} />
        </>
      )}
    </div>
  );
};

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Polska",
    location: "Warszawa, Kraków, Wybrzeże",
    price: "Rynek Europejski",
    image: "https://picsum.photos/seed/poland/1200/800",
    tag: "Home Market",
    description: "Stabilny rynek z silnym fundamentem popytowym. Polska pozostaje jednym z najbezpieczniejszych kierunków inwestycyjnych w regionie CEE, oferując stały wzrost wartości w czasie.",
    stats: {
      appreciation: "4% - 6% rocznie",
      roi: "3% - 5% netto",
      range: "13 000 - 65 000 PLN/m²"
    }
  },
  {
    id: 2,
    title: "Cypr Południowy",
    location: "Limassol, Pafos, Larnaka",
    price: "Prestiż i Stabilność",
    image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&w=1200&q=80",
    tag: "European Hub",
    description: "Gdzie biznes spotyka się z błogostanem (Where Business Meets Bliss). Limassol, nazywane 'Dubajem Europy', to najbardziej dojrzały i prestiżowy rynek wschodniego Morza Śródziemnego. Oferuje unikalne połączenie luksusowego stylu życia, bezpieczeństwa UE oraz wyjątkowych korzyści podatkowych, przyciągając kapitał z całego świata.",
    stats: {
      appreciation: "12% - 20% rocznie",
      roi: "8% - 12% netto",
      range: "250 000 - 15 000 000+ EUR"
    }
  },
  {
    id: 3,
    title: "Cypr Północny",
    location: "Kyrenia, Famagusta",
    price: "Wysoki ROI",
    image: "https://picsum.photos/seed/cyprus-north/1200/800",
    tag: "Emerging Market",
    description: "Jeden z najszybciej rozwijających się rynków w basenie Morza Śródziemnego. Oferuje bezkonkurencyjne stopy zwrotu oraz ogromny potencjał wzrostu wartości gruntów.",
    stats: {
      appreciation: "10% - 15% rocznie",
      roi: "8% - 12% netto",
      range: "100 000 - 950 000 EUR"
    }
  },
  {
    id: 4,
    title: "Bułgaria",
    location: "Słoneczny Brzeg, Warna",
    price: "Przystępny Luksus",
    image: "https://picsum.photos/seed/bulgaria/1200/800",
    tag: "Black Sea",
    description: "Rynek oferujący najniższy próg wejścia w segmencie nieruchomości wakacyjnych przy zachowaniu wysokiego standardu. Idealny dla inwestorów szukających stabilnej bazy.",
    stats: {
      appreciation: "15% - 25% rocznie",
      roi: "5% - 8% netto",
      range: "53 000 EUR - 450 000 EUR"
    }
  },
  {
    id: 5,
    title: "Dubaj",
    location: "Palm Jumeirah, Downtown",
    price: "Global Hub",
    image: "https://picsum.photos/seed/dubai/1200/800",
    tag: "Ultra Luxury",
    description: "Światowa stolica luksusu i innowacji. Brak podatku od dochodów z wynajmu oraz status globalnego centrum biznesowego gwarantują płynność i prestiż inwestycji.",
    stats: {
      appreciation: "5% - 12% rocznie",
      roi: "7% - 10% netto",
      range: "700 000 - 100 000 000 + AED"
    }
  },
  {
    id: 6,
    title: "Abu Dhabi",
    location: "Yas Island, Saadiyat",
    price: "Kultura i Prestiż",
    image: "https://picsum.photos/seed/abudhabi/1200/800",
    tag: "Capital City",
    description: "Stolica Emiratów stawiająca na kulturę, edukację i zrównoważony rozwój. Rynek bardziej stabilny i konserwatywny niż Dubaj, idealny dla długoterminowego kapitału.",
    stats: {
      appreciation: "7% - 12% rocznie",
      roi: "7% - 10% netto",
      range: "1 200 000 - 25 000 000+ AED"
    }
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    date: "24 Luty 2026",
    title: "Rynek nieruchomości premium w 2026 roku",
    excerpt: "Analiza trendów i prognozy dla najbardziej prestiżowych lokalizacji w Polsce.",
    image: "https://picsum.photos/seed/blog1/800/600",
    content: "Rok 2026 przynosi stabilizację na rynku luksusowym w Polsce. Inwestorzy coraz częściej szukają aktywów odpornych na inflację, co kieruje ich uwagę ku unikatowym apartamentom w centrach dużych miast oraz rezydencjom w prestiżowych podwarszawskich miejscowościach. Kluczowym czynnikiem sukcesu jest ograniczona podaż gruntów w topowych lokalizacjach, co gwarantuje długoterminowy wzrost wartości.",
    table: {
      headers: ["Lokalizacja", "Średnia Cena/m²", "Prognozowany Wzrost"],
      rows: [
        ["Warszawa Śródmieście", "45 000 PLN", "+8%"],
        ["Kraków Stare Miasto", "38 000 PLN", "+6%"],
        ["Sopot Dolny", "42 000 PLN", "+7%"]
      ]
    }
  },
  {
    id: 2,
    date: "15 Luty 2026",
    title: "Dlaczego warto inwestować w off-market?",
    excerpt: "Odkryj zalety kupowania nieruchomości poza oficjalnym obiegiem rynkowym.",
    image: "https://picsum.photos/seed/blog2/800/600",
    content: "Rynek off-market to 'święty graal' inwestowania w nieruchomości. Pozwala na uniknięcie licytacji cenowych i zapewnia dostęp do ofert, które nigdy nie pojawią się na portalach ogłoszeniowych. Dla kupującego oznacza to większą dyskrecję i często lepsze warunki negocjacyjne, a dla sprzedającego – selekcję wyłącznie poważnych oferentów.",
    table: {
      headers: ["Cecha", "Rynek Otwarty", "Off-Market"],
      rows: [
        ["Dyskrecja", "Niska", "Pełna"],
        ["Konkurencja", "Wysoka", "Minimalna"],
        ["Unikatowość", "Standardowa", "Wybitna"]
      ]
    }
  },
  {
    id: 3,
    date: "10 Luty 2026",
    title: "Inwestycje w Limassol - dlaczego teraz?",
    excerpt: "Cypr Południowy przeżywa boom inwestycyjny. Sprawdzamy, co przyciąga kapitał do Limassol.",
    image: "https://picsum.photos/seed/limassol-invest/1200/800",
    content: "Limassol stało się nowym Dubajem Morza Śródziemnego. Ogromne inwestycje w infrastrukturę, takie jak City of Dreams Mediterranean (największe kasyno w Europie) oraz nowa marina, przekształciły miasto w globalny hub biznesowy. Korzystne opodatkowanie (brak podatku od dywidend dla non-dom) przyciąga tu tysiące firm technologicznych.",
    table: {
      headers: ["Wskaźnik", "Wartość 2025", "Prognoza 2028"],
      rows: [
        ["Czynsz (Apartament 2BR)", "2 500 EUR", "3 200 EUR"],
        ["Cena za m² (Prime)", "6 500 EUR", "8 500 EUR"],
        ["ROI z wynajmu", "6.5%", "7.8%"]
      ]
    }
  },
  {
    id: 4,
    date: "05 Luty 2026",
    title: "Potencjał wzrostu wartości na Cyprze Północnym",
    excerpt: "Analiza rynkowa jednego z najszybciej rozwijających się regionów w basenie Morza Śródziemnego.",
    image: "https://picsum.photos/seed/cyprus-market/1200/800",
    content: "Cypr Północny to obecnie rynek o najwyższym potencjale spekulacyjnym. Niskie ceny wejścia w porównaniu do reszty Europy, w połączeniu z dynamicznie rosnącą turystyką, tworzą idealne warunki dla inwestycji typu 'buy-to-let'. Nowe lotnisko Ercan oraz plany polityczne zwiększają zainteresowanie inwestorów z całego świata.",
    table: {
      headers: ["Region", "Cena Wejścia", "Potencjał Wzrostu"],
      rows: [
        ["Kyrenia (Girne)", "150 000 EUR", "15% / rok"],
        ["Iskele (Long Beach)", "120 000 EUR", "20% / rok"],
        ["Esentepe", "180 000 EUR", "12% / rok"]
      ]
    }
  },
  {
    id: 5,
    date: "01 Luty 2026",
    title: "Luksusowe apartamenty w Dubai Marina",
    excerpt: "Przegląd najbardziej pożądanych adresów w sercu nowoczesnego Dubaju.",
    image: "https://picsum.photos/seed/blog5/800/600",
    content: "Dubai Marina pozostaje jedną z najbardziej płynnych lokalizacji na świecie. Wysokie obłożenie wynajmu krótkoterminowego oraz prestiż lokalizacji sprawiają, że apartamenty z widokiem na wodę są zawsze w cenie. Inwestorzy doceniają brak podatku dochodowego i stabilność waluty powiązanej z dolarem.",
    table: {
      headers: ["Typ Jednostki", "Cena (AED)", "ROI Netto"],
      rows: [
        ["Studio", "1.2M - 1.8M", "8.5%"],
        ["1 Bedroom", "2.2M - 3.5M", "7.5%"],
        ["Penthouse", "15M+", "6.0%"]
      ]
    }
  },
  {
    id: 6,
    date: "28 Styczeń 2026",
    title: "Abu Dhabi - nowa stolica kultury i luksusu",
    excerpt: "Dlaczego inwestorzy coraz częściej wybierają Abu Dhabi zamiast Dubaju?",
    image: "https://picsum.photos/seed/blog6/800/600",
    content: "Abu Dhabi stawia na zrównoważony rozwój i kulturę. Wyspa Saadiyat z Muzeum Louvre oraz nadchodzącym Guggenheimem staje się najbardziej elitarnym adresem w regionie. Rynek ten charakteryzuje się mniejszą zmiennością niż Dubaj, oferując większe bezpieczeństwo dla kapitału długoterminowego.",
    table: {
      headers: ["Wyspa", "Profil Inwestora", "Główny Atut"],
      rows: [
        ["Saadiyat", "Kolekcjoner / HNWI", "Kultura i Plaże"],
        ["Yas Island", "Rodziny / Rozrywka", "Parki Tematyczne"],
        ["Al Reem", "Biznes / Wynajem", "Nowoczesne Wieże"]
      ]
    }
  },
  {
    id: 7,
    date: "20 Styczeń 2026",
    title: "Nieruchomości wakacyjne w Bułgarii",
    excerpt: "Stabilny zysk i przystępny próg wejścia. Czy to najlepszy moment na zakup?",
    image: "https://picsum.photos/seed/blog7/800/600",
    content: "Bułgaria to rynek 'value for money'. Za ułamek ceny apartamentu w Hiszpanii można tu nabyć nieruchomość przy samej plaży w wysokim standardzie. Wejście do strefy Schengen oraz planowane przyjęcie Euro w 2027 roku to silne katalizatory wzrostu cen w najbliższym czasie.",
    table: {
      headers: ["Kategoria", "Koszt Utrzymania", "ROI"],
      rows: [
        ["Apartament Studio", "500 EUR / rok", "5-7%"],
        ["Apartament 2BR", "800 EUR / rok", "6-8%"],
        ["Willa z basenem", "1500 EUR / rok", "4-6%"]
      ]
    }
  },
  {
    id: 8,
    date: "15 Styczeń 2026",
    title: "Warszawski rynek premium - prognozy 2027",
    excerpt: "Jakie lokalizacje w stolicy zyskają na wartości w najbliższych latach?",
    image: "https://picsum.photos/seed/warsaw/1200/800",
    content: "Warszawa staje się metropolią na poziomie Londynu czy Berlina pod względem jakości architektury premium. Rozwój linii metra oraz rewitalizacja terenów pofabrycznych (np. Wola) tworzą nowe punkty na mapie luksusu. Inwestorzy powinni patrzeć na projekty typu 'mixed-use', które łączą funkcje biurowe, mieszkalne i lifestylowe.",
    table: {
      headers: ["Dzielnica", "Trend", "Popyt"],
      rows: [
        ["Wola", "Wzrostowy", "Bardzo Wysoki"],
        ["Mokotów", "Stabilny", "Wysoki"],
        ["Wilanów", "Stabilny", "Średni/Wysoki"]
      ]
    }
  },
  {
    id: 9,
    date: "10 Styczeń 2026",
    title: "Złota Wiza w Dubaju - kompletny przewodnik",
    excerpt: "Wszystko, co musisz wiedzieć o rezydencji inwestorskiej w Zjednoczonych Emiratach Arabskich.",
    image: "https://picsum.photos/seed/blog9/800/600",
    content: "Złota Wiza to rewolucja w Dubaju. Pozwala na 10-letni pobyt bez konieczności posiadania lokalnego sponsora. Inwestycja w nieruchomości o wartości powyżej 2M AED otwiera drzwi do jednego z najbardziej przyjaznych systemów podatkowych na świecie i zapewnia bezpieczeństwo dla całej rodziny.",
    table: {
      headers: ["Kryterium", "Wymóg", "Korzyść"],
      rows: [
        ["Wartość Zakupu", "min. 2 000 000 AED", "Wiza na 10 lat"],
        ["Wkład Własny", "min. 1 000 000 AED", "Możliwość Kredytu"],
        ["Pobyt", "Brak min. dni", "Pełna Elastyczność"]
      ]
    }
  },
  {
    id: 10,
    date: "05 Styczeń 2026",
    title: "Cypr Południowy vs Północny - gdzie inwestować?",
    excerpt: "Bezpośrednie porównanie obu części wyspy pod kątem ROI i bezpieczeństwa kapitału.",
    image: "https://picsum.photos/seed/cyprus-compare/1200/800",
    content: "Wybór między Południem a Północą zależy od profilu ryzyka inwestora. Południe to stabilność UE, uznawane prawo własności i dojrzały rynek. Północ to 'dziki zachód' z ogromnymi stopami zwrotu, ale wyższym ryzykiem politycznym. Dywersyfikacja portfela o obie części wyspy może być optymalną strategią.",
    table: {
      headers: ["Cecha", "Cypr Południowy", "Cypr Północny"],
      rows: [
        ["Bezpieczeństwo", "Bardzo Wysokie (UE)", "Średnie (Polityczne)"],
        ["ROI z wynajmu", "5-7%", "8-12%"],
        ["Podatki", "Niskie", "Bardzo Niskie"]
      ]
    }
  }
];

const REVIEWS = [
  {
    text: "Współpraca z Mango PRIME to zupełnie inny poziom doświadczenia. Dyskrecja, profesjonalizm i dostęp do ofert, których nie znajdziecie nigdzie indziej.",
    author: "Janusz T.",
    role: "Inwestor"
  },
  {
    text: "Znalezienie domu marzeń zajęło nam zaledwie dwa tygodnie. Zespół Mango PRIME doskonale zrozumiał nasze potrzeby od pierwszego spotkania.",
    author: "Anna i Piotr",
    role: "Właściciele rezydencji"
  },
  {
    text: "Profesjonalizm na każdym etapie. Od analizy rynku po finalizację transakcji na Cyprze – czułem się w pełni zaopiekowany i bezpieczny.",
    author: "Robert K.",
    role: "Przedsiębiorca"
  },
  {
    text: "Mango PRIME to nie tylko agencja, to partnerzy w biznesie. Ich wiedza o rynkach zagranicznych pozwoliła mi zdywersyfikować portfel z sukcesem.",
    author: "Magdalena W.",
    role: "Inwestorka"
  },
  {
    text: "Dyskrecja, której szukałem. Dzięki ich podejściu off-market udało mi się nabyć nieruchomość, która oficjalnie nigdy nie była na sprzedaż.",
    author: "Tomasz L.",
    role: "Klient Premium"
  }
];

const TEAM = [
  {
    name: "Ekspert ds. Rynku Wtórnego - Warszawa",
    role: "Dołącz do zespołu",
    image: "https://picsum.photos/seed/join1/600/800",
  },
  {
    name: "Ekspert ds. Rynku Pierwotnego – Warszawa",
    role: "Wspólna wizja",
    image: "https://picsum.photos/seed/join2/600/800",
  },
  {
    name: "Ekspert ds. Zakupu Nieruchomości - Warszawa",
    role: "Aplikuj teraz",
    image: "https://picsum.photos/seed/join3/600/800",
  }
];

const SERVICES = [
  {
    title: "Personal Concierge",
    description: "Indywidualne podejście do każdego klienta, wykraczające poza standardowe pośrednictwo.",
    icon: <ArrowRight className="w-5 h-5" />
  },
  {
    title: "Off-Market Access",
    description: "Dostęp do najbardziej prestiżowych nieruchomości, które nigdy nie trafiają na publiczny rynek.",
    icon: <Search className="w-5 h-5" />
  },
  {
    title: "Investment Strategy",
    description: "Budowanie portfela nieruchomości premium z myślą o pokoleniowym wzroście wartości.",
    icon: <Square className="w-5 h-5" />
  }
];

const Logo = ({ color = "black" }: { color?: "black" | "gold" }) => {
  const currentColor = color === 'gold' ? '#cbb26a' : '#000000';
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="flex items-center gap-4 group cursor-pointer shrink-0"
    >
      <div className="w-16 h-8 md:w-20 md:h-10 relative">
        <svg viewBox="0 0 80 40" className="w-full h-full" style={{ color: currentColor }}>
          <defs>
            <pattern id={`stripes-${color}`} patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="1.5" />
            </pattern>
            <mask id={`mask-${color}`}>
              <circle cx="22" cy="20" r="18" fill="white" />
            </mask>
          </defs>
          <circle cx="22" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="48" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <g mask={`url(#mask-${color})`}>
            <circle cx="48" cy="20" r="18" fill={`url(#stripes-${color})`} />
          </g>
        </svg>
      </div>
      <div className="flex items-baseline gap-2 md:gap-3">
        <span className={`text-[32px] md:text-[44px] font-bold tracking-[-0.02em] uppercase font-antonio ${color === 'gold' ? 'text-brand-gold' : 'text-brand-black'} leading-none`}>Mango</span>
        <span className={`text-[8px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.45em] uppercase whitespace-nowrap font-antonio ${color === 'gold' ? 'text-brand-gold' : 'text-brand-black'}`}>Beyond Prime</span>
      </div>
    </a>
  );
};

const VALUES = [
  {
    title: "Zaufanie i Transparentność",
    content: "Budujemy długoterminowe relacje oparte na uczciwości i pełnej przejrzystości wszystkich transakcji. Każdy klient otrzymuje kompletną dokumentację i szczegółowe raporty."
  },
  {
    title: "Ekspertyza Rynkowa",
    content: "Nasza wiedza oparta jest na wieloletnim doświadczeniu i ciągłej analizie trendów rynkowych. Znamy lokalne uwarunkowania i potrafimy przewidywać zmiany."
  },
  {
    title: "Indywidualne Podejście",
    content: "Każdy klient jest wyjątkowy. Dopasowujemy nasze usługi do indywidualnych celów inwestycyjnych, preferencji i możliwości finansowych."
  },
  {
    title: "Globalna Perspektywa",
    content: "Działamy na wielu rynkach jednocześnie, co pozwala nam oferować dywersyfikację i dostęp do najlepszych okazji inwestycyjnych na świecie."
  },
  {
    title: "Kompleksowa Obsługa",
    content: "Od pierwszej konsultacji po przekazanie kluczy, jesteśmy z klientem na każdym etapie. Oferujemy pełne wsparcie, prawne, operacyjne oraz nadzór lokalnego Agenta nad realizacją inwestycji."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<typeof FEATURED_PROPERTIES[0] | null>(null);
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [openValue, setOpenValue] = useState<number | null>(null);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = new FormData();
    data.append('form-name', 'contact');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);
    data.append('isApplying', String(isApplying));
    if (cvFile) {
      data.append('cv', cvFile);
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Wiadomość została wysłana pomyślnie przez system Netlify.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setCvFile(null);
      } else {
        setSubmitStatus({ type: 'error', message: 'Wystąpił błąd podczas wysyłania do Netlify.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Błąd połączenia z systemem Netlify.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApply = () => {
    setIsApplying(true);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" onClick={() => setSelectedPost(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white overflow-hidden shadow-2xl flex flex-col"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-brand-black text-white flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 md:h-80 relative overflow-hidden">
                <SafeImage 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  title={selectedPost.title}
                  className="w-full h-full object-cover"
                  fontSize={selectedPost.title.length > 40 ? 'text-2xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-5xl lg:text-6xl'}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-start p-6 bg-brand-black/40">
                  <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mt-2 block">
                    {selectedPost.date}
                  </span>
                </div>
              </div>

              <div className="p-10 md:p-16 overflow-y-auto max-h-[60vh]">
                <div className="prose prose-brand max-w-none">
                  <div className="flex items-start gap-6 mb-12">
                    <div className="w-1 h-20 bg-brand-gold shrink-0" />
                    <p className="text-xl md:text-2xl text-brand-black font-serif italic leading-relaxed">
                      {selectedPost.content}
                    </p>
                  </div>

                  <div className="mt-12 mb-12 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-brand-gold/20">
                          {selectedPost.table.headers.map((header, i) => (
                            <th key={i} className="py-4 px-4 text-[10px] font-bold tracking-widest uppercase text-brand-black/60">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedPost.table.rows.map((row, i) => (
                          <tr key={i} className="border-b border-brand-gold/5 hover:bg-brand-paper/50 transition-colors">
                            {row.map((cell, j) => (
                              <td key={j} className="py-4 px-4 text-sm font-light text-brand-black">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-brand-paper p-8 border-l-4 border-brand-gold">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-black mb-4">Podsumowanie Finansisty</h4>
                    <p className="text-sm text-brand-black/70 leading-relaxed italic">
                      "Z perspektywy zarządzania portfelem, powyższe dane wskazują na silną korelację między rozwojem infrastruktury a wzrostem wartości aktywów. Rekomendujemy dywersyfikację w kierunku rynków o wysokiej płynności przy jednoczesnym zachowaniu ekspozycji na rynki wschodzące o wysokim ROI."
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedPost(null);
                    window.location.href = '#contact';
                  }}
                  className="mt-12 bg-brand-black text-white px-10 py-5 font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-gold transition-all w-full"
                >
                  Skonsultuj Inwestycję
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Country Detail Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl" onClick={() => setSelectedCountry(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedCountry(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-brand-black text-white flex items-center justify-center hover:bg-brand-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto relative overflow-hidden">
                <SafeImage 
                  src={selectedCountry.image} 
                  alt={selectedCountry.title}
                  title={selectedCountry.title}
                  className="w-full h-full object-cover"
                  fontSize="text-4xl md:text-6xl"
                />
                <div className="absolute inset-0 bg-brand-black/20" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase block">{selectedCountry.tag}</span>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
                <div className="mb-12">
                  <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Analiza Rynku</span>
                  <p className="text-brand-black/70 text-lg font-light leading-relaxed whitespace-pre-line">
                    {selectedCountry.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="border-l border-brand-gold/30 pl-6">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-black/40 mb-1">Potencjał Wzrostu</p>
                    <p className="text-2xl font-serif text-brand-black">{selectedCountry.stats.appreciation}</p>
                  </div>
                  <div className="border-l border-brand-gold/30 pl-6">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-black/40 mb-1">Szacowany ROI (Wynajem)</p>
                    <p className="text-2xl font-serif text-brand-black">{selectedCountry.stats.roi}</p>
                  </div>
                  <div className="border-l border-brand-gold/30 pl-6">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-black/40 mb-1">Zakres Cenowy</p>
                    <p className="text-2xl font-serif text-brand-black">{selectedCountry.stats.range}</p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedCountry(null);
                    window.location.href = '#contact';
                  }}
                  className="mt-12 bg-brand-black text-white px-10 py-5 font-bold text-xs tracking-[0.2em] uppercase hover:bg-brand-gold transition-all w-full"
                >
                  Zapytaj o Ofertę
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Logo />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#markets" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-black/60 hover:text-brand-gold transition-colors">Kraje</a>
              <a href="#about-mango" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-black/60 hover:text-brand-gold transition-colors">O Mango</a>
              <a href="#philosophy" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-black/60 hover:text-brand-gold transition-colors">Nasza Misja</a>
              <a href="#blog" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-black/60 hover:text-brand-gold transition-colors">Blog/Insights</a>
              <a href="#contact" className="bg-brand-black text-white px-8 py-3 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-gold transition-all inline-block">
                Prywatna Konsultacja
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-brand-black">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-brand-gold/10 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-10 space-y-6 text-center">
                <a href="#markets" className="block text-sm font-bold tracking-[0.2em] uppercase text-brand-black">Kraje</a>
                <a href="#about-mango" className="block text-sm font-bold tracking-[0.2em] uppercase text-brand-black">O Mango</a>
                <a href="#philosophy" className="block text-sm font-bold tracking-[0.2em] uppercase text-brand-black">Nasza Misja</a>
                <a href="#blog" className="block text-sm font-bold tracking-[0.2em] uppercase text-brand-black">Blog/Insights</a>
                <a href="#contact" className="w-full bg-brand-black text-white px-6 py-4 rounded-none text-xs font-bold tracking-[0.2em] uppercase inline-block">
                  Prywatna Konsultacja
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Featured Properties */}
      <section id="markets" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-20 gap-6">
            <div className="max-w-xl">
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Nasze Rynki</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-brand-black leading-tight">
                Kraje <span className="italic">Beyond Prime</span>
              </h2>
            </div>
            <a href="#contact" className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black border-b border-brand-gold pb-1 hover:text-brand-gold transition-all">
              Zapytaj o Inwestycje
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {FEATURED_PROPERTIES.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCountry(property)}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8">
                  <SafeImage 
                    src={property.image} 
                    alt={property.title}
                    title={property.title}
                    hideTitle={true}
                    index={index}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-brand-black/20 group-hover:bg-transparent transition-all" />
                  <div className="absolute top-6 right-6 bg-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-brand-black">
                    {property.tag}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-black">
                      Analiza Rynku
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-brand-gold mb-1">{property.title}</h3>
                      <div className="flex items-center gap-2 text-brand-black/40 text-[11px] font-bold tracking-wider uppercase">
                        <MapPin className="w-3 h-3 text-brand-gold" />
                        {property.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-brand-gold/10">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold">{property.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Realization Section */}
      <section className="relative py-24 md:py-40 overflow-hidden min-h-[60vh] md:min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://picsum.photos/seed/office/1200/800" 
            className="w-full h-full object-cover"
            alt="Mango PRIME"
            title="Realizacja"
            hideTitle={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Mango Prime: Realizacja</span>
              <h2 className="text-4xl md:text-7xl font-serif font-light text-white mb-8 leading-tight">
                TWOJA WIZJA. <br />
                <span className="italic text-brand-gold">Nasz standard.</span>
              </h2>
              <p className="text-brand-gold text-xl md:text-2xl font-light mb-8 italic">
                Nie szukasz agenta. Szukasz spokoju.
              </p>
              <div className="space-y-6 text-white/80 text-lg md:text-xl font-light leading-relaxed mb-12">
                <p>
                  Mango Prime to koniec z barierami. Zapewniamy pełną obsługę w języku polskim i angielskim, od pierwszego kontaktu po finał u notariusza. 
                </p>
                <p>
                  <span className="text-white font-medium italic">Zawsze klient ma opiekę polskojęzycznego rezydenta.</span> Odbieramy Cię z lotniska, kwaterujemy i prowadzimy przez proces tak, jak sami chcielibyśmy być prowadzeni.
                </p>
              </div>
              <a 
                href="#contact"
                className="bg-white text-brand-black px-12 py-5 font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-gold hover:text-white transition-all inline-block"
              >
                Skontaktuj się
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="py-20 md:py-32 bg-white border-t border-brand-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
            <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Ludzie Mango PRIME</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-brand-black mb-6">
              Dołącz do <span className="italic">Nas</span>
            </h2>
            <button 
              onClick={handleApply}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-black hover:border-brand-black transition-all"
            >
              Aplikuj do Mango PRIME
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group text-center cursor-pointer"
                onClick={handleApply}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-8 transition-all duration-700">
                  <SafeImage 
                    src={member.image} 
                    alt={member.name}
                    title={member.name}
                    hideTitle={true}
                    index={[3, 1, 0][index]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/5 group-hover:bg-transparent transition-all" />
                </div>
                <h3 className={`font-serif font-light text-brand-gold mb-1 ${member.name.length > 25 ? 'text-lg' : 'text-xl'}`}>{member.name}</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O Mango Section */}
      <section id="about-mango" className="relative py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SafeImage 
            src="https://picsum.photos/seed/abstract/1920/1080?blur=5" 
            className="w-full h-full object-cover opacity-20"
            alt="Mango PRIME"
            title="O Mango"
            hideTitle={true}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-bold text-brand-black mb-10 leading-[1.1] tracking-tight">
                Deweloper, Doradca, Agent... <br />
                <span className="italic font-serif font-light">My idziemy krok dalej...</span>
              </h2>
              <p className="text-lg md:text-2xl text-brand-black/70 leading-relaxed font-light max-w-2xl mb-16 md:mb-24">
                Mango Prime to butikowy zespół doradczy, dla którego sprzedaż nieruchomości to proces, nie produkt. W ścisłej współpracy z Klientami projektujemy i wdrażamy ustalone strategie. Działamy dyskretnie i skutecznie.
              </p>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-black p-6 md:p-16 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block">Manifest Elitaryzmu</span>
                <h3 className="text-2xl md:text-5xl font-serif font-light text-white mb-10 leading-tight">
                  Nie jesteśmy dla każdego. <br />
                  <span className="italic">Jesteśmy dla Ciebie.</span>
                </h3>
                <p className="text-white/70 text-base md:text-xl font-light leading-relaxed max-w-3xl mb-10">
                  W świecie masówki wybieramy selektywność. Wierzymy, że luksus to nie cena, to brak kompromisów. Naszą rolą nie jest pokazywanie nieruchomości. Naszą rolą jest znalezienie tej jedynej, która spełnia Twoje standardy bez zbędnych słów.
                </p>
                <p className="text-brand-gold italic font-serif text-lg md:text-2xl mb-16">
                  Dyskrecja to nasz standard. Wynik to nasza jedyna miara.
                </p>
                
                <div className="pt-10 border-t border-white/10 flex justify-between items-center">
                  <p className="text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase">Mango Prime</p>
                  <p className="text-white text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                    Doświadczenie. Kompetencje. <span className="italic font-serif font-normal text-brand-gold">Sukces.</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog / Insights Section */}
      <section id="blog" className="py-20 md:py-32 bg-brand-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-20 gap-6">
            <div className="max-w-xl">
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Wiedza i Trendy</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-brand-black leading-tight">
                Mango <span className="italic">Insights</span>
              </h2>
            </div>
            <button 
              onClick={() => setShowAllPosts(!showAllPosts)}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black border-b border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              {showAllPosts ? 'Pokaż Mniej' : 'Wszystkie Artykuły'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.slice(0, showAllPosts ? BLOG_POSTS.length : 4).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative aspect-[16/9] overflow-hidden mb-8">
                  <SafeImage 
                    src={post.image} 
                    alt={post.title}
                    title={post.title}
                    hideTitle={true}
                    index={post.id + 2}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <span className="text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">{post.date}</span>
                <h3 className="text-2xl font-serif font-light text-brand-gold mb-4">{post.title}</h3>
                <p className="text-brand-black/60 font-light leading-relaxed mb-6">{post.excerpt}</p>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                  className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black group-hover:gap-4 transition-all"
                >
                  Czytaj więcej <ArrowRight className="w-4 h-4 text-brand-gold" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 md:py-32 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Nasza Misja</span>
              <h2 className="text-4xl md:text-6xl font-serif font-light mb-10 leading-tight">
                Standardy, które <br />
                <span className="italic text-brand-gold">definiują</span> rynek.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                W Mango PRIME nie tylko pośredniczymy. Kreujemy wartość, chronimy prywatność i dostarczamy rozwiązania, które dla innych są nieosiągalne. Nasze podejście "Beyond Prime" to obietnica najwyższej jakości na każdym etapie współpracy.
              </p>
              
              <div className="space-y-8">
                {SERVICES.map((service, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-12 h-12 border border-brand-gold/30 flex items-center justify-center shrink-0">
                      <span className="text-brand-gold text-xs font-bold">0{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-[0.2em] uppercase mb-2">{service.title}</h4>
                      <p className="text-white/40 text-sm font-light leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 border border-brand-gold/20 translate-x-6 translate-y-6" />
              <SafeImage 
                src="https://picsum.photos/seed/philosophy/1000/1000" 
                className="w-full h-full object-cover"
                alt="Mango PRIME"
                title="Filozofia"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-gold p-12 hidden md:block">
                <span className="text-brand-black text-4xl font-serif italic">Beyond Prime</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Accordion Section */}
      <section className="py-20 md:py-32 bg-brand-paper/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-serif italic text-center text-brand-black mb-16 md:mb-24">
            Nasze Wartości
          </h2>
          
          <div className="space-y-4">
            {VALUES.map((value, index) => (
              <div key={index} className="border-b border-brand-black/10">
                <button
                  onClick={() => setOpenValue(openValue === index ? null : index)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className="text-xl md:text-2xl font-serif font-light text-brand-black group-hover:text-brand-gold transition-colors">
                    {value.title}
                  </span>
                  <span className="text-2xl font-light text-brand-black/40">
                    {openValue === index ? '×' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openValue === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-12">
                        <p className="text-brand-black/60 text-lg font-light leading-relaxed">
                          {value.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">Referencje</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-brand-black mb-10 leading-tight">
                Co mówią o nas <br />
                 nasi <span className="italic">Klienci</span>
              </h2>
            </div>
            <div className="space-y-16">
              {REVIEWS.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-12 border-l border-brand-gold/20"
                >
                  <p className="text-xl font-serif italic text-brand-black/80 mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-brand-black">{review.author}</h4>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mt-1">{review.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-32 bg-white border-t border-brand-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className="text-brand-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                {isApplying ? 'Rekrutacja' : 'Kontakt'}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-brand-black mb-10 leading-tight">
                {isApplying ? (
                  <>
                    Dołącz do <br />
                    <span className="italic">Zespołu</span>
                  </>
                ) : (
                  <>
                    Zacznijmy <br />
                    <span className="italic">Współpracę</span>
                  </>
                )}
              </h2>
              <p className="text-brand-black/60 text-lg font-light leading-relaxed mb-12">
                {isApplying 
                  ? 'Szukamy ambitnych ekspertów, którzy chcą współtworzyć nową jakość na rynku nieruchomości premium. Prześlij nam swoje zgłoszenie.'
                  : 'Niezależnie od tego, czy chcesz sprzedać, kupić czy zainwestować – nasz zespół jest gotowy, aby poprowadzić Cię przez ten proces.'
                }
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-1">Telefon</p>
                    <p className="text-lg font-light text-brand-black">+48 500 305 005</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-1">Email</p>
                    <p className="text-lg font-light text-brand-black">info@mangoprime.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-paper p-8 md:p-12">
              <form 
                className="space-y-5" 
                onSubmit={handleSubmit}
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                {submitStatus && (
                  <div className={`p-4 text-xs font-bold tracking-widest uppercase ${submitStatus.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    {submitStatus.message}
                  </div>
                )}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black/40">Imię i Nazwisko</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-brand-black/10 py-3 outline-none focus:border-brand-gold transition-colors text-brand-black"
                    placeholder="Wpisz swoje dane..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black/40">Adres Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-brand-black/10 py-3 outline-none focus:border-brand-gold transition-colors text-brand-black"
                    placeholder="Twoja poczta..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black/40">Numer Telefonu</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-brand-black/10 py-3 outline-none focus:border-brand-gold transition-colors text-brand-black"
                    placeholder="+48 ..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black/40">Wiadomość</label>
                  <textarea 
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b border-brand-black/10 py-3 outline-none focus:border-brand-gold transition-colors text-brand-black resize-none"
                    placeholder={isApplying ? "Napisz kilka słów o sobie..." : "W czym możemy pomóc?"}
                  />
                </div>
                
                {isApplying && (
                  <div className="space-y-3 pt-4">
                    <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black/40 block">Załącz CV (PDF/DOCX)</label>
                    <div className="relative group">
                      <input 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <div className="border-2 border-dashed border-brand-black/10 p-6 text-center group-hover:border-brand-gold transition-colors">
                        <Paperclip className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                        <p className="text-[10px] font-bold tracking-widest uppercase text-brand-black/40">
                          {cvFile ? cvFile.name : 'Wybierz plik lub upuść tutaj'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-black text-white py-5 font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wysyłanie...' : (isApplying ? 'Wyślij Aplikację' : 'Wyślij Wiadomość')}
                </button>
                
                {isApplying && (
                  <button 
                    type="button"
                    onClick={() => {
                      setIsApplying(false);
                      setCvFile(null);
                    }}
                    className="w-full text-[10px] font-bold tracking-[0.2em] uppercase text-brand-black/40 hover:text-brand-gold transition-colors pt-2"
                  >
                    Wróć do formularza kontaktu
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-brand-paper">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-serif font-light text-brand-black mb-8 md:mb-12 leading-tight">
              Twoja przyszłość zaczyna się <span className="italic">tutaj</span>.
            </h2>
            <p className="text-brand-black/60 text-xl font-light mb-8 max-w-2xl mx-auto">
              Zapraszamy na prywatną konsultację, podczas której omówimy Twoje cele inwestycyjne i marzenia o idealnym domu.
            </p>
            <p className="text-brand-black text-xl font-medium mb-16 max-w-2xl mx-auto italic">
              Odrzucamy 99% rynkowego szumu. Zostawiamy tylko te okazje, które sami chcielibyśmy posiadać.
            </p>
            <div className="flex justify-center">
              <a 
                href="#contact"
                className="bg-brand-black text-white px-12 py-6 font-bold text-xs tracking-[0.3em] uppercase hover:bg-brand-gold transition-all inline-block"
              >
                Umów Spotkanie
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div className="space-y-10">
              <Logo color="gold" />
              <p className="text-white/40 text-sm font-light leading-relaxed">
                Eksperci w dziedzinie nieruchomości premium. Definiujemy luksus na nowo, dostarczając rozwiązania "Beyond Prime".
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-brand-gold transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/40 hover:text-brand-gold transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/40 hover:text-brand-gold transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-10">Rynki</h4>
              <ul className="space-y-6 text-sm font-light text-white/60">
                {FEATURED_PROPERTIES.map((property) => (
                  <li key={property.id}>
                    <a 
                      href="#markets" 
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCountry(property);
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {property.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-10">Agencja</h4>
              <ul className="space-y-6 text-sm font-light text-white/60">
                <li><a href="#about-mango" className="hover:text-white transition-colors">O Mango PRIME</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Zespół Ekspertów</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beyond Prime Club</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gold mb-10">Biuro</h4>
              <ul className="space-y-6 text-sm font-light text-white/60">
                <li className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Frana May Sp. z o.o.<br />ul. Ksawerów 3<br />02-656 Warszawa</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>+48 500 305 005</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>info@mangoprime.pl</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
            <p>© 2026 Mango PRIME. All Rights Reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
