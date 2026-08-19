import type { CandidateTopic, Narrative, ResearchData, ReviewResult } from "./types.js";

/**
 * Deterministic fixtures used by MockLLMProvider when no API key is present
 * (structural dry runs) and by the test suite. The example topic is
 * intentionally generic.
 */

export function exampleCandidates(): CandidateTopic[] {
  return [
    {
      title: "HBM memory supply as the binding constraint on AI accelerators",
      slug: "hbm-supply-ai-accelerators",
      reason:
        "Multiple recent supplier statements indicate HBM capacity is sold out into next year while accelerator demand keeps rising.",
      trigger: "memory supplier quarterly earnings call",
      research_type: "NEW",
      source_count: 6,
      categories: ["semiconductors", "ai-infrastructure"],
      scores: {
        novelty: 4,
        timeliness: 5,
        structural_importance: 5,
        commercial_relevance: 4,
        investment_relevance: 4,
        data_availability: 4,
        bottleneck_potential: 5,
      },
      related_previous_topics: [],
    },
  ];
}

export function exampleQuestions() {
  return {
    primary:
      "Is high-bandwidth memory (HBM) becoming a structural bottleneck for AI accelerator production?",
    sub: [
      "Is demand for HBM growing faster than overall DRAM demand?",
      "How quickly can HBM supply expand, and what limits it?",
      "Can accelerator designs substitute away from HBM?",
      "Who holds pricing power in the HBM supply chain?",
      "What evidence would refute the bottleneck thesis?",
    ],
  };
}

export function exampleResearch(date: string): ResearchData {
  return {
    topic: {
      title: "HBM memory supply as the binding constraint on AI accelerators",
      slug: "hbm-supply-ai-accelerators",
      date,
      research_type: "NEW",
      categories: ["semiconductors", "ai-infrastructure"],
      score: 31,
      trigger: "memory supplier quarterly earnings call",
    },
    questions: exampleQuestions(),
    thesis:
      "HBM production capacity, constrained by TSV packaging yield and long equipment lead times, is the binding constraint on AI accelerator shipment growth over the next 12-24 months.",
    facts: [
      {
        statement:
          "A leading HBM supplier stated its HBM capacity is fully committed through next year.",
        type: "FACT",
        evidence_ids: ["ev-1"],
        confidence: "high",
      },
      {
        statement:
          "HBM bit demand is growing significantly faster than overall DRAM bit demand according to supplier guidance.",
        type: "FACT",
        evidence_ids: ["ev-2"],
        confidence: "medium",
      },
    ],
    inferences: [
      {
        statement:
          "If capacity is sold out while orders keep rising, HBM suppliers hold near-term pricing power over accelerator vendors.",
        type: "INFERENCE",
        evidence_ids: ["ev-1", "ev-2"],
        confidence: "medium",
      },
    ],
    unknowns: [
      "Actual TSV packaging yield rates per supplier (not publicly disclosed).",
      "Timing of next-generation stacked-memory alternatives reaching volume.",
    ],
    industry_chain: [
      {
        name: "DRAM wafer fabrication",
        role: "Upstream",
        major_players: ["Supplier A", "Supplier B", "Supplier C"],
        pricing_power: "Medium",
        supply_elasticity: "Low",
        substitutability: "Hard",
      },
      {
        name: "HBM stacking & TSV packaging",
        role: "Components",
        major_players: ["Supplier A", "Supplier B"],
        pricing_power: "High",
        supply_elasticity: "Low",
        substitutability: "Hard",
      },
      {
        name: "AI accelerator design",
        role: "Platform",
        major_players: ["Vendor X", "Vendor Y"],
        pricing_power: "High",
        supply_elasticity: "Medium",
        substitutability: "Medium",
      },
    ],
    bottlenecks: [
      {
        node: "HBM stacking & TSV packaging",
        demand_growth: "Extreme",
        supply_elasticity: "Low",
        expansion_time: "2-3 years",
        substitutability: "Hard",
        pricing_power: "High",
        market_attention: "High",
        profit_capture: "High",
        opportunity_score: 4,
        classification: "Structural Bottleneck",
        rationale:
          "Demand extreme, supply constrained by packaging equipment lead times, no near-term substitute at required bandwidth.",
      },
      {
        node: "AI accelerator design",
        demand_growth: "Extreme",
        supply_elasticity: "Medium",
        expansion_time: "1-2 years",
        substitutability: "Medium",
        pricing_power: "High",
        market_attention: "Extreme",
        profit_capture: "High",
        opportunity_score: 3,
        classification: "Growth Area",
        rationale: "Strong demand but supply and substitution are more elastic.",
      },
    ],
    companies: [
      {
        name: "Supplier A",
        business_model: "Memory manufacturer",
        revenue_model: "Component sales",
        cost_structure: null,
        gross_margin: null,
        operating_margin: null,
        growth_drivers: ["HBM mix shift"],
        customer_concentration: "High",
        moat: "Process technology and packaging yield",
        switching_costs: null,
        capital_intensity: "High",
        management_strategy: null,
        execution_risk: null,
      },
    ],
    metrics: [
      {
        name: "HBM revenue growth (YoY, supplier A)",
        value: "not disclosed precisely",
        unit: null,
        period: "latest quarter",
        growth: null,
        source_id: "ev-2",
      },
    ],
    competitors: [
      {
        name: "Next-gen stacked memory alternatives",
        kind: "indirect alternative",
        note: "Not at volume in the research window.",
      },
      {
        name: "Status quo (GDDR-based designs)",
        kind: "status quo",
        note: "Insufficient bandwidth for frontier training workloads.",
      },
    ],
    financials: [],
    valuation: { available: false, reason: "insufficient reliable market data" },
    catalysts: [
      "Next supplier earnings call with updated HBM capacity guidance",
      "Announcements of new packaging capacity expansion",
    ],
    bear_case: [
      {
        dimension: "Supply",
        argument:
          "All three major suppliers are adding capacity simultaneously; if AI capex slows even briefly, the bottleneck flips into oversupply as it has in every previous memory cycle.",
      },
      {
        dimension: "Technology",
        argument:
          "Architectural changes that reduce memory-bandwidth needs per FLOP would weaken HBM demand growth.",
      },
    ],
    kill_conditions: [
      {
        condition: "HBM lead times normalize",
        metric: "reported HBM order lead time",
        threshold: "< 3 months",
        time_window: "next 2 quarters",
        impact: "invalidate",
      },
      {
        condition: "HBM contract price declines",
        metric: "HBM contract ASP trend",
        threshold: "two consecutive quarters of decline",
        time_window: "next 12 months",
        impact: "weaken",
      },
    ],
    validation_events: [
      {
        event: "Supplier A quarterly earnings call",
        expected_window: "next quarter",
        supports_if: "capacity still sold out and ASPs firm",
        weakens_if: "guidance mentions softening HBM orders",
        source_to_monitor: "supplier investor relations page",
      },
      {
        event: "Major accelerator vendor product launch",
        expected_window: "next 2 quarters",
        supports_if: "launch volumes constrained by memory supply",
        weakens_if: "vendor confirms ample memory supply",
        source_to_monitor: "vendor newsroom",
      },
      {
        event: "Packaging equipment maker order backlog disclosure",
        expected_window: "next 2 quarters",
        supports_if: "backlog keeps growing",
        weakens_if: "orders flatten or decline",
        source_to_monitor: "equipment maker earnings release",
      },
    ],
    sources: [
      {
        id: "ev-1",
        claim: "HBM capacity fully committed through next year",
        source_url: "https://example.com/supplier-a-earnings-call",
        source_title: "Supplier A quarterly earnings call transcript",
        source_type: "primary",
        published_at: date,
        retrieved_at: date,
        quote_or_extract: "Our HBM capacity is essentially sold out for the coming year.",
        confidence: "high",
      },
      {
        id: "ev-2",
        claim: "HBM bit demand growing faster than DRAM overall",
        source_url: "https://example.com/supplier-a-ir-deck",
        source_title: "Supplier A investor presentation",
        source_type: "primary",
        published_at: date,
        retrieved_at: date,
        quote_or_extract: "HBM bit growth materially outpaces conventional DRAM.",
        confidence: "medium",
      },
      {
        id: "ev-3",
        claim: "Industry analysts see packaging as the limiting step",
        source_url: "https://example.com/reuters-hbm-packaging",
        source_title: "Reuters: packaging bottleneck in HBM supply",
        source_type: "secondary",
        published_at: date,
        retrieved_at: date,
        quote_or_extract: "TSV packaging capacity remains the limiting step.",
        confidence: "medium",
      },
    ],
    verdict: "VALIDATE",
    confidence: "medium",
  };
}

