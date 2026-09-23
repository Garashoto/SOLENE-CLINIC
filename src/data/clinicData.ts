export interface ServiceItem {
  id: string;
  name: string;
  category: 'Skin' | 'Hair' | 'Laser' | 'Anti-Ageing' | 'Body & Clinical';
  broadCategory:
    | 'Skin Lightening & Brightening'
    | 'Anti Ageing'
    | 'Body Contouring'
    | 'Hair Fall Solutions'
    | 'Cosmetic Surgery'
    | 'Sexual Wellness'
    | 'Laser & Dermato-Surgery';
  shortDesc: string;
  fullDesc: string;
  primaryIndication: string;
  targetConcerns: string[];
  sessionDuration: string;
  recommendedSessions: string;
  isFeatured?: boolean;
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  credentials: string;
  experience?: string;
  bio: string;
  specialisations: string[];
  approach: string;
}

export interface ConcernItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  relatedServiceIds: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  keyTakeaways: string[];
  content: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  serviceReviewed: string;
  comment: string;
  verified: boolean;
}

export const CLINIC_INFO = {
  name: "Solène",
  subtitle: "Skin, Hair & Laser Clinic & Academy",
  tagline: "Naturally Inspired & Scientifically Perfected",
  address: "4th Floor, 90-D Guru Nanak Vihar, Race Course, Dehradun – 248001",
  city: "Dehradun",
  state: "Uttarakhand",
  pincode: "248001",
  primaryPhone: "+919646566641",
  primaryPhoneDisplay: "+91-9646566641",
  secondaryPhone: "+919646566642",
  secondaryPhoneDisplay: "+91-9646566642",
  whatsappNumber: "+919646566641",
  whatsappDisplay: "+91-9646566641",
  googleProfileUrl: "https://share.google/O4E5T8Ohv4mnsBwbW",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.375254124707!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092998319f3903%3A0x6b0a8eb1b4dcf3a8!2sRace%20Course%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  timings: {
    weekdays: "Monday – Saturday: 10:30 AM – 7:30 PM",
    sunday: "Sunday: 11:00 AM – 4:00 PM (By Appointment)",
  },
  email: "care@soleneclinic.com",
};

export const DOCTORS: DoctorProfile[] = [
  {
    id: "dr-megha-sahi",
    name: "Dr. Megha Sahi",
    title: "Aesthetic Physician & Laser Cosmetologist",
    credentials: "BAMS, FMC (Delhi)",
    bio: "Dr. Megha Sahi brings clinical rigor and artistic precision to aesthetic medicine. Trained with a Fellowship in Medical Cosmetology (Delhi), she focuses on individualized diagnostic assessments, laser treatments, and holistic skin health.",
    specialisations: [
      "Advanced Laser Cosmetology",
      "Chemical Peels & Skin Rejuvenation",
      "Injectable Aesthetics & Anti-Ageing",
      "Clinical Acne & Pigmentation Protocols",
      "Aesthetic Academy Mentorship"
    ],
    approach: "Every treatment starts with a meticulous consultation examining skin type, hormonal triggers, and lifestyle factors. We never propose a procedure until clinical suitability is clearly established."
  },
  {
    id: "dr-asha-rawat",
    name: "Dr. Asha Rawat",
    title: "Senior Doctor & Aesthetic Physician",
    credentials: "Senior Doctor",
    experience: "17+ Years Clinical Experience (Bangalore · Delhi · Chandigarh)",
    bio: "With over 17 years of premier clinical and aesthetic practice across Bangalore, Delhi, and Chandigarh (CHD), Dr. Asha Rawat brings seasoned diagnostic authority to Solène. Having managed complex dermatological concerns and advanced hair restoration protocols across India's leading medical hubs, she guides treatment plans with unmatched clinical precision, honesty, and safety.",
    specialisations: [
      "Senior Clinical Consultations (Bangalore, Delhi, CHD Experience)",
      "Advanced Scalp & Hair Fall Diagnostics (PRP & Exosomes)",
      "Age-Related Facial Architecture & Structural Rejuvenation",
      "Melasma & Complex Pigmentation Therapeutics",
      "Holistic Medical Wellness & Patient Counseling"
    ],
    approach: "Having practiced for over 17 years across Bangalore, Delhi, and Chandigarh, my clinical principle has always remained grounded in medical honesty. We never recommend a treatment that isn't biologically backed and genuinely suited to your unique anatomy."
  }
];

