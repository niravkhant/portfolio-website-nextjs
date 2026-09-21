"use client";

import { useState } from "react";
import { terminalTabs } from "@/data/terminalTabs";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import Button from "@/components/ui/Button/Button";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./TerminalTabs.module.scss";

const DASH_RULE = "------------------------";

export default function TerminalTabs() {
  const [activeId, setActiveId] = useState(terminalTabs[0].id);
  const active =
    terminalTabs.find((tab) => tab.id === activeId) ?? terminalTabs[0];

  return (
    <section
      id="studio"
      className={styles.section}
      aria-labelledby="studio-title"
    >
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            titleId="studio-title"
            eyebrow="Workbench"
            title="Developer Snapshot"
            subtitle="A quick look at how I work — switch tabs to explore profile, stack, and delivery workflow."
            center
          />
        </FadeIn>

        <FadeIn delay={80}>
          <div className={styles.shell}>
            <div className={styles.panel}>
              <div
                className={styles.tabList}
                role="tablist"
                aria-label="Portfolio topics"
              >
                {terminalTabs.map((tab) => {
                  const isActive = tab.id === activeId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`tab-${tab.id}`}
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      className={isActive ? styles.tabActive : styles.tab}
                      onClick={() => setActiveId(tab.id)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div
                className={styles.panelBody}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
              >
                <div className={styles.chrome}>
                  <span className={styles.traffic} aria-hidden="true">
                    <span className={styles.dotRed} />
                    <span className={styles.dotYellow} />
                    <span className={styles.dotGreen} />
                  </span>
                  <span className={styles.filePath}>{active.fileLabel}</span>
                </div>

                <div className={styles.content}>
                  <p className={styles.contentHeading}>{active.heading}</p>
                  <p className={styles.rule} aria-hidden="true">
                    {DASH_RULE}
                  </p>
                  <ul className={styles.lines}>
                    {active.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <p className={styles.rule} aria-hidden="true">
                    {DASH_RULE}
                  </p>
                  <p className={styles.closing}>{active.closing}</p>
                </div>

                <div className={styles.actionBar}>
                  <p className={styles.prompt}>{active.prompt}</p>
                  <Button href={active.cta.href} variant="primary" size="sm">
                    {active.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
