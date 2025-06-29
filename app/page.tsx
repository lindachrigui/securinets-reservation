"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const teamMembers = [
    { id: 1, name: "Bassem Rebai", role: "Coordinateur", photo: "/bassem.png" },
    {
      id: 2,
      name: "Linda Chrigui",
      role: "Responsable Logistique",
      photo: "/linda.png",
    },
    { id: 3, name: "Hela Zouch", role: "millitaire dormi", photo: "/hela.png" },
    {
      id: 4,
      name: "Abdelhamid Tanabene",
      role: "Responsable RH",
      photo: "/abdou.png",
    },
  ];

  return (
    <div className="text-center">
      {/* Navbar Fixe */}
      <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100/95 backdrop-blur-sm shadow-sm">
        <div className="navbar-start">
          <a className="mr-4 hidden lg:flex">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#oc">Organisation Committee</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#oc">Organisation Committee</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>

      {/* Contenu Principal avec padding pour la navbar fixe */}
      <main className="pt-16">
        {/* Section Hero */}
        <section
          id="home"
          className="hero min-h-[calc(100vh-4rem)] bg-gradient-to-r from-base-200 to-base-100"
        >
          <div className="hero-content flex-col lg:flex-row gap-12">
            <img
              src="/reg_open.png"
              alt="Cyber Horizon Hackathon"
              className="max-w-md rounded-lg shadow-2xl animate-fadeIn"
            />
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Cyber Horizon Hackathon
              </h1>
              <p className="text-lg mb-8">
                CyberHorizon – 5G Edition est le premier hackathon de
                cybersécurité 5G en Tunisie, une initiative ambitieuse qui vise
                à réunir entre 50 et 80 participants autour des enjeux de la
                sécurité des réseaux 5G.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  className="btn btn-neutral sm:btn-sm md:btn-md lg:btn-lg mt-6 animate-pulse "
                  onClick={() => router.push("/register")}
                >
                  Participate
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section About Us */}
        <section id="about" className="py-20 px-4 sm:px-8 lg:px-16 bg-base-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-left">About Us</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <p className="text-lg">
                  CyberHorizon – 5G Edition est le tout premier hackathon de
                  cybersécurité dédié à la 5G en Tunisie. Cet événement innovant
                  réunit entre 50 et 80 participants pour relever les défis
                  majeurs liés à la sécurité des réseaux 5G.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Our Mission</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      <span>
                        Mettre à l'épreuve les capacités des participants face à
                        une crise cyber réelle
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      <span>
                        Évaluer leurs réflexes stratégiques, tactiques et
                        techniques
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      <span>
                        Promouvoir une culture de résilience en cybersécurité
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      <span>
                        Créer un lien fort entre étudiants, professionnels et
                        institutions
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="stats shadow bg-base-200 mt-6 gap-6">
                  <div className="stat">
                    <div className="stat-value text-primary">50+</div>
                    <div className="stat-title">Participants</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value text-secondary">24h</div>
                    <div className="stat-title">Non-stop Challenge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Organisation Committee */}
        <section id="oc" className="py-20 px-4 bg-base-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Organisation Committee
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Partie description */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Notre Équipe d'Organisation
                </h3>
                <p className="text-lg">
                  Le Comité d'Organisation (OC) est composé d'experts en
                  cybersécurité et d'organisateurs dévoués qui travaillent sans
                  relâche pour faire de CyberHorizon 5G une expérience
                  mémorable.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-medium">Rôles Principaux :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Coordinateurs</strong> : Gestion globale de
                        l'événement
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Challenges Masters</strong> : Création des
                        épreuves techniques
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Logistique</strong> : Organisation pratique et
                        accueil
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>
                        <strong>Relations Sponsors</strong> : Gestion des
                        partenariats
                      </span>
                    </li>
                  </ul>
                </div>

                <button
                  className="btn btn-neutral mt-6 animate-pulse"
                  onClick={() => router.push("/join-oc")}
                >
                  Rejoindre le Comité d'Organisation
                </button>
              </div>

              {/* Partie visuelle (membres OC) */}

              <div className="grid grid-cols-2 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="card bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-48 w-full object-cover"
                      />
                    </figure>
                    <div className="card-body p-4">
                      <h3 className="card-title text-sm">{member.name}</h3>
                      <p className="text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <footer className="footer p-10 bg-neutral text-neutral-content ">
          <div className="max-w-7xl mx-auto w-full">
            {/* Première ligne : Logo et réseaux sociaux */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="CyberHorizon Logo"
                    className="h-12 w-auto"
                  />
                  <span className="text-xl font-bold">CyberHorizon 5G</span>
                </div>
                <p className="opacity-80">
                  Le premier hackathon de cybersécurité 5G en Tunisie
                </p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Deuxième colonne : Liens rapides */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-primary transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/register"
                      className="hover:text-primary transition-colors"
                    >
                      Inscription
                    </a>
                  </li>
                  <li>
                    <a
                      href="/join-oc"
                      className="hover:text-primary transition-colors"
                    >
                      Rejoindre l'organisation
                    </a>
                  </li>
                </ul>
              </div>

              {/* Troisième colonne : Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>securinetsfst@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+216 12 345 678</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>FST, Tunis, Tunisie</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="divider my-6"></div>

            {/* Deuxième ligne : Copyright et mentions légales */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm opacity-80">
                © {new Date().getFullYear()} CyberHorizon 5G. Tous droits
                réservés.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
