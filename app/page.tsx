import Image from "next/image";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiLinux,
  SiUnity,
  SiArduino,
  SiPostgresql,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { HiEnvelope } from "react-icons/hi2";
import type { IconType } from "react-icons";
import { PROJECTS } from "@/lib/projects";

type Skill = {
  label: string;
  icon?: IconType;
  color: string;
  monogram?: string;
};

const TECH_SKILLS: Skill[] = [
  { label: "Python", icon: SiPython, color: "#3776AB" },
  { label: "SQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#E2E2E2" },
  { label: "MATLAB", color: "#E16737", monogram: "M" },
  { label: "Arduino", icon: SiArduino, color: "#00979D" },
];

const TOOL_SKILLS: Skill[] = [
  { label: "Git", icon: SiGit, color: "#F05032" },
  { label: "Linux", icon: SiLinux, color: "#FCC624" },
  { label: "AWS", color: "#FF9900", monogram: "AWS" },
  { label: "SolidWorks", color: "#FF5A5F", monogram: "SW" },
  { label: "Fusion 360", color: "#FF8C00", monogram: "F360" },
  { label: "Unity", icon: SiUnity, color: "#E2E2E2" },
  { label: "Simulink", color: "#0076A8", monogram: "SL" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <TopBar />

      <main className="relative mx-auto max-w-6xl px-6 pt-28 pb-24">
        <BackgroundGrid />

        {/* Hero */}
        <section className="pb-20">
          <div className="grid items-center gap-12 md:grid-cols-12">
            {/* Left: name + bio + social links */}
            <div className="md:col-span-7">
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                Evan Hammerstein
              </h1>
              <a
                href="mailto:evanhammerstein@gmail.com"
                className="mt-2 inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                evanhammerstein@gmail.com
              </a>
              <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
                Hi! My name is Evan. I am a Product and Growth Designer working with users to build data-driven
                products that solve their real problems. I care about measurable improvement in empowering others in their projects and goals.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-zinc-400">
                <li>Roles: PM, Growth, Product Design, Analyst</li>
                <li>Originally from Texas, US - Currently based in London, UK</li>
                <li>Imperial College London (MEng, 2026)</li>
                <li>Interested in UX/UI, AI, Tech, Robotics, Health</li>
              </ul>

              {/* Social icons */}
              <div className="mt-8 flex items-center gap-5">
                <a
                  href="https://github.com/evan-hammerstein"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <SiGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/evan-hammerstein"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <SiLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:evanhammerstein@gmail.com"
                  aria-label="Email"
                  className="text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <HiEnvelope className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right: large portrait */}
            <div className="md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
                <Image
                  src="/profile.jpeg"
                  alt="Evan Hammerstein"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <h2 className="text-4xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-3 mb-10 max-w-sm text-sm text-zinc-400">
            Some of my best projects so far. Some are open-source, click on them to see their GitHub with demos in the GitHub releases!
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </section>

        {/* Proficiencies */}
        <StickyTitleSection
          id="proficiencies"
          title="Proficiencies"
          right={
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-sm font-medium text-zinc-300">Skills</p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {[
                    "Product discovery + scoping",
                    "User research + rapid prototyping",
                    "Data Analytics + experimentation protocol for key metrics",
                    "Stakeholder communication",
                    "Agile / Scrum delivery",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-zinc-800 pt-8">
                <p className="mb-4 text-sm font-medium text-zinc-300">
                  Tech Stack
                </p>
                <SkillGrid skills={TECH_SKILLS} />
              </div>

              <div className="border-t border-zinc-800 pt-8">
                <p className="mb-4 text-sm font-medium text-zinc-300">Tools</p>
                <SkillGrid skills={TOOL_SKILLS} />
              </div>
            </div>
          }
        />

        {/* Work */}
        <StickyTitleSection
          id="work"
          title="Work"
          right={
            <div className="space-y-10">
              <TimelineItem
                title="Data Research Assistant — Brain and Behaviour Lab"
                meta="Jan 2026 → Present"
                logo="/work/brain.png"
                body="Investigating gaze-based human–robot interaction; using vision-language-action models + ROS; analyzing attention behavior."
                badge="Current"
              />
              <TimelineItem
                title="Prototyping + Design Engineer — Imperial MechE Lab"
                meta="Sep 2025 → Present"
                logo="/work/imperial.jpeg"
                body="Hands-on prototyping + iteration for research hardware; fast build-test cycles and documentation."
                badge="Current"
              />
              <TimelineItem
                title="Product + Data Engineer — Cyanoskin"
                meta="Jan 2025 → Jul 2025"
                logo="/work/cyanoskin.jpeg"
                body="Built embedded sensors + vision workflow (90% classification); shipped KPI monitoring + customer app; increased retention 30% and weekly investor/customer messaging 15×; supported >£50k funding."
              />
              <TimelineItem
                title="Product Development Engineer + Consultant — Biotex Inc."
                meta="Jun 2024 → Sep 2024"
                logo="/work/biotex.jpg"
                body="Designed oncology/surgical devices (10+ CAD prototypes); built 25+ bench testing rigs; improved device reliability ~45%; reduced regulatory documentation time ~70%."
              />
              <TimelineItem
                title="LLM Intern — DigitalAsset.AI"
                meta="Apr 2024 → Jun 2024"
                logo="/work/digitalAI.jpeg"
                body="Built two Web3 agents in Unity; supported cybercrime investigation simulation environments."
              />
            </div>
          }
        />

        {/* Education */}
        <StickyTitleSection
          id="education"
          title="Education"
          right={
            <div className="space-y-10">
              <TimelineItem
                title="Imperial College London — MEng Computational Biomedical Engineering"
                meta="Oct 2022 → Jun 2026"
                logo="/work/imperial.jpeg"
                body="Predicted First Class Honours. Focus on computational methods, data, and building real systems (hardware + software)."
                badge="Current"
              />
            </div>
          }
        />

        {/* Contact */}
        <section id="contact" className="py-24">
          <div className="flex flex-col items-center text-center">
            <p className="mb-4 text-sm tracking-widest text-zinc-500 uppercase">
              Get in touch
            </p>
            <a
              href="mailto:evanhammerstein@gmail.com"
              className="break-all text-3xl font-semibold text-zinc-100 transition-colors hover:text-white md:text-4xl lg:text-5xl"
            >
              evanhammerstein@gmail.com
            </a>
            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://github.com/evan-hammerstein"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-zinc-500 transition-colors hover:text-zinc-100"
              >
                <SiGithub className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com/in/evan-hammerstein"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-500 transition-colors hover:text-zinc-100"
              >
                <SiLinkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-zinc-900 pt-8 text-sm text-zinc-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Evan Hammerstein</p>
            <p>Next.js · Tailwind</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function TopBar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-sm font-semibold tracking-wide text-zinc-200">EH</p>
        <nav className="hidden gap-7 md:flex">
          {[
            ["Projects", "#projects"],
            ["Skills", "#proficiencies"],
            ["Work", "#work"],
            ["Education", "#education"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950" />
    </div>
  );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[0] }) {
  return (
    <a
      href={p.github ?? "https://github.com/evan-hammerstein"}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={p.imageSrc}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-400 transition-all duration-300 group-hover:border-zinc-500 group-hover:text-zinc-100">
          ↗
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-base font-semibold leading-snug text-white">
            {p.title}
          </p>
          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-zinc-300">
            {p.subtitle}
          </p>
        </div>
      </div>
    </a>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 transition hover:border-zinc-700 hover:bg-zinc-900">
      {Icon ? (
        <Icon className="h-7 w-7" style={{ color: skill.color }} />
      ) : (
        <span
          className="flex h-7 w-7 items-center justify-center text-xs font-bold"
          style={{ color: skill.color }}
        >
          {skill.monogram ?? skill.label.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-center text-[11px] leading-tight text-zinc-400">
        {skill.label}
      </span>
    </div>
  );
}

function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div
      className="grid gap-2.5"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))" }}
    >
      {skills.map((s) => (
        <SkillIcon key={s.label} skill={s} />
      ))}
    </div>
  );
}

function StickyTitleSection(props: {
  id: string;
  title: string;
  right: React.ReactNode;
}) {
  return (
    <section id={props.id} className="py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2 className="text-4xl font-semibold tracking-tight">
              {props.title}
            </h2>
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/20 p-6 md:p-8">
            {props.right}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem(props: {
  title: string;
  meta: string;
  body: string;
  badge?: string;
  logo?: string;
}) {
  return (
    <div className="border-b border-zinc-800/60 pb-8 last:border-0 last:pb-0">
      <div className="flex items-start gap-4">
        {props.logo && (
          <div className="relative mt-0.5 h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <Image
              src={props.logo}
              alt=""
              fill
              className="object-contain p-1.5"
              sizes="56px"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-base font-semibold text-zinc-100">
              {props.title}
            </p>
            {props.badge ? (
              <span className="rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-0.5 text-xs text-zinc-300">
                {props.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-zinc-500">{props.meta}</p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{props.body}</p>
        </div>
      </div>
    </div>
  );
}
