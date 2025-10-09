import React from "react";

const cases = [
  {
    title: "High School Completion Success",
    result: "100% graduation rate for eligible students (2018–19)",
    summary: "In the 2018–19 school year, all eligible USDB high school students graduated with a diploma or certificate, achieving a 0% dropout rate. (Source: BoardDocs)"
  },
  {
    title: "Targeted Student Growth",
    result: "29-point average gain in student scores",
    summary: "A small cohort of students at USDB showed remarkable progress, achieving an average 29-point increase in test scores from Fall 2022 to 2023. (Source: utah.gov)"
  },
  {
    title: "Competency-Based Tracking Implementation",
    result: "Literacy gains through competency tracking",
    summary: "Utah Schools for the Deaf & Blind piloted a new data and tracking system to monitor skill-level growth and support competency-based learning. (Source: Digital Promise)"
  },
  {
    title: "Statewide Reach & Impact",
    result: "2,500+ students served statewide with enriched supports",
    summary: "USDB provides educational services, outreach, and resources to more than 2,500 students across Utah, enhancing access and opportunity. (Source: usdb.org)"
  },
  {
    title: "Enhanced Programming & Engagement",
    result: "70+ enrichment programs delivered in one year",
    summary: "USDB offered more than 70 short-term, after-school, summer, and family camp programs to enrich student learning and strengthen community connection. (Source: BoardDocs)"
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section">
      <div className="container-narrow">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle text-ink-80">
          A glimpse into measurable outcomes from past engagements.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-card-alt-border bg-card-alt p-6"
            >
              <div className="text-sm text-brand font-medium">{c.result}</div>
              <h3 className="mt-2 text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-ink-80">{c.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
