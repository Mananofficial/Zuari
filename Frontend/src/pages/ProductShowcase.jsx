import React from "react";
import ShowcaseRow from "./ShowcaseRow";

import careImg from "../assets/careImg.png";
import familyImg from "../assets/familyImg.png";
import businessImg from "../assets/businessImg.png";

function ProductShowcase() {
  const rows = [
    {
      badge: "For Employees",
      title: "A pocket-sized benefits companion.",
      body: "Every covered employee gets a modern app: instant e-cards, network hospital search, teleconsults, and cashless claim tracking.",
      bullets: [
        "24/7 doctor on chat",
        "Family enrollment in 3 taps",
        "Wellness credits & rewards",
      ],
      img: careImg,
      align: "left",
    },
    {
      badge: "For Families",
      title: "One umbrella for the people who matter most.",
      body: "Dependents, parents, and life partners — all covered under a single, portable plan that follows them anywhere in India.",
      bullets: [
        "Parents cover up to 80 yrs",
        "Pan-India cashless network",
        "Maternity & newborn included",
      ],
      img: familyImg,
      align: "right",
    },
    {
      badge: "For HR & Founders",
      title: "Dashboards, not spreadsheets.",
      body: "See enrollment, claims, and utilization in real-time. Add employees in bulk, download endorsements, and get renewal alerts before they matter.",
      bullets: [
        "Bulk CSV onboarding",
        "Live claims analytics",
        "Slack & HRMS integrations",
      ],
      img: businessImg,
      align: "left",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl space-y-24 px-6 py-24">
      {rows.map((row) => (
        <ShowcaseRow key={row.title} {...row} />
      ))}
    </section>
  );
}

export default ProductShowcase;