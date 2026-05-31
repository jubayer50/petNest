import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import DeletePet from "./DeletePet";
import PetEditPet from "./PetEditPet";

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
            className={`${status == "Available" ? "bg-green-600" : status == "Pending" ? "bg-yellow-500" : status == "Adopted" ? "bg-red-600" : ""} rounded-sm text-sm px-2.5 py-.5 text-white w-fit`}
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
            View
          </Button>
        </Link>

        <PetEditPet pet={pet}></PetEditPet>

        <DeletePet pet={pet}></DeletePet>
      </div>
    </div>
  );
};

export default MyListingPetCard;
