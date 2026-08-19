// Inline-SVG chart renderer for report pages.
//
// Chart data lives in the repo as assets: assets/<date>-<slug>/charts.json,
// an array of ChartSpec. The daily agent may write these (assets/ is an
// allowed path); the site generator renders them as theme-aware SVG.
//
// Colors reference CSS custom properties defined in the site layout
// (--viz-series, --viz-ink, --viz-muted, --viz-grid, --viz-baseline), so one
// definition serves light and dark mode.

export interface ChartPoint {
  label: string;
  value: number;
}

export interface ChartSpec {
  title: string;
  title_zh?: string;
  type: "bar" | "line";
  unit?: string;
  source_id?: string;
  series: ChartPoint[];
}

const esc = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function niceTicks(max: number): number[] {
  const raw = max / 3;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw) ?? mag * 10;
  const ticks: number[] = [];
  for (let v = 0; v <= max * 1.001; v += step) ticks.push(v);
  if (ticks[ticks.length - 1] < max) ticks.push(ticks.length * step);
  return ticks;
}

const fmt = (v: number): string =>
  Math.abs(v) >= 10000 ? v.toLocaleString("en-US") : String(Math.round(v * 100) / 100);

/**
 * Render one chart as an accessible <figure> with inline SVG.
 * Single series only: no legend (the title names it), direct value labels on
 * bars (small n), hover tooltips via <title>, hairline grid, muted axis ink.
 */
export function renderChartSvg(chart: ChartSpec, lang: "en" | "zh"): string {
  const points = chart.series.filter((p) => Number.isFinite(p.value));
  if (!points.length) return "";
  const title = (lang === "zh" && chart.title_zh) || chart.title;

  const W = 560;
  const H = 230;
  const pad = { top: 14, right: 12, bottom: 26, left: 56 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const maxVal = Math.max(...points.map((p) => p.value), 0);
  const ticks = niceTicks(maxVal || 1);
  const top = ticks[ticks.length - 1];
  const x = (i: number) => pad.left + (plotW * (i + 0.5)) / points.length;
  const y = (v: number) => pad.top + plotH * (1 - v / top);

  const grid = ticks
    .map(
      (t) =>
        `<line x1="${pad.left}" y1="${y(t)}" x2="${W - pad.right}" y2="${y(t)}" stroke="var(--viz-grid)" stroke-width="1"/>` +
        `<text x="${pad.left - 8}" y="${y(t) + 4}" text-anchor="end" fill="var(--viz-muted)" font-size="11">${fmt(t)}</text>`,
    )
    .join("\n");

  const xLabels = points
    .map(
      (p, i) =>
        `<text x="${x(i)}" y="${H - 8}" text-anchor="middle" fill="var(--viz-muted)" font-size="11">${esc(p.label)}</text>`,
    )
    .join("\n");

  let marks = "";
  if (chart.type === "line") {
    const path = points.map((p, i) => `${i ? "L" : "M"}${x(i)},${y(p.value)}`).join(" ");
    marks =
      `<path d="${path}" fill="none" stroke="var(--viz-series)" stroke-width="2" stroke-linejoin="round"/>` +
      points
        .map(
          (p, i) =>
            `<g><circle cx="${x(i)}" cy="${y(p.value)}" r="4" fill="var(--viz-series)" stroke="var(--viz-surface)" stroke-width="2">` +
            `<title>${esc(p.label)}: ${fmt(p.value)}${chart.unit ? " " + esc(chart.unit) : ""}</title></circle>` +
            (i === 0 || i === points.length - 1 || p.value === maxVal
              ? `<text x="${x(i)}" y="${y(p.value) - 10}" text-anchor="middle" fill="var(--viz-ink)" font-size="11">${fmt(p.value)}</text>`
              : "") +
            `</g>`,
        )
        .join("\n");
  } else {
    // Thin bars, value-end rounded (4px), anchored flat on the baseline.
    const bw = Math.min(48, (plotW / points.length) * 0.55);
    marks = points
      .map((p, i) => {
        const bx = x(i) - bw / 2;
        const by = y(p.value);
        const h = Math.max(plotH + pad.top - by, 1);
        const r = Math.min(4, h);
        const d = `M${bx},${by + h} V${by + r} Q${bx},${by} ${bx + r},${by} H${bx + bw - r} Q${bx + bw},${by} ${bx + bw},${by + r} V${by + h} Z`;
        const label =
          points.length <= 5 || p.value === maxVal || i === points.length - 1
            ? `<text x="${x(i)}" y="${by - 6}" text-anchor="middle" fill="var(--viz-ink)" font-size="11">${fmt(p.value)}</text>`
            : "";
        return (
          `<g><path d="${d}" fill="var(--viz-series)">` +
          `<title>${esc(p.label)}: ${fmt(p.value)}${chart.unit ? " " + esc(chart.unit) : ""}</title></path>${label}</g>`
        );
      })
      .join("\n");
  }

  const unitLabel = chart.unit
    ? `<text x="${pad.left}" y="${pad.top - 3}" fill="var(--viz-muted)" font-size="11">${esc(chart.unit)}</text>`
    : "";
  const source = chart.source_id
    ? `<figcaption class="meta">${lang === "zh" ? "資料來源" : "Source"}: <code>${esc(chart.source_id)}</code></figcaption>`
    : "";

  return `<figure class="chart">
<h3>${esc(title)}</h3>
<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif">
${grid}
${unitLabel}
<line x1="${pad.left}" y1="${pad.top + plotH}" x2="${W - pad.right}" y2="${pad.top + plotH}" stroke="var(--viz-baseline)" stroke-width="1"/>
${marks}
${xLabels}
</svg>
${source}
</figure>`;
}
