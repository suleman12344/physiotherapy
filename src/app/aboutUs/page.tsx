import React from "react";
import Image from "next/image";
function AboutUs() {
  return (
    <main>
      <div className="bg-black p-20">
        <div className=" container mx-auto text-white md:text-7xl text-2xl font-bold">
          <div className="text-center sm:mb-5">Introducing a refreshed</div>
          <div className="sm:ml-20 sm:mb-5">identity rooted in the</div>
          <div className="text-center sm:ml-20">spirit of our values</div>
        </div>
      </div>
      <div className="container mx-auto text-black sm:text-3xl text-sm sm:p-32 p-20">
        <p className="font-bold mb-5">
          We are living in a moment where sterile corporatism is giving way to
          authenticity and connection.
        </p>
        <p className="font-thin">
          We originally created Flodesk to empower small businesses with an
          intuitive, design-centric platform that enhanced their brands via
          stunning emails and sales pages. But Flodesk is more than just nice
          aesthetics—it’s also about the continuous process of crafting and
          nurturing a profound connection with your audience. Our refreshed
          identity provides a more holistic representation of this essence.
        </p>
      </div>
      <div className="container mx-auto p-20">
        <div className="grid sm:grid-cols-2 grid-rows-1 sm:gap-none gap-16">
          <Image
            src={"/image2.avif"}
            alt="image not found"
            width="400"
            height="50"
            className="border rounded sm:ml-20"
          ></Image>
          <Image
            src={"/image3.avif"}
            alt="image not found"
            width="400"
            height="50"
            className="border rounded sm:ml-20"
          ></Image>
        </div>
      </div>
      <div className="bg-[#865B75]">
        <div className="container mx-auto p-16">
          <p className="sm:text-7xl text-xl text-center text-white">
            “I believe a great rebranding is less about remaking your identity
            and more about becoming closer to who you already are.”
          </p>
        </div>
      </div>
      <div className="container mx-auto text-black sm:text-3xl text-sm sm:p-32 p-20">
        <p className="font-bold mb-5">
          For our reimagined brand system, we revisited the philosophy of one of
          our early inspirations – the renowned 20th Century architect Richard
          Neutra.
        </p>
        <p className="font-thin">
          As one of the pioneers of California Modernism, Neutra is known for
          functional and aesthetically pleasing architecture that seamlessly
          integrates with its surroundings.
        </p>
      </div>
    </main>
  );
}

export default AboutUs;
