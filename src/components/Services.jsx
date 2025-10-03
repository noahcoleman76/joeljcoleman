// src/components/Services.jsx
import React, { useRef, useState } from "react";

export default function Services() {
  const base = import.meta.env.BASE_URL;
  const [active, setActive] = useState(null);
  const itemRefs = useRef([]);

  const items = [
    {
      title: "Improving Academic Outcomes",
      desc: "Proven strategies to raise student performance and close achievement gaps.",
      img: `${base}media/services/service1.jpg`,
      cta: "Learn more",
    },
    {
      title: "Blended Learning Initiatives",
      desc: "Designing and implementing models that combine technology with effective teaching.",
      img: `${base}media/services/service2.jpg`,
      cta: "How it works",
    },
    {
      title: "Competency-Based Learning",
      desc: "Helping schools shift from time-based progress to true mastery and understanding.",
      img: `${base}media/services/service3.jpg`,
      cta: "Talk to me",
    },
    {
      title: "Budget Prioritization",
      desc: "Aligning resources with what matters most for students, staff, and community impact.",
      img: `${base}media/services/service4.jpg`,
      cta: "See approach",
    },
    {
      title: "Leadership Development",
      desc: "Cultivating strong, visionary leaders at every level of the district.",
      img: `${base}media/services/service5.jpg`,
      cta: "Coach with Joel",
    },
    {
      title: "Employee Satisfaction & Culture",
      desc: "Building trust, morale, and engagement to retain great educators.",
      img: `${base}media/services/service6.jpg`,
      cta: "Let’s improve culture",
    },
  ];

  // Scroll the chosen item so its top sits just under the fixed navbar
  const scrollItemIntoView = (index) => {
    const el = itemRefs.current[index];
    if (!el) return;

    // Measure navbar (first <header>) and add a tiny breathing space
    const header = document.querySelector("header");
    const headerH = header?.offsetHeight ?? 72;
    const extra = 8; // small gap below navbar

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - headerH - extra;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const activate = (index) => {
    if (active !== index) {
      setActive(index);
      // Wait a tick so the DOM has the ref, then scroll
      requestAnimationFrame(() => scrollItemIntoView(index));
    } else {
      // Already active—still ensure it's positioned correctly
      scrollItemIntoView(index);
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section bg-[#7024ca] text-white"
    >
      {/* Equal columns on md+ */}
      <div className="container-narrow grid gap-10 md:grid-cols-2">
        {/* Left: bigger sticky heading with ~50px top padding */}
        <aside className="self-start md:sticky md:top-28 pt-[50px]">
          <h2
            id="services-heading"
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            How I can Help.
          </h2>
        </aside>

        {/* Right: services list */}
        <div className="divide-y divide-white/25">
          {items.map((s, idx) => {
            const isActive = active === idx;
            return (
              <article
                key={s.title}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="py-8 sm:py-10 cursor-pointer"
                onMouseEnter={() => activate(idx)}
                onFocus={() => activate(idx)}
                // (Optional) collapse when leaving:
                onMouseLeave={() => setActive(null)}
                tabIndex={0}
                aria-expanded={isActive}
              >
                {/* Expandable image area (state-driven) */}
                <div
                  className={[
                    "overflow-hidden transition-[max-height] duration-300 ease-in-out",
                    isActive ? "max-h-80 mb-6" : "max-h-0 mb-0",
                  ].join(" ")}
                >
                  <img
                    src={s.img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 object-cover rounded-xl"
                  />
                </div>

                {/* Number + content */}
                <div className="grid grid-cols-[auto_1fr] items-start gap-6">
                  <div className="text-5xl md:text-6xl font-extrabold leading-none text-white/85 tabular-nums select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-white/90">{s.desc}</p>

                    <a
                      href="#contact"
                      className="btn btn-primary mt-4 inline-flex"
                      aria-label={`${s.title} — ${s.cta}`}
                    >
                      {s.cta}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
