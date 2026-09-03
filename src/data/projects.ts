import type { Project } from "@/types/project";

// Real work only. Add a new project by dropping images into
// /public/projects/<slug>/ and adding an entry below. Never generate or
// fabricate imagery. Related pieces for the same client stay in ONE project
// (its `assets` stream) rather than being scattered as separate items.
export const projects: Project[] = [
  {
    slug: "mzt-skopje",
    title: "MZT Skopje",
    client: "MZT Skopje",
    year: "2025",
    categories: ["Sports Design", "Social Media", "Matchday Graphics"],
    archiveCategory: "sports-design",
    description:
      "Ongoing matchday graphics, fixture announcements and player features for MZT Skopje, a professional basketball club competing in Macedonia's First League.",
    cover: "/projects/mzt-skopje/mzt-champions-celebration.png",
    assets: [
      {
        image: "/projects/mzt-skopje/mzt-champions-celebration.png",
        alt: "MZT Skopje squad celebrating a 12th First League championship",
        layout: "full",
        context: "Season Moment",
        caption: "12x First League Champions",
        date: "2025",
      },
      {
        image: "/projects/mzt-skopje/mzt-fixture-announcement-finals.png",
        alt: "Finals schedule graphic for MZT Skopje vs. KK TFT Skopje",
        layout: "wide",
        context: "Fixture Announcement",
        caption: "Finals vs. KK TFT Skopje",
        date: "2025",
      },
      {
        image: "/projects/mzt-skopje/mzt-matchday-kumanovo.png",
        alt: "Matchday graphic for MZT Skopje vs. Kumanovo",
        layout: "two-column",
        context: "Matchday",
        caption: "MZT Skopje vs. Kumanovo",
        date: "09.05",
      },
      {
        image: "/projects/mzt-skopje/mzt-matchday-feniks-game3.png",
        alt: "Matchday graphic for MZT Skopje vs. Feniks, quarter-final game 3",
        layout: "two-column",
        context: "Matchday",
        caption: "Quarter-Final, Game 3",
        date: "30.04",
      },
      {
        image: "/projects/mzt-skopje/mzt-player-feature-marin-petkov.png",
        alt: "Player feature graphic for Marin Petkov",
        layout: "portrait",
        context: "Player Feature",
        caption: "Marin Petkov",
      },
      {
        image: "/projects/mzt-skopje/mzt-matchday-arcade-concept.png",
        alt: "Arcade-game-styled matchday graphic for the MZT Skopje vs. KK TFT finals",
        layout: "offset-left",
        context: "Matchday",
        caption: "Finals, Game 1 vs. KK TFT Skopje",
      },
      {
        image: "/projects/mzt-skopje/mzt-player-milestone.png",
        alt: "Player milestone graphic celebrating a record number of championship titles",
        layout: "small",
        context: "Player Milestone",
        caption: "Most Decorated Player in Macedonian Basketball History",
      },
    ],
  },
  {
    slug: "svetsko-vo-park",
    title: "Svetsko vo Park",
    client: "Svetsko vo Park",
    year: "2026",
    categories: ["Social Media", "Campaign"],
    archiveCategory: "sports-design",
    description:
      "A self-initiated football content series covering the World Cup match by match. 150+ graphics produced over 22 days, reaching 897.7K+ views in a single month.",
    cover: "/projects/svetsko-vo-park/svp-final-argentina-spain.png",
    assets: [
      {
        image: "/projects/svetsko-vo-park/svp-final-argentina-spain.png",
        alt: "Final matchday graphic for Spain vs. Argentina",
        layout: "full",
        context: "Final",
        caption: "Spain vs. Argentina",
      },
      {
        image: "/projects/svetsko-vo-park/svp-brazil-japan-r32.png",
        alt: "Round of 32 matchday graphic for Brazil vs. Japan",
        layout: "two-column",
        context: "Round of 32",
        caption: "Brazil vs. Japan",
      },
      {
        image: "/projects/svetsko-vo-park/svp-france-morocco-semifinal.png",
        alt: "Semifinal matchday graphic for France vs. Morocco",
        layout: "two-column",
        context: "Semifinal",
        caption: "France vs. Morocco",
      },
      {
        image: "/projects/svetsko-vo-park/svp-project-recap.png",
        alt: "Project recap graphic showing 150+ graphics produced and 897.7K views",
        layout: "wide",
        context: "Project Recap",
        caption: "150+ graphics in 22 days · 897.7K+ views in 30 days",
      },
    ],
  },
  {
    slug: "fk-vardar",
    title: "FK Vardar",
    client: "FK Vardar",
    year: "2026",
    categories: ["Sports Design", "Campaign"],
    archiveCategory: "sports-design",
    description:
      "A campaign visual celebrating FK Vardar's 12 domestic championship titles.",
    cover: "/projects/fk-vardar/vardar-champions-12-locker-room.png",
    assets: [
      {
        image: "/projects/fk-vardar/vardar-champions-12-locker-room.png",
        alt: "FK Vardar locker room composite with 12 championship trophies",
        layout: "full",
        context: "Campaign",
        caption: "12 Trophies, Back Where We Belong",
        date: "2026",
      },
    ],
  },
  {
    slug: "macedonia-basketball",
    title: "Macedonia National Basketball",
    year: "2025",
    categories: ["Sports Design", "Matchday Graphics"],
    archiveCategory: "sports-design",
    description:
      "A gameday poster for the Macedonia national basketball team's FIBA World Cup 2027 pre-qualifier against Hungary.",
    cover: "/projects/macedonia-basketball/mkd-basketball-gameday-hungary.png",
    assets: [
      {
        image: "/projects/macedonia-basketball/mkd-basketball-gameday-hungary.png",
        alt: "Gameday poster for Macedonia vs. Hungary, FIBA World Cup 2027 pre-qualifiers",
        layout: "full",
        context: "Gameday",
        caption: "Macedonia vs. Hungary, FIBA World Cup 2027 Pre-Qualifiers",
        date: "2025",
      },
    ],
  },
  {
    slug: "macedonia-football",
    title: "Macedonia National Football",
    year: "2025",
    categories: ["Kit Concept"],
    archiveCategory: "sports-design",
    description:
      "A proposed home and away kit concept for the Macedonia national football team.",
    cover: "/projects/macedonia-football/mkd-football-kit-concept.png",
    assets: [
      {
        image: "/projects/macedonia-football/mkd-football-kit-concept.png",
        alt: "Proposed home and away kit concept for the Macedonia national football team",
        layout: "full",
        context: "Kit Concept",
        caption: "Proposed National Team Jersey",
        date: "2025",
      },
    ],
  },
  {
    slug: "world-cup-concepts",
    title: "World Cup Concepts",
    year: "2025–2026",
    categories: ["Illustration", "Campaign Concept"],
    archiveCategory: "illustration",
    description:
      "Independent illustration and campaign concept work made around the World Cup, outside the Svetsko vo Park match series.",
    cover: "/projects/world-cup-concepts/messi-illustration.png",
    assets: [
      {
        image: "/projects/world-cup-concepts/messi-illustration.png",
        alt: "Stylized illustration of Lionel Messi",
        layout: "full",
        context: "Illustration",
        caption: "Lionel Messi",
      },
      {
        image: "/projects/world-cup-concepts/adidas-campaign-concept.png",
        alt: "Adidas World Cup campaign concept moodboard",
        layout: "wide",
        context: "Campaign Concept",
        caption: "Adidas World Cup Campaign Concept",
      },
    ],
  },
  {
    slug: "independent-work",
    title: "Independent Work",
    year: "2025–2026",
    categories: ["Illustration", "Kit Concepts"],
    archiveCategory: "illustration",
    description:
      "Self-initiated illustrations, kit concepts and sports graphics made outside client work.",
    cover: "/projects/independent-work/manchester-city-collage.png",
    assets: [
      {
        image: "/projects/independent-work/manchester-city-collage.png",
        alt: "Halftone collage illustration featuring Manchester City players",
        layout: "full",
        context: "Illustration",
        caption: "Manchester City",
      },
      {
        image: "/projects/independent-work/dinamo-zagreb-kit-concept.png",
        alt: "Fourth kit concept for Dinamo Zagreb",
        layout: "portrait",
        context: "Kit Concept",
        caption: "Dinamo Zagreb, 4th Kit Concept",
      },
      {
        image: "/projects/independent-work/usf-basketball-commitment.png",
        alt: "College basketball commitment graphic for a University of South Florida recruit",
        layout: "two-column",
        context: "Sports Graphic",
        caption: "USF Commitment Graphic",
      },
      {
        image: "/projects/independent-work/wimbledon-tribute.png",
        alt: "Wimbledon-themed tribute design, captioned 'For Lina'",
        layout: "two-column",
        context: "Illustration",
        caption: "For Lina, Wimbledon",
      },
    ],
  },
];
