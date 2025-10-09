// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="section-title">About Joel</h2>

          <div className="mt-6 space-y-4 text-ink-80">
            <p>
              Joel J. Coleman is an educator, leader, and innovator deeply rooted in Utah’s communities. For more than two decades, he served as a seminary teacher and principal for The Church of Jesus Christ of Latter-day Saints, shaping the lives of students through meaningful teaching and leadership. During that time, he also served on the West Valley City Council, bringing an educator’s perspective to local governance and community development.
            </p>
            <p>
              Coleman went on to co-found Monticello Academy and later served for 13 years as Superintendent of the Utah Schools for the Deaf and the Blind. His leadership extended statewide when he was appointed Interim State Superintendent of Public Instruction, and he has also served on the Utah State Board of Education. Currently, he is a doctoral candidate at Brigham Young University, focusing his research on advancing mastery-based learning and effective educational leadership.
            </p>
            <p>
              Throughout his career, Joel has been dedicated to helping schools move beyond compliance toward true educational mastery. He believes lasting success comes from empowering teachers, strengthening leadership, and creating learning environments where every student can thrive.
            </p>
          </div>
        </div>

        <aside className="rounded-xl border border-line-subtle bg-card-alt p-6">
          <h3 className="font-semibold">Expertise</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink-80 list-disc list-inside">
            <li>Superintendent & Executive Leadership</li>
            <li>Board Relations & Governance</li>
            <li>Special Education Leadership</li>
            <li>Innovation & Blended Learning</li>
            <li>Organizational Improvement</li>
            <li>Stakeholder & Community Engagement</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
