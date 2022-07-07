import Link from 'next/link';
import Image from 'next/image';

export default function ProjectList({ projectData }) {
  return (
    <section className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
      {projectData.map(({ id, title, stack }) => (
        <div key={id} className="group relative">
          <div className="relative w-full h-90 rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-90 lg:aspect-w-1 lg:aspect-h-1 cursor-pointer ease-in-out duration-300">
            <p className="font-bold my-3 text-3xl text-center cursor-pointer">{title}</p>
            <Link href={`/projects/${id}`}>
              <Image
                src={'/images/projects/' + id + '.png'}
                alt="Snapshot of project"
                width="1600"
                height="900"
              />
            </Link>
            <p className="text-2xl text-center">{stack}</p>
          </div>
        </div>
      ))}
    </section>
  );
}