import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nama, email, nama_lengkap, password, isAdmin } = req.body;

        if (!email || !password || !nama) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        try {
            const existingUser = await prisma.user.findUnique({
                where: { email },
            });

            if (existingUser) {
                return res.status(400).json({ error: 'Email already registered' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await prisma.user.create({
                data: {
                    nama,
                    email,
                    nama_lengkap,
                    password: hashedPassword,
                    isAdmin: isAdmin || false,  // Default to false if not provided
                },
            });

            res.status(201).json({ message: 'User registered successfully', user: newUser });
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: 'Method not allowed' });
    }
}
