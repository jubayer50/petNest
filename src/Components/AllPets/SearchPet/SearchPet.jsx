import { Button, SearchField } from "@heroui/react";
import React from "react";

const SearchPet = () => {
  return (
    <div className="flex items-center gap-2 max-w-100 w-full">
      <SearchField name="search" className={"w-full"}>
        <SearchField.Group className="rounded-md shadow-sm">
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." className="" />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Button size="sm" className={"rounded-md"}>
        Search
      </Button>
    </div>
  );
};

export default SearchPet;
