import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const token = req.headers.authorization?.split(' ')[1]; // Bearer token

        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            
            if (decoded.isAdmin) {

                res.status(200).json({ message: 'Admin access granted' });
            } else {
                res.status(403).json({ error: 'Access denied' });
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            res.status(401).json({ error: 'Invalid token' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ error: 'Method not allowed' });
    }
}
