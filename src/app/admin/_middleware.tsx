"use client"
import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

interface DecodedToken {
    id: number;
    isAdmin: boolean;
}

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value || '';

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;

        if (decoded.isAdmin) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/unauthorized', request.url));
        }
    } catch (error) {
        console.error('Token verification failed:', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}
