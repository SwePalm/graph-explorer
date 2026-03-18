(function () {
  const data = window.STORY_DATA;
  const state = {
    themeId: data.activeThemeId,
    stageIndex: 0,
    choiceId: null,
  };

  const pulseEl = document.getElementById("dataset-pulse");
  const themesEl = document.getElementById("themes-grid");
  const titleEl = document.getElementById("story-title");
  const subtitleEl = document.getElementById("story-subtitle");
  const railEl = document.getElementById("stage-rail");
  const stageCardEl = document.getElementById("stage-card");
  const decisionPanelEl = document.getElementById("decision-panel");
  const evidenceThreadEl = document.getElementById("evidence-thread");
  const evidenceNodesEl = document.getElementById("evidence-nodes");

  const relationshipLabels = {
    mitigates: "Mitigates",
    leads_to: "Leads To",
    contradicts: "Contradicts",
    creates_tension_with: "Creates Tension",
    enables: "Enables",
    requires: "Requires",
    measures: "Measures",
    part_of: "Part Of",
    is_subject_to: "Is Subject To",
  };

  function nodeById(id) {
    return data.nodes[id];
  }

  function currentTheme() {
    return data.themes.find((theme) => theme.id === state.themeId);
  }

  function currentNarrative() {
    return data.narratives[state.themeId];
  }

  function currentStage() {
    return currentNarrative().stages[state.stageIndex];
  }

  function currentChoice() {
    return currentNarrative().choices.find((choice) => choice.id === state.choiceId) || null;
  }

  function renderPulse() {
    const items = [
      {
        value: data.graphMeta.nodes,
        title: "Nodes",
        copy: "Concepts, technologies, roles, regulations, and organizations.",
      },
      {
        value: data.graphMeta.edges,
        title: "Edges",
        copy: "The graph is rich in causal and contradiction links.",
      },
      {
        value: `${data.graphMeta.topRelationships[1][1]}`,
        title: "Tension Edges",
        copy: "`creates_tension_with` is strong enough to drive narrative choices.",
      },
      {
        value: `${data.graphMeta.focusAreas.length}`,
        title: "Main Domains",
        copy: "Enough structure to guide the user without reducing the graph to one thesis.",
      },
    ];

    pulseEl.innerHTML = items
      .map(
        (item) => `
          <article class="pulse-card">
            <strong class="pulse-value">${item.value}</strong>
            <h3>${item.title}</h3>
            <p class="pulse-copy">${item.copy}</p>
          </article>
        `
      )
      .join("");
  }

  function renderThemes() {
    themesEl.innerHTML = data.themes
      .map((theme) => {
        const isActive = theme.id === state.themeId;
        return `
          <article class="theme-card ${isActive ? "active" : ""}" data-theme-id="${theme.id}">
            <div class="theme-meta">
              <span>${theme.focusArea}</span>
            </div>
            <h3>${theme.title}</h3>
            <p class="theme-hook">${theme.hook}</p>
          </article>
        `;
      })
      .join("");

    themesEl.querySelectorAll("[data-theme-id]").forEach((card) => {
      card.addEventListener("click", () => {
        state.themeId = card.dataset.themeId;
        state.stageIndex = 0;
        state.choiceId = null;
        render();
      });
    });
  }

  function renderStageRail() {
    railEl.innerHTML = currentNarrative().stages
      .map(
        (stage, index) => `
          <button class="stage-chip ${index === state.stageIndex ? "active" : ""}" data-stage-index="${index}">
            ${stage.label}
          </button>
        `
      )
      .join("");

    railEl.querySelectorAll("[data-stage-index]").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.stageIndex = Number(chip.dataset.stageIndex);
        if (state.stageIndex < currentNarrative().stages.length - 1) {
          state.choiceId = null;
        }
        render();
      });
    });
  }

  function renderStageCard() {
    const stage = currentStage();
    const spotlight = nodeById(stage.spotlightId);
    const nodes = stage.nodeIds.map(nodeById);

    stageCardEl.innerHTML = `
      <p class="eyebrow">${currentTheme().focusArea}</p>
      <h3 class="stage-title">${stage.title}</h3>
      <div class="spotlight">Spotlight: ${spotlight.name}</div>
      <p class="stage-body">${stage.body}</p>
      <div class="node-list">
        ${nodes
          .map(
            (node) => `
              <article class="node-card">
                <div class="node-head">
                  <strong class="node-name">${node.name}</strong>
                  <span class="node-type">${node.type}</span>
                </div>
                <p class="node-description">${node.description}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderDecisionPanel() {
    const theme = currentTheme();
    titleEl.textContent = theme.title;
    subtitleEl.textContent = theme.hook;
    if (state.stageIndex < currentNarrative().stages.length - 1) {
      decisionPanelEl.innerHTML = `
        <div class="decision-result">
          <h3>How the user is being guided</h3>
          <p class="decision-summary">
            The user cannot jump directly into the graph. First they absorb the
            pressure, then the operational shift, and only then are they asked to
            choose how they interpret the contradiction.
          </p>
          <button class="decision-card active" id="advance-stage">
            Continue to ${currentNarrative().stages[state.stageIndex + 1].label}
          </button>
        </div>
      `;
      document.getElementById("advance-stage").addEventListener("click", () => {
        state.stageIndex += 1;
        render();
      });
      return;
    }

    decisionPanelEl.innerHTML = `
      <div class="decision-grid">
        ${currentNarrative().choices
          .map(
            (choice) => `
              <article class="decision-card ${state.choiceId === choice.id ? "active" : ""}" data-choice-id="${choice.id}">
                <h3>${choice.label}</h3>
                <p class="decision-summary">${choice.summary}</p>
              </article>
            `
          )
          .join("")}
      </div>
      ${
        currentChoice()
          ? `
            <div class="decision-result">
              <p class="eyebrow">Consequence</p>
              <h3>${currentChoice().consequenceTitle}</h3>
              <p class="decision-summary">${currentChoice().consequenceBody}</p>
            </div>
          `
          : `
            <div class="decision-result">
              <h3>Force the interpretation</h3>
              <p class="decision-summary">
                This is the core mechanic. After seeing the contradiction, the user has
                to commit to a position before getting the next cluster of evidence.
              </p>
            </div>
          `
      }
    `;

    decisionPanelEl.querySelectorAll("[data-choice-id]").forEach((card) => {
      card.addEventListener("click", () => {
        state.choiceId = card.dataset.choiceId;
        render();
      });
    });
  }

  function gatherVisibleNodeIds() {
    const ids = new Set(currentStage().nodeIds);
    if (state.choiceId) {
      currentChoice().nodeIds.forEach((id) => ids.add(id));
    }
    return Array.from(ids);
  }

  function gatherVisibleEdges(nodeIds) {
    const nodeIdSet = new Set(nodeIds);
    return data.edges.filter(
      (edge) => nodeIdSet.has(edge.source) && nodeIdSet.has(edge.target)
    );
  }

  function renderEvidenceThread() {
    const visibleNodeIds = gatherVisibleNodeIds();
    const visibleEdges = gatherVisibleEdges(visibleNodeIds);

    evidenceThreadEl.innerHTML =
      visibleEdges.length > 0
        ? visibleEdges
            .map((edge) => {
              const source = nodeById(edge.source);
              const target = nodeById(edge.target);
              return `
                <article class="evidence-card">
                  <div class="evidence-card-header">
                    <span class="relationship-pill ${edge.relationship}">
                      ${relationshipLabels[edge.relationship] || edge.relationship}
                    </span>
                  </div>
                  <p class="evidence-link">
                    <strong>${source.name}</strong> -> <strong>${target.name}</strong>
                  </p>
                </article>
              `;
            })
            .join("")
        : `
          <article class="evidence-card">
            <p class="evidence-link">
              No explicit edge is being shown here yet. This part of the prototype is
              using node-level evidence only.
            </p>
          </article>
        `;

    evidenceNodesEl.innerHTML = visibleNodeIds
      .map(
        (nodeId) => `
          <article class="evidence-node">
            <strong class="evidence-node-name">${nodeById(nodeId).name}</strong>
            <span class="evidence-node-meta">
              ${nodeById(nodeId).type} · ${nodeById(nodeId).focusArea}
            </span>
            <p class="node-description">${nodeById(nodeId).description}</p>
          </article>
        `
      )
      .join("");
  }

  function render() {
    renderThemes();
    renderStageRail();
    renderStageCard();
    renderDecisionPanel();
    renderEvidenceThread();
  }

  renderPulse();
  render();
})();
