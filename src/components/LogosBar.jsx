// src/components/LogosBar.jsx
import React from "react";

export default function LogosBar() {
    const base = import.meta.env.BASE_URL;
    const l1 = `${base}media/logo1.png`;
    const l2 = `${base}media/logo2.png`;
    const l3 = `${base}media/logo3.png`;
    const l4 = `${base}media/logo4.png`;

    return (
        <section
            id="logos"
            aria-labelledby="logos-heading"
            className="w-full overflow-x-clip py-6 md:py-8 bg-[#241134]"
        >
            <h2 id="logos-heading" className="sr-only">Trusted by</h2>

            <div className="container-narrow">
                <div className="flex flex-wrap items-center justify-around gap-x-16 gap-y-6 min-w-0">
                    <img src={l1} alt="Logo 1" loading="lazy" decoding="async"
                        className="h-[2.4rem] md:h-12 lg:h-[3.6rem] w-auto max-w-full object-contain" />
                    <img src={l4} alt="Logo 4" loading="lazy" decoding="async"
                        className="h-[2.4rem] md:h-12 lg:h-[3.6rem] w-auto max-w-full object-contain" />
                    <img src={l2} alt="Logo 2" loading="lazy" decoding="async"
                        className="h-[2.4rem] md:h-12 lg:h-[3.6rem] w-auto max-w-full object-contain" />
                    <img src={l3} alt="Logo 3" loading="lazy" decoding="async"
                        className="h-[2.4rem] md:h-12 lg:h-[3.6rem] w-auto max-w-full object-contain" />
                </div>
            </div>
        </section>
    );
}
