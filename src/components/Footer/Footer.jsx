import { footerLinks, siteMeta } from "@/data/portfolioData";
import BrandLogo from "@/components/ui/BrandLogo/BrandLogo";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="section-container">
        <div className={styles.grid}>
          <div>
            <BrandLogo size="sm" className={styles.brand} />
            <p className={styles.desc}>
              Frontend developer crafting premium, performant web experiences with
              React, Next.js, and thoughtful design systems.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>Navigation</p>
            <nav className={styles.links} aria-label="Footer">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className={styles.colTitle}>Connect</p>
            <div className={styles.socials}>
              <a
                href={siteMeta.github}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={siteMeta.linkedin}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={`mailto:${siteMeta.email}`} className={styles.social}>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {siteMeta.name}. All rights reserved.
          </p>
          <a href="#home" className={styles.topBtn}>
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 19V5M6 11l6-6 6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
