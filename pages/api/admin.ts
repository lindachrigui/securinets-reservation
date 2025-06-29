// pages/api/admin.ts
import type { NextApiRequest, NextApiResponse } from 'next'; //"Je vais utiliser un objet req qui est de type NextApiRequest, et res qui est de type NextApiResponse."
import clientPromise from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }
  const { password } = req.body; // si la methode est get on recupere depuis url donc .query

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('securinets');
    const reservations = await db.collection('reservations').find().toArray();  // recuperer les documents de la collection 

    res.status(200).json({ reservations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
}
