import Image from "next/image";
import React from "react";

const ImageContainer:React.FC<{
  image:string;
  className?:string;
  onClick?:()=>void;
}> = (props) => {
  return (
    <div
      className={`${props.className}`}
      style={{
        width: "100%",
        aspectRatio: "3/2",
        objectFit: "contain",
        mixBlendMode: "color-burn",
      }}
    >
      <Image
        src={props.image}
        alt={'no images'}
        className="cursor-pointer"
        fill
        onClick={props.onClick}
        style={{
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />
    </div>
  );
};

export default ImageContainer;
