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
        "Healthcare did not move toward agents just because the tools improved. The graph suggests it moved because the old operating model was already failing.",
    },
    {
      id: "orchestration",
      title: "Work shifts from staffing to orchestration",
      focusArea: "Organizational Metamorphosis",
      hook:
        "Once a digital workforce exists, the scarce capability is no longer only execution. It becomes task allocation, governance, and judgment over when humans must stay in the loop.",
    },
    {
      id: "market",
      title: "Clinical intelligence becomes a market product",
      focusArea: "Market/Business Model Innovation",
      hook:
        "Diagnosis, navigation, and negotiation begin to look less like premium expert services and more like programmable market infrastructure.",
    },
    {
      id: "ecosystem",
      title: "The ecosystem becomes agent-native",
      focusArea: "Ecosystem Shock",
      hook:
        "Care, research, and commerce stop behaving like separate systems once patient twins, synthetic cohorts, and browsing agents begin to transact across the same layer.",
    },
    {
      id: "trust",
      title: "Trust becomes the limiting factor",
      focusArea: "Attunement & Trust Gap",
      hook:
        "The graph keeps pointing to the same constraint: performance alone does not settle adoption. Accountability, legibility, and reassurance still shape what can scale.",
    },
  ],
  nodes: {
    ClinicalAdminCollapse: {
      name: "Clinical Admin Collapse",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "Failure of legacy, human-mediated administrative processes under regulatory complexity and workforce pressure, clearing the path for silicon workforce adoption at scale.",
    },
    IntegratedDocumentProcessing: {
      name: "Integrated Document Processing (IDP)",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "Infrastructure replacing the manual document layer, where inbound paperwork becomes structured data routed into the EHR without human intervention.",
    },
    AutonomousIntakeLoop: {
      name: "Autonomous Intake Loop",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "Self-directed clinical onboarding with 81% appointment confirmation rates, unlimited concurrent call handling, and real-time insurance verification.",
    },
    DenialManagementAgent: {
      name: "Denial Management Agent (RCM)",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "An agentic system that challenges and resubmits denied claims instantly, removing the reactive correction cycle from revenue teams.",
    },
    ManagerialVoid_HCLS: {
      name: "Managerial Void (HCLS)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "The erosion of first-line office-management work as task assignment, prior-auth oversight, and schedule optimization migrate into agents.",
    },
    ResponsibilityTrustTriad: {
      name: "Responsibility Trust Triad",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "The accountability matrix that distributes liability across the patient, the clinician, and the AI developer.",
    },
    PhysicianBurnoutCrisis: {
      name: "Physician Burnout Crisis",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "A >50% burnout rate in primary care by 2025, turning automation from an innovation option into an organizational survival strategy.",
    },
    CMSPriorAuthRule: {
      name: "CMS Prior Authorization Rule",
      type: "Regulation",
      focusArea: "Organizational Metamorphosis",
      description:
        "A regulatory accelerant that compresses prior authorization timelines and pushes organizations toward machine-readable automation.",
    },
    AgenticGovernanceGap: {
      name: "Agentic Governance Gap",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "Operational capabilities of autonomous agents outpace the organization’s ability to monitor, audit, and explain decision logic.",
    },
    HumanValidationRequirement: {
      name: "Human Validation Requirement",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "Strong demand for human verification even when AI can generate fast diagnostic or administrative outputs.",
    },
    SiliconWorkforceManagement: {
      name: "Silicon Workforce Management (HCLS)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "HR and governance frameworks adapted for digital labor: onboarding agents, tracking performance, and managing identities and lifecycle risk.",
    },
    HumanPremium_HCLS: {
      name: "Human Premium (HCLS)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "A cluster of human skills that become more valuable as diagnostic and administrative tasks are commoditized by software.",
    },
    ChiefClinicalOrchestrator: {
      name: "Chief Clinical Orchestrator (CCO 2.0)",
      type: "Role",
      focusArea: "Organizational Metamorphosis",
      description:
        "An executive role managing the equilibrium between agent throughput, patient safety guardrails, and clinical attunement.",
    },
    WorkAffinity_Taxonomy: {
      name: "Work Affinity Taxonomy",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "A framework categorizing tasks from augmentation to autonomy, determining which work belongs with humans versus silicon agents.",
    },
    AgenticCommandCenter: {
      name: "Agentic Command Center (Healthcare)",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "A unified control plane sequencing work between humans, agents, and devices across the care operation.",
    },
    AgentThroughput_HCLS: {
      name: "Agent Throughput (Clinical KPI)",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "A measure of the volume and efficiency delivered by silicon labor in healthcare workflows.",
    },
    GovernanceAsCode_HCLS: {
      name: "Governance-as-Code (HCLS)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "Compliance guardrails embedded directly into agent code, with policy engines, decision traces, and rollback plans traveling with the system.",
    },
    ClinicalAttunement: {
      name: "Clinical Attunement",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "The human relational process of continuously adjusting to patient needs, treated as a prerequisite for trust and healing.",
    },
    RiskBasedMonitoring_Agentic: {
      name: "Persistent Agentic Risk-Based Monitoring",
      type: "Technology",
      focusArea: "Ecosystem Shock",
      description:
        "Always-on AI monitoring that replaces episodic review with continuous trial and care surveillance.",
    },
    SiliconDoctor: {
      name: "Silicon Doctor",
      type: "Technology",
      focusArea: "Market/Business Model Innovation",
      description:
        "Autonomous diagnostic AI capable of history-taking, reasoning, and treatment planning, pushing expertise toward software infrastructure.",
    },
    GuardianBot: {
      name: "Guardian Bot (Patient AI Proxy)",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "An autonomous patient proxy that handles both clinical protection and financial navigation on behalf of the user.",
    },
    OutcomeBasedPricing_OBP: {
      name: "Outcome-Based Pharmaceutical Pricing (OBP)",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "Risk-sharing reimbursement where pharmaceutical price is linked to measured real-world clinical performance.",
    },
    DemocratizationOfExpertise: {
      name: "Democratization of Expertise",
      type: "Concept",
      focusArea: "Societal & Public Impact",
      description:
        "The distribution of specialist knowledge via AI to populations suffering from physician shortages.",
    },
    MoravecsParadox_Empathy: {
      name: "Moravec's Paradox (Empathy Deficit)",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "High-level reasoning is computationally easy for AI, but nuanced empathy and embodied social interaction remain difficult.",
    },
    AIBiasMitigationTrust: {
      name: "AI Bias Mitigation Trust",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "A belief among many patients that standardized algorithms may reduce the subjective prejudices of human-led care.",
    },
    MultiAgentNegotiation: {
      name: "Multi-Agent Pharmaceutical Negotiation",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "Autonomous systems negotiating drug prices in real time through specialized data, interoperability, and decision-support agents.",
    },
    PricingParadox_HCLS: {
      name: "Pricing Paradox (Pharma)",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "A structural imbalance where low-cost generics dominate volume while branded drugs dominate total spend.",
    },
    AgentPaymentsProtocol_AP2_HCLS: {
      name: "Agent Payments Protocol (AP2 / HCLS)",
      type: "Concept",
      focusArea: "Ecosystem Shock",
      description:
        "Credential-based architecture enabling autonomous healthcare transactions across intent, cart, and payment flows.",
    },
    DataMoat_Orchestration: {
      name: "Orchestration Data Moat",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "Competitive advantage accruing to whoever controls the orchestrator layer and the feedback loop from agent activity.",
    },
    AIDivide_Pharma: {
      name: "AI Divide (Pharma Incumbency Risk)",
      type: "Concept",
      focusArea: "Market/Business Model Innovation",
      description:
        "The risk that incumbents absorb agentic AI costs more easily, widening the moat against smaller challengers.",
    },
    DigitalHealthTwin_DHT: {
      name: "Digital Health Twin (DHT)",
      type: "Concept",
      focusArea: "Ecosystem Shock",
      description:
        "A high-fidelity virtual patient representation combining genomics, wearables, EHR data, and social context.",
    },
    InSilicoCRO: {
      name: "In-Silico CRO",
      type: "Organization",
      focusArea: "Ecosystem Shock",
      description:
        "A clinical-research model that virtualizes trials through synthetic patients and decentralized protocols.",
    },
    AgentBrowsing_HealthWeb: {
      name: "Agentic Browsing (Health Web)",
      type: "Concept",
      focusArea: "Ecosystem Shock",
      description:
        "Agents traversing trial and health pathways autonomously, matching patients and executing enrollment against live interoperability layers.",
    },
    PersonalHealthAgent_PHA: {
      name: "Personal Health Agent (PHA)",
      type: "Technology",
      focusArea: "Ecosystem Shock",
      description:
        "A multi-agent digital care team acting continuously on digital health twin insights.",
    },
    SyntheticPatientAgents: {
      name: "Synthetic Patient Agents",
      type: "Technology",
      focusArea: "Ecosystem Shock",
      description:
        "AI-generated patient models used to simulate treatment response and build computational cohorts.",
    },
    HumanSiliconResonance: {
      name: "Human-Silicon Resonance",
      type: "Concept",
      focusArea: "Cross-Cutting",
      description:
        "The synchronized state where transparent digital intelligence and human health management operate as one coordinated system.",
    },
    KnowledgeGraph_AgentReasoning: {
      name: "Knowledge Graphs (Agent Reasoning Infrastructure)",
      type: "Technology",
      focusArea: "Ecosystem Shock",
      description:
        "Reasoning infrastructure that allows agents to navigate dependencies and make decisions across complex enterprise contexts.",
    },
    SociotechnicalShift_HCLS: {
      name: "Sociotechnical Shift (Agentic Clinical AI)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "The transition to agentic AI as an institutional redesign challenge, not just a software rollout.",
    },
    BlackBoxAlienation: {
      name: "Black Box Alienation",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "A trust failure that appears when clinicians or patients cannot understand the rationale behind automated decisions.",
    },
    ExplainableDecisionAuditing: {
      name: "Explainable Decision Auditing",
      type: "Concept",
      focusArea: "Attunement & Trust Gap",
      description:
        "A technical requirement to make algorithmic logic transparent enough to alleviate insecurity around clinical black boxes.",
    },
    WorkflowScopeAutonomy: {
      name: "Workflow Scope Autonomy",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "The move from one-step assistance to fully independent planning of task sequences within guardrails.",
    },
    LighthousePerspective: {
      name: "Lighthouse Perspective",
      type: "Concept",
      focusArea: "Cross-Cutting",
      description:
        "A strategic framing that keeps the human experience visible while systems shift from clerical processing to person-centered care.",
    },
    ZeroTrust_DigitalIdentity: {
      name: "Zero-Trust Identity (Silicon Workforce)",
      type: "Technology",
      focusArea: "Organizational Metamorphosis",
      description:
        "Behavior-aware access control for both human and non-human workers, treating every silicon worker like an onboarded and governed colleague.",
    },
    InterpretationAge: {
      name: "Interpretation Age (Healthcare Labour)",
      type: "Concept",
      focusArea: "Organizational Metamorphosis",
      description:
        "A labor transition where human value shifts from speed and scale toward judgment, taste, and strategic choice.",
    },
  },
  edges: [
    { source: "IntegratedDocumentProcessing", target: "ClinicalAdminCollapse", relationship: "mitigates" },
    { source: "AutonomousIntakeLoop", target: "ClinicalAdminCollapse", relationship: "mitigates" },
    { source: "DenialManagementAgent", target: "ClinicalAdminCollapse", relationship: "mitigates" },
    { source: "CMSPriorAuthRule", target: "ClinicalAdminCollapse", relationship: "leads_to" },
    { source: "PhysicianBurnoutCrisis", target: "ClinicalAdminCollapse", relationship: "creates_tension_with" },
    { source: "ClinicalAdminCollapse", target: "ManagerialVoid_HCLS", relationship: "leads_to" },
    { source: "ClinicalAdminCollapse", target: "ResponsibilityTrustTriad", relationship: "contradicts" },

    { source: "AgenticCommandCenter", target: "ChiefClinicalOrchestrator", relationship: "enables" },
    { source: "WorkAffinity_Taxonomy", target: "ChiefClinicalOrchestrator", relationship: "enables" },
    { source: "ChiefClinicalOrchestrator", target: "AgentThroughput_HCLS", relationship: "measures" },
    { source: "ChiefClinicalOrchestrator", target: "DemocratizationOfExpertise", relationship: "creates_tension_with" },
    { source: "SiliconWorkforceManagement", target: "GovernanceAsCode_HCLS", relationship: "requires" },
    { source: "HumanPremium_HCLS", target: "RiskBasedMonitoring_Agentic", relationship: "creates_tension_with" },

    { source: "SiliconDoctor", target: "DemocratizationOfExpertise", relationship: "enables" },
    { source: "SiliconDoctor", target: "ResponsibilityTrustTriad", relationship: "is_subject_to" },
    { source: "HumanValidationRequirement", target: "SiliconDoctor", relationship: "creates_tension_with" },
    { source: "PersonalHealthAgent_PHA", target: "GuardianBot", relationship: "enables" },
    { source: "MultiAgentNegotiation", target: "OutcomeBasedPricing_OBP", relationship: "enables" },
    { source: "OutcomeBasedPricing_OBP", target: "PricingParadox_HCLS", relationship: "mitigates" },
    { source: "AIDivide_Pharma", target: "OutcomeBasedPricing_OBP", relationship: "creates_tension_with" },

    { source: "DigitalHealthTwin_DHT", target: "PersonalHealthAgent_PHA", relationship: "enables" },
    { source: "InSilicoCRO", target: "DigitalHealthTwin_DHT", relationship: "requires" },
    { source: "InSilicoCRO", target: "SyntheticPatientAgents", relationship: "requires" },
    { source: "KnowledgeGraph_AgentReasoning", target: "AgentBrowsing_HealthWeb", relationship: "creates_tension_with" },
    { source: "AgentBrowsing_HealthWeb", target: "SociotechnicalShift_HCLS", relationship: "creates_tension_with" },
    { source: "DigitalHealthTwin_DHT", target: "HumanSiliconResonance", relationship: "part_of" },

    { source: "ExplainableDecisionAuditing", target: "ResponsibilityTrustTriad", relationship: "mitigates" },
    { source: "WorkflowScopeAutonomy", target: "BlackBoxAlienation", relationship: "creates_tension_with" },
    { source: "BlackBoxAlienation", target: "InterpretationAge", relationship: "enables" },
    { source: "AIBiasMitigationTrust", target: "LighthousePerspective", relationship: "enables" },
    { source: "ResponsibilityTrustTriad", target: "ZeroTrust_DigitalIdentity", relationship: "enables" },
  ],
  narratives: {
    collapse: {
      stages: [
        {
          id: "pressure",
          label: "Pressure",
          title: "The operating system is already cracking",
          body:
            "The graph frames automation as a response to breakdown. Administrative work is under simultaneous pressure from regulation, staffing strain, and rising process complexity.",
          nodeIds: ["ClinicalAdminCollapse", "CMSPriorAuthRule", "PhysicianBurnoutCrisis"],
          spotlightId: "ClinicalAdminCollapse",
        },
        {
          id: "shift",
          label: "Shift",
          title: "Three agentic systems step in immediately",
          body:
            "The graph does not show abstract AI potential here. It shows direct interventions that mitigate the pressure: document ingestion, intake orchestration, and denial recovery.",
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
          nodeIds: ["ClinicalAdminCollapse", "ResponsibilityTrustTriad", "ManagerialVoid_HCLS"],
          spotlightId: "ResponsibilityTrustTriad",
        },
      ],
      choices: [
        {
          id: "accelerate",
          label: "Scale automation now",
          summary: "Treat the collapse as proof that operational redesign cannot wait.",
          consequenceTitle: "Operational redesign becomes the next frontier",
          consequenceBody:
            "Choosing speed pushes the story into workforce redesign: governance gaps, digital labor management, and new premiums on human judgment.",
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
          summary: "Treat trust and explainability as the gating constraint.",
          consequenceTitle: "Trust architecture becomes the real product",
          consequenceBody:
            "Choosing restraint shifts the story toward human validation, governance design, and the social legitimacy needed for automation to stick.",
          nodeIds: [
            "ResponsibilityTrustTriad",
            "HumanValidationRequirement",
            "BlackBoxAlienation",
            "AgenticGovernanceGap",
          ],
        },
      ],
    },
    orchestration: {
      stages: [
        {
          id: "pressure",
          label: "Pressure",
          title: "Digital labor creates a management problem of its own",
          body:
            "Once silicon workers enter the operating model, someone has to allocate work, manage permissions, and keep the system auditable. The graph treats that as a new management layer, not a footnote.",
          nodeIds: ["SiliconWorkforceManagement", "GovernanceAsCode_HCLS", "ChiefClinicalOrchestrator"],
          spotlightId: "SiliconWorkforceManagement",
        },
        {
          id: "shift",
          label: "Shift",
          title: "Orchestration becomes a formal role and discipline",
          body:
            "The graph supports a new control architecture: a command center, a taxonomy for deciding what work belongs where, and a KPI for silicon throughput under human supervision.",
          nodeIds: [
            "AgenticCommandCenter",
            "WorkAffinity_Taxonomy",
            "ChiefClinicalOrchestrator",
            "AgentThroughput_HCLS",
          ],
          spotlightId: "ChiefClinicalOrchestrator",
        },
        {
          id: "tension",
          label: "Tension",
          title: "Optimization raises the price of human judgment",
          body:
            "Better orchestration improves throughput, but the graph also shows tension: democratized expertise can weaken traditional authority, while human capabilities become scarcer and more premium.",
          nodeIds: [
            "ChiefClinicalOrchestrator",
            "DemocratizationOfExpertise",
            "HumanPremium_HCLS",
            "RiskBasedMonitoring_Agentic",
          ],
          spotlightId: "HumanPremium_HCLS",
        },
      ],
      choices: [
        {
          id: "centralize",
          label: "Centralize orchestration",
          summary: "Build strong control layers and treat digital labor as an operating system.",
          consequenceTitle: "The organization turns into a governed control plane",
          consequenceBody:
            "This path emphasizes policy, identity, and workflow allocation. Human value remains, but inside a more tightly managed orchestration layer.",
          nodeIds: [
            "SiliconWorkforceManagement",
            "GovernanceAsCode_HCLS",
            "ZeroTrust_DigitalIdentity",
            "ChiefClinicalOrchestrator",
          ],
        },
        {
          id: "protect",
          label: "Protect human judgment",
          summary: "Keep attunement and high-stakes interpretation visibly human.",
          consequenceTitle: "Human work becomes narrower but more valuable",
          consequenceBody:
            "This path treats empathy, exception handling, and relational judgment as the zone that should not be flattened into throughput logic.",
          nodeIds: [
            "HumanPremium_HCLS",
            "ClinicalAttunement",
            "ChiefClinicalOrchestrator",
            "InterpretationAge",
          ],
        },
      ],
    },
    market: {
      stages: [
        {
          id: "pressure",
          label: "Pressure",
          title: "Expertise starts to detach from the expert",
          body:
            "The graph suggests that diagnosis and decision support are becoming distributable functions. Once expertise can travel through software, incumbent value capture starts to wobble.",
          nodeIds: ["SiliconDoctor", "DemocratizationOfExpertise", "ResponsibilityTrustTriad"],
          spotlightId: "SiliconDoctor",
        },
        {
          id: "shift",
          label: "Shift",
          title: "Patient and pharma interactions become machine-negotiated",
          body:
            "The graph extends beyond diagnosis: personal health agents power patient proxies, and multi-agent systems begin to negotiate pricing and value in real time.",
          nodeIds: [
            "PersonalHealthAgent_PHA",
            "GuardianBot",
            "MultiAgentNegotiation",
            "OutcomeBasedPricing_OBP",
          ],
          spotlightId: "GuardianBot",
        },
        {
          id: "tension",
          label: "Tension",
          title: "Scale creates value, but also new moats and new doubts",
          body:
            "Market automation can mitigate old pricing paradoxes, yet the graph also points to two constraints: people still want validation, and incumbents may capture the new AI economics faster than challengers.",
          nodeIds: [
            "HumanValidationRequirement",
            "SiliconDoctor",
            "AIDivide_Pharma",
            "OutcomeBasedPricing_OBP",
          ],
          spotlightId: "AIDivide_Pharma",
        },
      ],
      choices: [
        {
          id: "platform",
          label: "Back scale and platform logic",
          summary: "Assume the winning move is to own orchestration, payment, and the agent feedback loop.",
          consequenceTitle: "The market tilts toward orchestrators",
          consequenceBody:
            "This path favors whoever controls transaction rails, negotiation systems, and the data flywheel generated by autonomous interactions.",
          nodeIds: [
            "AgentPaymentsProtocol_AP2_HCLS",
            "OutcomeBasedPricing_OBP",
            "MultiAgentNegotiation",
            "DataMoat_Orchestration",
          ],
        },
        {
          id: "assurance",
          label: "Back mediated trust",
          summary: "Assume adoption still depends on human reassurance and visible safeguards.",
          consequenceTitle: "Commercial scale depends on trust wrappers",
          consequenceBody:
            "This path suggests the market value may sit less in raw intelligence and more in validation layers, patient confidence, and institutional acceptance.",
          nodeIds: [
            "HumanValidationRequirement",
            "ResponsibilityTrustTriad",
            "AIBiasMitigationTrust",
            "SiliconDoctor",
          ],
        },
      ],
    },
    ecosystem: {
      stages: [
        {
          id: "pressure",
          label: "Pressure",
          title: "The patient becomes a programmable data structure",
          body:
            "The graph’s ecosystem story begins with the digital health twin: a data substrate rich enough to support continuous care agents, simulated cohorts, and new transaction layers.",
          nodeIds: ["DigitalHealthTwin_DHT", "PersonalHealthAgent_PHA", "HumanSiliconResonance"],
          spotlightId: "DigitalHealthTwin_DHT",
        },
        {
          id: "shift",
          label: "Shift",
          title: "Research and care start running on the same machinery",
          body:
            "In-silico research models require both digital twins and synthetic patients. The graph implies that trial infrastructure, care operations, and patient agents are converging on shared building blocks.",
          nodeIds: [
            "InSilicoCRO",
            "DigitalHealthTwin_DHT",
            "SyntheticPatientAgents",
            "PersonalHealthAgent_PHA",
          ],
          spotlightId: "InSilicoCRO",
        },
        {
          id: "tension",
          label: "Tension",
          title: "Open agentic flow still collides with institutional redesign",
          body:
            "Browsing and transacting agents promise fluid movement across the ecosystem, but the graph warns that reasoning infrastructure and institutional redesign become prerequisites rather than optional enhancements.",
          nodeIds: [
            "AgentBrowsing_HealthWeb",
            "KnowledgeGraph_AgentReasoning",
            "SociotechnicalShift_HCLS",
            "AgentPaymentsProtocol_AP2_HCLS",
          ],
          spotlightId: "SociotechnicalShift_HCLS",
        },
      ],
      choices: [
        {
          id: "open",
          label: "Open the agent web",
          summary: "Favor interoperable agent commerce and continuous patient-side delegation.",
          consequenceTitle: "The ecosystem becomes more fluid and less institution-bound",
          consequenceBody:
            "This path amplifies patient-side agency and cross-organization transactions, with protocols and digital twins doing much of the coordination work.",
          nodeIds: [
            "DigitalHealthTwin_DHT",
            "PersonalHealthAgent_PHA",
            "AgentPaymentsProtocol_AP2_HCLS",
            "HumanSiliconResonance",
          ],
        },
        {
          id: "control",
          label: "Keep strong institutional control",
          summary: "Assume open agentic flow needs heavier reasoning infrastructure and redesign before it can be trusted.",
          consequenceTitle: "Infrastructure control becomes the chokepoint",
          consequenceBody:
            "This path emphasizes enterprise reasoning layers, supervised browsing, and organizational redesign as the real gates on ecosystem change.",
          nodeIds: [
            "KnowledgeGraph_AgentReasoning",
            "AgentBrowsing_HealthWeb",
            "SociotechnicalShift_HCLS",
            "InSilicoCRO",
          ],
        },
      ],
    },
    trust: {
      stages: [
        {
          id: "pressure",
          label: "Pressure",
          title: "Adoption breaks when accountability becomes blurry",
          body:
            "The graph’s trust layer is not abstract sentiment. It is a concrete collision between liability, human reassurance, and the opacity of automated judgment.",
          nodeIds: [
            "ResponsibilityTrustTriad",
            "HumanValidationRequirement",
            "BlackBoxAlienation",
          ],
          spotlightId: "ResponsibilityTrustTriad",
        },
        {
          id: "shift",
          label: "Shift",
          title: "Trust can be engineered, not just hoped for",
          body:
            "The graph includes mechanisms that actively shape legitimacy: explainable auditing reduces accountability anxiety, and some patients trust algorithms precisely because they may reduce human bias.",
          nodeIds: [
            "ExplainableDecisionAuditing",
            "ResponsibilityTrustTriad",
            "AIBiasMitigationTrust",
            "LighthousePerspective",
          ],
          spotlightId: "ExplainableDecisionAuditing",
        },
        {
          id: "tension",
          label: "Tension",
          title: "More autonomy increases the need for interpretation",
          body:
            "As workflow autonomy expands, black-box alienation intensifies. The graph suggests that more machine independence can actually raise the value of human interpretation rather than eliminate it.",
          nodeIds: [
            "WorkflowScopeAutonomy",
            "BlackBoxAlienation",
            "InterpretationAge",
            "HumanValidationRequirement",
          ],
          spotlightId: "InterpretationAge",
        },
      ],
      choices: [
        {
          id: "engineer",
          label: "Engineer trust into the system",
          summary: "Treat trust as a design problem to be solved with identity, auditability, and human-centered framing.",
          consequenceTitle: "Trust becomes an explicit architecture layer",
          consequenceBody:
            "This path assumes legitimacy can be built by making systems inspectable, governable, and visibly aligned with human experience.",
          nodeIds: [
            "ExplainableDecisionAuditing",
            "ZeroTrust_DigitalIdentity",
            "ResponsibilityTrustTriad",
            "LighthousePerspective",
          ],
        },
        {
          id: "backstop",
          label: "Keep humans as the formal backstop",
          summary: "Treat human validation and interpretation as the non-negotiable guardrail.",
          consequenceTitle: "Trust is preserved by narrowing autonomy",
          consequenceBody:
            "This path keeps machine performance bounded by visible human oversight, preserving reassurance even if it limits the speed of automation.",
          nodeIds: [
            "HumanValidationRequirement",
            "InterpretationAge",
            "BlackBoxAlienation",
            "AIBiasMitigationTrust",
          ],
        },
      ],
    },
  },
  activeThemeId: "collapse",
};
