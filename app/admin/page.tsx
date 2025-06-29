"use client";

import { useState } from "react";

type Reservation = {
  _id: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  faculte: string;
  filiere: string;
  niveau: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all"); // Nouvel état pour le filtre

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        setReservations(data.reservations);
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Mot de passe incorrect");
      }
    } catch (err) {
      setError("Erreur de connexion au serveur");
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    if (reservations.length === 0) return;

    const headers = [
      "Prénom",
      "Nom",
      "Email",
      "Téléphone",
      "Faculté",
      "Filière",
      "Niveau",
      "Date",
    ];
    const csvRows = [
      headers.join(";"),
      ...reservations.map((res) =>
        [
          `"${res.prenom.replace(/"/g, '""')}"`,
          `"${res.nom.replace(/"/g, '""')}"`,
          `"${res.email.replace(/"/g, '""')}"`,
          `"${res.telephone.replace(/"/g, '""')}"`,
          `"${res.faculte.replace(/"/g, '""')}"`,
          `"${res.filiere.replace(/"/g, '""')}"`,
          `"${res.niveau.replace(/"/g, '""')}"`,
          `"${new Date(res.createdAt).toLocaleString()}"`,
        ].join(";")
      ),
    ];

    const blob = new Blob(["\uFEFF" + csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `reservations_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Fonction de filtrage
  const filteredReservations = reservations.filter((res) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "FST") return res.faculte === "FST";
    if (activeFilter === "ISI") return res.faculte === "ISI";
    if (activeFilter === "ENIT") return res.faculte === "ENIT";
    if (activeFilter === "INSAT") return res.faculte === "INSAT";
    if (activeFilter === "ESPRIT") return res.faculte === "ESPRIT";
    if (activeFilter === "ENSIT") return res.faculte === "ENSIT";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Admin */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">
            Espace Administrateur
          </h1>
          {isAuthenticated && (
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setPassword("");
              }}
              className="text-sm text-red-600 hover:text-red-800 cursor-pointer"
            >
              Déconnexion
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Connexion Admin
              </h2>
              <p className="text-gray-600 mt-2">
                Veuillez entrer le mot de passe administrateur
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full bg-gray-50"
                  required
                  autoFocus
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}

              <button
                type="submit"
                className="btn btn-neutral w-full"
                disabled={isLoading}
              >
                {isLoading ? "Connexion..." : "Se connecter"}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* En-tête avec statistiques */}
            <div className="px-6 py-4 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Liste des réservations
                </h2>
                <p className="text-sm text-gray-500">
                  {reservations.length} inscription(s) au total
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={exportToCSV}
                  className="btn btn-outline btn-sm border-green-500 text-green-600 hover:bg-green-50"
                  disabled={reservations.length === 0}
                >
                  Exporter en CSV
                </button>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-outline btn-sm"
                  >
                    Filtrer
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a
                        onClick={() => setActiveFilter("all")}
                        className={activeFilter === "all" ? "active" : ""}
                      >
                        Tous les facultés
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveFilter("FST")}
                        className={activeFilter === "FST" ? "active" : ""}
                      >
                        FST
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveFilter("INSAT")}
                        className={activeFilter === "INSAT" ? "active" : ""}
                      >
                        INSAT
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveFilter("ISI")}
                        className={activeFilter === "ISI" ? "active" : ""}
                      >
                        ISI
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveFilter("ENSIT")}
                        className={activeFilter === "ENSIT" ? "ENSIT" : ""}
                      >
                        ENSIT
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveFilter("ESPRIT")}
                        className={activeFilter === "ESPRIT" ? "active" : ""}
                      >
                        ESPRIT
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setActiveFilter("ENIT")}
                        className={activeFilter === "ENIT" ? "active" : ""}
                      >
                        ENIT
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tableau des réservations */}
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                      Nom/Prénom
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                      Email
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                      Téléphone
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                      Faculté
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                      Filière
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                      Niveau
                    </th>

                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reservations.length > 0 ? (
                    filteredReservations.map((res) => (
                      <tr key={res._id} className="hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium">{res.nom}</div>
                          <div className="text-sm text-gray-500">
                            {res.prenom}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {res.email}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {res.telephone}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              res.faculte === "Matin"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {res.faculte}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {res.filiere}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {res.niveau}
                        </td>

                        <td className="py-3 px-4 text-sm text-gray-500">
                          {new Date(res.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="py-6 text-center text-gray-500"
                      >
                        Aucune réservation trouvée
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination (optionnelle) */}
            {reservations.length > 0 && (
              <div className="px-6 py-4 border-t flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Affichage de 1 à {reservations.length} sur{" "}
                  {reservations.length} entrées
                </div>
                <div className="join">
                  <button className="join-item btn btn-sm">«</button>
                  <button className="join-item btn btn-sm btn-active">1</button>
                  <button className="join-item btn btn-sm">»</button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
