import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Evan Hammerstein` : "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-900 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            ← Back
          </Link>
          <p className="text-sm font-semibold tracking-wide text-zinc-200">
            EH
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/evan-hammerstein"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/evan-hammerstein"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <SiLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs tracking-widest text-zinc-500 uppercase">
            Project
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-400">
            {project.subtitle}
          </p>

          {/* Links row */}
          {(project.github || (project.links && project.links.length > 0)) && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
                >
                  <SiGithub className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
              {project.links?.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
                >
                  {l.label}
                  <HiArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* ── Hero image ─────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1152px"
              priority
            />
          </div>
        </div>

        {/* ── Content sections ───────────────────────────────── */}
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          <ContentSection label="Overview" content={project.overview} />
          <ContentSection label="Context" content={project.context} />
          <ContentSection label="What I Built" content={project.built} />
          <ContentSection label="Results" content={project.results} />
        </div>

        {/* ── Media gallery ──────────────────────────────────── */}
        {project.media && project.media.length > 0 && (
          <div className="mt-20">
            <p className="mb-6 text-xs tracking-widest text-zinc-500 uppercase">
              Media
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.media.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/9] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
                >
                  <Image
                    src={src}
                    alt={`${project.title} media ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Footer nav ─────────────────────────────────────── */}
        <div className="mt-20 flex items-center justify-between border-t border-zinc-900 pt-8">
          <Link
            href="/"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            ← All projects
          </Link>
          <a
            href="mailto:evanhammerstein@gmail.com"
            className="rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
          >
            Get in touch
          </a>
        </div>
      </main>
    </div>
  );
}

function ContentSection({
  label,
  content,
}: {
  label: string;
  content?: string;
}) {
  return (
    <div>
      <p className="mb-3 text-xs tracking-widest text-zinc-500 uppercase">
        {label}
      </p>
      {content ? (
        <p className="text-base leading-7 text-zinc-300">{content}</p>
      ) : (
        <p className="text-sm italic text-zinc-700">— add content —</p>
      )}
    </div>
  );
}
