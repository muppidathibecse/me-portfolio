import Image from "next/image";
import Link from "next/link";
import { ButtonData, NavbarData } from "../data/NavbarData";

export default function Home() {
  return (
    <>
      <div className="flex justify-end items-center text-lg gap-12 p-3">
        {NavbarData.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-gray-900"
          >
            {item.name}
          </Link>
        ))}
        <div>
          <button className="flex gap-3 bg-black text-white text-lg px-3 py-2 rounded-lg">
            {ButtonData.name}
            <Image
              src={ButtonData.iconSrc}
              alt="Download Icon"
              width={24}
              height={24}
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
