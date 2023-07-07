import React from 'react'
import { Navigation } from 'components/Navigation/Navigation'

export default function QuickStart() {
  return (
    <>
      <Navigation
        navItems={[
          { text: 'Features', href: '/features' },
          { text: 'About', href: '/about' },
          { text: 'Contact', href: '/contact' },
        ]}
      />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl text-center">
          <div className="mx-auto place-self-center">
            <h2 className="mb-4 max-w-2xl text-2xl font-bold leading-none tracking-tight dark:text-white">
              Input your ingredients in your fridge, cupboards and freezer and aywhere else you might store food.
            </h2>
            <input type="text" name="" id="" />
          </div>
        </div>
      </section>

    </>
  )
}
