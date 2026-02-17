import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig, navConfig } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-gray-900">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-gray-500">{siteConfig.description}</p>
          </div>

          {/* Nav links */}
          {navConfig.links.map((item) => (
            <div key={item.label}>
              <p className="text-sm font-semibold text-gray-700">{item.label}</p>
              <ul className="mt-3 space-y-2">
                {item.children ? (
                  item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
