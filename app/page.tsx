import SectionTitle from "@ImageGallery/components/SectionTitle";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center justify-center h-[80vh]">
       <SectionTitle title="Home Page" titleClass="text-[70px] leading-[70px] lg:text-[100px]"/>
        <Link href="/gallery" className="text-lg leading-7 px-5 py-3 bg-blue-500 rounded-xl text-white">
         Gallery
        </Link>
    </main>
  )
}
