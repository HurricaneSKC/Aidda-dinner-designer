import React from 'react'

interface HeaderProps {
  heading: string;
}

export const HeaderOne: React.FC<HeaderProps> = ({ heading }) => {
  return (
    <h1
      className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl"
    >
      {heading}
    </h1>
  );
}

export const HeaderTwo: React.FC<HeaderProps> = ({ heading }) => {
  return (
    <h2
      className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight dark:text-white"
    >
      {heading}
    </h2>
  );
}

export const HeaderThree: React.FC<HeaderProps> = ({ heading }) => {
  return (
    <h3
      className="mb-4 max-w-2xl text-3xl font-bold leading-none tracking-tight dark:text-white"
    >
      {heading}
    </h3>
  );
}

export const HeaderFour: React.FC<HeaderProps> = ({ heading }) => {
  return (
    <h4 className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
    {heading}
  </h4>
  )
}