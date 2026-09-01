# Drive → Portfolio Import Notes

Source: Google Drive folder `13dCSBFkBm-yT8how1-ucr4bZIGTLxNqI` (shared by Filip). Read-only — nothing in Drive was renamed, moved, or deleted. Files were downloaded and copied into `public/projects/<slug>/` with clean names.

## Mapping

| Drive folder / file | Portfolio project | Destination | Assets used |
|---|---|---|---|
| `MZT/` (7 files) | MZT Skopje | `public/projects/mzt-skopje/` | 7 / 7 |
| `World Cup/` (7 files) | split — see below | `public/projects/svetsko-vo-park/` + `public/projects/independent-concepts/` | 6 / 7 |
| `Vardar/` (2 files) | FK Vardar | `public/projects/fk-vardar/` | 1 / 2 |
| `Macedonia/` (2 files) | Macedonia National Team | `public/projects/macedonia-national-team/` | 2 / 2 |
| Root loose files (6 files) | split — see below | `public/projects/independent-concepts/` | 4 / 6 |

**World Cup folder split**: `argentina spanija finale dizajn.png`, `brazil - japan.png`, `francija maroko.png`, and `world cup project recap cover.png` all carry the same "Светско во Парк" branding/sponsor logos — a real, ongoing match-day content series — so they became their own project. `messi x yamal 8.png` (an Adidas campaign moodboard) and `lionel messi edit.png` (a standalone illustration) are not part of that branded series, so they went into Independent Concepts instead.

**Root loose files split**: `sl 1.png` (Dinamo Zagreb kit concept), `cherki dizajn.png` (Manchester City collage), `soso committed usf 3.png` (USF commitment graphic), and `lina wimbledon.png` (Wimbledon tribute) are real, on-brand, signed work → Independent Concepts. `AIatWork Concept Task.png` and `Example #1.3 fixed.png` are unrelated stock-photo ad mockups (an AI SaaS ad and a golf-course print ad) with no connection to the established design identity → excluded.

## Selected covers

- **MZT Skopje** → `mzt-champions-celebration.png` (full team, "ШАМПИОНИ" title-win graphic — the strongest single image of the set)
- **Светско во Парк** → `svp-final-argentina-spain.png` (the World Cup final — the highest-stakes match in the series)
- **FK Vardar** → `vardar-champions-12-locker-room.png` (only usable asset, also the strongest)
- **Macedonia National Team** → `mkd-basketball-gameday-hungary.png` (more dynamic than the kit-concept mockup)
- **Independent Concepts** → `messi-illustration.png` (most eye-catching single piece in the bucket)

## Excluded — technical limits

The Drive MCP tool used for this import caps single-file downloads at 10 MB. Two files exceeded that and were not imported:

- `Vardar/Christian Dissinger dizajn.png` (~78 MB)
- `World Cup/lamine yamal edit.png` (~10.6 MB)

Both can be added later — resave a smaller export in Drive, or download manually and drop it into `public/projects/`.

## Excluded — off-brand

- `AIatWork Concept Task.png` — generic "AI at Work" SaaS ad mockup, unrelated to the sports/branding identity of the rest of the work.
- `Example #1.3 fixed.png` — a "Golf Course Prints" ad mockup, reads as a course/practice exercise rather than real client work.

## Notes on the data

- Every imported image is a native 1080×1360 Instagram-portrait export (~4:5). The project-detail-page layout system (`full` / `wide` / `portrait` / `small` / `offset-left` / `offset-right` / `two-column` / `grid`) varies by **width and placement only** — it never crops or distorts the source aspect ratio.
- Captions, dates, and match details (opponents, scorelines, the "150+ graphics / 897.7K views" stat) are taken directly from what's visible in the artwork or the Drive filenames — nothing was invented.
