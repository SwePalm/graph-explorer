# Graph Explorer

Graph Explorer is a static prototype for exploring a health care and life sciences knowledge graph as a guided strategic briefing rather than a generic graph visualization.

The current experience is built around five themes:

- administrative collapse opens the automation door
- work shifts from staffing to orchestration
- clinical intelligence becomes a market product
- the ecosystem becomes agent-native
- trust becomes the limiting factor

Instead of dropping users into a graph cloud, the prototype walks them through a narrative path:

1. pressure
2. shift
3. tension
4. interpretation
5. evidence

## Run locally

This project has no build step. Open the app directly in a browser:

```bash
open index.html
```

Or serve it from the project root:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

- `index.html`: page structure and product framing
- `styles.css`: visual system and responsive layout
- `app.js`: rendering logic and interaction handling
- `story-data.js`: narrative configuration, graph metadata, nodes, and edges
- `docs/hcls_narrative_tree.md`: product and storytelling rationale
- `data/hcls_graph.json`: source graph data artifact

## Design direction

The interface is intentionally positioned as a board-level HCLS strategy tool:

- premium editorial hierarchy instead of dashboard chrome
- guided inquiry instead of free-form graph exploration
- visible evidence panels to preserve credibility
- strong tension and choice framing to force interpretation

## Next steps

Likely follow-on improvements:

- persona-specific views for payer, provider, pharma, and investor audiences
- deeper evidence-map visualizations tied to the current stage
- multiple graph/story packs beyond the initial HCLS dataset
