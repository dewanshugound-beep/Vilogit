import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.VILOGIT_API_URL || 'http://localhost:8000';

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, await params);
}
export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, await params);
}
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, await params);
}
export async function PUT(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, await params);
}
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  return proxyToBackend(req, await params);
}

async function proxyToBackend(
  req: NextRequest,
  params: { path: string[] }
) {
  const path = params.path?.join('/') ?? '';
  const targetUrl = `${BACKEND_URL}/api/v1/${path}${req.nextUrl.search}`;

  const headers = new Headers();
  req.headers.forEach((value, key) => {
    if (!['host', 'connection', 'content-length'].includes(key.toLowerCase())) {
      headers.set(key, value);
    }
  });
  headers.set('X-Forwarded-For', req.ip || req.headers.get('x-real-ip') || 'unknown');
  headers.set('X-Forwarded-Host', req.headers.get('host') || '');

  let body: BodyInit | undefined;
  const method = req.method;
  if (!['GET', 'HEAD'].includes(method)) {
    try {
      body = await req.text();
    } catch { body = undefined; }
  }

  try {
    const backendRes = await fetch(targetUrl, {
      method,
      headers,
      body,
      redirect: 'manual',
    });

    const resHeaders = new Headers();
    backendRes.headers.forEach((value, key) => {
      // Forward Set-Cookie for httpOnly refresh tokens
      if (!['transfer-encoding'].includes(key.toLowerCase())) {
        resHeaders.set(key, value);
      }
    });

    const responseBody = await backendRes.text();

    return new NextResponse(responseBody, {
      status: backendRes.status,
      headers: resHeaders,
    });
  } catch (err: any) {
    console.error('[Vilogit API Proxy Error]', targetUrl, err.message);
    return NextResponse.json(
      { status: 'error', message: 'Failed to reach back-end server (Vilogit).' },
      { status: 502 }
    );
  }
}
