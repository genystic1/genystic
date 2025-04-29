'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'ABOUT', href: '/about' },
  {
    name: 'COLLECTION',
    submenu: [
      { name: 'T-Shirt Collection', href: '/collection/tshirt' },
      { name: 'Hoodies & Sweatshirts', href: '/collection/hoodies' },
      { name: 'Pants & Shorts', href: '/collection/bottoms' },
      { name: 'Outerwear', href: '/collection/outerwear' },
      { name: 'Accessories', href: '/collection/accessories' },
    ],
  },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'SHOP NOW', href: '/artical' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>(
    {},
  );

  return (
    <header className="fixed top-0 z-50 h-16 w-full bg-white shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">GENYSTIC</span>
            <Image
              className="h-8 w-auto"
              src="/logo/logopanjang.png"
              alt="GENYSTIC"
              height={100}
              width={100}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="relative hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.submenu ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="flex items-center gap-1 text-sm font-bold text-gray-700 transition hover:text-indigo-600">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {hoveredMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-gray-200"
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel={
                  item.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="flex items-center gap-1 text-sm font-bold text-gray-700 transition hover:text-indigo-600"
              >
                {item.name === 'SHOP NOW' && (
                  <ShoppingBag className="h-4 w-4" />
                )}
                {item.name}
              </a>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">GENYSTIC</span>
              <Image
                className="h-8 w-auto"
                src="/logo/logo.png"
                alt="GENYSTIC"
                width={20}
                height={20}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.submenu ? (
                    <div key={item.name}>
                      <button
                        className="flex w-full items-center justify-between py-2 text-base font-bold text-gray-900"
                        onClick={() =>
                          setExpandedMenus((prev) => ({
                            ...prev,
                            [item.name]: !prev[item.name],
                          }))
                        }
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transform transition-transform duration-200 ${
                            expandedMenus[item.name] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedMenus[item.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 overflow-hidden"
                          >
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="block py-2 text-sm text-gray-700 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
