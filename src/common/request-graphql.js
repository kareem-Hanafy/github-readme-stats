
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export const requestGraphQL = async (query) => {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: \`Bearer \${process.env.GITHUB_TOKEN}\`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  return res.json();
};
