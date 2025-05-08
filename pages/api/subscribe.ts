import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb'; // <--- perhatikan path ini

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { email } = req.body;
  if (!email || !email.includes('@')) return res.status(400).json({ message: 'Invalid email' });

  try {
    const client = await clientPromise;
    const db = client.db('genystic_db');
    const collection = db.collection('subscribers');

    const exists = await collection.findOne({ email });
    if (exists) return res.status(409).json({ message: 'Email already subscribed' });

    await collection.insertOne({ email, createdAt: new Date() });

    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (err) {
    console.error('API ERROR:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
