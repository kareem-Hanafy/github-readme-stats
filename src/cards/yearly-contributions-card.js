
import { Card } from "../common/Card.js";
import { FlexLayout } from "../common/utils.js";

export function renderYearlyContributionsCard(data) {
  const lines = data.map(d => {
    const barLength = Math.min(Math.floor(d.contributions / 150), 20);
    const bar = '█'.repeat(barLength);
    return `${d.year}: ${bar} ${d.contributions}`;
  });

  return new Card({
    title: "Yearly Contributions",
    width: 400,
    height: 50 + lines.length * 30,
    children: FlexLayout({
      items: lines.map((line, i) => `<text x="25" y="${35 + i * 30}" class="stat">${line}</text>`),
      gap: 25,
      direction: "column",
    }),
  }).render();
}
