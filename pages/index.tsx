import Head from "next/head"
import Link from "next/link"
import { Button } from "components/Button/Button"
import { HeaderFour, HeaderOne } from "components/Headers/Header-1"
import { Navigation } from "components/Navigation/Navigation"
import { LP_GRID_ITEMS } from "../lp-items"

export default function Web() {
  const secondaryLinkButton = "justify-center inline-flex items-center rounded-xl text-center border border-blue-400 transition-colors delay-50 bg-transparent text-blue-400 hover:enabled:bg-blue-400 hover:enabled:text-white text-lg py-2.5 px-6"

  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Chef Aida</title>
      </Head>
      <Navigation />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <HeaderOne heading="Chef Aida" />
            <HeaderFour heading="An artificial intelligence dinner designer that helps you cook from what you have in your fridge, cupboards and freezer. Customising your meals to your cooking preferences and dietary requirements." />
            <Button href="" className="mr-3">
              Setup Full Account
            </Button>
            <Link 
              href="/food-inventory"
              className={secondaryLinkButton}
            > 
              Quick Start
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
