"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    faculte: "",
    filiere: "",
    niveau: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/confirmation");
    } else {
      setError("Erreur lors de l'enregistrement. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Contenu principal */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
                Inscription à l'événement
              </h1>

              {error && <p className="text-red-500 mb-6">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ligne Nom/Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-gray-50"
                      required
                    />
                  </div>
                </div>

                {/* Ligne Email/Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-gray-50"
                      required
                    />
                  </div>
                </div>

                {/* Faculté */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Faculté
                  </label>
                  <select
                    name="faculte"
                    value={formData.faculte}
                    onChange={handleChange}
                    className="select select-bordered w-full bg-gray-50"
                    required
                  >
                    <option value="">-- Sélectionnez votre faculté --</option>
                    <option value="fst">FST</option>
                    <option value="enit">ENIT</option>
                    <option value="isi">ISI</option>
                    <option value="insat">INSAT</option>
                    <option value="ensit">ENSIT</option>
                    <option value="Esprit">ESPRIT</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Ligne Filière/Niveau */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Filière
                    </label>
                    <input
                      type="text"
                      name="filiere"
                      value={formData.filiere}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Niveau
                    </label>
                    <select
                      name="niveau"
                      value={formData.niveau}
                      onChange={handleChange}
                      className="select select-bordered w-full bg-gray-50"
                      required
                    >
                      <option value="">-- Sélectionnez votre niveau --</option>
                      <option value="Licence 1">Licence 1</option>
                      <option value="Licence 2">Licence 2</option>
                      <option value="Licence 3">Licence 3</option>
                      <option value="cycle 1">1ere cycle</option>
                      <option value="cycle 2">2eme cycle</option>
                      <option value="cycle 3">3eme cycle</option>
                      <option value="prepa">1ere prepa</option>
                      <option value="prepa 2">2eme prepa</option>
                    </select>
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button type="submit" className="btn btn-neutral flex-1">
                    Soumettre ma candidature
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline flex-1"
                    onClick={() => router.push("/")}
                  >
                    Retour
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
