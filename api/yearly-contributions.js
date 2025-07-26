
import { renderYearlyContributionsCard } from '../src/cards/yearly-contributions-card.js';
import { fetchYearlyContributions } from '../src/fetchers/yearly-contributions-fetcher.js';

export default async (req, res) => {
  const { username } = req.query;
  const contributions = await fetchYearlyContributions(username);
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(renderYearlyContributionsCard(contributions));
};
