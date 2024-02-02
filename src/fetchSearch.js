const fetchSearch = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1];
  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`
  );

  if (!response.ok)
    throw new Error(`fetchPets not ok: ${animal}, ${location}, ${breed}`);

  const responseJSON = response.json();

  return responseJSON;
};

export default fetchSearch;
