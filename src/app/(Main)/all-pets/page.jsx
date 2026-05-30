import PetCard from "@/Components/AllPets/PetCard/PetCard";
import CategoryFilter from "@/Components/AllPets/SearchPet/CategoryFilter/CategoryFilter";
import SearchPet from "@/Components/AllPets/SearchPet/SearchPet";
import { getPets } from "@/lib/data";

const AllPetsPage = async () => {
  const pets = await getPets();

  return (
    <div className="max-w-330 mx-auto px-3 mt-5 mb-20">
      <div className="text-center">
        <h2 className="font-semibold text-3xl md:text-4xl text-center">
          Find Your Perfect Companion
        </h2>
        <p className="mt-2 max-w-130 mx-auto">
          Explore adorable pets waiting for a loving forever home and discover
          the perfect friend for your family.
        </p>
      </div>

      <div className="my-5 flex flex-col md:flex-row justify-between gap-5">
        <SearchPet></SearchPet>
        <CategoryFilter></CategoryFilter>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet}></PetCard>
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
