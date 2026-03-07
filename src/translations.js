/* ================================================================
   KALINGA FISH FARM — i18n Translations
   Languages: English (en) · Swahili (sw)
   ================================================================ */

const translations = {
  en: {
    /* ── Top bar ── */
    topBadge: 'Certified Aquaculture',

    /* ── Header nav ── */
    navHome:       'Home',
    navWhyUs:      'Why Us',
    navOperations: 'Operations',
    navMedia:      'Media',
    navContact:    'Contact',
    navWhatsApp:   'WhatsApp',

    /* ── Hero ── */
    statusChip: 'Trusted aquaculture supply · Since 2014',
    heroTitle1: 'Your Gateway to',
    heroTitle2: 'Premium',
    heroTitle3: 'Freshwater Fish',
    heroLead:   'Official harvest partner for East African retailers, hoteliers, and institutional buyers. Full transparency from water management to final dispatch.',

    /* Metrics */
    metric1Label: 'Operational ponds',
    metric2Label: 'Monthly harvest output',
    metric3Label: 'Max dispatch window',
    metric4Label: 'Regional buyers served',

    /* Inquiry widget */
    inquiryProduct:  'PRODUCT',
    inquiryDate:     'PREFERRED DATE',
    inquiryVolume:   'VOLUME',
    inquiryBtn:      'REQUEST QUOTE',
    optTilapia:      'Tilapia',
    optCatfish:      'Catfish',
    optMixed:        'Mixed Order',
    optNilePerch:    'Nile Perch',

    /* WhatsApp quote message */
    waMsg: (product, vol, date) =>
      `Hello Kalinga Fish Farm! I'd like to request a quote for ${product}${vol}${date}. Please confirm availability and pricing.`,
    waVol:  (v, u) => ` — ${v} ${u}`,
    waDate: (d)    => `, preferred delivery: ${d}`,

    /* ── Why Us ── */
    whyEyebrow: 'OUR CORE VALUES',
    whyH2:      'Why Partner With Kalinga?',
    whyP:       'Four pillars that set us apart as the most reliable freshwater fish supplier in the Iringa highland region.',

    val1Tag:   'OUR STRENGTH',
    val1Title: 'Expertise & Experience',
    val1Desc:  'Over a decade of freshwater aquaculture expertise ensuring top-notch fish quality and expert farm management.',
    val2Tag:   'OUR STRENGTH',
    val2Title: 'Reliable Supply Chain',
    val2Desc:  'Structured harvest schedules and GPS-tracked dispatch vans delivering consistently to every verified buyer.',
    val3Tag:   'OUR STRENGTH',
    val3Title: 'Certified & Compliant',
    val3Desc:  'Tanzania Fisheries Board certified and HACCP-ready, meeting every food safety standard required for institutional supply.',
    val4Tag:   'OUR STRENGTH',
    val4Title: 'Dedicated Support',
    val4Desc:  'Our buyer desk responds within the same business day, coordinating RFQs, documentation, and farm access seamlessly.',

    /* ── Operations ── */
    opsEyebrow:  'REAL-TIME OPERATIONS',
    opsH2:       'Live from Our Farm Floor.',
    opsP:        'Each operational track combines an engineered workflow with live imagery so partners can audit us visually at any time.',
    opsLiveBadge:'3 PROGRAMS CURRENTLY ACTIVE',

    ops1Tag:   'ACTIVE NOW',
    ops1Title: 'Water & Habitat Engineering',
    ops1Desc:  'Continuous data logging on pH, dissolved oxygen, and inflow velocity keeps every pond within target bands.',
    ops1b1:    'IoT probes + manual validation',
    ops1b2:    'Daily QA review at 06:30',
    ops1b3:    'Emergency aeration protocol',

    ops2Tag:   'FLAGSHIP',
    ops2Title: 'Harvest Logistics Program',
    ops2Desc:  'Structured seine schedules, insulated packing, and rapid weigh-ins create dependable delivery slots.',
    ops2b1:    'Slotting calendar shared weekly',
    ops2b2:    'Pack-outs to 2.5T per day',
    ops2b3:    'GPS-tracked dispatch vans',

    ops3Tag:   'CERTIFIED',
    ops3Title: 'Client Experience Office',
    ops3Desc:  'Dedicated buyer desk handles RFQs, certifications, and spot checks so procurement teams stay confident.',
    ops3b1:    'Same-day paperwork turnaround',
    ops3b2:    'WhatsApp + email coordination',
    ops3b3:    'Transparent farm access',

    viewDetails: 'VIEW DETAILS',

    /* ── Video ── */
    vidEyebrow:   'FARM FOOTAGE',
    vidH2:        'Watch the Operation Live.',
    vidP:         'Unedited footage from our latest harvests — real conditions, real output, full transparency for every procurement decision.',
    vidRecBadge:  '2 RECORDINGS AVAILABLE',

    vid1Tag:      'POND 4 · HARVEST DAY',
    vid1Title:    'Harvest Operation',
    vid1Sub:      'Seine net pull, live weigh-in, and iced packing — unedited footage from our last major dispatch run.',
    vid2Tag:      'FARM WALK · TRAINING',
    vid2Title:    'Sustainable Farming Demo',
    vid2Sub:      'Guided walkthrough of our water-management system and hatchery protocols with our aquaculture team.',
    vidFarmVisit: 'Request farm visit',

    /* ── Gallery ── */
    galEyebrow: 'VISUAL JOURNEY',
    galH2:      'Our Aquaculture Gallery',
    galSub:     'A glimpse into the heart of the farm — through the eyes of our team and our partners.',
    galBadge:   'KALINGA PHOTO OPS',

    gal1Tag: 'Aquaculture training',
    gal2Tag: 'Harvest line',
    gal3Tag: 'Pond infrastructure',
    gal4Tag: 'Sorting',
    gal5Tag: 'Quality inspection',
    gal6Tag: 'Quality check',
    gal7Tag: 'Community engagement',
    gal8Tag: 'Packaging',
    gal9Tag: 'Field supervision',
    gal10Tag:'Catfish detail',
    gal11Tag:'Harvest yield',
    gal12Tag:'Pond sunrise',

    /* ── Photo strip ── */
    stripEyebrow:  'FOLLOW OUR INSTAGRAM',

    /* ── Credentials ── */
    credEyebrow:  'CREDENTIALS & MEMBERSHIP',
    credH2a:      'Independently Audited.',
    credH2b:      'Open for Inspection.',
    credSub:      'Every buyer can request farm access, compliance documents, and third-party audit reports within 48 hours.',
    credBadge:    'VERIFIED OPERATOR',
    accolade1:    'Tanzania Fisheries Board Certified',
    accolade2:    'Hazard Analysis Critical Control Point (HACCP) ready',
    accolade3:    'Preferred supplier to 18 hospitality groups',
    accolade4:    'Member – African Aquaculture Alliance',

    /* ── Contact ── */
    contactEyebrow: 'CONNECT WITH OPERATIONS',
    contactH2:      'Direct Line to Our Harvest Planning Desk.',
    contactP:       'Share your volume targets, preferred dispatch windows, and compliance requirements. We respond within one business day — often sooner.',
    chCall:     'Call us',
    chWhatsApp: 'WhatsApp',
    chEmail:    'Email desk',
    chVisit:    'Visit us',

    /* ── CTA Band ── */
    ctaEyebrow: 'READY TO ORDER?',
    ctaH2:      'Place Your Bulk Order Today.',
    ctaP:       "Our harvest planning desk is standing by. Share your volume targets and we'll confirm availability within one business day.",
    ctaChat:    'Chat on WhatsApp',

    /* ── Footer ── */
    footerTagline: 'Premium freshwater aquaculture · Iringa, Tanzania',
    footerDesc:    'Delivering certified, farm-fresh fish to East African retailers, hotels, and institutions since 2014. Transparency and quality at every step.',

    footerCol1Title: 'FISH PRODUCTS',
    footerCol1L1: 'Fresh Tilapia',
    footerCol1L2: 'Catfish',
    footerCol1L3: 'Nile Perch',
    footerCol1L4: 'Smoked Fish',
    footerCol1L5: 'Dried Fish',

    footerCol2Title: 'OUR SERVICES',
    footerCol2L1: 'Bulk Orders',
    footerCol2L2: 'Farm Visits',
    footerCol2L3: 'Custom Packaging',
    footerCol2L4: 'Training Programs',
    footerCol2L5: 'Hatchery Supply',

    footerCol3Title: 'COMPANY',
    footerCol3L1: 'About Kalinga',
    footerCol3L2: 'Certifications',
    footerCol3L3: 'Media Gallery',
    footerCol3L4: 'Contact Us',
    footerCol3L5: 'WhatsApp Desk',

    footerFollow: 'FOLLOW US',
    footerLegal1: 'CERTIFIED AQUACULTURE OPERATORS',
    footerLegal2: 'TANZANIA FISHERIES BOARD MEMBER',
    footerLegal3: (y) => `© ${y} KALINGA FISH FARM. ALL RIGHTS RESERVED.`,
    footerLegal4: 'DESIGNED FOR THE MODERN BUYER.',

    /* ── FAB ── */
    fabLabel: 'Chat with us',

    /* ── Lang switcher ── */
    langSwitchLabel: 'SW',  /* label shown on toggle button (switch TO Swahili) */
  },

  sw: {
    /* ── Top bar ── */
    topBadge: 'Ufugaji wa Samaki Uliosajiliwa',

    /* ── Header nav ── */
    navHome:       'Nyumbani',
    navWhyUs:      'Kwa Nini Sisi',
    navOperations: 'Shughuli',
    navMedia:      'Picha & Video',
    navContact:    'Wasiliana',
    navWhatsApp:   'WhatsApp',

    /* ── Hero ── */
    statusChip: 'Muuzaji wa samaki wa kuamini · Tangu 2014',
    heroTitle1: 'Lango Lako la',
    heroTitle2: 'Samaki Bora',
    heroTitle3: 'wa Maji Baridi',
    heroLead:   'Mshirika rasmi wa mavuno kwa wasambazaji, wamiliki wa hoteli, na wanunuzi wa taasisi Afrika Mashariki. Uwazi kamili kutoka usimamizi wa maji hadi usafirishaji wa mwisho.',

    /* Metrics */
    metric1Label: 'Mabwawa yanayofanya kazi',
    metric2Label: 'Mavuno ya kila mwezi',
    metric3Label: 'Muda wa juu wa kutuma',
    metric4Label: 'Wanunuzi wanaohudumika',

    /* Inquiry widget */
    inquiryProduct:  'AINA YA SAMAKI',
    inquiryDate:     'TAREHE UNAYOPENDELEA',
    inquiryVolume:   'KIASI',
    inquiryBtn:      'OMBA BEI',
    optTilapia:      'Sato (Tilapia)',
    optCatfish:      'Kambale (Catfish)',
    optMixed:        'Oda Mchanganyiko',
    optNilePerch:    'Sangara (Nile Perch)',

    /* WhatsApp quote message */
    waMsg: (product, vol, date) =>
      `Habari Kalinga Fish Farm! Ningependa kupata bei ya ${product}${vol}${date}. Tafadhali thibitisha upatikanaji na bei.`,
    waVol:  (v, u) => ` — ${v} ${u}`,
    waDate: (d)    => `, tarehe ya kupokea: ${d}`,

    /* ── Why Us ── */
    whyEyebrow: 'NGUZO ZETU KUU',
    whyH2:      'Kwa Nini Ushirikiane na Kalinga?',
    whyP:       'Nguzo nne zinazotufanya tuwe muuzaji wa samaki wa kuamini zaidi katika eneo la nyanda za juu za Iringa.',

    val1Tag:   'NGUVU YETU',
    val1Title: 'Uzoefu na Utaalamu',
    val1Desc:  'Uzoefu wa zaidi ya muongo mmoja katika ufugaji wa samaki wa maji baridi, ukihakikisha ubora wa samaki na usimamizi bora wa shamba.',
    val2Tag:   'NGUVU YETU',
    val2Title: 'Mnyororo wa Usambazaji wa Kuamini',
    val2Desc:  'Ratiba za mavuno na magari ya kusafirisha yanayofuatiliwa kwa GPS yanayotoa huduma kwa kila mnunuzi aliyethibitishwa.',
    val3Tag:   'NGUVU YETU',
    val3Title: 'Imeidhinishwa na Kuthibitishwa',
    val3Desc:  'Imeidhinishwa na Bodi ya Uvuvi Tanzania na tayari kwa HACCP, ikikidhi kila kiwango cha usalama wa chakula.',
    val4Tag:   'NGUVU YETU',
    val4Title: 'Msaada wa Kujitolea',
    val4Desc:  'Meza yetu ya wanunuzi inajibu ndani ya siku hiyo hiyo ya biashara, ikisimamia maombi, nyaraka, na ufikiaji wa shamba.',

    /* ── Operations ── */
    opsEyebrow:   'SHUGHULI ZA WAKATI HALISI',
    opsH2:        'Moja kwa Moja Kutoka Shambani.',
    opsP:         'Kila mfumo wa uendeshaji unachanganya mchakato ulioundwa na picha za moja kwa moja ili washirika waweze ukaguzi wa kuona wakati wowote.',
    opsLiveBadge: 'PROGRAMU 3 ZINAENDELEA SASA HIVI',

    ops1Tag:   'INAFANYA KAZI',
    ops1Title: 'Uhandisi wa Maji na Makazi',
    ops1Desc:  'Ukusanyaji wa data za pH, oksijeni iliyoyeyushwa, na kasi ya mtiririko huhakikisha kila bwawa liko ndani ya viwango vinavyolengwa.',
    ops1b1:    'Vipimo vya IoT + ukaguzi wa mkono',
    ops1b2:    'Ukaguzi wa ubora kila siku 06:30',
    ops1b3:    'Itifaki ya dharura ya hewa',

    ops2Tag:   'MFUMO MKUU',
    ops2Title: 'Mpango wa Usafirishaji wa Mavuno',
    ops2Desc:  'Ratiba za wavu, ufungashaji wa kuhami joto, na upimaji wa haraka huunda nafasi za utoaji za kuaminika.',
    ops2b1:    'Kalenda ya ratiba inashirikiwa kila wiki',
    ops2b2:    'Upakiaji hadi tani 2.5 kwa siku',
    ops2b3:    'Magari ya kusafirisha yanayofuatiliwa kwa GPS',

    ops3Tag:   'IMEIDHINISHWA',
    ops3Title: 'Ofisi ya Huduma kwa Mteja',
    ops3Desc:  'Meza ya wanunuzi iliyotengwa inashughulikia maombi, vyeti, na ukaguzi ili timu za manunuzi ziwe na ujasiri.',
    ops3b1:    'Ukamilishaji wa nyaraka siku hiyo hiyo',
    ops3b2:    'Uratibu wa WhatsApp + barua pepe',
    ops3b3:    'Ufikiaji wa wazi wa shamba',

    viewDetails: 'TAZAMA MAELEZO',

    /* ── Video ── */
    vidEyebrow:   'PICHA ZA SHAMBANI',
    vidH2:        'Tazama Operesheni Moja kwa Moja.',
    vidP:         'Picha za video zisizohaririwa kutoka kwa mavuno yetu ya hivi karibuni — hali halisi, matokeo halisi, uwazi kamili.',
    vidRecBadge:  'REKODI 2 ZINAPATIKANA',

    vid1Tag:      'BWAWA 4 · SIKU YA MAVUNO',
    vid1Title:    'Operesheni ya Mavuno',
    vid1Sub:      'Mvuto wa wavu, upimaji wa moja kwa moja, na ufungashaji wa barafu — picha zisizohaririwa kutoka safari yetu ya mwisho.',
    vid2Tag:      'ZIARA YA SHAMBA · MAFUNZO',
    vid2Title:    'Onyesho la Ufugaji Endelevu',
    vid2Sub:      'Mwongozo wa mfumo wa usimamizi wa maji na itifaki za hatchery na timu yetu ya ufugaji wa samaki.',
    vidFarmVisit: 'Omba ziara ya shamba',

    /* ── Gallery ── */
    galEyebrow: 'SAFARI YA KUONA',
    galH2:      'Matunzio Yetu ya Ufugaji wa Samaki',
    galSub:     'Mwangaza wa moyo wa shamba — kupitia macho ya timu yetu na washirika wetu.',
    galBadge:   'PICHA ZA KALINGA',

    gal1Tag:  'Mafunzo ya ufugaji wa samaki',
    gal2Tag:  'Mstari wa mavuno',
    gal3Tag:  'Miundombinu ya mabwawa',
    gal4Tag:  'Upangaji',
    gal5Tag:  'Ukaguzi wa ubora',
    gal6Tag:  'Udhibiti wa ubora',
    gal7Tag:  'Ushirikiano wa jamii',
    gal8Tag:  'Ufungashaji',
    gal9Tag:  'Usimamizi wa shamba',
    gal10Tag: 'Maelezo ya kambale',
    gal11Tag: 'Matokeo ya mavuno',
    gal12Tag: 'Mapambazuko kwenye bwawa',

    /* ── Photo strip ── */
    stripEyebrow: 'TUFUATE INSTAGRAM',

    /* ── Credentials ── */
    credEyebrow:  'VYETI NA UANACHAMA',
    credH2a:      'Imekaguliwa Kwa Kujitegemea.',
    credH2b:      'Wazi kwa Ukaguzi.',
    credSub:      'Kila mnunuzi anaweza kuomba ufikiaji wa shamba, nyaraka za utiifu, na ripoti za ukaguzi za watu wengine ndani ya masaa 48.',
    credBadge:    'OPERETA ALIYETHIBITISHWA',
    accolade1:    'Imeidhinishwa na Bodi ya Uvuvi Tanzania',
    accolade2:    'Tayari kwa Uchambuzi wa Hatari na Udhibiti wa Hatua Muhimu (HACCP)',
    accolade3:    'Muuzaji anayopendelewa na makundi 18 ya ukarimu',
    accolade4:    'Mwanachama – Muungano wa Ufugaji wa Samaki Afrika',

    /* ── Contact ── */
    contactEyebrow: 'WASILIANA NA SHUGHULI',
    contactH2:      'Njia ya Moja kwa Moja kwa Meza yetu ya Kupanga Mavuno.',
    contactP:       'Shiriki malengo yako ya kiasi, madirisha ya kutuma yaliyopendelewa, na mahitaji ya utiifu. Tunajibu ndani ya siku moja ya biashara — mara nyingi haraka zaidi.',
    chCall:     'Tupigie simu',
    chWhatsApp: 'WhatsApp',
    chEmail:    'Barua pepe',
    chVisit:    'Tembelea',

    /* ── CTA Band ── */
    ctaEyebrow: 'UKO TAYARI KUAGIZA?',
    ctaH2:      'Weka Oda Yako ya Jumla Leo.',
    ctaP:       'Meza yetu ya kupanga mavuno iko tayari. Shiriki malengo yako ya kiasi na tutathibitisha upatikanaji ndani ya siku moja ya biashara.',
    ctaChat:    'Ongea kwenye WhatsApp',

    /* ── Footer ── */
    footerTagline: 'Ufugaji bora wa samaki wa maji baridi · Iringa, Tanzania',
    footerDesc:    'Kutoa samaki safi wenye vyeti kwa wasambazaji, hoteli, na taasisi Afrika Mashariki tangu 2014. Uwazi na ubora kila hatua.',

    footerCol1Title: 'BIDHAA ZA SAMAKI',
    footerCol1L1: 'Sato Safi',
    footerCol1L2: 'Kambale',
    footerCol1L3: 'Sangara',
    footerCol1L4: 'Samaki wa Kuvuta Moshi',
    footerCol1L5: 'Samaki Kavu',

    footerCol2Title: 'HUDUMA ZETU',
    footerCol2L1: 'Oda za Jumla',
    footerCol2L2: 'Ziara za Shamba',
    footerCol2L3: 'Ufungashaji Maalum',
    footerCol2L4: 'Programu za Mafunzo',
    footerCol2L5: 'Ugavi wa Hatchery',

    footerCol3Title: 'KAMPUNI',
    footerCol3L1: 'Kuhusu Kalinga',
    footerCol3L2: 'Vyeti',
    footerCol3L3: 'Matunzio ya Picha',
    footerCol3L4: 'Wasiliana Nasi',
    footerCol3L5: 'Meza ya WhatsApp',

    footerFollow: 'TUFUATE',
    footerLegal1: 'WAENDESHAJI WA UFUGAJI WALIOSAJILIWA',
    footerLegal2: 'MWANACHAMA WA BODI YA UVUVI TANZANIA',
    footerLegal3: (y) => `© ${y} KALINGA FISH FARM. HAKI ZOTE ZIMEHIFADHIWA.`,
    footerLegal4: 'IMEUNDWA KWA MNUNUZI WA KISASA.',

    /* ── FAB ── */
    fabLabel: 'Ongea nasi',

    /* ── Lang switcher ── */
    langSwitchLabel: 'ENG', /* label shown on toggle button (switch TO English) */
  }
};

export default translations;
