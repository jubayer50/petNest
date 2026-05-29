export const getPets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`);
  const data = await res.json();
  return data;
};
