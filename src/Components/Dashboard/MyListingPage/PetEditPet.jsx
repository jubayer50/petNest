"use client";

import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const PetEditPet = ({ pet }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const {
    _id,
    pet_name,
    breed,
    pet_location,
    pet_age,
    adoption_fee,
    pet_description,
    pet_image,
  } = pet;

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${_id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updateData),
      },
    );
    const data = await res.json();

    console.log(data);

    if (data) {
      toast.success("pet updated successfully!");
      router.refresh();
    }
  };

  return (
    <div>
      <Modal>
        <Button
          size="sm"
          variant="outline"
          className={"border-[#ED8262] text-[#ED8262] rounded-md"}
        >
          Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="rounded-md max-w-140 w-full p-3">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <PencilToSquare className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update pet</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-2">
                <Surface variant="default">
                  <Form
                    onSubmit={onSubmit}
                    className="border rounded-md space-y-3 p-3"
                  >
                    <TextField
                      name="pet_name"
                      isRequired
                      defaultValue={pet_name}
                    >
                      <Label className="text-sm font-medium">Pet Name:</Label>
                      <Input className="rounded-md border shadow-none" />
                    </TextField>

                    <div className="flex flex-col md:flex-row gap-5">
                      <Select
                        name="species"
                        isRequired
                        className="w-full"
                        placeholder="Select one"
                      >
                        <Label>Species</Label>
                        <Select.Trigger
                          className={"rounded-md border shadow-none"}
                        >
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover className={"rounded-md shadow-none"}>
                          <ListBox>
                            <ListBox.Item
                              className="hover:rounded-md"
                              id="dog"
                              textValue="Dog"
                            >
                              Dog
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="cat"
                              textValue="Cat"
                            >
                              Cat
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="bird"
                              textValue="Bird"
                            >
                              Bird
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="other"
                              textValue="Other"
                            >
                              Other
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <TextField
                        name="breed"
                        className={"w-full"}
                        defaultValue={breed}
                      >
                        <Label className="text-sm font-medium">Breed:</Label>
                        <Input className="rounded-md border shadow-none" />
                      </TextField>
                    </div>

                    <TextField
                      name="pet_image"
                      className={"w-full"}
                      defaultValue={pet_image}
                    >
                      <Label className="text-sm font-medium">Image URL:</Label>
                      <Input className="rounded-md border shadow-none" />
                    </TextField>

                    <div className="flex flex-col md:flex-row gap-5">
                      <Select
                        name="pet_gender"
                        isRequired
                        className="w-full"
                        placeholder="Select one"
                      >
                        <Label>Gender:</Label>
                        <Select.Trigger
                          className={"rounded-md border shadow-none"}
                        >
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover className={"rounded-md shadow-none"}>
                          <ListBox>
                            <ListBox.Item
                              className="hover:rounded-md"
                              id="male"
                              textValue="Male"
                            >
                              Male
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="female"
                              textValue="Female"
                            >
                              Female
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <TextField
                        name="pet_age"
                        className={"w-full"}
                        defaultValue={pet_age}
                      >
                        <Label className="text-sm font-medium">Age:</Label>
                        <Input
                          type="number"
                          className="rounded-md border shadow-none"
                        />
                      </TextField>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <Select
                        name="pet_health"
                        isRequired
                        className="w-full"
                        placeholder="Select one"
                      >
                        <Label>Health Status:</Label>
                        <Select.Trigger
                          className={"rounded-md border shadow-none"}
                        >
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover className={"rounded-md shadow-none"}>
                          <ListBox>
                            <ListBox.Item
                              className="hover:rounded-md"
                              id="healthy"
                              textValue="Healthy"
                            >
                              Healthy
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="sick"
                              textValue="Sick"
                            >
                              Sick
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="recovery"
                              textValue="Recovery"
                            >
                              Recovery
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <Select
                        name="pet_vaccination"
                        isRequired
                        className="w-full"
                        placeholder="Select one"
                      >
                        <Label>Vaccination Status:</Label>
                        <Select.Trigger
                          className={"rounded-md border shadow-none"}
                        >
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover className={"rounded-md shadow-none"}>
                          <ListBox>
                            <ListBox.Item
                              className="hover:rounded-md"
                              id="vaccinated"
                              textValue="Vaccinated"
                            >
                              Vaccinated
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="not-vaccinated"
                              textValue="Not-vaccinated"
                            >
                              Not vaccinated
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item
                              className="hover:rounded-md"
                              id="not-required"
                              textValue="Not-required"
                            >
                              Not required
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                      <TextField
                        name="pet_location"
                        className={"w-full"}
                        defaultValue={pet_location}
                      >
                        <Label className="text-sm font-medium">Location:</Label>
                        <Input
                          type="text"
                          className="rounded-md border shadow-none"
                        />
                      </TextField>

                      <TextField
                        name="adoption_fee"
                        className={"w-full"}
                        defaultValue={adoption_fee}
                      >
                        <Label className="text-sm font-medium">
                          Adoption Fee:
                        </Label>
                        <Input
                          type="text"
                          className="rounded-md border shadow-none"
                        />
                      </TextField>
                    </div>

                    <TextField
                      isRequired
                      name="pet_description"
                      defaultValue={pet_description}
                    >
                      <Label>Description:</Label>
                      <TextArea className={"rounded-md shadow-none border"} />
                    </TextField>

                    <TextField name="pet_owner_email" className={"w-full"}>
                      <Label className="text-sm font-medium">
                        Owner Email:
                      </Label>
                      <Input
                        value={user?.email}
                        type="email"
                        className="rounded-md border shadow-none"
                      />
                    </TextField>

                    <Button
                      slot="close"
                      type="submit"
                      className={"rounded-md w-full"}
                    >
                      Update Pet
                    </Button>
                  </Form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className={"rounded-md"}
                  slot="close"
                  variant="secondary"
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default PetEditPet;
