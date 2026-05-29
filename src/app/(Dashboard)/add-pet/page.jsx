import {
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  TextArea,
  Button,
} from "@heroui/react";
import React from "react";

const AddPetPage = () => {
  return (
    <div className="max-w-330 mx-auto px-3 my-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Add a Pet for Adoption
        </h2>
        <p className="mt-1.5 max-w-150 mx-auto">
          Help a pet find a loving forever home by sharing their details,
          personality, and story with potential adopters.
        </p>
      </div>

      <div className="mt-5 max-w-200 mx-auto">
        <Form className="border rounded-md p-4 space-y-5">
          <TextField isRequired>
            <Label className="text-sm font-medium">Pet Name:</Label>
            <Input
              className="rounded-md border shadow-none"
              placeholder="Enter your pet name"
            />
          </TextField>

          <div className="flex flex-col md:flex-row gap-5">
            <Select isRequired className="w-full" placeholder="Select one">
              <Label>Species</Label>
              <Select.Trigger className={"rounded-md border shadow-none"}>
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
                </ListBox>
              </Select.Popover>
            </Select>

            <TextField className={"w-full"}>
              <Label className="text-sm font-medium">Breed:</Label>
              <Input
                className="rounded-md border shadow-none"
                placeholder="Enter your pet breed"
              />
            </TextField>
          </div>

          <TextField className={"w-full"}>
            <Label className="text-sm font-medium">Image URL:</Label>
            <Input
              className="rounded-md border shadow-none"
              placeholder="Enter your image url"
            />
          </TextField>

          <div className="flex flex-col md:flex-row gap-5">
            <Select isRequired className="w-full" placeholder="Select one">
              <Label>Gender:</Label>
              <Select.Trigger className={"rounded-md border shadow-none"}>
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

            <TextField className={"w-full"}>
              <Label className="text-sm font-medium">Age:</Label>
              <Input
                type="number"
                className="rounded-md border shadow-none"
                placeholder="Enter your pet age"
              />
            </TextField>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <Select isRequired className="w-full" placeholder="Select one">
              <Label>Health Status:</Label>
              <Select.Trigger className={"rounded-md border shadow-none"}>
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

            <Select isRequired className="w-full" placeholder="Select one">
              <Label>Vaccination Status:</Label>
              <Select.Trigger className={"rounded-md border shadow-none"}>
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
            <TextField className={"w-full"}>
              <Label className="text-sm font-medium">Location:</Label>
              <Input
                type="text"
                className="rounded-md border shadow-none"
                placeholder="Enter your location"
              />
            </TextField>

            <TextField className={"w-full"}>
              <Label className="text-sm font-medium">Adoption Fee:</Label>
              <Input
                type="text"
                className="rounded-md border shadow-none"
                placeholder="Enter adoption fee"
              />
            </TextField>
          </div>

          <TextField isRequired name="">
            <Label>Description:</Label>
            <TextArea
              className={"rounded-md shadow-none border"}
              placeholder="Tell us about pet..."
            />
          </TextField>

          <TextField isRequired className={"w-full"}>
            <Label className="text-sm font-medium">Owner Email:</Label>
            <Input
              type="email"
              className="rounded-md border shadow-none"
              value={""}
            />
          </TextField>

          <Button type="submit" className={"w-full rounded-md bg-[#ED8262]"}>
            Add Pet
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddPetPage;
