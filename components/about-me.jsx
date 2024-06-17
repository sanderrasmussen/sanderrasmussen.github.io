
import Link from "next/link"

export function AboutMe() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
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
      <main className="flex-1 flex justify-center items-center bg-gray-800">
        <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-800 w-full max-w-3xl">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold font-verdana">About Me</h1>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6">
              <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-8">
                <img
                  alt="Sander Rasmussen"
                  className="rounded-full"
                  height={200}
                  src="/sanderProfilbilde.jpg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={200} />
                <h2 className="text-2xl font-bold font-verdana mt-4">Sander Rasmussen</h2>
                <p className="text-gray-500 dark:text-gray-400 font-verdana mt-2">
                  I&#39;m a developer finishing my bachelor&#39;s degree: &quot;Informatikk: programmering og systemarkitektur&quot; at the university in Oslo summer 2024. I have experience in android development, databases, APIs, Algorithms, web-dev, Agile software development (scrum and kanban), machine-learning and programming in C. The programming languages i have the most experience with are: Kotlin, python, java, javascript. 
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <MailOpenIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <a className="text-blue-500 hover:text-blue-600 font-verdana" href="mailto:sander.rasmussn@gmail.com">
                      sander.rasmussn@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span className="font-verdana">+47 46774265</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GithubIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <a className="text-blue-500 hover:text-blue-600 font-verdana" href="https://github.com/sanderrasmussen">
                    https://github.com/sanderrasmussen
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden p-8 space-y-4">
                <h2 className="text-2xl font-bold font-verdana">More About Me</h2>
                <p className="text-gray-500 dark:text-gray-400 font-verdana">
                  In addition to Tech, I am also into language learning. I speak mandarin-chinese and have traveled to China and lived there for a short time. At UiO i took all the chinese classes that where avaiable including Business Chinese. I also enjoy playing guitar and making my own song arrangements. I have previously worked as a freelance jazz-musician playing the double-bass in a jazz-band. 
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-verdana">
                  In my free time, I enjoy coding hobby-projects, learning languages, playing guitar and go for hikes.
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-verdana">
                  If you&apos;d like to learn more about my work or connect with me, feel free to reach out via email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function GithubIcon(props) {
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
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>)
  );
}


function MailOpenIcon(props) {
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
      <path
        d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>)
  );
}


function PhoneIcon(props) {
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
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}
