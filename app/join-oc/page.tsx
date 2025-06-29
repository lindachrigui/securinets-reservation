"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinOC() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    experience: "",
    motivation: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    router.push("/confirmation");
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Contenu principal avec padding pour la navbar */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Section Hero */}
          <section className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Rejoindre le Comité d'Organisation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contribuez à faire de CyberHorizon 5G un événement marquant de la
              cybersécurité en Tunisie
            </p>
          </section>

          {/* Formulaire moderne */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-4">
                Formulaire de Candidature
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ligne Nom/Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full bg-gray-50"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full bg-gray-50"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full bg-gray-50"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Rôle */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Rôle souhaité
                  </label>
                  <select
                    className="select select-bordered w-full bg-gray-50"
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Sélectionnez un rôle
                    </option>
                    <option>Coordinateur d'événement</option>
                    <option>Challenge Master</option>
                    <option>Responsable Logistique</option>
                    <option>Relations Sponsors</option>
                  </select>
                </div>

                {/* Expérience */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Expérience pertinente
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full bg-gray-50 h-32"
                    placeholder="Décrivez votre expérience en organisation d'événements, cybersécurité, etc."
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                {/* Motivation */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Lettre de motivation
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full bg-gray-50 h-32"
                    placeholder="Pourquoi souhaitez-vous rejoindre le comité d'organisation ?"
                    value={formData.motivation}
                    onChange={(e) =>
                      setFormData({ ...formData, motivation: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button type="submit" className="btn btn-neutral flex-1">
                    Soumettre ma candidature
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline flex-1"
                    onClick={() => router.back()}
                  >
                    Retour
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Sections informatives */}
          <section className="mt-16 space-y-6">
            <div className="collapse bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Qu'attendons-nous des membres du comité ?
              </div>
              <div className="collapse-content">
                <ul className="space-y-3">
                  <li>• Engagement sur toute la durée de préparation</li>
                  <li>• Disponibilité pour des réunions hebdomadaires</li>
                  <li>• Compétences spécifiques selon les rôles</li>
                  <li>
                    • Esprit d'équipe et capacité à travailler sous pression
                  </li>
                </ul>
              </div>
            </div>

            <div className="collapse bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                Avantages à rejoindre le comité
              </div>
              <div className="collapse-content">
                <ul className="space-y-3">
                  <li>• Accès privilégié à l'écosystème cybersécurité</li>
                  <li>• Certification de participation</li>
                  <li>• Networking avec experts et sponsors</li>
                  <li>• Expérience professionnelle valorisante</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer centré */}
      <footer className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>
          <p className="text-gray-600 mb-6">
            Le premier hackathon de cybersécurité 5G en Tunisie
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {/* Icônes réseaux sociaux */}
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} CyberHorizon 5G. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
