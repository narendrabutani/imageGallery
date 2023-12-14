"use client";
import React from "react";
import { useState } from "react";
import { images } from "@ImageGallery/data/Jsondata";
import FilterContainer from "@ImageGallery/components/FilterContainer";
import Modal from "@ImageGallery/components/Modal";
import ImageContainer from "@ImageGallery/components/ImageContainer";
import SectionTitle from "./SectionTitle";

export interface Item {
  src: string;
  alt: string;
  type: string;
}
const GalleryContainer = () => {
  const [imageData, setImageData] = useState<Item[]>(images);
  const [activeImage, setActiveImage] = useState(images[0].src);
  const [filterActive, setFilterActive] = useState("all");
  return (
    <div className="App flex flex-col gap-10 m-4">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle title="Photo Gallery"  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde
            ex odio, delectus autem modi fuga! Tempora optio totam facere, animi
            nihil dignissimos. Maxime dolore earum perspiciatis cupiditate in
            consectetur!`}/>
        <FilterContainer
          setFilterActive={setFilterActive}
          filterActive={filterActive}
          setImageData={setImageData}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4">
        {imageData.map((image, i) => {
          return (
            <ImageContainer
              key={i}
              image={image.src}
              className="relative w-[450px] h-[250px]"
              onClick={() => {
                setActiveImage(image.src)
                //@ts-ignore
                document.getElementById("my_modal_3")!.showModal();
              }}
            />
          );
        })}
      </div>
      <Modal
        imageData={imageData}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
};

export default GalleryContainer;
