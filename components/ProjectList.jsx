import Link from 'next/link';
import Image from 'next/image';

export default function ProjectList({ projectData }) {
  return (
    <div>
      <h1 className="my-6 flex justify-center text-4xl font-black">software</h1>
      <section className="my-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {projectData.map(({ id, title, stack }) => (
          <div key={id} className="group relative">
            <div className="relative w-full h-90 rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-90 lg:aspect-w-1 lg:aspect-h-1 cursor-pointer ease-in-out duration-200">
              <p className="font-bold my-3 text-2xl text-center cursor-pointer">{title}</p>
              <Link href={`/projects/${id}`}>
                <Image
                  src={'/images/projects/' + id + '.png'}
                  alt='Project snapshot'
                  width='1280'
                  height='720'
                />
              </Link>
              <p className="text-lg text-center">{stack}</p>
            </div>
          </div>
        ))}
      </section>
      <hr />
      <h1 className="my-6 flex justify-center text-4xl font-black">video</h1>
      <section className="my-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
        <div className="group relative">
          <div className="relative w-full h-90 rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-90 lg:aspect-w-1 lg:aspect-h-1 cursor-pointer ease-in-out duration-200">
            <p className="font-bold my-3 text-2xl text-center cursor-pointer">Volume Warning</p>
            <a href='https://youtu.be/548slgzY2x0' target="_blank">
              <Image
                src={'/images/projects/VolumeWarning.png'}
                alt='Video thumbnail'
                width='1280'
                height='720'
                target='_blank'
              />
            </a>
          </div>
        </div>
        <div className="group relative">
          <div className="relative w-full h-90 rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-90 lg:aspect-w-1 lg:aspect-h-1 cursor-pointer ease-in-out duration-200">
            <p className="font-bold my-3 text-2xl text-center cursor-pointer">Let's Do It</p>
            <a href='https://youtu.be/ApPU5iHVHC8' target='_blank'>
              <Image
                src={'/images/projects/LetsDoIt.png'}
                alt='Video thumbnail'
                width='1280'
                height='720'
              />
            </a>
          </div>
        </div>
        <div className="group relative">
          <div className="relative w-full h-90 rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-90 lg:aspect-w-1 lg:aspect-h-1 cursor-pointer ease-in-out duration-200">
            <p className="font-bold my-3 text-2xl text-center cursor-pointer">Great Value Trash Bag</p>
            <a href='https://youtu.be/l8UNAGTx_ZU' target='_blank'>
              <Image
                src={'/images/projects/GreatValueTrashBag.png'}
                alt='Video thumbnail'
                width='1280'
                height='720'
              />
            </a>
          </div>
        </div>
        <div className="group relative">
          <div className="relative w-full h-90 rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-90 lg:aspect-w-1 lg:aspect-h-1 cursor-pointer ease-in-out duration-200">
            <p className="font-bold my-3 text-2xl text-center cursor-pointer">NYAN</p>
            <a href='https://youtu.be/WOmurGPQ9EA' target='_blank'>
              <Image
                src={'/images/projects/Nyan.png'}
                alt='Video thumbnail'
                width='1280'
                height='720'
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}