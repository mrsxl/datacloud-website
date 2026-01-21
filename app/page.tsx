"use client";

import Footer from "./_components/footer";
import Navigation from "./_components/navigation";
import Section from "./_components/section";

export default function Home() {
  const sections = [
    {
      id: "hero",
      className: "[&>.section-content]:text-center",
      title: "Memory-Centric DataCloud",
      description:
        "Building the future of space exploration and advancing human presence beyond Earth",
      videoName: "main",
    },
    {
      id: "powerdrill",
      className: "[&>.section-content]:top-[20%] [&>.section-content]:left-[10%]",
      title: "Powerdrill",
      description:
        "Pushing the boundaries of space exploration with innovative missions and groundbreaking achievements",
      buttonText: "View",
      buttonHref: "https://powerdrill.ai/",
      videoName: "pd",
    },
    {
      id: "memory-lake",
      className: "[&>.section-content]:top-[20%] [&>.section-content]:right-[10%]",
      title: "Memory Lake",
      description:
        "Revolutionary spacecraft and propulsion systems designed for interplanetary travel and deep space exploration",
      buttonText: "View",
      buttonHref: "https://memorylake.ai/",
      videoName: "memorylake",
    },
    {
      id: "relyt",
      className: "[&>.section-content]:top-[20%] [&>.section-content]:left-[10%]",
      title: "Relyt",
      description:
        "Dedicated to making life multiplanetary through the development of advanced space technologies",
      buttonText: "View",
      buttonHref: "https://https://data.cloud/relytone",
      videoName: "relyt",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </main>
      <Footer />
    </>
  );
}
