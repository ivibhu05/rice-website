import Link from "next/link";
import { Mail, MapPin, Phone, Wheat } from "lucide-react";
import { company, certifications } from "@/data/company";
import { footerNav } from "@/data/nav";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-sand-100">
      <div className="section-inner grid gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-5 lg:px-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
              <Wheat className="h-4.5 w-4.5" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg text-sand-50">
              {company.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-200/80">
            {company.tagline} Exporting basmati and non-basmati rice from
            Dubai to distributors, retailers, and food-service buyers
            worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-50/15 text-sand-100 transition-colors hover:border-gold-500 hover:text-gold-400"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-50/15 text-sand-100 transition-colors hover:border-gold-500 hover:text-gold-400"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterCol title="Company" links={footerNav.company} />
        <FooterCol title="Catalog" links={footerNav.catalog} />

        <div>
          <h3 className="eyebrow text-gold-500/90">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-200/80">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {company.address.line1}
                <br />
                {company.address.line2}, {company.address.city}
                <br />
                {company.address.country}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="section-inner flex flex-wrap items-center gap-x-6 gap-y-2 px-6 py-6 text-xs text-sand-200/60 md:px-10 lg:px-16">
          <span>Certified:</span>
          {certifications.map((c) => (
            <span key={c.name}>{c.name}</span>
          ))}
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="section-inner flex flex-col-reverse items-center justify-between gap-3 px-6 py-6 text-xs text-sand-200/50 md:flex-row md:px-10 lg:px-16">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow text-gold-500/90">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-sand-200/80">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors hover:text-gold-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
