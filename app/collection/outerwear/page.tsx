/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HoodiePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const target = new Date('2026-01-01T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      const time = {
        days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
        seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
      };

      setTimeLeft(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setSubmitted(true);
      setEmail('');
    } else {
      alert('Failed to subscribe. Try again!');
    }
    setLoading(false);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-black">
      <Image
        src="/gallery/outwear.png"
        alt="Background"
        fill
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
      <div className="relative z-10 text-center text-white px-4 max-w-xl">
        <Image
          src="/gallery/outwear.png"
          alt="GENYSTIC Logo"
          width={180}
          height={60}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">COMING SOON</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">We’re crafting something timeless. Stay tuned.</p>

        {/* Countdown */}
        <div className="mb-8 flex justify-center gap-4 text-sm md:text-base">
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className="rounded bg-white bg-opacity-10 px-4 py-2 backdrop-blur">
              <div className="text-xl font-bold">{timeLeft[unit as keyof typeof timeLeft]}</div>
              <div className="uppercase text-xs text-gray-400">{unit}</div>
            </div>
          ))}
        </div>

        {/* Email Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex items-center justify-center overflow-hidden rounded-xl border border-white bg-white bg-opacity-10 px-2 py-1 backdrop-blur">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-300 outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Notify Me'}
            </button>
          </form>
        ) : (
          <p className="mt-4 text-green-400 text-sm">Thanks! You'll be notified.</p>
        )}
      </div>
    </main>
  );
}
