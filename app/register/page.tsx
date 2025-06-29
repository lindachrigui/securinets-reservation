"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    filiere: "",
    niveau: "",
    session: "",
  });

  const [error, setError] = useState("");
  const router = useRouter(); // Initialisation de l’API de navigation Next.js, utilisée pour rediriger l’utilisateur après inscription.

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/confirmation"); // redirection
    } else {
      setError("Erreur lors de l’enregistrement. Veuillez réessayer.");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inscription à l’événement</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="filiere"
          placeholder="Filière"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="niveau"
          placeholder="Niveau"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <select
          name="session"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">-- Choisissez une session --</option>
          <option value="Matin">Matin</option>
          <option value="Après-midi">Après-midi</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          S’inscrire
        </button>
      </form>
    </div>
  );
}
