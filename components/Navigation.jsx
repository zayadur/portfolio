import Image from 'next/image';
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Navigation() {
  return (
    <nav class="mb-6">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              {/*
                Icon when menu is closed.
                Heroicon name: outline/menu
                Menu open: "hidden", Menu closed: "block"
              */}
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/*
                Icon when menu is open.
                Heroicon name: outline/x
                Menu open: "block", Menu closed: "hidden"
              */}
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="ml-3 flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <Image
                className={'block lg:block h-8 w-auto rounded-full'}
                src={'/images/profile.jpg'}
                width={40}
                height={40}
                alt='Profile picture'
              />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="/" class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-bold ease-in-out duration-200">about</a>
                <a href="/projects" class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-bold ease-in-out duration-200">projects</a>
                <a href="/resume.pdf" target={"_blank"} class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-bold ease-in-out duration-200">resume</a>
                <a href="mailto:zayadur@outlook.com" class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-bold ease-in-out duration-200">contact</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="https://github.com/zayadur" target="_blank" class="p-2 rounded-full text-white hover:text-neutral-400 ease-in-out duration-200">
              <span class="sr-only">GitHub</span>
              <FontAwesomeIcon className='text-2xl' icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/zayadur" target="_blank" class="p-2 rounded-full text-white hover:text-neutral-400 ease-in-out duration-200">
              <span class="sr-only">LinkedIn</span>
              <FontAwesomeIcon className='text-2xl' icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="https://twitter.com/zayadur" target="_blank" class="p-2 rounded-full text-white hover:text-neutral-400 ease-in-out duration-200">
              <span class="sr-only">Twitter</span>
              <FontAwesomeIcon className='text-2xl' icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div class="sm:hidden" id="mobile-menu">
        <div class="flex justify-center">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href="/" class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-semibold">about</a>
          <a href="/projects" class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-semibold">projects</a>
          <a href="/resume.pdf" target={"_blank"} class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-semibold">resume</a>
          <a href="mailto:zayadur@outlook.com" class="text-white hover:bg-neutral-900 px-3 py-2 rounded-md text-md font-semibold">contact</a>
        </div>
      </div>
    </nav>
  )
}