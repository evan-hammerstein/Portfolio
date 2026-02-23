export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** One-liner shown on the card and at the top of the detail page */
  subtitle: string;
  /** Base image shown on the card and as the hero on the detail page */
  imageSrc: string;
  /** GitHub repo URL — shows a GitHub button on the detail page */
  github?: string;
  /** Any other links (live demo, paper, video, etc.) */
  links?: ProjectLink[];
  /** Extra images shown in the media gallery on the detail page */
  media?: string[];
  /** 2–4 sentence overview paragraph */
  overview?: string;
  /** Background / problem context */
  context?: string;
  /** What you actually built — tech, approach */
  built?: string;
  /** Outcomes and metrics */
  results?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "animl",
    title: "AniML",
    subtitle:
      "Implantable bioelectronics + ML pipelines for livestock helath and K9 sniff test reception monitoring (≈80% signal accuracy; ≈68% classification on noisy biosignals).",
    imageSrc: "/projects/ANIMLbase.jpeg",
    github: "https://www.animl.tech/",
    // media: ["/projects/animl-2.jpg", "/projects/animl-3.jpg"],
    // overview: "TODO",
    // context: "TODO",
    // built: "TODO",
    // results: "TODO",
  },
  {
    slug: "in-cypher",
    title: "IN CYPHER — Automated Glucose Monitor Fluidics Rig",
    subtitle:
      "Designed and manufactured a CGM testing rig (≈95% control accuracy, 3s lag). Deployed to UK + Singapore labs; cut researcher labor >90% and elminated all experimental waste.",
    imageSrc: "/projects/CGMRIGbase.jpeg",
    github: "https://github.com/evan-hammerstein/Glucose-Monitor-Testing-Rig",
    // media: ["/projects/cgm-2.jpg"],
    // overview: "TODO",
    // context: "TODO",
    // built: "TODO",
    // results: "TODO",
  },
  {
    slug: "rl-ml-brain",
    title: "RL/ML Brain for Agricultural Robotic Automation",
    subtitle:
      "Reinforcement + imitation learning experiments for reliable field behavior — achieved optimized decision-making policy with a ~450% efficiency increase.",
    imageSrc: "/projects/RLbase.gif",
    github: "https://github.com/evan-hammerstein/BioengineeringAgricultureRobots",
    // media: ["/projects/rl-2.gif"],
    // overview: "TODO",
    // context: "TODO",
    // built: "TODO",
    // results: "TODO",
  },
  {
    slug: "hypha-tracker",
    title: "Hypha Tracker",
    subtitle:
      "Fungal growth analysis platform — image skeletonization, 12 growth metrics, ≈85% accuracy, and a UI that reduced analysis labor >99%.",
    imageSrc: "/projects/HYPHATRACKERbase.gif",
    github: "https://github.com/evan-hammerstein/HyphaTracker-App",
    // media: ["/projects/hypha-2.jpg", "/projects/hypha-3.jpg"],
    // overview: "TODO",
    // context: "TODO",
    // built: "TODO",
    // results: "TODO",
  },
  {
    slug: "alternative-protein-project",
    title: "Alternative Protein Project (Co-founder)",
    subtitle:
      "Built a student startup research network — secured >£2k funding and grew membership from 2 to 50+.",
    imageSrc: "/projects/APPbase.png",
    // links: [{ label: "Website", href: "https://..." }],
    // media: [],
    // overview: "TODO",
    // context: "TODO",
    // built: "TODO",
    // results: "TODO",
  },
  {
    slug: "cerebral-palsy-adaptor",
    title: "Cerebral Palsy Adaptor",
    subtitle:
      "Assistive robotic arm for low-mobility children — binary-switch control, ≈70% switch accuracy, ≈65% motion reliability.",
    imageSrc: "/projects/ADAPTORbase.gif",
    github: "https://github.com/evan-hammerstein/Cerebral-Palsy-Adaptor",
    // media: [],
    // overview: "TODO",
    // context: "TODO",
    // built: "TODO",
    // results: "TODO",
  },
];
