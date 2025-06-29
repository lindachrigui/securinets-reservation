"use client";

import { useState, useEffect } from "react";

type Reservation = {
  _id: string;
  prenom: string;
  nom: string;
  email: string;
  filiere: string;
  niveau: string;
  session: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]); //tableau contenant les données reçues depuis MongoDB
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // pour empecher le comportement par defaut de form

    const res = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      const data = await res.json();
      setReservations(data.reservations);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Mot de passe incorrect ou erreur serveur.");
      setIsAuthenticated(false);
      setReservations([]); // Vider la liste si tentative ratée
    }
  };
  const exportToCSV = () => {
    if (reservations.length === 0) return;

    const headers = ["prenom", "nom", "email", "filiere", "niveau", "session"];

    const csvRows = [
      headers.join(";"), // <-- point-virgule
      ...reservations.map(
        (res) =>
          headers
            .map((field) => {
              const escaped = ("" + (res as any)[field]).replace(/"/g, '""');
              return `"${escaped}"`;
            })
            .join(";") // <-- point-virgule
      ),
    ];

    const BOM = "\uFEFF";
    const csvContent = BOM + csvRows.join("\n"); //facilite la reconnaissance correcte des caractères spéciaux par Excel.

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "reservations.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8">
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
          <h1 className="text-2xl font-bold">Connexion Admin</h1>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Se connecter
          </button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Liste des réservations</h1>
          <button
            onClick={exportToCSV}
            className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Exporter en CSV
          </button>
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Nom</th>
                <th className="p-2">Email</th>
                <th className="p-2">Filière</th>
                <th className="p-2">Niveau</th>
                <th className="p-2">Session</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((res) => (
                <tr key={res._id} className="border-t">
                  <td className="p-2">
                    {res.prenom} {res.nom}
                  </td>
                  <td className="p-2">{res.email}</td>
                  <td className="p-2">{res.filiere}</td>
                  <td className="p-2">{res.niveau}</td>
                  <td className="p-2">{res.session}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
