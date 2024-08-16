import React from "react";
import Image from "next/image";
import { data } from "@/constants";

const dataFec = (id: number) => {
  const blog = data.find((items) => {
    return items.id === id;
  });
  return blog;
};

type dataDetailPageProps = {
  params: {
    id: string;
  };
};

function blogdetails({ params }: dataDetailPageProps) {
  console.log(params);
  const datadetails = dataFec(Number(params.id));
  console.log(datadetails);
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-[22rem,1fr] p-20">
        <div>
          <Image
            src={`/${datadetails?.image_location}`}
            alt="image not found"
            width="300"
            height="50"
            className="border rounded"
          ></Image>
        </div>
        <div>
          <p className="font-bold sm:text-5xl mb-5">{datadetails?.name}</p>
          <p className="sm:text-md text-sm">{datadetails?.content}</p>
          <video width="440" height="300" controls preload="none" className="mt-5">
            <source src={`/videos/${datadetails?.video}`} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default blogdetails;
