import { getPetById } from "@/lib/data";
import Image from "next/image";

const PetDetailPage = async ({ params }) => {
  const { id } = await params;

  const pet = await getPetById(id);

  const {
    _id,
    pet_name,
    species,
    breed,
    pet_image,
    pet_gender,
    pet_age,
    pet_health,
    pet_vaccination,
    pet_location,
    adoption_fee,
    pet_description,
    pet_owner_email,
    status,
  } = pet;

  /**
   {
    "_id": "6a19d315ba1256329024009c",
    "pet_name": "Buddy",
    "species": "dog",
    "breed": "Golden Retriever",
    "pet_image": "https://images.unsplash.com/photo-1552053831-71594a27632d",
    "pet_gender": "male",
    "pet_age": "2",
    "pet_health": "healthy",
    "pet_vaccination": "vaccinated",
    "pet_location": "Dhaka, Bangladesh",
    "adoption_fee": "120",
    "pet_description": "Buddy is a playful and friendly Golden Retriever who loves outdoor activities and spending time with people.",
    "pet_owner_email": "jubayer@gmail.com",
    "user_id": "6a18a4748e58f9b1336b448c",
    "status": "Available"
}
   */

  return (
    <div className="max-w-330 px-3 mx-auto my-8">
      <div className="flex flex-col md:flex-row gap-7">
        <div className="">
          <div className="rounded-md h-150">
            <Image
              src={pet_image}
              alt={pet_name}
              width={1000}
              height={1000}
              className="h-full object-cover rounded-md"
            ></Image>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex flex-col md:flex-row gap-3 justify-between ">
              <span className="text-sm bg-[#ED8262] text-white rounded-full px-2 py-.5 w-fit">
                {species}
              </span>
              <span className="text-sm bg-green-600 text-white rounded-full px-2 py-.5 w-fit">
                {status}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold">{pet_name}</h2>
            <p className="">{pet_description}</p>

            <div className="flex flex-col md:flex-row justify-between gap-2">
              <p className="">
                <span className="font-medium">Breed:</span> {breed}
              </p>
              <p className="font-medium text-[#ED8262]">
                Adoption Fee: ${adoption_fee}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 justify-between">
              <p>
                <span className="font-medium">Gender:</span> {pet_gender}
              </p>
              <p>
                <span className="font-medium">Pet age:</span> {pet_age}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <p>
                <span className="font-medium">Pet health:</span> {pet_health}
              </p>
              <p>
                <span className="font-medium">Pet vaccination:</span>{" "}
                {pet_vaccination}
              </p>
            </div>

            <p>
              <span className="font-medium">Location:</span> {pet_location}
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default PetDetailPage;
