import Link from 'next/link';
import Image from 'next/image';

const pathToImage = '/images/projects/';

export default function ProjectList({ projectData }) {
  return (
    <section class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
      {projectData.map(({ id, title }) => (
        <div key={id} class="group relative">
          <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-52 lg:aspect-w-1 lg:aspect-h-1 cursor-pointer">
            <Link href={`/projects/${id}`}>
              <Image
                src={pathToImage + id + '.png'}
                alt="Snapshot of project"
                width="1280"
                height="720"
              />
            </Link>
          </div>
          <Link href={`/projects/${id}`}>
            <h1 class="font-bold my-3 text-3xl text-center cursor-pointer hover:text-neutral-400">{title}</h1>
          </Link>
        </div>
      ))}
    </section>
  );
}