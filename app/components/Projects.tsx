
import Image from 'next/image';

export default function Projects() {
 
 
  return (
    <>
      <section className="no1-wrap bg-sky-100 py-4 pb-[24px] ">
        <section className="mt-8 flex justify-center px-[140px] py-[24px] ">
          <div className="margin ">
            <div className="description mx-[40px] max-w-[800px] px-[40px] text-center text-base">
             <h1 className="mb-4 text-6xl text-black">Some Of My Projects</h1>
            </div>
          </div>
        </section>
        <section className="flex justify-evenly gap-x-8 ">
        <div className="flex flex-col justify-center gap-y-8 ">
            {' '}
            <Image
              src="/dp.jpeg"
              alt="cart"
              width={270}
              height={338}
              className="mx-auto flex self-center border-4"
            ></Image>
                  <div className="flex justify-center text-4xl text-black"> <button className=' w-full hover:bg-slate-600 hover:text-gray-400 border-2 border-gray-400'>Watch Live </button></div>
          </div>

            <div className="flex flex-col justify-center gap-y-8 ">
            {' '}
            <Image
              src="/dp.jpeg"
              alt="cart"
              width={270}
              height={338}
              className="mx-auto flex self-center border-4"
            ></Image>
                  <div className="flex justify-center text-4xl text-black"> <button className=' w-full hover:bg-slate-600 hover:text-gray-400 border-2 border-gray-400'>Watch Live </button></div>
          </div>
            <div className="flex flex-col justify-center gap-y-8 ">
            {' '}
            <Image
              src="/dp.jpeg"
              alt="cart"
              width={270}
              height={338}
              className="mx-auto flex self-center border-4"
            ></Image>
                  <div className="flex justify-center text-4xl text-black"> <button className=' w-full hover:bg-slate-600 hover:text-gray-400 border-2 border-gray-400'>Watch Live </button></div>
          </div>
          <div className="flex flex-col justify-center gap-y-8 ">
            {' '}
            <Image
              src="/dp.jpeg"
              alt="cart"
              width={270}
              height={338}
              className="mx-auto flex self-center border-4"
            ></Image>
                  <div className="flex justify-center text-4xl text-black"> <button className=' w-full hover:bg-slate-600 hover:text-gray-400 border-2 border-gray-400'>Watch Live </button></div>
          </div>
        </section>
        
      </section>
    </>
  );
}
