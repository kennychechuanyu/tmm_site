// ─────────────────────────────────────────────────────────────────────
// Resource collections — shared between the /resources index (cards) and
// each collection's own page. Add a new collection here + a matching page
// in src/pages/resources/<slug>.astro, and it appears in the index card grid.
// ─────────────────────────────────────────────────────────────────────

export interface Reading {
  authors: string;
  year: number;
  title: string;
  venue: string;
  doi: string;
}

export interface ReadingGroup {
  label: string;
  items: Reading[];
}

// ── Data versus Phenomena (reading collection) ───────────────────────
export const dvp = {
  slug: "data-versus-phenomena",
  anchor: {
    authors: "Vanhasbroeck, N., Yu, K., & Ariens, S.",
    year: 2026,
    title:
      "No Need to Be Indirect: On the Role of Data in the Validation of Theoretical Models",
    venue: "Theory & Psychology",
    url: "https://doi.org/10.1177/09593543261450876",
    summary:
      "Vanhasbroeck, Yu, and Ariens challenge the increasingly popular view that formal psychological theories should be validated against phenomena alone, and make the case for bringing data back into theory testing. They show that neither phenomena nor data are a sufficient basis on their own, and propose an integrative approach in which the two play complementary roles.",
    points: [
      "A single phenomenon rarely distinguishes competing models — many different mechanisms can produce the same mean difference.",
      "Phenomena alone give no principled way to judge a model's complexity, and reasoning from them becomes circular when the phenomenon itself is mis-specified.",
      "Pure data-fitting has its own blind spots: auxiliary assumptions, estimability, and atheoretical models that often fit better than explanatory ones.",
      "Their integrative loop pairs top-down prediction of phenomena with bottom-up analysis of the full data structure — illustrated by the 19th-century discovery of Neptune.",
    ],
  },
  groups: [
    {
      label: "Foundations — data vs phenomena",
      items: [
        { authors: "Bogen, J., & Woodward, J.", year: 1988, title: "Saving the Phenomena", venue: "The Philosophical Review", doi: "10.2307/2185445" },
        { authors: "Woodward, J.", year: 1989, title: "Data and Phenomena", venue: "Synthese", doi: "10.1007/BF00869282" },
      ],
    },
    {
      label: "Phenomenon-based theory construction",
      items: [
        { authors: "Borsboom, D., van der Maas, H. L. J., Dalege, J., Kievit, R. A., & Haig, B. D.", year: 2021, title: "Theory Construction Methodology: A Practical Framework for Building Theories in Psychology", venue: "Perspectives on Psychological Science", doi: "10.1177/1745691620969647" },
        { authors: "Haslbeck, J. M. B., Ryan, O., Robinaugh, D. J., Waldorp, L. J., & Borsboom, D.", year: 2022, title: "Modeling Psychopathology: From Data Models to Formal Theories", venue: "Psychological Methods", doi: "10.1037/met0000303" },
        { authors: "van Dongen, N., et al.", year: 2025, title: "Productive Explanation: A Framework for Evaluating Explanations in Psychological Science", venue: "Psychological Review", doi: "10.1037/rev0000479" },
        { authors: "Haig, B. D.", year: 2005, title: "An Abductive Theory of Scientific Method", venue: "Psychological Methods", doi: "10.1037/1082-989X.10.4.371" },
      ],
    },
    {
      label: "Data, prediction & the theory crisis",
      items: [
        { authors: "Navarro, D. J.", year: 2019, title: "Between the Devil and the Deep Blue Sea: Tensions Between Scientific Judgement and Statistical Model Selection", venue: "Computational Brain & Behavior", doi: "10.1007/s42113-018-0019-z" },
        { authors: "Yarkoni, T., & Westfall, J.", year: 2017, title: "Choosing Prediction Over Explanation in Psychology: Lessons From Machine Learning", venue: "Perspectives on Psychological Science", doi: "10.1177/1745691617693393" },
        { authors: "Vanpaemel, W.", year: 2020, title: "Strong Theory Testing Using the Prior Predictive and the Data Prior", venue: "Psychological Review", doi: "10.1037/rev0000167" },
        { authors: "Eronen, M. I., & Bringmann, L. F.", year: 2021, title: "The Theory Crisis in Psychology: How to Move Forward", venue: "Perspectives on Psychological Science", doi: "10.1177/1745691620970586" },
        { authors: "van Rooij, I., & Baggio, G.", year: 2021, title: "Theory Before the Test: How to Build High-Verisimilitude Explanatory Theories in Psychological Science", venue: "Perspectives on Psychological Science", doi: "10.1177/1745691620970604" },
      ],
    },
  ] as ReadingGroup[],
};

export const dvpCount = 1 + dvp.groups.reduce((n, g) => n + g.items.length, 0);

// ── Illusions of Understanding (discussion collection) ───────────────
export const illusions = {
  slug: "illusions-of-understanding",
  title: "Illusions of Understanding in the Sciences",
  source: "Computational Brain & Behavior",
  year: 2026,
  description:
    "Shiffrin, Stigler, and Keil argue that scientists routinely operate under predictable illusions when interpreting data, building theories, and evaluating evidence. Commentaries respond across themes including bounded rationality, the nature of understanding, formal modeling, prediction and risk, extrapolation, replication, causal reasoning, AI, and science communication.",
  url: "https://link.springer.com/article/10.1007/s42113-026-00271-1",
  collectionUrl: "https://link.springer.com/collections/fdagffafgf",
  memberPapers: [] as Reading[],
};

// ── Index directory (summaries only) ─────────────────────────────────
export const collections = [
  {
    slug: dvp.slug,
    type: "Reading Collection",
    title: "Data versus Phenomena",
    blurb:
      "From Bogen & Woodward's classic distinction to psychology's theory crisis — should theories answer to stable phenomena, to the data we observe, or to both?",
    meta: `${dvpCount} readings`,
  },
  {
    slug: illusions.slug,
    type: "Discussion Collection",
    title: illusions.title,
    blurb:
      "Shiffrin, Stigler & Keil on the predictable illusions scientists operate under when interpreting data and building theories — with cross-disciplinary commentaries.",
    meta: "Target article + commentaries",
  },
];
