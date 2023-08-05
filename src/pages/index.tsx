import { Link } from "@/ui";

export default function HomePage() {
  return (
    <main className={`hero min-h-content`}>
      <div className="hero-content px-4 text-center">
        <article className="max-w-screen xs:max-w-md md:max-w-3xl flex flex-col gap-8">
          <h1 className="xxs:text-xl xs:text-3xl md:text-5xl font-bold max-w-full text-xl px-2">
            Fliga, administra tu equipo y llevalos al siguiente nivel.
          </h1>
          <p className="xxs:text-sm md:text-xl max-w-full md:px-16 px-4 text-base">
            Fliga es una aplicacion web que te permite administrar tu equipo de
            futbol, llevando un control de los jugadores, partidos y
            estadisticas. Ofreciendo sugerencias para mejorar el rendimiento de
            tu equipo.
          </p>
          <Link
            href="/register"
            variant="primary"
            className="w-fit px-10 m-auto"
          >
            Registrarme
          </Link>
        </article>
      </div>
    </main>
  );
}
