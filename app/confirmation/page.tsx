export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="card bg-base-200 shadow-xl max-w-md w-full">
        <div className="card-body text-center">
          {/* Icône de validation */}
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Titre */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Inscription confirmée !
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            Merci pour votre inscription à CyberHorizon 5G. Nous vous enverrons
            les détails par email avant l'événement.
          </p>
          {/* Informations supplémentaires */}
          <div className="bg-blue-50 rounded-lg p-4 text-left max-w-md mx-auto mb-6">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-gray-700">
                Pensez à vérifier votre boîte de réception et vos spams. Un
                email de confirmation devrait arriver d'ici quelques minutes.
              </p>
            </div>
          </div>
          {/* Bouton de retour */}
          <div className="card-actions justify-center mb-6">
            <a href="/" className="btn btn-neutral px-8">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
