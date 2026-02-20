"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LOGO_IMAGE_PATH } from "@/lib/assets";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="md:w-[340px] flex-shrink-0">
            <div className="mb-3 flex items-center space-x-2">
              <Image src={LOGO_IMAGE_PATH} alt="NILILIA Logo" width={120} height={32} className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight text-white">NILILIA</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              글로벌 콘텐츠 현지화의 새로운 기준,<br />
              닐리리아가 당신의 콘텐츠에 날개를 달아드립니다.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Service</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="transition-colors hover:text-white">번역 · 현지화</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">기술</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">유통</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Family Sites</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="https://contentsfly.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">ContentsFly</a></li>
              <li><a href="https://contentsfly-s.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">ContentsFly S</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="font-medium text-white">문의 가능 시간 : 10시~19시</p>
              <p>번역 문의 : <a href="tel:070-5227-1571" className="transition-colors hover:text-white">070-5227-1571</a></p>
              <p>기업 맞춤 번역 문의 :<br /><a href="mailto:sales@nililia.com" className="transition-colors hover:text-white">sales@nililia.com</a></p>
              <p>제휴 문의 :<br /><a href="mailto:partnership@nililia.com" className="transition-colors hover:text-white">partnership@nililia.com</a></p>
              <p>채용 문의 :<br /><a href="mailto:recruit@nililia.com" className="transition-colors hover:text-white">recruit@nililia.com</a></p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/terms" className="transition-colors hover:text-white">이용약관</Link>
              <Link href="/privacy" className="font-semibold transition-colors hover:text-white">개인정보처리방침</Link>
            </div>
            <p className="text-sm text-gray-500">Copyright © 2026 Nililia All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
