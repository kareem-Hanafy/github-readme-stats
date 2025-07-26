
import { requestGraphQL } from '../common/request-graphql.js';

export const fetchYearlyContributions = async (username) => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear];
  const results = [];

  for (const year of years) {
    const from = `${year}-01-01T00:00:00Z`;
    const to = `${year}-12-31T23:59:59Z`;

    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection(from: "${from}", to: "${to}") {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const response = await requestGraphQL(query);
    results.push({
      year,
      contributions: response.data.user.contributionsCollection.contributionCalendar.totalContributions,
    });
  }

  return results;
};
