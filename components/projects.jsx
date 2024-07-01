
import Link from "next/link"

export function Projects() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold font-verdana">
          Sander Rasmussen
        </h3>
        <nav className="flex gap-4">
        <Link className="hover:underline font-verdana" href="/">
            Home
          </Link>
          <Link className="hover:underline font-verdana" href="/projects">
            Projects
          </Link>
          <Link className="hover:underline font-verdana" href="/about">
            About
          </Link>
          <Link className="hover:underline font-verdana" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gray-800">
        <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold font-verdana">My Projects</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-verdana">
                Check out some of the projects I&apos;ve worked on and learn more about them.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          
              <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                <div
                  className="h-48 bg-gray-200 dark:bg-gray-700 bg-cover flex items-center justify-center"
                  style={{
                    backgroundImage: `url('/vearbuddy.png')`
                    }}>
                  
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-verdana"> VærBuddy : a weatherforecast and danger notification app for children</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-verdana">
                    A mobile app in android studio using kotlin and jetpack compose following the MVVM architecture. I worked in a team of 6 people using agile development. My primary jobb was building and maintaining the database and its interfaces, as well as working with datafetching and APIs in datasource components.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link className="text-blue-500 hover:text-blue-600 font-verdana" href="https://github.com/sanderrasmussen/team-24">
                      View on GitHub
                    </Link>
                    <Link
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-verdana"
                      href="https://github.com/sanderrasmussen/team-24">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                <div

                  className="h-48 bg-gray-200 dark:bg-gray-700 bg-cover flex items-center justify-center"
                  style={{
                    backgroundImage: `url('/DictionaryScreenShot.png')`
                    }}>
                
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-verdana">English-Chinese online Dictionary</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-verdana">
                    This project was made using google firebase (cloud firestore). This is still an ongoing project, but I have learned a lot and still learning. One of my problems was reducing the amount of queries to the cloud database, as more queries equals more cost.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link className="text-blue-500 hover:text-blue-600 font-verdana" href="/projects/dictionary">
                      Try it!
                    </Link>
                    <Link
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-verdana"
                      href="/projects/dictionary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden ">
                
                <div className="h-48 bg-gray-200 dark:bg-gray-700 bg-cover flex items-center justify-center"
                  style={{
                    backgroundImage: `url('/CchineseReader.png')`
                    }} >

                  </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-verdana">Classical Chinese Reader</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-verdana">
                  This Android application contains selected classics written in classical Chinese. By tapping on a word, the user will get a translation of the word.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link className="text-blue-500 hover:text-blue-600 font-verdana" href="https://play.google.com/store/apps/details?id=chinesereader.sander.reader&hl=en_US">
                      View on googlePlay 
                    </Link>
                    <Link
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-verdana"
                      href="#">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function CodeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>)
  );
}
