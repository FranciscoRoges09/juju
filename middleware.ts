import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Extrai o subdomínio
  const parts = host.split('.');
  const subdomain = parts.length > 2 ? parts[0] : null;

  // Se for subdomínio "landing", roteia para /landing
  if (subdomain === 'landing' || subdomain === 'www') {
    if (!url.pathname.startsWith('/landing')) {
      url.pathname = '/landing' + url.pathname;
    }
  }

  // Se for domínio principal e tentar acessar /verify, mantém em /
  if (!subdomain && url.pathname === '/verify') {
    url.pathname = '/';
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
