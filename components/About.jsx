import Image from 'next/image';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const stack = [
  {
    name: 'TypeScript',
    description:
      'The seemingly de facto standard for the web, I drive my logic with TypeScript from the client to the server.',
    icon: '/images/typescript.svg',
  },
  {
    name: 'React',
    description:
      'I use React as a starting point and take advantage of its modularity and then approach backend solutions based on requirements.',
    icon: '/images/react.svg',
  },
  {
    name: 'Tailwind CSS',
    description:
      'We all know it. CSS is boring, but it can be fun. I use Sass and Tailwind CSS to make styling painless.',
    icon: '/images/tailwindcss.svg',
  },
  {
    name: 'Node.js',
    description:
      'Most of the Internet runs on it. Is there a choice here?',
    icon: '/images/nodejs.svg',
  },
]

export default function About() {
  return (
    <>
      <div className="relative bg-white overflow-hidden rounded-lg">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                zayadur khan
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Aspiring software engineer and marketing coordinator, currently dabbling in web development and social media.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-24 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <Image
                            src={'/images/projects/neopolitico.png'}
                            width={1280}
                            height={720}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-24 rounded-lg overflow-hidden">
                          <Image
                            src={'/images/projects/swipe.png'}
                            width={1280}
                            height={720}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-24 rounded-lg overflow-hidden">
                          <Image
                            src={'/images/projects/VolumeWarning.png'}
                            width={1280}
                            height={720}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="w-44 h-24 rounded-lg overflow-hidden">
                          <Image
                            src={'/images/projects/LetsDoIt.png'}
                            width={1280}
                            height={720}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-24 rounded-lg overflow-hidden">
                          <Image
                            src={'/images/projects/GreatValueTrashBag.png'}
                            width={1280}
                            height={720}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/projects"
                  className="inline-block text-center bg-black border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-black/80"
                >
                  view projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* stack */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              the stack
            </h1>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
              I bootstrap my projects with the following technologies.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {stack.map((tech) => (
                <div key={tech.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md">
                      <Image
                        src={tech.icon}
                        width={512}
                        height={512}
                      />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">{tech.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base">{tech.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}