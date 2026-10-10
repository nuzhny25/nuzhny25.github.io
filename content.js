/*
  Everything listed on the site lives in this file.

  To add something, copy an entry, paste it at the top of its list (lists show
  in the order written here), and edit it. Every field except `title` is optional:

    title        "Project name", "Role" or "Degree"
    org          "Company" or "School"            shown as "Title · Org"
    date         "2026", "Summer 2026", "2024 – 2028"
    description  "One or two sentences."
    tags         ["Python", "Flask"]
    links        { Code: "https://…", Live: "https://…" }
                                                  the title links to the first one

  An empty list, like `const EDUCATION = [];`, hides that section.
*/

const PROJECTS = [
  {
    title: "CNN and Image Filtering from Scratch",
    date: "Fall 2026",
    description:
      "A CNN trained with backpropagation written by hand (no autograd), reaching 97.6% test accuracy on MNIST with 9K parameters. Also implements 2D convolution, Gaussian and median filters, and edge detection in plain NumPy.",
    tags: ["Python", "PyTorch", "NumPy"],
  },
  {
    title: "Sudoku Solver",
    date: "Summer 2026",
    description: "A brute-force Sudoku solver written in C.",
    tags: ["C"],
    links: { Code: "https://github.com/nuzhny25/sudoku_solver" },
  },
  {
    title: "FunnAI",
    date: "Spring 2026",
    description:
      "A team web app that scores jokes from transcribed speech. I wrote the humor-analysis module that classifies and scores jokes with the Gemini API, containerized the ML client with Docker, and set up CI with GitHub Actions.",
    tags: ["Python", "Flask", "Docker", "GitHub Actions", "Gemini API"],
  },
];

const EXPERIENCE = [
  {
    title: "Web Master",
    org: "NYU Math Society",
    date: "Jun 2026 – Present",
    description:
      "Built and deployed the society's responsive 5-page website in vanilla HTML, CSS and JavaScript, with an accessible, mobile-first UI. Also engage 70+ members through weekly meetings and manage the society's presence on LinkedIn and NYU channels.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      Site: "https://www.nyumathsociety.org",
      Code: "https://github.com/nyu-mathematics-society/nyu_math_society_website",
    },
  },
  {
    title: "Undergraduate Researcher",
    org: "Regev Lab",
    date: "Mar 2026 – Present",
    description:
      "Develop a config-driven PyTorch training pipeline and the masked-tensor loss behind a novel label-free objective for learning interpretable sequence motifs. Also built a MAF parser that scaled data ingestion from 1 locus to 6, and a dependency-free JS/canvas heatmap that recomputes model activations in the browser.",
    tags: ["Python", "PyTorch", "JavaScript"],
    links: { Code: "https://github.com/nuzhny25/interpretable-splicing-model-torch" },
  },
];

const EDUCATION = [
  {
    title: "Computer Science and Mathematics",
    org: "NYU",
    date: "Sep 2025 – May 2027",
    description: "B.S. in Computer Science, minor in Mathematics. GPA 3.89/4.00, Dean's List.",
    tags: ["Computer Vision", "Software Engineering", "Open Source Software Development"],
  },
  {
    title: "Computer Science and Mathematics",
    org: "Fordham University",
    date: "Jun 2023 – May 2025",
    description: "B.S., minor in Business Administration. GPA 4.00/4.00, Dean's List.",
    tags: ["Data Structures", "Theory of Computation", "Business Communications"],
  },
];
