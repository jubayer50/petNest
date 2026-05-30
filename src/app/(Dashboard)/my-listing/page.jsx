import MyListingPetCard from "@/Components/Dashboard/MyListingPage/MyListingPetCard";
import { auth } from "@/lib/auth";
import { getPets } from "@/lib/data";
import { headers } from "next/headers";

const MyListingPage = async () => {
  const pets = await getPets();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const myTotalPets = pets.filter((pet) => pet.user_id === user.id);
  const totalAvailablePets = pets.filter((pet) => pet.status === "Available");
  const totalPendingPets = pets.filter((pet) => pet.status === "Pending");
  const totalAdoptedPets = pets.filter((pet) => pet.status === "Adopted");

  return (
    <div className="max-w-330 mx-auto px-3 py-8">
      <div>
        <h2 className="font-bold text-2xl md:text-3xl">
          <span className="text-[#ED8262]">My </span>Listing
        </h2>
        <p className="mt-1.5">
          Manage your pet listings, track adoption requests, and update pet
          information from your personal dashboard.
        </p>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          <div className="text-center bg-white rounded-md p-5 text-black space-y-1 hover:shadow-sm transition-all duration-300">
            <h4 className="text-lg md:text-xl font-bold">Total Listings</h4>
            <p className="text-lg text-[#ED8262] font-bold">
              {myTotalPets.length}
            </p>
          </div>

          <div className="text-center bg-white rounded-md p-5 text-black space-y-1 hover:shadow-sm transition-all duration-300">
            <h4 className="text-lg md:text-xl font-bold">Total Available</h4>
            <p className="text-lg text-[#ED8262] font-bold">
              {totalAvailablePets.length}
            </p>
          </div>

          <div className="text-center bg-white rounded-md p-5 text-black space-y-1 hover:shadow-sm transition-all duration-300">
            <h4 className="text-lg md:text-xl font-bold">Total Pending</h4>
            <p className="text-lg text-[#ED8262] font-bold">
              {totalPendingPets.length}
            </p>
          </div>

          <div className="text-center bg-white rounded-md p-5 text-black space-y-1 hover:shadow-sm transition-all duration-300">
            <h4 className="text-lg md:text-xl font-bold">Total Adopted</h4>
            <p className="text-lg text-[#ED8262] font-bold">
              {totalAdoptedPets.length}
            </p>
          </div>
        </div>

        <div className="my-6 space-y-4">
          {myTotalPets.map((myTotalPet) => (
            <MyListingPetCard
              key={myTotalPet._id}
              pet={myTotalPet}
            ></MyListingPetCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyListingPage;
