async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${
      //   preview
      //     ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
      //     : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      // }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(json.errors);
    console.log('error');
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function fetchAllChallenges() {
  console.log('fetchAllChallenges');
  const data = await fetchAPI(
    `
          query {
            challenges {
              id
              title
              flexItems {
                    ... on FlexItem {
                      id
                      color {
                        hex
                      }
                    }
                  }
              description
              solution {
                justifyContent
                alignItems
                flexDirection
                flexWrap
                gap
              }
            }
          }
                  `,
    {
      preview: false,
    }
  );
  console.log(data);
  return data.challenges;
}

export async function fetchChallengeById(id) {
  console.log('fetchSingleChallenge');
  console.log(id)
  const data = await fetchAPI(
    `
query getChallenge($id: ID!) {
  challenge(where: {
    id: $id
  }){
    id
    flexItems {
      ... on FlexItem {
        id
        color {
          hex
        }
      }
    }
    description
    boilerplate
    solution {
      justifyContent
      alignItems 
      flexDirection
      flexWrap
      gap
    }
    title
  }
}
`, {
      variables: {
        id
      }
    }
  );
  console.log(data);
  return data;
}
