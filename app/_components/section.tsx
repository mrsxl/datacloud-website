"use client";

interface SectionProps {
  id?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  videoName: string;
  className?: string;
}

export default function Section({
  id,
  title,
  description,
  buttonText,
  buttonHref,
  videoName,
  className,
}: SectionProps) {
  return (
    <section
      className={`relative flex h-screen items-center justify-center overflow-hidden ${className}`}
      id={id}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source src={`/${videoName}.webm`} type="video/webm" />
          <source src={`/${videoName}.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="section-content absolute z-10 mx-auto max-w-4xl px-4">
        <h2 className="mb-4 font-semibold text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
          {description}
        </p>
        {buttonText && buttonHref && (
          <a
            className="inline-block rounded-md border-2 border-white bg-transparent px-6 py-2 font-semibold text-base text-white transition-all duration-200 hover:bg-white hover:text-black sm:text-lg"
            href={buttonHref}
            target="_blank"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
}