export const CONCERNS: ConcernItem[] = [
  {
    id: "hair-fall",
    title: "Hair Fall & Thinning",
    tagline: "Scalp evaluation, PRP & cellular restoration",
    description: "Addressing androgenetic alopecia, diffuse shedding, and post-illness telogen effluvium through clinical scalp mapping and targeted therapy.",
    relatedServiceIds: ["adv-hair-prp", "meso-hair", "exosome-therapy", "stem-cell-therapy", "hair-transplant"]
  },
  {
    id: "acne-breakouts",
    title: "Acne & Active Breakouts",
    tagline: "Calming inflammation & bacterial control",
    description: "Multi-layered medical acne care combining sebum regulation, gentle antimicrobial light therapy, and targeted peels to prevent future scarring.",
    relatedServiceIds: ["acne-shield", "chemical-peels", "carbon-facial", "hydra-facial"]
  },
  {
    id: "pigmentation-melasma",
    title: "Pigmentation & Uneven Tone",
    tagline: "Melanin regulation & laser toning",
    description: "Careful diagnostic classification of epidermal vs. dermal pigmentation, melasma patches, and sun damage using gentle toning lasers and depigmenting peels.",
    relatedServiceIds: ["laser-toning", "skin-lightening", "chemical-peels", "underarm-pigmentation"]
  },
  {
    id: "dark-circles",
    title: "Dark Circles & Periorbital Fatigue",
    tagline: "Hollow correction & vascular rejuvenation",
    description: "Targeting structural tear-trough hollows, pigmentary deposition, and micro-circulation stagnation around the delicate eye contour.",
    relatedServiceIds: ["dark-circles", "meso-face", "botox-fillers", "adv-face-prp"]
  },
  {
    id: "acne-scars",
    title: "Acne Scars & Texture",
    tagline: "Collagen remodeling & scar revision",
    description: "Addressing atrophic boxcar, rolling, and icepick scars through subcision, microneedling dermaroller, and cellular growth factors.",
    relatedServiceIds: ["scar-treatment", "dermaroller", "chemical-peels", "exosome-therapy"]
  },
  {
    id: "unwanted-hair",
    title: "Unwanted Facial & Body Hair",
    tagline: "Triple-wavelength laser hair reduction",
    description: "Medical-grade laser technology adapted for Indian skin phototypes, designed to progressively reduce density safely without surface irritation.",
    relatedServiceIds: ["laser-hair-reduction"]
  },
  {
    id: "ageing-concerns",
    title: "Ageing Lines & Volume Loss",
    tagline: "Restoring youthful contour & structural support",
    description: "Subtle, physician-administered neuromodulators and hyaluronic dermal fillers to soften expression wrinkles and support natural facial volume.",
    relatedServiceIds: ["anti-wrinkle", "botox-fillers", "thread-lift", "face-lift", "exosome-therapy"]
  },
  {
    id: "dull-skin-texture",
    title: "Dullness & Rough Texture",
    tagline: "Clinical hydration, exfoliation & glow",
    description: "Restoring barrier integrity and cell renewal with deep vortex pore extraction, diamond microdermabrasion, and oxygen-rich infusions.",
    relatedServiceIds: ["hydra-facial", "oxyglow-facial", "diamond-polishing", "photo-facial"]
  },
  {
    id: "body-contouring",
    title: "Stubborn Pockets & Body Shaping",
    tagline: "Non-invasive body contouring & toning",
    description: "Targeted radiofrequency and acoustic energy to smooth tissue laxity and complement healthy lifestyle efforts.",
    relatedServiceIds: ["body-sculpting"]
  },
  {
    id: "tattoos-growths",
    title: "Tattoo Removal & Skin Growths",
    tagline: "Precision Q-switched laser & radio-cautery",
    description: "Safe ink pigment fragmentation and quick aesthetic removal of cosmetic moles, warts, and benign skin tags under local numbing.",
    relatedServiceIds: ["tattoo-removal", "mole-wart-removal", "skin-tags-removal"]
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  // 1. SKIN & GLOW
  {
    id: "chemical-peels",
    name: "Chemical Peels",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Controlled dermatological exfoliation using lactic, glycolic, salicylic, or mandelic acids to reveal refined skin texture.",
    fullDesc: "Our medical-grade chemical peels are chosen strictly based on your individual skin type and depth requirement. By loosening intercellular bonds in damaged surface layers, peels accelerate cell turnover, soften post-acne marks, and balance uneven epidermal pigmentation under medical supervision.",
    primaryIndication: "Sun damage, mild acne, uneven tone, fine textural roughness",
    targetConcerns: ["Pigmentation & Uneven Tone", "Acne & Active Breakouts", "Dullness & Rough Texture"],
    sessionDuration: "30–45 mins",
    recommendedSessions: "3–6 sessions spaced 2–4 weeks apart",
    isFeatured: true
  },
  {
    id: "hydra-facial",
    name: "Hydra Facial",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Multi-stage vortex deep-pore cleansing, extraction of debris, and antioxidant serum hydration.",
    fullDesc: "A gentle medical facial combining mechanical vortex suction with nutrient-dense hydration infusions. Leaves the epidermis clean, hydrated, and calm without invasive pinching or prolonged downtime.",
    primaryIndication: "Clogged pores, blackheads, congested skin, dehydrated texture",
    targetConcerns: ["Dullness & Rough Texture", "Acne & Active Breakouts"],
    sessionDuration: "45–60 mins",
    recommendedSessions: "Monthly maintenance or pre-event preparation",
    isFeatured: true
  },
  {
    id: "oxyglow-facial",
    name: "OxyGlow Facial",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Pure oxygen infusion and micro-nutrient mist to revitalize fatigued, environmentally stressed skin.",
    fullDesc: "Delivers pressurized topical oxygen combined with essential skin peptides to boost micro-circulation and skin radiance, ideal for tired or weather-exposed skin.",
    primaryIndication: "Environmental pollution fatigue, dull complexion, prep for occasions",
    targetConcerns: ["Dullness & Rough Texture"],
    sessionDuration: "45 mins",
    recommendedSessions: "As needed or bi-weekly series"
  },
  {
    id: "diamond-polishing",
    name: "Diamond Polishing",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Controlled microdermabrasion with genuine diamond tips to gently abrade dead cellular buildup.",
    fullDesc: "Vacuum-assisted mechanical polishing using sterile diamond tips gently removes thickened outer stratum corneum, helping active home-care serums penetrate deeper.",
    primaryIndication: "Rough stratum corneum, superficial flaky skin, enlarged pore appearance",
    targetConcerns: ["Dullness & Rough Texture"],
    sessionDuration: "35 mins",
    recommendedSessions: "4–6 sessions at 3-week intervals"
  },
  {
    id: "carbon-facial",
    name: "Carbon Facial",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Also known as the China Doll or Hollywood Peel; liquid carbon paste activated by Q-switched laser.",
    fullDesc: "Liquid medical carbon is applied to penetrate deep into pores. A specialized laser vaporizes the carbon particles, instantly clearing sebum and constricting dilated pores with zero downtime.",
    primaryIndication: "Excessive oiliness, congested pores, dull skin with enlarged pores",
    targetConcerns: ["Acne & Active Breakouts", "Dullness & Rough Texture"],
    sessionDuration: "45 mins",
    recommendedSessions: "3–5 sessions, spaced 3 weeks apart",
    isFeatured: true
  },
  {
    id: "skin-lightening",
    name: "Skin/Lip Lightening",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Targeted clinical treatments designed to gently balance localized stubborn pigmentation on face and lips.",
    fullDesc: "Comprehensive protocol addressing smoker's lip melanosis, hereditary lip darkening, or patchiness on the face through medical topical formulations and gentle laser toning.",
    primaryIndication: "Darkened lips, localized hyperpigmentation patches",
    targetConcerns: ["Pigmentation & Uneven Tone"],
    sessionDuration: "30–45 mins",
    recommendedSessions: "3–6 sessions as evaluated"
  },
  {
    id: "underarm-pigmentation",
    name: "Underarm Pigmentation",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Medical treatment of friction-induced Acanthosis Nigricans and post-inflammatory axillary hyperpigmentation.",
    fullDesc: "Formulated specifically for the sensitive axillary folds. Combines barrier-safe chemical peel agents with low-fluence laser therapy to reduce discoloration caused by friction and shaving.",
    primaryIndication: "Dark underarm patches, friction hyperpigmentation",
    targetConcerns: ["Pigmentation & Uneven Tone"],
    sessionDuration: "30 mins",
    recommendedSessions: "4–6 sessions spaced 3 weeks apart"
  },
  {
    id: "acne-shield",
    name: "Acne Shield Therapy",
    category: "Skin",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Multi-modality anti-acne clinical protocol targeting Propionibacterium acnes and sebum hyper-secretion.",
    fullDesc: "Combines salicylic anti-inflammatory solution, targeted blue-light spectrum therapy, and healing barrier balms to soothe angry inflammatory papules and cysts without aggressive trauma.",
    primaryIndication: "Active inflammatory acne, cystic flare-ups, painful breakout phases",
    targetConcerns: ["Acne & Active Breakouts"],
    sessionDuration: "45 mins",
    recommendedSessions: "4–8 weekly or bi-weekly treatments"
  },

  // 2. HAIR & SCALP
  {
    id: "adv-hair-prp",
    name: "Advanced Hair/Face PRP",
    category: "Hair",
    broadCategory: "Hair Fall Solutions",
    shortDesc: "Autologous platelet-rich plasma derived from your own blood, concentrated with growth factors.",
    fullDesc: "Platelets extracted from a small sample of your blood are centrifuged and micro-injected into the scalp or dermis. The concentrated growth factors (PDGF, VEGF, TGF-β) nourish miniaturized follicles and stimulate collagen repair.",
    primaryIndication: "Androgenetic thinning, telogen effluvium, early-stage hair miniaturization",
    targetConcerns: ["Hair Fall & Thinning", "Hair Restoration"],
    sessionDuration: "45–60 mins",
    recommendedSessions: "3–6 initial monthly sessions, followed by maintenance",
    isFeatured: true
  },
  {
    id: "meso-hair",
    name: "Mesotherapy Hair/Face",
    category: "Hair",
    broadCategory: "Hair Fall Solutions",
    shortDesc: "Micro-droplet delivery of essential vitamins, amino acids, and minerals directly into the targeted tissue.",
    fullDesc: "Targeted transdermal delivery of bio-active cocktails directly into the scalp or facial dermis where standard topical applications fail to penetrate adequately.",
    primaryIndication: "Nutritional scalp deficiency, post-stress shedding, dehydrated facial skin",
    targetConcerns: ["Hair Fall & Thinning", "Dark Circles & Periorbital Fatigue"],
    sessionDuration: "30–45 mins",
    recommendedSessions: "4–8 sessions spaced 2 weeks apart"
  },
  {
    id: "exosome-therapy",
    name: "Exosome Therapy",
    category: "Hair",
    broadCategory: "Hair Fall Solutions",
    shortDesc: "Next-generation cellular messenger vesicles loaded with bioactive proteins, RNA, and growth signals.",
    fullDesc: "Exosomes represent the cutting edge of regenerative aesthetics. These nano-vesicles deliver potent cellular signaling molecules directly to dormant dermal papilla cells and compromised fibroblasts to promote tissue repair.",
    primaryIndication: "Stubborn thinning resistant to standard PRP, advanced skin texture recovery",
    targetConcerns: ["Hair Fall & Thinning", "Acne Scars & Texture", "Ageing Lines & Volume Loss"],
    sessionDuration: "45 mins",
    recommendedSessions: "2–4 sessions planned by the doctor",
    isFeatured: true
  },
  {
    id: "stem-cell-therapy",
    name: "Stem Cell Therapy",
    category: "Hair",
    broadCategory: "Hair Fall Solutions",
    shortDesc: "Biological regenerative therapy focused on follicle stem cell nourishment and scalp vitality.",
    fullDesc: "Utilizes conditioned media and biological growth signals to support hair follicle stem cell niches, revitalizing weak hair roots and improving strand diameter over time.",
    primaryIndication: "Diffuse scalp thinning, sluggish hair growth cycle",
    targetConcerns: ["Hair Fall & Thinning", "Hair Restoration"],
    sessionDuration: "45 mins",
    recommendedSessions: "3–5 sessions as clinically recommended"
  },
  {
    id: "hair-transplant",
    name: "Hair Transplant",
    category: "Hair",
    broadCategory: "Cosmetic Surgery",
    shortDesc: "Permanent follicular unit extraction (FUE) surgical restoration led by specialized surgeons.",
    fullDesc: "Individual healthy follicular units are harvested from the permanent donor zone (back of scalp) and artistically implanted into thinning or balding areas with natural angle and density alignment.",
    primaryIndication: "Male & female pattern baldness (Norwood scale II to VI)",
    targetConcerns: ["Hair Fall & Thinning", "Hair Restoration"],
    sessionDuration: "4–7 hours",
    recommendedSessions: "Single surgical procedure with post-operative monitoring",
    isFeatured: true
  },
  {
    id: "beard-moustache-transplant",
    name: "Beard & Moustache Transplant",
    category: "Hair",
    broadCategory: "Cosmetic Surgery",
    shortDesc: "Precision FUE grafting to build density in patchy or absent facial hair patterns.",
    fullDesc: "Micro-grafts are positioned with exacting attention to facial contour, natural hair grain, and angle to fill in patchy cheeks, mustache gaps, or beard scars.",
    primaryIndication: "Patchy beard growth, lack of facial hair density, trauma scars",
    targetConcerns: ["Hair Restoration"],
    sessionDuration: "3–5 hours",
    recommendedSessions: "Single session procedure"
  },

  // 3. LASER & PRECISION LIGHT
  {
    id: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    category: "Laser",
    broadCategory: "Laser & Dermato-Surgery",
    shortDesc: "Medical-grade laser technology targeting melanin in the hair follicle for progressive permanent reduction.",
    fullDesc: "Equipped with advanced cooling mechanisms to protect epidermal tissue on diverse Indian skin tones. The focused wavelength heats and disables the follicle matrix during its active anagen growth phase.",
    primaryIndication: "Unwanted facial hair, arms, legs, back, underarms, and bikini line",
    targetConcerns: ["Unwanted Facial & Body Hair"],
    sessionDuration: "15 mins (small zone) to 90 mins (full body)",
    recommendedSessions: "6–8 sessions scheduled at anagen cycle intervals (4–6 weeks)",
    isFeatured: true
  },
  {
    id: "laser-toning",
    name: "Laser Toning for Face",
    category: "Laser",
    broadCategory: "Skin Lightening & Brightening",
    shortDesc: "Sub-photothermal Q-switched laser pulses that shatter deep dermal melanin without breaking the skin.",
    fullDesc: "A non-ablative procedure that gently disperses pigment clusters while gently warming the underlying dermis to trigger subtle neocollagenesis. Clean, comfortable, and allows immediate return to work.",
    primaryIndication: "Melasma, stubborn sun tanning, post-inflammatory dark marks, dullness",
    targetConcerns: ["Pigmentation & Uneven Tone", "Dullness & Rough Texture"],
    sessionDuration: "30 mins",
    recommendedSessions: "4–8 sessions spaced 2–3 weeks apart",
    isFeatured: true
  },
  {
    id: "photo-facial",
    name: "Photo Facial",
    category: "Laser",
    broadCategory: "Laser & Dermato-Surgery",
    shortDesc: "Intense Pulsed Light (IPL) targeting dyschromia, broken capillaries, and photo-damage.",
    fullDesc: "Broadband light energy selectively targets hemoglobin in broken capillaries and melanin in age spots, evening out complexion clarity with minimal downtime.",
    primaryIndication: "Facial redness, broken capillaries, sun spots, freckles",
    targetConcerns: ["Pigmentation & Uneven Tone", "Dullness & Rough Texture"],
    sessionDuration: "30 mins",
    recommendedSessions: "3–5 sessions at 4-week intervals"
  },
  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    category: "Laser",
    broadCategory: "Laser & Dermato-Surgery",
    shortDesc: "High-intensity nanosecond laser energy to fragment exogenous ink particles safely.",
    fullDesc: "Ink particles are broken into microscopic fragments small enough for the body’s lymphatic macrophage system to naturally metabolize and flush away over weeks.",
    primaryIndication: "Unwanted black and colored decorative or cosmetic tattoos",
    targetConcerns: ["Tattoo Removal & Skin Growths"],
    sessionDuration: "15–45 mins depending on size",
    recommendedSessions: "5–10 sessions depending on ink depth and age"
  },
  {
    id: "mole-wart-removal",
    name: "Mole/Wart Removal",
    category: "Laser",
    broadCategory: "Laser & Dermato-Surgery",
    shortDesc: "Precise radiofrequency ablation or surgical removal with minimal scarring.",
    fullDesc: "Aesthetic removal of raised or flat moles, viral warts, and verrucae performed under local topical or infiltrative anesthesia for patient comfort and clean cosmetic margins.",
    primaryIndication: "Cosmetic facial moles, viral warts on hands/feet/neck",
    targetConcerns: ["Tattoo Removal & Skin Growths"],
    sessionDuration: "20–30 mins",
    recommendedSessions: "Usually single session with review"
  },
  {
    id: "skin-tags-removal",
    name: "Skin Tags Removal",
    category: "Laser",
    broadCategory: "Laser & Dermato-Surgery",
    shortDesc: "Instant removal of benign fibroepithelial polyps on neck, eyelids, and underarms.",
    fullDesc: "Quick radio-cautery or micro-snip procedure that eliminates friction tags painlessly in minutes, healing with minimal marking within days.",
    primaryIndication: "Acrochordons (skin tags) around neck, armpits, and eyelids",
    targetConcerns: ["Tattoo Removal & Skin Growths"],
    sessionDuration: "15–30 mins",
    recommendedSessions: "Single session per area"
  },

  // 4. ANTI-AGEING & REJUVENATION
  {
    id: "botox-fillers",
    name: "Botox & Fillers",
    category: "Anti-Ageing",
    broadCategory: "Anti Ageing",
    shortDesc: "Physician-administered US-FDA approved neuromodulators and hyaluronic acid dermal fillers.",
    fullDesc: "Comprehensive facial balancing. Neuromodulators relax hyperactive dynamic muscles that cause crow's feet and frown furrows; hyaluronic fillers restore lost fat pads in cheeks, nasolabial folds, and lips.",
    primaryIndication: "Forehead lines, frown lines, nasolabial folds, sunken cheeks, thin lips",
    targetConcerns: ["Ageing Lines & Volume Loss", "Dark Circles & Periorbital Fatigue"],
    sessionDuration: "30–45 mins",
    recommendedSessions: "Botox every 4–6 months; Fillers every 9–18 months",
    isFeatured: true
  },
  {
    id: "anti-wrinkle",
    name: "Anti Wrinkle Injections",
    category: "Anti-Ageing",
    broadCategory: "Anti Ageing",
    shortDesc: "Precise micro-dosing of neuromodulators to soften dynamic wrinkles while keeping natural expression.",
    fullDesc: "We avoid the 'frozen look'. Our aesthetic physicians preserve subtle facial animation, softening tension in the glabella, forehead, and orbicularis oculi with calculated dosing.",
    primaryIndication: "Glabellar frown lines, crow's feet, bunny lines, forehead worry lines",
    targetConcerns: ["Ageing Lines & Volume Loss"],
    sessionDuration: "20–30 mins",
    recommendedSessions: "Every 4–6 months depending on metabolism"
  },
  {
    id: "thread-lift",
    name: "Thread Lift",
    category: "Anti-Ageing",
    broadCategory: "Anti Ageing",
    shortDesc: "Minimally invasive PDO/PCL barbed and screw threads to elevate mild-to-moderate jowls and sag.",
    fullDesc: "Biocompatible absorbable surgical threads are positioned under local anesthesia to mechanically elevate drooping cheek pads and redefine the jawline, while continuously stimulating new collagen along their vector.",
    primaryIndication: "Mild jowling, sagging mid-face, softened mandibular jawline",
    targetConcerns: ["Ageing Lines & Volume Loss"],
    sessionDuration: "60 mins",
    recommendedSessions: "Lasts 12–18 months"
  },
  {
    id: "face-lift",
    name: "Face Lift",
    category: "Anti-Ageing",
    broadCategory: "Anti Ageing",
    shortDesc: "Non-surgical high-intensity focused lifting and structural tightening protocols.",
    fullDesc: "Non-invasive energy vectors (HIFU/Radiofrequency) reach the deep SMAS layer of facial architecture, triggering deep thermal coagulative points that contract loose tissue over 60–90 days.",
    primaryIndication: "Tissue laxity around jawline, neck, and lower cheeks",
    targetConcerns: ["Ageing Lines & Volume Loss"],
    sessionDuration: "60–90 mins",
    recommendedSessions: "1–2 annual sessions"
  },
  {
    id: "dermaroller",
    name: "Dermaroller",
    category: "Anti-Ageing",
    broadCategory: "Anti Ageing",
    shortDesc: "Medical micro-needling to trigger natural collagen-elastin cascade (CIT - Collagen Induction Therapy).",
    fullDesc: "Fine surgical-grade titanium micro-needles create micro-channels in the dermis under topical numbing cream. Triggers fibroblasts to synthesize fresh Type-I and Type-III collagen, smoothing indented scars and pores.",
    primaryIndication: "Acne pits, enlarged pores, superficial stretch marks, uneven texture",
    targetConcerns: ["Acne Scars & Texture", "Dullness & Rough Texture"],
    sessionDuration: "45 mins (including numbing)",
    recommendedSessions: "4–6 sessions spaced 4 weeks apart"
  },

  // 5. BODY & CLINICAL / SURGICAL
  {
    id: "body-sculpting",
    name: "Body Sculpting",
    category: "Body & Clinical",
    broadCategory: "Body Contouring",
    shortDesc: "Non-surgical body shaping using targeted thermal and acoustic energy for stubborn localized fat pockets.",
    fullDesc: "Assists individuals who have localized resistance in the abdomen, love handles, or thighs despite healthy dietary habits and exercise. Non-invasive with zero hospital stay.",
    primaryIndication: "Subcutaneous belly pockets, love handles, post-partum abdominal laxity",
    targetConcerns: ["Stubborn Pockets & Body Shaping"],
    sessionDuration: "45–60 mins per zone",
    recommendedSessions: "4–8 sessions spaced 10–14 days apart",
    isFeatured: true
  },
  {
    id: "scar-treatment",
    name: "Scar Treatment",
    category: "Body & Clinical",
    broadCategory: "Laser & Dermato-Surgery",
    shortDesc: "Multimodal approach for surgical scars, burn contractures, hypertrophic marks, and deep acne scars.",
    fullDesc: "Combines intralesional anti-inflammatory micro-injections, silicone barrier therapies, subcision for tethered scars, and fractional laser remodeling.",
    primaryIndication: "Hypertrophic scars, post-surgery marks, atrophic facial scars",
    targetConcerns: ["Acne Scars & Texture"],
    sessionDuration: "30–60 mins",
    recommendedSessions: "Customized based on scar maturity and depth"
  },
  {
    id: "dark-circles",
    name: "Dark Circle Treatment",
    category: "Body & Clinical",
    broadCategory: "Anti Ageing",
    shortDesc: "Targeted clinical protocol for periorbital hollows, vascular pooling, and melanin accumulation.",
    fullDesc: "Because dark circles have multiple overlapping causes (thin eyelid skin, volume loss, genetics, or allergies), our physicians create combination programs combining tear-trough fillers, micro-peels, or polynucleotide injections.",
    primaryIndication: "Tear-trough hollows, dark under-eye pigmentation, tired appearance",
    targetConcerns: ["Dark Circles & Periorbital Fatigue"],
    sessionDuration: "30–45 mins",
    recommendedSessions: "2–4 sessions planned after consultation"
  },
  {
    id: "ear-lobe-repair",
    name: "Ear Lobe Repair",
    category: "Body & Clinical",
    broadCategory: "Cosmetic Surgery",
    shortDesc: "Non-surgical glue repair or minor cosmetic lobuloplasty for split or stretched piercings.",
    fullDesc: "Quick minor procedure performed with sterile surgical precision under local anesthesia to repair elongated or torn earlobes from heavy jewelry, allowing repiercing after full healing.",
    primaryIndication: "Torn, stretched, or split earring piercings",
    targetConcerns: ["Tattoo Removal & Skin Growths"],
    sessionDuration: "20–30 mins",
    recommendedSessions: "Single outpatient procedure"
  },
  {
    id: "microblading-eyebrows",
    name: "Microblading for Eyebrows",
    category: "Body & Clinical",
    broadCategory: "Laser & Dermato-Surgery",
    shortDesc: "Semi-permanent cosmetic tattooing creating fine, hair-like strokes for natural brow definition.",
    fullDesc: "Uses a sterile micro-blade tool to deposit medical-grade organic pigment into the upper dermis, creating hyper-realistic brow hair strokes customized to your facial proportions.",
    primaryIndication: "Sparse brows, over-plucked arches, asymmetrical eyebrow hair",
    targetConcerns: ["Hair Restoration"],
    sessionDuration: "90–120 mins",
    recommendedSessions: "Initial session plus touch-up at 4–6 weeks"
  },
  {
    id: "cosmetic-surgery",
    name: "Cosmetic Surgery",
    category: "Body & Clinical",
    broadCategory: "Cosmetic Surgery",
    shortDesc: "Consultations and surgical procedures coordinated with accredited cosmetic and plastic surgeons.",
    fullDesc: "Specialized evaluations for aesthetic surgical procedures including blepharoplasty (eyelid correction), gynecomastia correction, rhinoplasty consultation, and body contouring.",
    primaryIndication: "Structural surgical corrections requiring plastic surgery expertise",
    targetConcerns: ["Ageing Lines & Volume Loss", "Stubborn Pockets & Body Shaping"],
    sessionDuration: "Comprehensive 45-min consultation",
    recommendedSessions: "Surgical protocol"
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "hair-fall-root-causes",
    title: "What Actually Causes Hair Fall? When to Consult a Doctor",
    category: "Hair Science",
    readTime: "4 min read",
    excerpt: "Not all shedding is genetic. Understanding the difference between telogen effluvium, nutrient deficiencies, and pattern miniaturization.",
    keyTakeaways: [
      "Normal human scalp sheds 50–100 hairs daily; sudden excessive shedding (telogen effluvium) often follows stress, viral illness, or thyroid changes 2–3 months prior.",
      "Pattern baldness (androgenetic alopecia) involves progressive thinning/miniaturization of the follicle rather than just shedding.",
      "Blood investigations (Ferritin, Vitamin D3, B12, Thyroid, Hormonal panel) must precede expensive therapies."
    ],
    content: [
      "When patients walk into our Race Course clinic alarmed by hair in the shower drain, the first step is always clinical differentiation. Is this acute shedding or true follicle miniaturization?",
      "Often, people spend months trying over-the-counter anti-hairfall shampoos. Shampoos are cleansing agents on the scalp for 2 minutes—they cannot reverse follicle miniaturization dictated by DHT or hormonal shifts.",
      "At Solène, Dr. Asha Rawat and Dr. Megha Sahi perform a thorough dermoscopic trichoscopy to evaluate follicular units per square centimeter and hair shaft diameter before recommending targeted PRP, mesotherapy, or nutritional correction."
    ]
  },
  {
    id: "laser-hair-reduction-myths",
    title: "Who Is Laser Hair Reduction Suitable For? Real Expectations",
    category: "Laser Science",
    readTime: "5 min read",
    excerpt: "Why laser reduction requires multiple sessions and how modern cooling technology protects melanin-rich Indian skin.",
    keyTakeaways: [
      "Lasers only target hair in the anagen (active growth) phase; since follicles cycle asynchronously, 6–8 sessions are biologically necessary.",
      "Modern diode and triple-wavelength platforms feature contact cooling, making procedures comfortable and safe for deeper skin tones.",
      "Results represent 80–90% reduction in density and hair thickness, not '100% eternal zero hair'—annual touch-ups maintain results."
    ],
    content: [
      "One of the most persistent misunderstandings in aesthetic medicine is the word 'removal'. Scientifically, the FDA categorizes medical lasers as providing 'Permanent Hair Reduction'.",
      "Because each hair on your body operates on its own independent timetable (Anagen, Catagen, Telogen), a laser pulse can only disable hairs that have an active, pigmented bulb attached to the root.",
      "Spacing sessions 4 to 6 weeks apart ensures that dormant follicles entering the growth phase are progressively treated in subsequent appointments."
    ]
  },
  {
    id: "chemical-peels-truths",
    title: "What You Should Know Before Your First Chemical Peel",
    category: "Skin Rejuvenation",
    readTime: "3 min read",
    excerpt: "Demystifying peels: from superficial lunchtime peels with zero peeling to medium-depth dermatological formulas.",
    keyTakeaways: [
      "Most modern aesthetic peels do not cause scary, dramatic sheets of skin peeling; superficial peels work microscopically.",
      "Strict broad-spectrum sun protection is non-negotiable for 7–10 days post-peel.",
      "Peels should never be done on actively compromised or sunburned skin barriers."
    ],
    content: [
      "Patients frequently worry that a chemical peel will leave them red and unable to go to work. In reality, the vast majority of in-clinic peels are superficial alpha-hydroxy (AHA) or beta-hydroxy (BHA) treatments.",
      "A superficial glycolic or lactic peel gently dissolves the cement between dead surface cells, boosting glow and cell renewal within 30 minutes with zero visible flaking.",
      "During your consultation at Solène, we determine the exact pH and percentage appropriate for your barrier strength."
    ]
  },
  {
    id: "persistent-pigmentation-care",
    title: "When Should You Consult a Doctor for Persistent Pigmentation?",
    category: "Clinical Dermatology",
    readTime: "4 min read",
    excerpt: "Why aggressive scrubbing or harsh bleaching creams worsen melasma, and how medical toning takes a calmer path.",
    keyTakeaways: [
      "Melasma is a chronic pigmentary condition driven by hormones, heat, and UV; aggressive rubbing triggers melanocytes to produce more pigment.",
      "Steroid-containing 'triple combination' creams purchased without prescription cause severe rebound thinning and telangiectasia.",
      "Effective management relies on gentle tyrosinase inhibitors, oral antioxidants, and low-fluence Q-switched laser toning."
    ],
    content: [
      "In North India, hyperpigmentation is among the top reasons patients visit dermatologists. Unfortunately, many arrive after trying harsh home remedies like lemon juice or over-the-counter steroid creams.",
      "Melanocytes are defensive cells. When irritated by harsh friction or inflammation, they respond by manufacturing excess melanin as a protective shield.",
      "At Solène, our approach focuses on cooling the skin, suppressing pigment enzymes gently, and using gentle laser toning rather than aggressive surface trauma."
    ]
  },
  {
    id: "setting-honest-expectations",
    title: "What Aesthetic Treatments Can and Cannot Do: Honest Medicine",
    category: "Clinic Philosophy",
    readTime: "4 min read",
    excerpt: "The Solène ethical commitment: why we never promise instant miracles or Photoshop perfection.",
    keyTakeaways: [
      "Real clinical aesthetics enhances your unique facial harmony and skin health; it does not turn you into a different person.",
      "Collagen remodeling takes biological time: skin remodeling occurs over 60 to 90 days after treatments like microneedling or PRP.",
      "Healthy skin is textured, dynamic, and breathing—not poreless plastic."
    ],
    content: [
      "In the age of social media filters and aggressive clinic advertising, unrealistic promises are everywhere. You will never hear us claim 'miracle results' or 'instant 10-year reversal'.",
      "Human tissue obeys biology, not marketing slogans. When we stimulate collagen via PRP, dermaroller, or focused energy, the body requires weeks to synthesize new elastin fibers.",
      "Our doctors believe that the most confident patients are those who understand the timeline, maintain their home-care basics, and choose treatments suited to their anatomy."
    ]
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Shreya Nautiyal",
    location: "Race Course, Dehradun",
    rating: 5,
    date: "2 weeks ago",
    serviceReviewed: "Consultation & Hydra Facial",
    comment: "Visited Solène at Race Course for recurring skin breakouts and dullness. Dr. Megha took the time to explain my skin barrier issues before suggesting anything. The Hydra Facial was so gentle and my skin felt calm and clean. Very professional and hygienic clinic.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Rohit Chauhan",
    location: "Visiting from Rishikesh",
    rating: 5,
    date: "1 month ago",
    serviceReviewed: "Hair Fall Consultation & Advanced PRP",
    comment: "Travelled from Rishikesh specifically for a hair consultation with Dr. Asha Rawat. You can immediately feel her 17+ years of experience from Bangalore and Delhi—she reviewed my blood work and explained the genuine causes behind my hair thinning instead of pushing unnecessary products. Extremely reassuring experience.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Pooja Negi",
    location: "Dehradun",
    rating: 5,
    date: "3 weeks ago",
    serviceReviewed: "Triple-Wavelength Laser Hair Reduction",
    comment: "The laser hair reduction treatment here is very comfortable compared to older machines I've tried in Dehradun. The cooling tip makes it virtually painless. The staff is polite, rooms are spotless, and the doctors are directly involved. Highly recommend Solène!",
    verified: true
  },
  {
    id: "rev-4",
    author: "Dr. Vikram Sethi",
    location: "Dehradun",
    rating: 5,
    date: "1 month ago",
    serviceReviewed: "Clinical Consultation & Laser Toning",
    comment: "As a fellow medical professional, I deeply appreciate the clinical honesty at Solène. Senior Doctor Dr. Asha Rawat brings top-tier metropolitan standards from Delhi and Chandigarh to Dehradun. No false claims, no aggressive upselling, just evidence-based medicine.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Ankush Verma",
    location: "Race Course, Dehradun",
    rating: 5,
    date: "2 months ago",
    serviceReviewed: "Acne Scar Consultation & Dermaroller",
    comment: "Honest and transparent consultation. No false claims of 100% cure overnight, but a clear 4-month plan. The clinic aesthetic is beautiful and serene. 5 stars for ethical practice and doctor attention.",
    verified: true
  },
  {
    id: "rev-6",
    author: "Meenakshi Bhandari",
    location: "Haridwar / Dehradun",
    rating: 5,
    date: "3 months ago",
    serviceReviewed: "Pigmentation & Chemical Peels",
    comment: "Dr. Megha Sahi handled my stubborn pigmentation with so much patience. She carefully examined my skin under dermoscopy and guided my home care before starting peels. My skin tone has evened out visibly. Best clinic in Uttarakhand.",
    verified: true
  }
];

