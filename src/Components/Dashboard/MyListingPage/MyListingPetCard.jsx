import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const MyListingPetCard = ({ pet }) => {
  const {
    _id,
    pet_name,
    species,
    breed,
    pet_image,
    pet_gender,
    pet_location,
    status,
  } = pet;

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

  return (
    <div className="p-3 rounded-md border flex flex-col md:flex-row justify-between md:items-end gap-4">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="max-w-100 md:w-60 max-h-100 md:h-50">
          <Image
            src={pet_image}
            alt={pet_name}
            width={500}
            height={500}
            className="rounded-md w-full h-full aspect-square object-cover"
          ></Image>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-xl md:text-2xl text-[#ED8262] font-bold">
            {pet_name}
          </h3>

          <p
            className={`${status == "Available" ? "bg-green-600" : status == "Pending" ? "bg-yellow-500" : status == "Adopted" ? "bg-red-600" : ""} absolute top-2 right-2  rounded-full text-sm px-2.5 py-.5 text-white`}
          >
            <span className="font-bold">Status:</span> {status}
          </p>

          <p>
            <span className="font-bold">Species:</span> {species}
          </p>

          <p>
            <span className="font-bold">Breed:</span> {breed}
          </p>

          <p>
            <span className="font-bold">Pet gender:</span> {pet_gender}
          </p>

          <p>
            <span className="font-bold">Location:</span> {pet_location}
          </p>
        </div>
      </div>

      <div className="flex gap-1.5">
        <Button
          size="sm"
          variant="outline"
          className={"border-[#ED8262] text-[#ED8262] rounded-md"}
        >
          Requests
        </Button>

        <Link href={`/all-pets/${_id}`}>
          <Button size="sm" className={"bg-[#ED8262] rounded-md"}>
            View Detail
          </Button>
        </Link>

        <Button
          size="sm"
          variant="outline"
          className={"border-[#ED8262] text-[#ED8262] rounded-md"}
        >
          Edit
        </Button>

        <Button size="sm" variant="danger" className={"rounded-md"}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default MyListingPetCard;
