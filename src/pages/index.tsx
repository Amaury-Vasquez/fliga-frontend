import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className={`hero min-h-screen ${montserrat}`}>
      <div className="hero-content px-4 text-center">
        <article className="max-w-screen xs:max-w-md md:max-w-xl flex flex-col gap-8">
          <h1 className="xxs:text-xl xs:text-3xl md:text-5xl font-bold max-w-full">
            NextJS daisyUI starter
          </h1>
          <p>
            Template project for NextJS with daisyUI. Explore components by
            visiting chromatic or by clonning the project and running the
            storybook locally.
          </p>
          <div className="grid grid-cols-2 gap-4 px-8">
            <a className="btn btn-primary" rel="noopener noreferrer" href="">
              Chromatic
            </a>
            <a className="btn btn-secondary" rel="noopener noreferrer" href="">
              Repositorie
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
