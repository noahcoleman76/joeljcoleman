// src/components/Services.jsx
import React from "react";

export default function Services() {
  const base = import.meta.env.BASE_URL;

  const items = [
    { title: "Improving Academic Outcomes", desc: "Proven strategies to raise student performance and close achievement gaps.", img: `${base}media/services/service1.jpg`, cta: "Learn more" },
    { title: "Ed Tech & AI Initiatives", desc: "Designing and implementing models that combine technology with effective teaching.", img: `${base}media/services/service2.jpg`, cta: "How it works" },
    { title: "Competency-Based Learning", desc: "Helping schools shift from time-based progress to true mastery and understanding.", img: `${base}media/services/service3.jpg`, cta: "Talk to me" },
    { title: "Budget Prioritization", desc: "Aligning resources with what matters most for students, staff, and community impact.", img: `${base}media/services/service4.jpg`, cta: "See approach" },
    { title: "Leadership & Board Development", desc: "Cultivating strong, visionary leaders at every level of the district.", img: `${base}media/services/service5.jpg`, cta: "Coach with Joel" },
    { title: "Employee Satisfaction & Culture", desc: "Building trust, morale, and engagement to retain great educators.", img: `${base}media/services/service6.jpg`, cta: "Let’s improve culture" },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section bg-section text-ink"
    >
      <div className="container-narrow grid gap-10 md:grid-cols-2">
        {/* Left: sticky heading */}
        <aside className="self-start md:sticky md:top-28 pt-[50px]">
          <h2
            id="services-heading"
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            How I can Help.
          </h2>
        </aside>

        {/* Right: services list */}
        <div className="divide-y divide-line-strong">
          {items.map((s, idx) => (
            <article key={s.title} className="group py-6 sm:py-8 md:py-10">
              {/* Image
                 - mobile: always visible, smaller (h-40)
                 - md+: smoothly expand on hover (no scroll) */}
              <div
                className="
                  overflow-hidden mb-4
                  max-h-40
                  transition-all duration-500 ease-out
                  md:mb-0 md:max-h-0 md:opacity-0 md:scale-[0.98]
                  md:transition-[max-height,opacity,transform] md:duration-500 md:ease-out
                  group-hover:md:max-h-64 group-hover:md:opacity-100 group-hover:md:scale-100
                "
              >
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 md:h-56 object-cover rounded-xl"
                />
              </div>

              {/* Number + content (smaller on mobile) */}
              <div className="grid grid-cols-[auto_1fr] items-start gap-4 md:gap-6">
                <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-none text-ink-90 tabular-nums select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-ink-90">{s.desc}</p>

                  <a
                    href="#contact"
                    className="btn btn-primary w-full justify-center mt-4"
                    aria-label={`${s.title} — ${s.cta}`}
                  >
                    {s.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
