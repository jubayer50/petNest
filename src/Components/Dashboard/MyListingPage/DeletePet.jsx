"use client";

import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeletePet = ({ pet }) => {
  const { _id, pet_name } = pet;

  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${_id}`,
      { method: "DELETE", headers: { "content-type": "application/json" } },
    );

    const data = await res.json();

    if (data) {
      toast.success("Pet deleted successfully!");
      router.refresh();
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button size="sm" variant="danger" className={"rounded-md"}>
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="rounded-md">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete <span className="text-[#ED8262]">{pet_name}</span>{" "}
                  permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Footer>
                <Button
                  className={"rounded-md"}
                  slot="close"
                  variant="tertiary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={deleteHandler}
                  className={"rounded-md"}
                  slot="close"
                  variant="danger"
                >
                  Delete Pet
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};
export default DeletePet;
