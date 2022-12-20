import { Popover } from '@headlessui/react';
import tw from 'twin.macro';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import logo from './assets/Rebel_Alliance_logo.svg';
import photo from './assets/sw_ships_bg.jpg';
import { Link } from 'react-router-dom';

// const HeroTextDiv = tw.div`w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left`;

const App = () => {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="w-auto h-8 sm:h-10" src={logo} alt="" />
              </a>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link
                to={`movies`}
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Movies
              </Link>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Characters
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Ships
              </a>
            </Popover.Group>
            <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
              <p className="invisible">-</p>
            </div>
          </div>
        </div>
      </Popover>

      <main className="lg:relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Data for fans of</span>{' '}
              <span className="block text-red-800">Star Wars</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Get all the information you'll ever need on all things Star Wars.
              From the movies, to the characters and their ships, you'll find it
              all here!
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-red-800 border border-transparent rounded-md hover:bg-red-700 md:py-4 md:px-10 md:text-lg"
                >
                  Let's Go
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={photo}
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default App;
