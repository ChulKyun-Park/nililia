"use client";

import { Link } from "@/i18n/navigation";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* 브랜드/로고 영역 */}
          <div className="md:w-[340px] flex-shrink-0">
            <div className="flex items-center space-x-2 mb-3">
              <img 
                src="https://static.readdy.ai/image/1247e62f0f9aacf91e63316ef6300fa9/f9372a1144c0cf5976902770a6dd77f8.png" 
                alt="NILILIA Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white tracking-tight">NILILIA</span>
            </div>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              글로벌 콘텐츠 현지화의 새로운 기준,<br />
              닐리리아가 당신의 콘텐츠에 날개를 달아드립니다.
            </p>
          </div>

          {/* Service 영역 */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Service</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">번역 · 현지화</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">기술</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">유통</Link>
              </li>
            </ul>
          </div>

          {/* Family Sites 영역 */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Family Sites</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="https://contentsfly.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ContentsFly</a>
              </li>
              <li>
                <a href="https://contentsfly-s.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ContentsFly S</a>
              </li>
            </ul>
          </div>

          {/* Contact 영역 */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="text-white font-medium">문의 가능 시간 : 10시~19시</p>
              <p>번역 문의 : <a href="tel:070-5227-1571" className="hover:text-white transition-colors">070-5227-1571</a></p>
              <p>기업 맞춤 번역 문의 :<br/><a href="mailto:sales@nililia.com" className="hover:text-white transition-colors">sales@nililia.com</a></p>
              <p>제휴 문의 :<br/><a href="mailto:partnership@nililia.com" className="hover:text-white transition-colors">partnership@nililia.com</a></p>
              <p>채용 문의 :<br/><a href="mailto:recruit@nililia.com" className="hover:text-white transition-colors">recruit@nililia.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom 영역 */}
        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
              <Link href="/privacy" className="hover:text-white transition-colors font-semibold">개인정보처리방침</Link>
            </div>
            <p className="text-sm text-gray-500">
              Copyright © 2026 Nililia All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}