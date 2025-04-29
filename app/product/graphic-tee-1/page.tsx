'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { generateWhatsAppLink } from '@/lib/whatsapp'; // Import fungsi WhatsApp

export default function GraphicTee1Page() {
  const product = {
    name: 'Graphic Tee #1',
    price: 39,
    description: 'A timeless graphic tee with modern aesthetics. Crafted with premium cotton for unmatched comfort. Perfect for any occasion, delivering timeless style with unmatched quality.',
    images: [
      '/fashion/1_1.png',
      '/fashion/veltheria_depan.png',
      '/fashion/veltheria_belakang.png',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Load Cart from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save Cart to LocalStorage every time it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    const newItem = {
      id: Date.now(), // unique id
      name: product.name,
      size: selectedSize,
      quantity,
      price: product.price,
    };
    setCartItems([...cartItems, newItem]);
    setIsAdded(true);
    setCartOpen(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="flex flex-col space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg group">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedImage}
                  alt="Selected product image"
                  fill
                  className="object-cover rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 ${
                  selectedImage === img ? 'border-indigo-600' : 'border-gray-300'
                }`}
              >
                <Image src={img} alt="Thumbnail" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-2xl text-indigo-600 font-semibold mb-6">${product.price}</p>
          <p className="text-gray-700 text-base mb-8">{product.description}</p>

          {/* Size Selector */}
          <div className="mb-6">
            <h2 className="text-sm font-bold mb-2 text-gray-900">Select Size</h2>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-full text-sm font-semibold ${
                    selectedSize === size
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'border-gray-300 text-gray-700 hover:border-indigo-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8 flex items-center space-x-4">
            <h2 className="text-sm font-bold text-gray-900">Quantity</h2>
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-gray-700 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-gray-700 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-600 transition disabled:opacity-50"
            disabled={!selectedSize}
          >
            {isAdded ? 'Added!' : selectedSize ? `Add ${quantity} to Cart (Size: ${selectedSize})` : 'Select Size First'}
          </button>

          <Link href="/collection/tshirt" className="mt-8 text-sm text-indigo-600 hover:underline">
            ← Back to Collection
          </Link>
        </div>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg border-l border-gray-200 z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)} className="text-gray-500 hover:text-gray-900">
                ✕
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty.</p>
            ) : (
              <div className="flex-1 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start border-b pb-4">
                    <div>
                      <span className="font-semibold text-gray-900">{item.name}</span>
                      <div className="text-sm text-gray-600">Size: {item.size}</div>
                      <div className="text-sm text-gray-600">Quantity: {item.quantity}</div>
                      <div className="text-sm font-bold text-indigo-600 mt-1">${item.price * item.quantity}</div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Cart Total & Checkout */}
            <div className="mt-6">
              <div className="flex justify-between font-bold text-gray-900 mb-4">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <a
                href={generateWhatsAppLink(cartItems, cartTotal, selectedImage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-indigo-600 text-white py-3 rounded-full text-sm font-bold hover:bg-indigo-700 transition text-center block"
              >
                Checkout via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
