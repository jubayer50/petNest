import { Label, ListBox, Select } from "@heroui/react";

const CategoryFilter = () => {
  return (
    <div>
      <Select className="" placeholder="Filter by category">
        <Label></Label>
        <Select.Trigger className={"rounded-md shadow-sm"}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className={"rounded-md shadow-sm"}>
          <ListBox>
            <ListBox.Item id="default" textValue="">
              Default
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="dog" textValue="Dog">
              Dog
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="cat" textValue="Cat">
              Cat
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="bird" textValue="Bird">
              Bird
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item id="other" textValue="Other">
              Other
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default CategoryFilter;
