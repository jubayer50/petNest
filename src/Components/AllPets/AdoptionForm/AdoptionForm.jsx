"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  DateField,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const AdoptionForm = ({ pet }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const { _id, pet_name, status } = pet;

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const adoptedData = Object.fromEntries(formData.entries());
    adoptedData["pet_id"] = _id;
    adoptedData["user_id"] = user?.id;

    // post api  request for pet adopt request
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/pets-adopt-request`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(adoptedData),
      },
    );
    const data = await res.json();

    if (data) {
      toast.success("Pet adopt request successful!");
      form.reset();
    }

    // update/patch api request for pet card status change
    const statusRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${_id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "Pending" }), // TODO : set update information
      },
    );
    const statusResData = await statusRes.json();

    if (statusResData) {
      router.refresh();
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold">
          Make a Forever Connection
        </h2>
        <p className="mt-1.5">
          Take the first step toward adoption by sending your request and
          sharing your interest in this lovely pet
        </p>
      </div>

      <Form onSubmit={onSubmit} className="space-y-4 mt-7">
        <TextField value={pet_name} name="pet_name" isRequired>
          <Label className="text-sm font-medium">Pet Name:</Label>
          <Input className="rounded-md border shadow-none" />
        </TextField>

        <TextField value={user?.name} name="pet_name" isRequired>
          <Label className="text-sm font-medium">User Name:</Label>
          <Input className="rounded-md border shadow-none" />
        </TextField>

        <TextField value={user?.email} name="user_email" isRequired>
          <Label className="text-sm font-medium">User Email:</Label>
          <Input className="rounded-md border shadow-none" />
        </TextField>

        <DateField isRequired name="adoption_date">
          <Label>Date:</Label>
          <DateField.Group className={"rounded-md border shadow-none"}>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>

        <TextField name="pet_description">
          <Label>Message:</Label>
          <TextArea
            className={"rounded-md shadow-none border"}
            placeholder="Message about pet..."
          />
        </TextField>

        <Button
          isDisabled={status === "Pending" || status === "Adopted"}
          type="submit"
          className={"bg-[#ED8262] rounded-md w-full"}
        >
          Adopt Request
        </Button>
      </Form>
    </div>
  );
};

export default AdoptionForm;
