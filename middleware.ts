import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(req: NextRequest) {
  const res = NextResponse.next()
 
  // Add HSTS header (1 year, no subdomains, no preload)
  res.headers.set('Strict-Transport-Security', 'max-age=31536000')
 
  return res
}