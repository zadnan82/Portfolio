// Simple i18n implementation for portfolio
const translations = {
  en: {
    // Navigation
    home: "Home",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    
    // Hero Section
    welcome: "Welcome to my digital space",
    title_role: "Sophisticated Developer & Regional Manager",
    hero_description: "Bridging business excellence with cutting-edge technology. From managing regional operations across UAE, Qatar, and Jordan to mastering full-stack development with AI and machine learning expertise.",
    download_cv: "Download CV",
    get_in_touch: "Get In Touch",
    scroll_explore: "Scroll to explore",
    
    // Experience Section
    professional_journey: "Professional Journey",
    experience_subtitle: "Nearly two decades of leadership excellence across hospitality, real estate, and retail sectors",
    
    // Education Section
    academic_excellence: "Academic Excellence",
    education_subtitle: "Continuous learning journey from hospitality management to cutting-edge AI and machine learning",
    ongoing: "Ongoing",
    completed: "Completed",
    
    // Skills Section
    skills_expertise: "Skills & Expertise",
    skills_subtitle: "A unique blend of technical prowess and leadership excellence",
    programming_languages: "Programming Languages",
    frameworks_technologies: "Frameworks & Technologies",
    leadership_management: "Leadership & Management",
    languages: "Languages",
    
    // Projects Section
    featured_projects: "Featured Projects",
    projects_subtitle: "Showcasing innovative solutions from web platforms to mobile applications available on App Store and Google Play",
    all: "All",
    mobile_apps: "Mobile Apps",
    web_apps: "Web Apps",
    featured: "Featured",
    visit_site: "Visit Site",
    code: "Code",
    app_store: "App Store",
    play_store: "Play Store",
    available_stores: "Available on App Store & Google Play",
    no_projects_found: "No Projects Found",
    try_different_filter: "Try selecting a different filter to see more projects.",
    
    // Contact Section
    lets_connect: "Let's Connect",
    contact_subtitle: "Ready to bring innovative solutions to your next project. Let's discuss how we can work together.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    stockholm_sweden: "Stockholm, Sweden",
    download_full_cv: "Download Full CV",
    send_message: "Send Message",
    your_name: "Your Name",
    your_email: "Your Email",
    subject: "Subject",
    your_message: "Your Message",
    sending: "Sending...",
    message_sent_success: "Message sent successfully! I'll get back to you soon.",
    message_send_error: "Failed to send message. Please try again or contact me directly.",
    
    // Job Titles and Companies
    regional_area_manager: "Regional Area Manager",
    senior_sales_executive: "Senior Sales Executive",
    team_leader: "Team Leader",
    front_desk_trainer: "Front Desk & Guest Relations Trainer",
    alshaya_company: "M.H. Alshaya Co. L.L.C",
    arabian_adventures: "Arabian Adventures (Emirates Airlines)",
    hamptons_international: "Hamptons International",
    ritz_carlton: "Ritz Carlton Hotel",
    
    // Education Programs
    ai_developer_program: "AI Developer Program",
    machine_learning_program: "Machine Learning Program",
    net_developer: ".Net Developer",
    mobile_web_developer: "Application Developer - Mobile & Web",
    hospitality_diploma: "Higher Diploma in Hotel & Hospitality Management",
    
    // Schools
    iths: "ITHS",
    teknik_hogskolan: "Teknik Högskolan",
    kyh_hogskolan: "KYH Högskolan",
    sti_hogskolan: "STI Högskolan",
    it_hogskolan: "IT-Högskolan",
    cesar_ritz: "University Center César Ritz",
    
    // Locations
    dubai_uae: "Dubai, United Arab Emirates",
    stockholm_sweden_full: "Stockholm, Sweden",
    brig_switzerland: "Brig, Switzerland",
    
    // Skills Categories
    team_leadership: "Team Leadership",
    regional_management: "Regional Management",
    training_development: "Training & Development",
    customer_relations: "Customer Relations",
    business_strategy: "Business Strategy",
    arabic: "Arabic",
    english: "English",
    swedish: "Swedish",
    french: "French",
    spanish: "Spanish"
  },
  
  ar: {
    // Navigation - Arabic (RTL)
    home: "الرئيسية",
    experience: "الخبرة",
    education: "التعليم",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "التواصل",
    
    // Hero Section
    welcome: "مرحباً بكم في مساحتي الرقمية",
    title_role: "مطورة متخصصة ومديرة إقليمية",
    hero_description: "ربط التميز التجاري بالتكنولوجيا المتطورة. من إدارة العمليات الإقليمية عبر الإمارات وقطر والأردن إلى إتقان التطوير الشامل مع خبرة في الذكاء الاصطناعي والتعلم الآلي.",
    download_cv: "تحميل السيرة الذاتية",
    get_in_touch: "تواصل معي",
    scroll_explore: "مرر للاستكشاف",
    
    // Experience Section
    professional_journey: "الرحلة المهنية",
    experience_subtitle: "ما يقارب عقدين من التميز القيادي عبر قطاعات الضيافة والعقارات والتجزئة",
    
    // Education Section
    academic_excellence: "التميز الأكاديمي",
    education_subtitle: "رحلة تعلم مستمرة من إدارة الضيافة إلى الذكاء الاصطناعي والتعلم الآلي المتطور",
    ongoing: "مستمر",
    completed: "مكتمل",
    
    // Skills Section
    skills_expertise: "المهارات والخبرات",
    skills_subtitle: "مزيج فريد من البراعة التقنية والتميز القيادي",
    programming_languages: "لغات البرمجة",
    frameworks_technologies: "الأطر والتقنيات",
    leadership_management: "القيادة والإدارة",
    languages: "اللغات",
    
    // Projects Section
    featured_projects: "المشاريع المميزة",
    projects_subtitle: "عرض الحلول المبتكرة من المنصات الإلكترونية إلى تطبيقات الهاتف المحمول المتاحة على متجر التطبيقات وجوجل بلاي",
    all: "الكل",
    mobile_apps: "تطبيقات الهاتف",
    web_apps: "تطبيقات الويب",
    featured: "مميز",
    visit_site: "زيارة الموقع",
    code: "الكود",
    app_store: "متجر التطبيقات",
    play_store: "جوجل بلاي",
    available_stores: "متاح على متجر التطبيقات وجوجل بلاي",
    no_projects_found: "لم يتم العثور على مشاريع",
    try_different_filter: "جرب تحديد مرشح مختلف لرؤية المزيد من المشاريع.",
    
    // Contact Section
    lets_connect: "لنتواصل",
    contact_subtitle: "مستعدة لتقديم حلول مبتكرة لمشروعك القادم. دعنا نناقش كيف يمكننا العمل معاً.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    stockholm_sweden: "ستوكهولم، السويد",
    download_full_cv: "تحميل السيرة الذاتية الكاملة",
    send_message: "إرسال رسالة",
    your_name: "اسمك",
    your_email: "بريدك الإلكتروني",
    subject: "الموضوع",
    your_message: "رسالتك",
    sending: "جاري الإرسال...",
    message_sent_success: "تم إرسال الرسالة بنجاح! سأرد عليك قريباً.",
    message_send_error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة.",
    
    // Job Titles and Companies (keeping English for company names)
    regional_area_manager: "مديرة منطقة إقليمية",
    senior_sales_executive: "مديرة مبيعات أولى",
    team_leader: "قائدة فريق",
    front_desk_trainer: "مدربة استقبال وعلاقات الضيوف",
    alshaya_company: "شركة الشايع",
    arabian_adventures: "مغامرات عربية (طيران الإمارات)",
    hamptons_international: "هامبتونز الدولية",
    ritz_carlton: "فندق ريتز كارلتون",
    
    // Education Programs
    ai_developer_program: "برنامج مطور الذكاء الاصطناعي",
    machine_learning_program: "برنامج التعلم الآلي",
    net_developer: "مطور دوت نت",
    mobile_web_developer: "مطور تطبيقات - الهاتف المحمول والويب",
    hospitality_diploma: "دبلوم عالي في إدارة الفنادق والضيافة",
    
    // Skills Categories
    team_leadership: "قيادة الفريق",
    regional_management: "الإدارة الإقليمية",
    training_development: "التدريب والتطوير",
    customer_relations: "علاقات العملاء",
    business_strategy: "الاستراتيجية التجارية",
    arabic: "العربية",
    english: "الإنجليزية",
    swedish: "السويدية",
    french: "الفرنسية",
    spanish: "الإسبانية"
  },
  
  sv: {
    // Navigation - Swedish
    home: "Hem",
    experience: "Erfarenhet",
    education: "Utbildning",
    skills: "Färdigheter",
    projects: "Projekt",
    contact: "Kontakt",
    
    // Hero Section
    welcome: "Välkommen till mitt digitala rum",
    title_role: "Sofistikerad Utvecklare & Regional Manager",
    hero_description: "Bygger broar mellan affärsexcellens och banbrytande teknik. Från att leda regionala verksamheter över UAE, Qatar och Jordanien till att behärska fullstack-utveckling med AI och maskininlärning.",
    download_cv: "Ladda ner CV",
    get_in_touch: "Kom i kontakt",
    scroll_explore: "Scrolla för att utforska",
    
    // Experience Section
    professional_journey: "Professionell resa",
    experience_subtitle: "Nästan två decennier av ledarskapsexcellens inom hotell, fastigheter och detaljhandel",
    
    // Education Section
    academic_excellence: "Akademisk excellens",
    education_subtitle: "Kontinuerlig inlärningsresa från hotellmanagement till banbrytande AI och maskininlärning",
    ongoing: "Pågående",
    completed: "Avslutad",
    
    // Skills Section
    skills_expertise: "Färdigheter & Expertis",
    skills_subtitle: "En unik blandning av teknisk skicklighet och ledarskapsexcellens",
    programming_languages: "Programmeringsspråk",
    frameworks_technologies: "Ramverk & Teknologier",
    leadership_management: "Ledarskap & Management",
    languages: "Språk",
    
    // Projects Section
    featured_projects: "Utvalda projekt",
    projects_subtitle: "Visar innovativa lösningar från webbplattformar till mobilappar tillgängliga på App Store och Google Play",
    all: "Alla",
    mobile_apps: "Mobilappar",
    web_apps: "Webbappar",
    featured: "Utvald",
    visit_site: "Besök sida",
    code: "Kod",
    app_store: "App Store",
    play_store: "Google Play",
    available_stores: "Tillgänglig på App Store & Google Play",
    no_projects_found: "Inga projekt hittades",
    try_different_filter: "Prova att välja ett annat filter för att se fler projekt.",
    
    // Contact Section
    lets_connect: "Låt oss koppla ihop",
    contact_subtitle: "Redo att leverera innovativa lösningar till ditt nästa projekt. Låt oss diskutera hur vi kan arbeta tillsammans.",
    email: "E-post",
    phone: "Telefon",
    location: "Plats",
    stockholm_sweden: "Stockholm, Sverige",
    download_full_cv: "Ladda ner fullständigt CV",
    send_message: "Skicka meddelande",
    your_name: "Ditt namn",
    your_email: "Din e-post",
    subject: "Ämne",
    your_message: "Ditt meddelande",
    sending: "Skickar...",
    message_sent_success: "Meddelandet skickades framgångsrikt! Jag återkommer snart.",
    message_send_error: "Misslyckades att skicka meddelandet. Försök igen eller kontakta mig direkt.",
    
    // Skills Categories
    team_leadership: "Teamledarskap",
    regional_management: "Regional management",
    training_development: "Utbildning & Utveckling",
    customer_relations: "Kundrelationer",
    business_strategy: "Affärsstrategi",
    arabic: "Arabiska",
    english: "Engelska",
    swedish: "Svenska",
    french: "Franska",
    spanish: "Spanska"
  },
  
  es: {
    // Navigation - Spanish
    home: "Inicio",
    experience: "Experiencia",
    education: "Educación",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    
    // Hero Section
    welcome: "Bienvenido a mi espacio digital",
    title_role: "Desarrolladora Sofisticada y Gerente Regional",
    hero_description: "Conectando la excelencia empresarial con tecnología de vanguardia. Desde gestionar operaciones regionales en UAE, Qatar y Jordania hasta dominar el desarrollo full-stack con IA y aprendizaje automático.",
    download_cv: "Descargar CV",
    get_in_touch: "Ponerse en contacto",
    scroll_explore: "Desplázate para explorar",
    
    // Experience Section
    professional_journey: "Trayectoria profesional",
    experience_subtitle: "Casi dos décadas de excelencia en liderazgo en los sectores de hospitalidad, bienes raíces y retail",
    
    // Education Section
    academic_excellence: "Excelencia académica",
    education_subtitle: "Viaje de aprendizaje continuo desde gestión hotelera hasta IA y aprendizaje automático de vanguardia",
    ongoing: "En curso",
    completed: "Completado",
    
    // Skills Section
    skills_expertise: "Habilidades y Experiencia",
    skills_subtitle: "Una mezcla única de destreza técnica y excelencia en liderazgo",
    programming_languages: "Lenguajes de Programación",
    frameworks_technologies: "Frameworks y Tecnologías",
    leadership_management: "Liderazgo y Gestión",
    languages: "Idiomas",
    
    // Projects Section
    featured_projects: "Proyectos destacados",
    projects_subtitle: "Mostrando soluciones innovadoras desde plataformas web hasta aplicaciones móviles disponibles en App Store y Google Play",
    all: "Todos",
    mobile_apps: "Apps Móviles",
    web_apps: "Apps Web",
    featured: "Destacado",
    visit_site: "Visitar sitio",
    code: "Código",
    app_store: "App Store",
    play_store: "Google Play",
    available_stores: "Disponible en App Store y Google Play",
    no_projects_found: "No se encontraron proyectos",
    try_different_filter: "Prueba seleccionar un filtro diferente para ver más proyectos.",
    
    // Contact Section
    lets_connect: "Conectémonos",
    contact_subtitle: "Listo para aportar soluciones innovadoras a tu próximo proyecto. Discutamos cómo podemos trabajar juntos.",
    email: "Correo electrónico",
    phone: "Teléfono",
    location: "Ubicación",
    stockholm_sweden: "Estocolmo, Suecia",
    download_full_cv: "Descargar CV completo",
    send_message: "Enviar mensaje",
    your_name: "Tu nombre",
    your_email: "Tu correo electrónico",
    subject: "Asunto",
    your_message: "Tu mensaje",
    sending: "Enviando...",
    message_sent_success: "¡Mensaje enviado exitosamente! Te responderé pronto.",
    message_send_error: "Error al enviar el mensaje. Inténtalo de nuevo o contáctame directamente.",
    
    // Skills Categories
    team_leadership: "Liderazgo de Equipo",
    regional_management: "Gestión Regional",
    training_development: "Capacitación y Desarrollo",
    customer_relations: "Relaciones con Clientes",
    business_strategy: "Estrategia Empresarial",
    arabic: "Árabe",
    english: "Inglés",
    swedish: "Sueco",
    french: "Francés",
    spanish: "Español"
  },
  
  de: {
    // Navigation - German
    home: "Startseite",
    experience: "Erfahrung",
    education: "Bildung",
    skills: "Fähigkeiten",
    projects: "Projekte",
    contact: "Kontakt",
    
    // Hero Section
    welcome: "Willkommen in meinem digitalen Raum",
    title_role: "Hochqualifizierte Entwicklerin & Regional Managerin",
    hero_description: "Verbindung von Geschäftsexzellenz mit modernster Technologie. Von der Leitung regionaler Operationen in UAE, Katar und Jordanien bis zur Beherrschung der Full-Stack-Entwicklung mit KI und maschinellem Lernen.",
    download_cv: "Lebenslauf herunterladen",
    get_in_touch: "Kontakt aufnehmen",
    scroll_explore: "Scrollen zum Erkunden",
    
    // Experience Section
    professional_journey: "Beruflicher Werdegang",
    experience_subtitle: "Fast zwei Jahrzehnte Führungsexzellenz in Gastgewerbe, Immobilien und Einzelhandel",
    
    // Education Section
    academic_excellence: "Akademische Exzellenz",
    education_subtitle: "Kontinuierliche Lernreise vom Hotelmanagement zu modernster KI und maschinellem Lernen",
    ongoing: "Laufend",
    completed: "Abgeschlossen",
    
    // Skills Section
    skills_expertise: "Fähigkeiten & Expertise",
    skills_subtitle: "Eine einzigartige Mischung aus technischer Kompetenz und Führungsexzellenz",
    programming_languages: "Programmiersprachen",
    frameworks_technologies: "Frameworks & Technologien",
    leadership_management: "Führung & Management",
    languages: "Sprachen",
    
    // Projects Section
    featured_projects: "Ausgewählte Projekte",
    projects_subtitle: "Innovative Lösungen von Webplattformen bis hin zu mobilen Apps im App Store und Google Play",
    all: "Alle",
    mobile_apps: "Mobile Apps",
    web_apps: "Web Apps",
    featured: "Ausgewählt",
    visit_site: "Seite besuchen",
    code: "Code",
    app_store: "App Store",
    play_store: "Google Play",
    available_stores: "Verfügbar im App Store & Google Play",
    no_projects_found: "Keine Projekte gefunden",
    try_different_filter: "Versuchen Sie einen anderen Filter zu wählen, um mehr Projekte zu sehen.",
    
    // Contact Section
    lets_connect: "Lassen Sie uns verbinden",
    contact_subtitle: "Bereit, innovative Lösungen für Ihr nächstes Projekt zu liefern. Lassen Sie uns besprechen, wie wir zusammenarbeiten können.",
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    stockholm_sweden: "Stockholm, Schweden",
    download_full_cv: "Vollständigen Lebenslauf herunterladen",
    send_message: "Nachricht senden",
    your_name: "Ihr Name",
    your_email: "Ihre E-Mail",
    subject: "Betreff",
    your_message: "Ihre Nachricht",
    sending: "Senden...",
    message_sent_success: "Nachricht erfolgreich gesendet! Ich werde mich bald melden.",
    message_send_error: "Fehler beim Senden der Nachricht. Versuchen Sie es erneut oder kontaktieren Sie mich direkt.",
    
    // Skills Categories
    team_leadership: "Teamführung",
    regional_management: "Regionales Management",
    training_development: "Schulung & Entwicklung",
    customer_relations: "Kundenbeziehungen",
    business_strategy: "Geschäftsstrategie",
    arabic: "Arabisch",
    english: "Englisch",
    swedish: "Schwedisch",
    french: "Französisch",
    spanish: "Spanisch"
  },
  
  pl: {
    // Navigation - Polish
    home: "Strona główna",
    experience: "Doświadczenie",
    education: "Edukacja",
    skills: "Umiejętności",
    projects: "Projekty",
    contact: "Kontakt",
    
    // Hero Section
    welcome: "Witaj w mojej cyfrowej przestrzeni",
    title_role: "Zaawansowana Programistka i Menedżer Regionalny",
    hero_description: "Łączenie doskonałości biznesowej z najnowocześniejszą technologią. Od zarządzania operacjami regionalnymi w ZEA, Katarze i Jordanii po opanowanie full-stack developmentu z AI i uczeniem maszynowym.",
    download_cv: "Pobierz CV",
    get_in_touch: "Skontaktuj się",
    scroll_explore: "Przewiń, aby eksplorować",
    
    // Experience Section
    professional_journey: "Podróż zawodowa",
    experience_subtitle: "Prawie dwie dekady doskonałości przywódczej w sektorach hotelarskim, nieruchomości i handlu detalicznego",
    
    // Education Section
    academic_excellence: "Doskonałość akademicka",
    education_subtitle: "Ciągła podróż edukacyjna od zarządzania hotelarstwem do najnowocześniejszego AI i uczenia maszynowego",
    ongoing: "W trakcie",
    completed: "Ukończone",
    
    // Skills Section
    skills_expertise: "Umiejętności i Ekspertyza",
    skills_subtitle: "Unikalne połączenie umiejętności technicznych i doskonałości przywódczej",
    programming_languages: "Języki programowania",
    frameworks_technologies: "Frameworki i Technologie",
    leadership_management: "Przywództwo i Zarządzanie",
    languages: "Języki",
    
    // Projects Section
    featured_projects: "Wybrane projekty",
    projects_subtitle: "Prezentacja innowacyjnych rozwiązań od platform internetowych po aplikacje mobilne dostępne w App Store i Google Play",
    all: "Wszystkie",
    mobile_apps: "Aplikacje mobilne",
    web_apps: "Aplikacje internetowe",
    featured: "Wybrane",
    visit_site: "Odwiedź stronę",
    code: "Kod",
    app_store: "App Store",
    play_store: "Google Play",
    available_stores: "Dostępne w App Store i Google Play",
    no_projects_found: "Nie znaleziono projektów",
    try_different_filter: "Spróbuj wybrać inny filtr, aby zobaczyć więcej projektów.",
    
    // Contact Section
    lets_connect: "Nawiążmy kontakt",
    contact_subtitle: "Gotowa do dostarczenia innowacyjnych rozwiązań dla Twojego następnego projektu. Omówmy, jak możemy współpracować.",
    email: "E-mail",
    phone: "Telefon",
    location: "Lokalizacja",
    stockholm_sweden: "Sztokholm, Szwecja",
    download_full_cv: "Pobierz pełne CV",
    send_message: "Wyślij wiadomość",
    your_name: "Twoje imię",
    your_email: "Twój e-mail",
    subject: "Temat",
    your_message: "Twoja wiadomość",
    sending: "Wysyłanie...",
    message_sent_success: "Wiadomość wysłana pomyślnie! Wkrótce odpowiem.",
    message_send_error: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się ze mną bezpośrednio.",
    
    // Skills Categories
    team_leadership: "Przywództwo zespołowe",
    regional_management: "Zarządzanie regionalne",
    training_development: "Szkolenia i Rozwój",
    customer_relations: "Relacje z klientami",
    business_strategy: "Strategia biznesowa",
    arabic: "Arabski",
    english: "Angielski",
    swedish: "Szwedzki",
    french: "Francuski",
    spanish: "Hiszpański"
  },
  
  it: {
    // Navigation - Italian
    home: "Home",
    experience: "Esperienza",
    education: "Educazione",
    skills: "Competenze",
    projects: "Progetti",
    contact: "Contatto",
    
    // Hero Section
    welcome: "Benvenuto nel mio spazio digitale",
    title_role: "Sviluppatrice Sofisticata e Manager Regionale",
    hero_description: "Collegando l'eccellenza aziendale con la tecnologia all'avanguardia. Dalla gestione di operazioni regionali in UAE, Qatar e Giordania alla padronanza dello sviluppo full-stack con AI e machine learning.",
    download_cv: "Scarica CV",
    get_in_touch: "Mettiti in contatto",
    scroll_explore: "Scorri per esplorare",
    
    // Experience Section
    professional_journey: "Percorso professionale",
    experience_subtitle: "Quasi due decenni di eccellenza nella leadership nei settori dell'ospitalità, immobiliare e retail",
    
    // Education Section
    academic_excellence: "Eccellenza accademica",
    education_subtitle: "Viaggio di apprendimento continuo dalla gestione alberghiera all'AI e machine learning all'avanguardia",
    ongoing: "In corso",
    completed: "Completato",
    
    // Skills Section
    skills_expertise: "Competenze ed Esperienza",
    skills_subtitle: "Una miscela unica di abilità tecniche ed eccellenza nella leadership",
    programming_languages: "Linguaggi di Programmazione",
    frameworks_technologies: "Framework e Tecnologie",
    leadership_management: "Leadership e Management",
    languages: "Lingue",
    
    // Projects Section
    featured_projects: "Progetti in evidenza",
    projects_subtitle: "Mostrando soluzioni innovative dalle piattaforme web alle app mobili disponibili su App Store e Google Play",
    all: "Tutti",
    mobile_apps: "App Mobili",
    web_apps: "App Web",
    featured: "In evidenza",
    visit_site: "Visita sito",
    code: "Codice",
    app_store: "App Store",
    play_store: "Google Play",
    available_stores: "Disponibile su App Store e Google Play",
    no_projects_found: "Nessun progetto trovato",
    try_different_filter: "Prova a selezionare un filtro diverso per vedere più progetti.",
    
    // Contact Section
    lets_connect: "Connettiamoci",
    contact_subtitle: "Pronto a portare soluzioni innovative al vostro prossimo progetto. Discutiamo di come possiamo lavorare insieme.",
    email: "Email",
    phone: "Telefono",
    location: "Posizione",
    stockholm_sweden: "Stoccolma, Svezia",
    download_full_cv: "Scarica CV completo",
    send_message: "Invia messaggio",
    your_name: "Il tuo nome",
    your_email: "La tua email",
    subject: "Oggetto",
    your_message: "Il tuo messaggio",
    sending: "Invio...",
    message_sent_success: "Messaggio inviato con successo! Ti risponderò presto.",
    message_send_error: "Invio del messaggio fallito. Riprova o contattami direttamente.",
    
    // Skills Categories
    team_leadership: "Leadership di squadra",
    regional_management: "Gestione regionale",
    training_development: "Formazione e Sviluppo",
    customer_relations: "Relazioni clienti",
    business_strategy: "Strategia aziendale",
    arabic: "Arabo",
    english: "Inglese",
    swedish: "Svedese",
    french: "Francese",
    spanish: "Spagnolo"
  },
  
  fr: {
    // Navigation - French
    home: "Accueil",
    experience: "Expérience",
    education: "Éducation",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    
    // Hero Section
    welcome: "Bienvenue dans mon espace numérique",
    title_role: "Développeuse Sophistiquée et Directrice Régionale",
    hero_description: "Allier l'excellence commerciale à la technologie de pointe. De la gestion d'opérations régionales aux Émirats, au Qatar et en Jordanie à la maîtrise du développement full-stack avec l'IA et l'apprentissage automatique.",
    download_cv: "Télécharger CV",
    get_in_touch: "Prendre contact",
    scroll_explore: "Faire défiler pour explorer",
    
    // Experience Section
    professional_journey: "Parcours professionnel",
    experience_subtitle: "Près de deux décennies d'excellence en leadership dans les secteurs de l'hôtellerie, de l'immobilier et du retail",
    
    // Education Section
    academic_excellence: "Excellence académique",
    education_subtitle: "Parcours d'apprentissage continu de la gestion hôtelière à l'IA et l'apprentissage automatique de pointe",
    ongoing: "En cours",
    completed: "Terminé",
    
    // Skills Section
    skills_expertise: "Compétences et Expertise",
    skills_subtitle: "Un mélange unique de prouesse technique et d'excellence en leadership",
    programming_languages: "Langages de Programmation",
    frameworks_technologies: "Frameworks et Technologies",
    leadership_management: "Leadership et Management",
    languages: "Langues",
    
    // Projects Section
    featured_projects: "Projets en vedette",
    projects_subtitle: "Présentation de solutions innovantes des plateformes web aux applications mobiles disponibles sur App Store et Google Play",
    all: "Tous",
    mobile_apps: "Apps Mobiles",
    web_apps: "Apps Web",
    featured: "En vedette",
    visit_site: "Visiter le site",
    code: "Code",
    app_store: "App Store",
    play_store: "Google Play",
    available_stores: "Disponible sur App Store et Google Play",
    no_projects_found: "Aucun projet trouvé",
    try_different_filter: "Essayez de sélectionner un filtre différent pour voir plus de projets.",
    
    // Contact Section
    lets_connect: "Connectons-nous",
    contact_subtitle: "Prêt à apporter des solutions innovantes à votre prochain projet. Discutons de la façon dont nous pouvons travailler ensemble.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    stockholm_sweden: "Stockholm, Suède",
    download_full_cv: "Télécharger CV complet",
    send_message: "Envoyer un message",
    your_name: "Votre nom",
    your_email: "Votre email",
    subject: "Sujet",
    your_message: "Votre message",
    sending: "Envoi...",
    message_sent_success: "Message envoyé avec succès! Je vous répondrai bientôt.",
    message_send_error: "Échec de l'envoi du message. Réessayez ou contactez-moi directement.",
    
    // Skills Categories
    team_leadership: "Leadership d'équipe",
    regional_management: "Gestion régionale",
    training_development: "Formation et Développement",
    customer_relations: "Relations clientèle",
    business_strategy: "Stratégie d'entreprise",
    arabic: "Arabe",
    english: "Anglais",
    swedish: "Suédois",
    french: "Français",
    spanish: "Espagnol"
  },
  
  zh: {
    // Navigation - Chinese (Mandarin)
    home: "首页",
    experience: "经验",
    education: "教育",
    skills: "技能",
    projects: "项目",
    contact: "联系",
    
    // Hero Section
    welcome: "欢迎来到我的数字空间",
    title_role: "资深开发者兼区域经理",
    hero_description: "将商业卓越与前沿技术相结合。从管理阿联酋、卡塔尔和约旦的区域运营，到掌握AI和机器学习的全栈开发。",
    download_cv: "下载简历",
    get_in_touch: "联系我",
    scroll_explore: "滚动探索",
    
    // Experience Section
    professional_journey: "职业历程",
    experience_subtitle: "在酒店、房地产和零售行业近二十年的卓越领导经验",
    
    // Education Section
    academic_excellence: "学术卓越",
    education_subtitle: "从酒店管理到前沿AI和机器学习的持续学习之旅",
    ongoing: "进行中",
    completed: "已完成",
    
    // Skills Section
    skills_expertise: "技能与专长",
    skills_subtitle: "技术实力与领导卓越的独特结合",
    programming_languages: "编程语言",
    frameworks_technologies: "框架和技术",
    leadership_management: "领导力和管理",
    languages: "语言",
    
    // Projects Section
    featured_projects: "精选项目",
    projects_subtitle: "展示从网络平台到在App Store和Google Play上可用的移动应用程序的创新解决方案",
    all: "全部",
    mobile_apps: "移动应用",
    web_apps: "网络应用",
    featured: "精选",
    visit_site: "访问网站",
    code: "代码",
    app_store: "App Store",
    play_store: "Google Play",
    available_stores: "在App Store和Google Play上可用",
    no_projects_found: "未找到项目",
    try_different_filter: "尝试选择不同的过滤器以查看更多项目。",
    
    // Contact Section
    lets_connect: "让我们联系",
    contact_subtitle: "准备为您的下一个项目带来创新解决方案。让我们讨论如何合作。",
    email: "邮箱",
    phone: "电话",
    location: "位置",
    stockholm_sweden: "瑞典斯德哥尔摩",
    download_full_cv: "下载完整简历",
    send_message: "发送消息",
    your_name: "您的姓名",
    your_email: "您的邮箱",
    subject: "主题",
    your_message: "您的消息",
    sending: "发送中...",
    message_sent_success: "消息发送成功！我很快会回复您。",
    message_send_error: "消息发送失败。请重试或直接联系我。",
    
    // Skills Categories
    team_leadership: "团队领导",
    regional_management: "区域管理",
    training_development: "培训和发展",
    customer_relations: "客户关系",
    business_strategy: "商业策略",
    arabic: "阿拉伯语",
    english: "英语",
    swedish: "瑞典语",
    french: "法语",
    spanish: "西班牙语"
  }
};

let currentLanguage = 'en';

if (typeof window !== 'undefined') {
    currentLanguage = localStorage.getItem('portfolioLanguage') || 'en';
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
}


export function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem('portfolioLanguage', lang);
    // Update document direction for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function t(key) {
  return translations[currentLanguage]?.[key] || translations['en'][key] || key;
}

export function getAvailableLanguages() {
  return [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];
}