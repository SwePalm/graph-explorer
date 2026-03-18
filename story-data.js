window.STORY_DATA = {
  graphMeta: {
    title: "HCLS Knowledge Graph",
    nodes: 395,
    edges: 616,
    topRelationships: [
      ["enables", 230],
      ["creates_tension_with", 119],
      ["contradicts", 81],
      ["mitigates", 29],
    ],
    focusAreas: [
      ["Organizational Metamorphosis", 197],
      ["Market/Business Model Innovation", 95],
      ["Ecosystem Shock", 64],
      ["Societal & Public Impact", 22],
      ["Attunement & Trust Gap", 15],
    ],
  },
  themes: [
    {
      id: "collapse",
      title: "Administrative collapse opens the automation door",
      focusArea: "Organizational Metamorphosis",
      hook:
        "Did healthcare adopt agents because AI was impressive, or because operations were already breaking?",
      status: "playable",
      nodeIds: [
        "ClinicalAdminCollapse",
        "IntegratedDocumentProcessing",
        "AutonomousIntakeLoop",
        "DenialManagementAgent",
        "ResponsibilityTrustTriad",
      ],
    },
    {
      id: "orchestration",
      title: "Work shifts from staffing to orchestration",
      focusArea: "Organizational Metamorphosis",
      hook:
        "When agents do more of the work, human value moves upward into planning, judgment, and exception handling.",
      status: "preview",
      nodeIds: ["ChiefClinicalOrchestrator", "HumanPremium_HCLS", "SiliconWorkforceManagement"],
    },
    {
      id: "market",
      title: "Clinical intelligence becomes a market product",
      focusArea: "Market/Business Model Innovation",
      hook:
        "If diagnosis and navigation become programmable, incumbent advantage gets harder to defend.",
      status: "preview",
      nodeIds: ["SiliconDoctor", "GuardianBot", "OutcomeBasedPricing_OBP"],
    },
    {
      id: "ecosystem",
      title: "The ecosystem becomes agent-native",
      focusArea: "Ecosystem Shock",
      hook:
        "Trials, care, data, and commerce begin to negotiate through software agents rather than institutions alone.",
      status: "preview",
      nodeIds: ["DigitalHealthTwin_DHT", "InSilicoCRO", "AgentBrowsing_HealthWeb"],
    },
    {
      id: "trust",
      title: "Trust becomes the limiting factor",
      focusArea: "Attunement & Trust Gap",
      hook:
        "The model may perform better, yet legitimacy still depends on accountability, explainability, and human reassurance.",
      status: "preview",
      nodeIds: ["ResponsibilityTrustTriad", "HumanValidationRequirement", "BlackBoxAlienation"],
    },
  ],
  nodes: {
    ClinicalAdminCollapse: {
      id: "ClinicalAdminCollapse",
      name: "Clinical Admin Collapse",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "Failure of legacy, human-mediated administrative processes under regulatory complexity and workforce pressure, clearing the path for silicon workforce adoption at scale.",
    },
    IntegratedDocumentProcessing: {
      id: "IntegratedDocumentProcessing",
      name: "Integrated Document Processing (IDP)",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "Infrastructure replacing the manual document layer, where inbound paperwork becomes structured data routed into the EHR without human intervention.",
    },
    AutonomousIntakeLoop: {
      id: "AutonomousIntakeLoop",
      name: "Autonomous Intake Loop",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "Self-directed clinical onboarding with 81% appointment confirmation rates, unlimited concurrent call handling, and real-time insurance verification.",
    },
    DenialManagementAgent: {
      id: "DenialManagementAgent",
      name: "Denial Management Agent (RCM)",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "An agentic system that challenges and resubmits denied claims instantly, removing the reactive correction cycle from revenue teams.",
    },
    ManagerialVoid_HCLS: {
      id: "ManagerialVoid_HCLS",
      name: "Managerial Void (HCLS)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "The erosion of first-line office-management work as task assignment, prior-auth oversight, and schedule optimization migrate into agents.",
    },
    ResponsibilityTrustTriad: {
      id: "ResponsibilityTrustTriad",
      name: "Responsibility Trust Triad",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "The accountability matrix that distributes liability across the patient, the clinician, and the AI developer.",
    },
    PhysicianBurnoutCrisis: {
      id: "PhysicianBurnoutCrisis",
      name: "Physician Burnout Crisis",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "A >50% burnout rate in primary care by 2025, turning automation from an innovation option into an organizational survival strategy.",
    },
    CMSPriorAuthRule: {
      id: "CMSPriorAuthRule",
      name: "CMS Prior Authorization Rule",
      type: "Regulation",
      focusArea: "Organizational Metamorphosis",
      description:
        "A regulatory accelerant that compresses prior authorization timelines and pushes organizations toward machine-readable automation.",
    },
    AgenticGovernanceGap: {
      id: "AgenticGovernanceGap",
      name: "Agentic Governance Gap",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "Operational capabilities of autonomous agents outpace the organization’s ability to monitor, audit, and explain decision logic.",
    },
    HumanValidationRequirement: {
      id: "HumanValidationRequirement",
      name: "Human Validation Requirement",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "Strong demand for human verification even when AI can generate fast diagnostic or administrative outputs.",
    },
    SiliconWorkforceManagement: {
      id: "SiliconWorkforceManagement",
      name: "Silicon Workforce Management (HCLS)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "HR and governance frameworks adapted for digital labor: onboarding agents, tracking performance, and managing identities and lifecycle risk.",
    },
    HumanPremium_HCLS: {
      id: "HumanPremium_HCLS",
      name: "Human Premium (HCLS)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "A cluster of human skills that become more valuable as diagnostic and administrative tasks are commoditized by software.",
    },
    ChiefClinicalOrchestrator: {
      id: "ChiefClinicalOrchestrator",
      name: "Chief Clinical Orchestrator (CCO 2.0)",
      type: "Role",
      focusArea: "Organizational Metamorphosis",
      description:
        "An executive role managing the equilibrium between agent throughput, patient safety guardrails, and clinical attunement.",
    },
    SiliconDoctor: {
      id: "SiliconDoctor",
      name: "Silicon Doctor",
      type: "Technology",
      focusArea: "Market/Business Model Innovation",
      description:
        "Autonomous diagnostic AI capable of history-taking, reasoning, and treatment planning, pushing expertise toward software infrastructure.",
    },
    GuardianBot: {
      id: "GuardianBot",
      name: "Guardian Bot (Patient AI Proxy)",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "An autonomous patient proxy that handles both clinical protection and financial navigation on behalf of the user.",
    },
    OutcomeBasedPricing_OBP: {
      id: "OutcomeBasedPricing_OBP",
      name: "Outcome-Based Pharmaceutical Pricing (OBP)",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "Risk-sharing reimbursement where pharmaceutical price is linked to measured real-world clinical performance.",
    },
    DigitalHealthTwin_DHT: {
      id: "DigitalHealthTwin_DHT",
      name: "Digital Health Twin (DHT)",
      type: "Concept",
      focusArea: "Ecosystem Shock",
      description:
        "A high-fidelity virtual patient representation combining genomics, wearables, EHR data, and social context.",
    },
    InSilicoCRO: {
      id: "InSilicoCRO",
      name: "In-Silico CRO",
      type: "Organization",
      focusArea: "Ecosystem Shock",
      description:
        "A clinical-research model that virtualizes trials through synthetic patients and decentralized protocols.",
    },
    AgentBrowsing_HealthWeb: {
      id: "AgentBrowsing_HealthWeb",
      name: "Agentic Browsing (Health Web)",
      type: "Concept",
      focusArea: "Ecosystem Shock",
      description:
        "Agents traversing health information and transactions directly, reducing the need for traditional human navigation layers.",
    },
    BlackBoxAlienation: {
      id: "BlackBoxAlienation",
      name: "Black Box Alienation",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "A trust failure that appears when clinicians or patients cannot understand the rationale behind automated decisions.",
    },
  },
  edges: [
    {
      source: "IntegratedDocumentProcessing",
      target: "ClinicalAdminCollapse",
      relationship: "mitigates",
    },
    {
      source: "AutonomousIntakeLoop",
      target: "ClinicalAdminCollapse",
      relationship: "mitigates",
    },
    {
      source: "DenialManagementAgent",
      target: "ClinicalAdminCollapse",
      relationship: "mitigates",
    },
    {
      source: "CMSPriorAuthRule",
      target: "ClinicalAdminCollapse",
      relationship: "leads_to",
    },
    {
      source: "PhysicianBurnoutCrisis",
      target: "ClinicalAdminCollapse",
      relationship: "creates_tension_with",
    },
    {
      source: "ClinicalAdminCollapse",
      target: "ManagerialVoid_HCLS",
      relationship: "leads_to",
    },
    {
      source: "ClinicalAdminCollapse",
      target: "ResponsibilityTrustTriad",
      relationship: "contradicts",
    },
  ],
  narrative: {
    activeThemeId: "collapse",
    stages: [
      {
        id: "pressure",
        label: "Pressure",
        title: "The operating system is already cracking",
        body:
          "The graph frames automation as a response to breakdown. Administrative work in healthcare is under simultaneous pressure from regulation, staffing strain, and rising process complexity.",
        nodeIds: ["ClinicalAdminCollapse", "CMSPriorAuthRule", "PhysicianBurnoutCrisis"],
        spotlightId: "ClinicalAdminCollapse",
      },
      {
        id: "shift",
        label: "Shift",
        title: "Three agentic systems step in immediately",
        body:
          "The graph does not show abstract AI potential here. It shows concrete interventions that mitigate the pressure: document ingestion, intake orchestration, and denial recovery.",
        nodeIds: [
          "IntegratedDocumentProcessing",
          "AutonomousIntakeLoop",
          "DenialManagementAgent",
          "ClinicalAdminCollapse",
        ],
        spotlightId: "AutonomousIntakeLoop",
      },
      {
        id: "tension",
        label: "Tension",
        title: "Efficiency collides with accountability",
        body:
          "The same collapse that justifies automation also contradicts the Responsibility Trust Triad. Once more workflow is delegated to agents, liability and legitimacy get harder to assign.",
        nodeIds: [
          "ClinicalAdminCollapse",
          "ResponsibilityTrustTriad",
          "ManagerialVoid_HCLS",
        ],
        spotlightId: "ResponsibilityTrustTriad",
      },
    ],
    choices: [
      {
        id: "accelerate",
        label: "Scale automation now",
        summary:
          "Treat the collapse as proof that operational redesign cannot wait.",
        consequenceTitle: "Operational redesign becomes the next frontier",
        consequenceBody:
          "If the user chooses speed, the story branches toward digital labor systems: agent governance, workforce management, and the premium placed on uniquely human judgment.",
        nodeIds: [
          "AgenticGovernanceGap",
          "SiliconWorkforceManagement",
          "HumanPremium_HCLS",
          "ChiefClinicalOrchestrator",
        ],
      },
      {
        id: "slow",
        label: "Slow down until accountability is clear",
        summary:
          "Treat trust and explainability as the gating constraint.",
        consequenceTitle: "Trust architecture becomes the real product",
        consequenceBody:
          "If the user chooses restraint, the story branches toward validation requirements, governance gaps, and the social legitimacy needed for automation to stick.",
        nodeIds: [
          "ResponsibilityTrustTriad",
          "HumanValidationRequirement",
          "BlackBoxAlienation",
          "AgenticGovernanceGap",
        ],
      },
    ],
  },
};
