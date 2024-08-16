import Image from "next/image";
import { data } from "@/constants/index";
import Link from "next/link";

function details() {
  return (
    <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 grid-rows-1 gap-20 p-20 sm:ml-20">
          {data.map((items, index) => (
            <Link
              className=""
              key={items.id}
              href={`/teams/${items.id}`}
            >
              <Image
                src={`/${items.image_location}`}
                alt="image not found"
                width="200"
                height="50"
                className="border rounded"
              ></Image>
              <p className="mt-3 font-bold">{items.name}</p>
              <p className="text-sm w-45">{items.head_line}</p>
              
            </Link>
          ))}
        </div>
      </div>
  )
}

export default details