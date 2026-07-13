import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import "./App.css";

type NavTarget =
  | "top"
  | "services"
  | "audience"
  | "approach"
  | "about"
  | "faq"
  | "contact";

type IconName =
  | "compass"
  | "briefcase"
  | "rocket"
  | "shuffle"
  | "award"
  | "shield-check"
  | "handshake"
  | "users"
  | "map-pin"
  | "phone"
  | "mail"
  | "calendar"
  | "check"
  | "menu"
  | "x"
  | "plus";

type FormState = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
};

const navLinks: Array<{ label: string; id: Exclude<NavTarget, "top"> }> = [
  { label: "Services", id: "services" },
  { label: "Who We Work With", id: "audience" },
  { label: "Approach", id: "approach" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const engagementItems = [
  { label: "Strategic planning & forecasting", meta: "Ongoing" },
  { label: "Funding & Capital Readiness", meta: "Funding" },
  { label: "Business Acquisitions & Sales", meta: "Deal" },
  { label: "Fractional CFO partnership", meta: "Retained" },
];

const servicePillars = [
  {
    icon: "compass" as const,
    title: "Financial & Strategy Consulting",
    lead: "Practical financial leadership for growing businesses navigating pricing, hiring, expansion and growth.",
    items: [
      "Financial consulting",
      "Strategy consulting",
      "Strategic planning",
      "Forecasting & budgeting",
    ],
  },
  {
    icon: "briefcase" as const,
    title: "Fractional CFO",
    lead: "Senior finance partnership on retainer, turning numbers into clear priorities and confident decisions.",
    items: [
      "Monthly close & board reporting",
      "Cash flow & runway management",
      "KPI tracking",
      "Finance team coaching",
    ],
  },
  {
    icon: "rocket" as const,
    title: "Funding Readiness",
    lead: "Get your business funding-ready, whether you're seeking investors or borrowing from a bank.",
    items: [
      "Preparing for funding",
      "Investor decks",
      "Loan & debt-funding readiness",
      "Funding & grant applications",
    ],
  },
  {
    icon: "shuffle" as const,
    title: "M&A Advisory",
    lead: "Practical advice for business acquisitions, sales and succession planning.",
    items: [
      "End-to-end M&A execution",
      "Post-integration consulting",
      "Investor relations",
      "Buy-side & sell-side support",
    ],
  },
];

const audienceItems = [
  {
    num: "01",
    label: "Founders preparing for the next stage",
    desc: "The business has grown beyond gut feel and spreadsheets. We help you make better decisions, build a plan, and prepare for the opportunities ahead.",
  },
  {
    num: "02",
    label: "Owners whose growth has stalled",
    desc: "Growth has slowed, but the reasons aren't obvious. We dig into the numbers, identify what's holding the business back and help build a plan to move forward.",
  },
  {
    num: "03",
    label: "Owners preparing to raise money or apply for a loan",
    desc: "You need funding for the next stage, whether that's from investors or a bank. We get your numbers and story ready before you start those conversations.",
  },
  {
    num: "04",
    label: "Owners considering a sale or succession plan",
    desc: "Selling a business, planning a succession or bringing in investors are major decisions. We help you understand the numbers, assess your options and navigate the process with confidence.",
  },
  {
    num: "05",
    label: "Businesses that need a CFO, not a hire",
    desc: "You need experienced financial advice, but not another executive salary. We provide senior support when you need it, without the cost of a full-time CFO.",
  },
];

const approachItems = [
  {
    icon: "award" as const,
    title: "We Speak Business, Not Finance",
    body: "Clear advice that owners can act on without a finance dictionary.",
  },
  {
    icon: "handshake" as const,
    title: "Decisions Before Reports",
    body: "The goal isn't better spreadsheets. It's better decisions.",
  },
  {
    icon: "shield-check" as const,
    title: "Honest Advice",
    body: "If we don't think something will work, we'll tell you.",
  },
  {
    icon: "users" as const,
    title: "In It With You",
    body: "We're not just advisers. We roll up our sleeves and help get things done.",
  },
];

const faqItems = [
  {
    q: "Who is Rune Finance actually for?",
    a: "We work with founders and business owners who need senior-level financial expertise. Whether you're figuring out what's next, preparing to raise capital, securing finance, or considering a sale, we help you make confident decisions. If a full-time CFO isn't the right shape yet, we usually are.",
  },
  {
    q: "Do you take every engagement that comes in?",
    a: "No. Some businesses are a great fit for what we do, and some aren't. We'll be upfront about that from the first conversation. If we don't think we can make a meaningful difference, we'll say so.",
  },
  {
    q: "How does a fractional CFO engagement work?",
    a: "Retained on a monthly basis with a clear scope: board reporting, cash flow management, KPI tracking, and being in the room when decisions get made. You get senior expertise without a senior salary, and we stay for as long as you need us.",
  },
  {
    q: "Can you help with investor decks and fundraising?",
    a: "Yes. We help founders prepare for funding by getting the numbers, story and supporting material in order. Whether it's an investor presentation, financial model or funding application, the aim is to make sure you're well prepared before you start the conversation.",
  },
  {
    q: "What if I'm after a business loan, not equity?",
    a: "That's covered too. If your books need tidying up, or your financials need to tell a clearer story before a lender will say yes, we get them into shape. That means clean numbers, forecasts and a case a bank can say yes to.",
  },
  {
    q: "What about M&A: buy-side, sell-side, integration?",
    a: "Buying or selling a business is high-stakes and unfamiliar territory for most owners. We help you understand your options, avoid common pitfalls and make informed decisions from start to finish.",
  },
];

const contactServiceOptions = [
  "Financial Consulting",
  "Strategy Consulting",
  "Fractional CFO",
  "Forecasting & Budgeting",
  "Funding Readiness",
  "Loan Readiness",
  "M&A Execution",
  "Post-Integration",
  "Investor Relations",
];

const contactDetails = [
  {
    icon: "map-pin" as const,
    label: "Operating in",
    value: "Brisbane, Australia",
  },
  {
    icon: "phone" as const,
    label: "Phone",
    value: "0411 472 237",
    href: "tel:0411472237",
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: "thivya@runefinance.com.au",
    href: "mailto:thivya@runefinance.com.au",
  },
  {
    icon: "calendar" as const,
    label: "Response",
    value: "Within one business day",
  },
];

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const icons: Record<IconName, ReactNode> = {
    compass: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
    briefcase: (
      <>
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
    rocket: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
    shuffle: (
      <>
        <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
        <path d="m18 2 4 4-4 4" />
        <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
        <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
        <path d="m18 14 4 4-4 4" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </>
    ),
    "shield-check": (
      <>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    handshake: (
      <>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    "map-pin": (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    calendar: (
      <>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    menu: (
      <>
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </>
    ),
    x: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
    plus: (
      <>
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </>
    ),
  };

  return <svg {...props}>{icons[name]}</svg>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="rf-eyebrow">{children}</p>;
}

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  onClick,
  disabled = false,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      className={[
        "rf-button",
        `rf-button--${variant}`,
        `rf-button--${size}`,
        fullWidth ? "rf-button--full" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return <span className="rf-badge">{children}</span>;
}

function StatBlock({
  value,
  label,
  suffix,
  className = "",
}: {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <div className={`rune-stat ${className}`.trim()}>
      <div className="rune-stat__value">
        {value}
        {suffix ? <span className="rune-stat__suffix">{suffix}</span> : null}
      </div>
      <div className="rune-stat__label">{label}</div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div
      className={`rf-section-heading rf-section-heading--${align}${onDark ? " rf-section-heading--dark" : ""}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="rf-h2">{title}</h2>
      <p className="rf-lead">{intro}</p>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [interests, setInterests] = useState<string[]>(["Fractional CFO"]);
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  function toggleInterest(name: string) {
    setInterests((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  }

  function updateField(field: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const payload = new FormData();
    payload.append("Full Name", formState.fullName);
    payload.append("Business / Trading name", formState.businessName);
    payload.append("Email", formState.email);
    payload.append("Phone", formState.phone);
    payload.append("Interested In", interests.join(", "));
    payload.append("What's on your plate?", formState.message);
    payload.append("_subject", "New Rune Finance enquiry");
    payload.append("_captcha", "false");
    payload.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/thivya@runefinance.com.au",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: payload,
        },
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSent(true);
    } catch {
      setError(
        "Something went wrong while sending your message. Please try again or email thivya@runefinance.com.au directly.",
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rf-success">
        <span className="rf-success__icon">
          <Icon name="check" size={30} />
        </span>
        <h3 className="rf-h3">Thank you</h3>
        <p className="rf-body">
          Your message has been received. Thivya will be in touch within one
          business day.
        </p>
        <Button variant="secondary" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form className="rf-form" onSubmit={handleSubmit}>
      <div className="rf-form__row">
        <label className="rf-field">
          <span className="rf-field__label">Full Name</span>
          <input
            className="rf-input"
            name="fullName"
            value={formState.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Jane Doe"
            required
          />
        </label>
        <label className="rf-field">
          <span className="rf-field__label">Business / Trading name</span>
          <input
            className="rf-input"
            name="businessName"
            value={formState.businessName}
            onChange={(event) =>
              updateField("businessName", event.target.value)
            }
            placeholder="Acme Pty Ltd"
          />
        </label>
      </div>
      <div className="rf-form__row">
        <label className="rf-field">
          <span className="rf-field__label">Email</span>
          <input
            className="rf-input"
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@email.com"
            required
          />
        </label>
        <label className="rf-field">
          <span className="rf-field__label">Phone</span>
          <input
            className="rf-input"
            name="phone"
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="0400 000 000"
          />
        </label>
      </div>
      <div className="rf-form__interest">
        <span className="rf-form__interest-label">I'm interested in</span>
        <div className="rf-form__chips">
          {contactServiceOptions.map((service) => {
            const selected = interests.includes(service);

            return (
              <button
                key={service}
                className={`rf-tag${selected ? " is-selected" : ""}`}
                type="button"
                onClick={() => toggleInterest(service)}
                aria-pressed={selected}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>
      <label className="rf-field">
        <span className="rf-field__label">What's on your plate?</span>
        <textarea
          className="rf-input rf-input--textarea"
          name="message"
          rows={4}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="A line or two about where the business is and what you're hoping to work on."
        />
      </label>
      {error ? <p className="rf-form__error">{error}</p> : null}
      <Button
        variant="primary"
        size="lg"
        fullWidth
        type="submit"
        disabled={sending}
      >
        {sending ? "Sending..." : "Submit"}
      </Button>
      <p className="rf-form__fine">
        By submitting this form, you agree to our Privacy Policy and Terms of
        Service.
      </p>
    </form>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToId(id: NavTarget) {
    setMenuOpen(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const top = element.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div className="rf-app">
      <header className={`rf-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="rf-header__inner rf-container">
          <button
            className="rf-logo"
            type="button"
            onClick={() => scrollToId("top")}
          >
            <img
              src="/rune-finance/logo-wordmark.svg"
              alt="Rune Finance"
              height="34"
            />
          </button>
          <nav className="rf-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="rf-nav__link"
                type="button"
                onClick={() => scrollToId(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="rf-header__cta">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToId("contact")}
            >
              Book a Consultation
            </Button>
          </div>
          <button
            className="rf-burger"
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen ? (
          <div className="rf-mobile">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="rf-mobile__link"
                type="button"
                onClick={() => scrollToId(link.id)}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="primary"
              fullWidth
              onClick={() => scrollToId("contact")}
            >
              Book a Consultation
            </Button>
          </div>
        ) : null}
      </header>

      <main>
        <section className="rf-hero" id="top">
          <div className="rf-hero__bg" aria-hidden="true"></div>
          <div className="rf-container rf-hero__grid">
            <div className="rf-hero__copy rf-reveal">
              <Eyebrow>Brisbane · Corporate Advisory</Eyebrow>
              <h1 className="rf-hero__title">
                A CFO in your corner,
                <br />
                for <em>decisions that matter</em>.
              </h1>
              <p className="rf-hero__sub">
                Strategy, forecasting, funding readiness and M&amp;A for small
                and micro businesses that need senior-level financial expertise
                without a full-time hire.
              </p>
              <div className="rf-hero__actions">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToId("contact")}
                >
                  Book a Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToId("services")}
                >
                  See What We Do
                </Button>
              </div>
              <div className="rf-hero__stats">
                <StatBlock
                  value="10"
                  suffix="+ yrs"
                  label="Industry experience"
                />
                <StatBlock
                  value="CFA · ACA"
                  label="Dual-qualified"
                  className="rf-hero__stat--cfa"
                />
                <StatBlock value="100%" label="Independent advice" />
              </div>
            </div>

            <div className="rf-hero__media rf-reveal">
              <div className="rf-hero__paper">
                <div className="rf-hero__paper-head">
                  <div className="rf-hero__paper-mono">Engagement · 2026</div>
                  <img
                    src="/rune-finance/mark.svg"
                    alt=""
                    className="rf-hero__paper-rune"
                  />
                </div>
                <div className="rf-hero__paper-body">
                  <h2 className="rf-hero__paper-title">
                    What working with <em>Rune</em> looks like
                  </h2>
                  <ul className="rf-hero__paper-list">
                    {engagementItems.map((item) => (
                      <li key={item.label}>
                        <span className="rf-hero__paper-tick">
                          <Icon name="check" size={18} />
                        </span>
                        <span className="rf-hero__paper-label">
                          {item.label}
                        </span>
                        <span className="rf-hero__paper-meta">{item.meta}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="rf-hero__paper-mono rf-hero__paper-signoff">Signed · Thivya Viswamohanan, CFA · ACA</div> */}
              </div>
              <div className="rf-hero__chip">
                <span className="rf-hero__chip-mark">
                  <img src="/rune-finance/mark.svg" alt="" width="34" />
                </span>
                <div>
                  <div className="rf-hero__chip-name">Thivya Viswamohanan</div>
                  <div className="rf-hero__chip-role">
                    CFA, ACA · Founder & Advisor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rf-section" id="services">
          <div className="rf-container">
            <SectionHeading
              eyebrow="Our Services"
              title="Senior advisory, four ways"
              intro="Engage us for a single deliverable, a fixed project, or as your ongoing finance partner."
              align="center"
            />
            <div className="rf-pillars rf-mt-8">
              {servicePillars.map((pillar, index) => (
                <article className="rf-pillar rf-reveal" key={pillar.title}>
                  <span className="rf-pillar__num">0{index + 1}</span>
                  <span className="rf-pillar__icon">
                    <Icon name={pillar.icon} size={26} />
                  </span>
                  <h3 className="rf-pillar__title">{pillar.title}</h3>
                  <p className="rf-pillar__lead">{pillar.lead}</p>
                  <ul className="rf-pillar__list">
                    {pillar.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rf-section rf-section--accent" id="audience">
          <div className="rf-container rf-audience__grid">
            <div className="rf-audience__copy rf-reveal">
              <Eyebrow>Who We Work With</Eyebrow>
              <h2 className="rf-h2">
                Built for small and <em>micro businesses</em>.
              </h2>
              <p className="rf-lead">
                We work with founders and owner-operators where senior financial
                judgment is the difference between a good year and a great one;
                and where a full-time CFO isn't the right shape yet.
              </p>
              <p className="rf-audience__pull">
                "The decisions might look different: raising capital, securing
                finance, hiring, expanding, acquiring a business or preparing
                for a sale; but they all come down to the same thing:{" "}
                <em>making informed decisions with confidence</em>."
              </p>
            </div>
            <aside className="rf-audience__card rf-reveal">
              <div className="rf-audience__head">
                <span className="rf-audience__h">Engagement Fit</span>
                <span className="rf-audience__stamp">A/2026</span>
              </div>
              <ul className="rf-audience__list">
                {audienceItems.map((item) => (
                  <li key={item.num}>
                    <span className="rf-audience__num">{item.num}</span>
                    <div>
                      <p className="rf-audience__label">{item.label}</p>
                      <p className="rf-audience__desc">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="rf-section rf-section--dark" id="approach">
          <div className="rf-container">
            <SectionHeading
              eyebrow="Our Approach"
              title="The Rune Finance advantage"
              intro="Experience, straight answers, and practical support. That's how we work."
              align="center"
              onDark
            />
            <div className="rf-approach__grid rf-mt-8">
              {approachItems.map((item, index) => (
                <div className="rf-approach__item rf-reveal" key={item.title}>
                  <span className="rf-approach__num">0{index + 1}</span>
                  <span className="rf-approach__icon">
                    <Icon name={item.icon} size={24} />
                  </span>
                  <h3 className="rf-approach__title">{item.title}</h3>
                  <p className="rf-approach__body">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rf-section" id="about">
          <div className="rf-container rf-about__grid">
            <div className="rf-about__media-wrap rf-reveal">
              <div
                className="rf-photo rf-photo--portrait rf-photo--filled"
                role="img"
                aria-label="Thivya Viswamohanan, Founder & Principal Advisor"
              >
                <img
                  src="/rune-finance/profile.jpeg"
                  alt="Thivya Viswamohanan"
                />
              </div>
              <div className="rf-about__creds">
                <div className="rf-about__creds-row">
                  <span className="rf-about__creds-key">Practice</span>
                  <span className="rf-about__creds-val">Brisbane, AU</span>
                </div>
                <div className="rf-about__creds-row">
                  <span className="rf-about__creds-key">Since</span>
                  <span className="rf-about__creds-val">2025</span>
                </div>
              </div>
            </div>
            <div className="rf-about__copy rf-reveal">
              <Eyebrow>About</Eyebrow>
              <h2 className="rf-h2">
                An advisor who has sat on <em>both sides</em>.
              </h2>
              <h3 className="rf-about__name">
                Thivya Viswamohanan, <span>CFA, ACA</span>
              </h3>
              <p className="rf-about__role">Founder & Principal Advisor</p>
              <p className="rf-body">
                Thivya founded Rune Finance after more than a decade in finance,
                strategy and acquisitions. Having worked alongside business
                owners, executives and boards, she understands that most
                founders don't need another report; they need clarity.
              </p>
              <p className="rf-body">
                That's why engagements are deliberately limited. Every client
                gets direct access to senior financial expertise, practical
                advice and a trusted sounding board for the decisions that
                matter most.
              </p>
              <Button variant="primary" onClick={() => scrollToId("contact")}>
                Book a Consultation
              </Button>
              <div className="rf-about__badges">
                <Badge>CFA Charterholder</Badge>
                <Badge>Chartered Accountant (ICAEW)</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="rf-section rf-section--sunken" id="faq">
          <div className="rf-container">
            <SectionHeading
              eyebrow="FAQ"
              title="Honest answers, up front"
              intro="A few of the questions we hear most often before a first conversation."
              align="center"
            />
            <div className="rf-faq">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={item.q}
                    className={`rf-faq__item${isOpen ? " is-open" : ""}`}
                  >
                    <button
                      className="rf-faq__btn"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.q}</span>
                      <span className="rf-faq__chev">
                        <Icon name="plus" />
                      </span>
                    </button>
                    <div className="rf-faq__panel">
                      <div className="rf-faq__panel-inner">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="rf-section" id="contact">
          <div className="rf-container rf-contact__grid">
            <div className="rf-contact__intro rf-reveal">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="rf-h2">
                Let's have a <em>first conversation</em>.
              </h2>
              <p className="rf-body">
                Tell us a little about the business and what's on your plate.
                The first call is free, honest, and there is no pressure to take
                it further.
              </p>
              <ul className="rf-contact__list">
                {contactDetails.map((detail) => (
                  <li key={detail.label}>
                    <span className="rf-contact__icon">
                      <Icon name={detail.icon} size={20} />
                    </span>
                    <div>
                      <div className="rf-contact__label">{detail.label}</div>
                      <div className="rf-contact__value">
                        {detail.href ? (
                          <a href={detail.href}>{detail.value}</a>
                        ) : (
                          detail.value
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rf-card-surface rf-reveal">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="rf-footer">
        <div className="rf-container rf-footer__grid">
          <div className="rf-footer__brand">
            <img
              src="/rune-finance/logo-wordmark.svg"
              alt="Rune Finance"
              height="36"
              className="rf-footer__logo"
            />
            <p className="rf-footer__blurb">
              Financial leadership for founders and owner-operators making
              important decisions. Clear advice, practical support, and no
              unnecessary complexity.
            </p>
          </div>
          <div className="rf-footer__col">
            <h4 className="rf-footer__h">Services</h4>
            <button type="button" onClick={() => scrollToId("services")}>
              Financial &amp; Strategy
            </button>
            <button type="button" onClick={() => scrollToId("services")}>
              Fractional CFO
            </button>
            <button type="button" onClick={() => scrollToId("services")}>
              Funding Readiness
            </button>
            <button type="button" onClick={() => scrollToId("services")}>
              M&amp;A Advisory
            </button>
          </div>
          <div className="rf-footer__col">
            <h4 className="rf-footer__h">Practice</h4>
            <button type="button" onClick={() => scrollToId("audience")}>
              Who We Work With
            </button>
            <button type="button" onClick={() => scrollToId("approach")}>
              Our Approach
            </button>
            <button type="button" onClick={() => scrollToId("about")}>
              About Thivya
            </button>
            <button type="button" onClick={() => scrollToId("faq")}>
              FAQ
            </button>
          </div>
          <div className="rf-footer__col">
            <h4 className="rf-footer__h">Get in touch</h4>
            <a href="tel:0411472237">0411 472 237</a>
            <a href="mailto:thivya@runefinance.com.au">
              thivya@runefinance.com.au
            </a>
            <span className="rf-footer__muted">Brisbane, Australia</span>
          </div>
        </div>
        <div className="rf-container rf-footer__legal">
          <span>© 2026 Rune Finance. All rights reserved.</span>
          <span className="rf-footer__muted">
            Independent · fee-for-service.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
