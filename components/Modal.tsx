import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { Item } from "./GalleryContainer";
import ImageContainer from "./ImageContainer";

const Modal: React.FC<{
  activeImage: string;
  imageData:Item[];
  setActiveImage:React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  return (
    <div>
      <dialog
        id="my_modal_3"
        className="overflow-hidden w-screen h-[80vh] lg:h-screen bg-white backdrop:w-screen"
      >
        <div className="modal-box w-full h-[90vh] ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-none outline-none text-3xl">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-8 w-full mt-10">
            <div
              className="relative flex justify-center w-full h-[300px] md:h-[400px]  lg:h-[550px]"
            >
              <Image
                src={props.activeImage}
                alt={"no image"}
                className="cursor-pointer"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                }}
              />
            </div>
            <Swiper
              //@ts-ignore
              initialSlide={5}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                628: {
                  slidesPerView: 1.5,
                },
                679: {
                  slidesPerView: 2,
                },
                820: {
                  slidesPerView: 2.5,
                },
                912: {
                  slidesPerView: 3,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
              keyboard={{
                enabled: true,
              }}
              navigation={true}
              modules={[Keyboard, Navigation, Thumbs]}
              className="mySwiper w-[90vw]"
            >
              {props.imageData.length !== 0 &&
                props.imageData.map(
                  (image: { src: string; alt: string }, i: number) => (
                    <SwiperSlide key={i}>
                      <ImageContainer
                        key={i}
                        image={image.src}
                        className="relative w-[350px] h-[200px]"
                        onClick={() => {
                          props.setActiveImage(image.src)
                        }}
                      />
                    </SwiperSlide>
                  )
                )}
            </Swiper>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
