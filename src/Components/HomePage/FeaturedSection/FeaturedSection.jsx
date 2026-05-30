import PetCard from "@/Components/AllPets/PetCard/PetCard";
import { featuredPetsData } from "@/lib/data";

const FeaturedSection = async () => {
  const featuredPets = await featuredPetsData();

  return (
    <div className="max-w-330 my-26 mx-auto px-3">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Companions</h2>
        <p className="mt-1.5 max-w-130 mx-auto">
          Meet some of our adorable pets looking for a loving forever home and
          find the perfect companion for your family.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredPets.map((featurePet) => (
          <PetCard key={featurePet._id} pet={featurePet}></PetCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
