import Image from "next/image";

export default function Home() {
  return (
    <section id="hero" className="flex items-center justify-center">
      <div className="flex justify-center items-center flex-col-reverse md:flex-row gap-4">
        <div className=" text-center">
          <h1 className="text-3xl ">More than just a task app</h1>
          <p className="mt-6">
            Have a peace of mind knowing that you are organized
          </p>

          <div>
            <button className="bg-blue-800 px-4 py-4 rounded-full w-1/2 mt-6 text-xl cursor-pointer hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            height={500}
            width={500}
            src="/checklist.jpg"
            alt="illustration-working"
            className="rounded-md"
            // className="object-contain"
          />
        </div>
      </div>
    </section>
    // <div classNameName="flex  justify-center align-center">
    //   <div>
    //     <h1 classNameName="text-3xl mb-8">Lets keep your tasks organized!</h1>

    //     <p classNameName="text-md">The easiest task app you have ever seen.</p>
    //   </div>
    // </div>
  );
}
