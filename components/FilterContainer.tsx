import React from "react";
import Label from "./Label";
import { images } from "@ImageGallery/data/Jsondata";

const FilterContainer: React.FC<any> = (props) => {
  const FilterPhoto = (key: string) => {
    const filterPhoto = images.filter((element) => {
      if (key === "all") {
        return element;
      } else {
        return element.type == key;
      }
    });
    props.setFilterActive(key);
    props.setImageData(filterPhoto);
  };
  return (
    <div className="flex flex-wrap gap-6 justify-start items-center">
      <Label
        active={(props.filterActive === "all").toString()}
        onClick={() => FilterPhoto("all")}
      >
        All
      </Label>
      <Label
        active={(props.filterActive === "branding").toString()}
        onClick={() => FilterPhoto("branding")}
      >
        Branding
      </Label>
      <Label
        active={(props.filterActive === "design").toString()}
        onClick={() => FilterPhoto("design")}
      >
        Design
      </Label>
      <Label
        active={(props.filterActive === "development").toString()}
        onClick={() => FilterPhoto("development")}
      >
        Development
      </Label>
    </div>
  );
};

export default FilterContainer;
