// get all pets data fetch
export const getPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`);
  const data = await res.json();
  return data;
};

// get single pet data fetch
export const getPetById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`);
  const data = await res.json();
  return data;
};
