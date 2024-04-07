import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from "next/server";

let locales = ['en', 'bn'];
let defaultLocale = 'en';

function getLocale(request) {
    const AcceptLanguage = request.headers.get('accept-language');
    const headers = { 'accept-language': AcceptLanguage }
    let languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next();

    const locale = getLocale(request);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
}

export const config = {
    matcher: [
      // Skip all internal paths (_next, assets, api)
      '/((?!api|assets|.*\\..*|_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }