import Link from 'next/link';
import Date from './date';
import utilStyles from '../styles/utils.module.scss';

export default function ProjectList({ allProjectsData }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {allProjectsData.map(({ id, title, date }) => (
          <div key={id} className="group relative">
            <h3 className="mt-6 text-xl text-gray-500">
              <Link href={`/projects/${id}`}>
                {title}
              </Link>&nbsp;
              <Date dateString={date} />
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}