export function exampleNarrative(): Narrative {
  return {
    one_sentence_conclusion:
      "HBM packaging capacity currently qualifies as a structural bottleneck for AI accelerator supply, but memory-cycle history argues for validation before conviction.",
    executive_summary:
      "Supplier statements indicate HBM capacity is fully committed while demand keeps accelerating, and expansion is gated by multi-year packaging equipment lead times. The bottleneck framework qualifies HBM stacking/TSV packaging as a structural bottleneck: extreme demand growth, low supply elasticity, and hard substitutability. The main uncertainty is cyclical: simultaneous capacity additions by all suppliers could flip scarcity into oversupply if AI capital expenditure decelerates. The thesis therefore warrants tracking its validation events rather than immediate conviction.",
    core_mechanism:
      "AI training clusters require memory bandwidth that only stacked HBM currently delivers, tying every accelerator shipment to HBM availability. HBM output is limited not by DRAM wafers but by through-silicon-via stacking and advanced packaging, whose capacity additions take years due to equipment lead times and yield learning curves. When demand grows faster than this slow-moving supply and buyers cannot substitute, the constrained node captures pricing power — the defining mechanism of a structural bottleneck.",
    final_assessment:
      "Verdict VALIDATE: the topic merits continued research with defined validation events rather than immediate deep commitment. The structural-bottleneck qualification currently holds, but the memory industry's history of violent supply cycles means the kill conditions (lead-time normalization, ASP declines) must be monitored before treating the bottleneck as durable.",
  };
}

export function examplePassReview(): ReviewResult {
  return { status: "PASS", issues: [] };
}

export function exampleSearchResults() {
  return [
    {
      title: "Supplier A says HBM sold out through next year",
      url: "https://example.com/supplier-a-earnings-call",
      snippet: "Supplier A stated HBM capacity is fully committed.",
    },
  ];
}

export function fixturesForDate(date: string): Record<string, unknown> {
  return {
    candidates: exampleCandidates(),
    questions: exampleQuestions(),
    research: exampleResearch(date),
    narrative: exampleNarrative(),
    review: examplePassReview(),
    search: exampleSearchResults(),
  };
}
