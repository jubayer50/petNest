import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PetCard = ({ pet }) => {
  const {
    _id,
    pet_name,
    pet_description,
    species,
    adoption_fee,
    pet_image,
    status,
  } = pet;
  return (
    <div className="rounded-md overflow-hidden border group">
      <div className="h-70 overflow-hidden relative">
        <Image
          src={pet_image}
          alt={pet_name}
          width={600}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
        ></Image>

        <p className="absolute top-2 left-2 bg-[#ED8262] rounded-full text-sm px-2.5 py-.5 text-white">
          {species}
        </p>

        <p className="absolute top-2 right-2 bg-green-600 rounded-full text-sm px-2.5 py-.5 text-white">
          {status}
        </p>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">{pet_name}</h2>
        <p className="line-clamp-2">{pet_description}</p>
        <h4 className="font-medium text-[#ED8262]">
          Adoption Fee: ${adoption_fee}
        </h4>
      </div>

      <div className="p-3">
        <Link href={`/all-pets/${_id}`}>
          <Button className={"rounded-md w-full bg-[#ED8262]"}>
            View Detail
          </Button>
        </Link>

        <Link href={`/all-pets/${_id}`}>
          <Button
            variant="outline"
            className={
              "rounded-md w-full hover:border-[#ED8262] hover:text-[#ED8262] transition-all duration-300 mt-3"
            }
          >
            Adopt Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PetCard;

/**
 {
    "_id": "6a19d85bba125632902400a3",
    "pet_name": "Charlie",
    "species": "dog",
    "breed": "Beagle",
    "pet_image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
    "pet_gender": "male",
    "pet_age": "2.5",
    "pet_health": "healthy",
    "pet_vaccination": "vaccinated",
    "pet_location": "Mymensingh, Bangladesh",
    "adoption_fee": "100",
    "pet_description": "Charlie is an active and friendly Beagle with a great sense of smell and a fun-loving personality.",
    "pet_owner_email": "jubayer@gmail.com",
    "user_id": "6a18a4748e58f9b1336b448c",
    "status": "Available"
}
 */
