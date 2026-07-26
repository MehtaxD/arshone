type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, text, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={`text-sm font-black uppercase tracking-[0.18em] ${light ? "text-red-300" : "text-[#d71920]"}`}>{eyebrow}</p> : null}
      <h2 className={`mt-3 text-balance text-3xl font-black leading-tight md:text-5xl ${light ? "text-white" : "text-[#101114]"}`}>{title}</h2>
      {text ? <p className={`mt-4 text-base leading-7 ${light ? "text-neutral-300" : "text-neutral-600"}`}>{text}</p> : null}
    </div>
  );
}
