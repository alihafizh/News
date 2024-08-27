const express = require('express');
const next = require('next');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // API route
  server.post('/api/apilogin/register', async (req, res) => {
    const { nama, email, nama_lengkap, password } = req.body;

    if (!email || !password || !nama || !nama_lengkap) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        nama: nama,
        email: email,
        nama_lengkap: nama_lengkap,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  });

  // Default Next.js handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