export const FAQS = [
  {
    question: "Do I need to book an appointment before visiting the clinic?",
    answer: "Yes, we strongly recommend booking your appointment in advance. Because Dr. Megha Sahi and Dr. Asha Rawat dedicate 20–30 minutes to individual patient assessments, prior scheduling ensures you receive unhurried medical attention without prolonged waiting room time."
  },
  {
    question: "How is treatment suitability decided?",
    answer: "Every procedure begins with a clinical consultation. The doctors examine your skin phototype, medical history, past treatments, current home-care regimen, and personal goals. If a requested procedure is deemed unsuitable for your skin type or health profile, the doctor will explain why and advise alternative or preparatory care."
  },
  {
    question: "Where is the clinic located in Dehradun?",
    answer: "Solène is conveniently located on the 4th Floor, 90-D Guru Nanak Vihar, Race Course, Dehradun (PIN 248001). The building is easily accessible from Rajpur Road, Clock Tower, and Saharanpur Road, with convenient parking nearby."
  },
  {
    question: "Do you receive patients travelling from other parts of Uttarakhand?",
    answer: "Yes, many of our patients travel from Rishikesh, Haridwar, Roorkee, Mussoorie, Paonta Sahib, and surrounding hill districts. For visiting patients, we coordinate same-day consultation and procedure slots when safe and clinically appropriate, or provide preliminary guidance via WhatsApp before your journey."
  },
  {
    question: "Can I discuss treatments directly on WhatsApp?",
    answer: "Absolutely. You can reach our front clinic desk at +91-9646566641. You can ask about consultation availability, doctor schedules, treatment information, and travel directions. Our team will gladly assist you."
  },
  {
    question: "What is Solène Academy?",
    answer: "Solène Academy is our dedicated training and academic wing where doctors and cosmetologists receive structured clinical exposure and hands-on guidance in modern aesthetic procedures, laser physics, and medical cosmetology under Dr. Megha Sahi and senior faculty."
  }
];
