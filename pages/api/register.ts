// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';  // pour l’autocomplétion et la sécurité.
import clientPromise from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prenom, nom, email, filiere, niveau, session } = req.body;

    if (!prenom || !nom || !email || !filiere || !niveau || !session) {
      return res.status(400).json({ message: 'Champs manquants' });
    }

    try {
      const client = await clientPromise;  //On attend la connexion MongoDB via clientPromise.
      const db = client.db('securinets'); //On sélectionne la base de données securinets.
      const collection = db.collection('reservations');  //On récupère la collection reservations

      await collection.insertOne({  // insertion dans la collection 
        prenom,
        nom,
        email,
        filiere,
        niveau,
        session,
        createdAt: new Date(),
      });

      res.status(200).json({ message: 'Inscription réussie !' });
    } catch (error) {
      console.error('Erreur MongoDB:', error);
      res.status(500).json({ message: 'Erreur serveur' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
