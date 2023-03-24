'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://chromeunboxed.com/wp-content/uploads/2022/12/ChatGPT-Feature.png?ezimgfmt=ng%3Awebp%2Fngcb91%2Frs%3Adevice%2Frscb91-1"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn('google')}
        className="text-white font-bold animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}
