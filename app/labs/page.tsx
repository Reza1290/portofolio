'use client';
import NavBar from '../components/NavBar';
import { Suspense } from 'react';
import CategoriesComponent from '../components/labs/CategoriesComponent';

export default function Page() {
  return (
    <main className="bg-utama flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center bg-utama max-w-screen-lg overflow-x-hidden w-full">
        <NavBar />
      </div>
      <div className="flex flex-col items-center max-w-screen-lg w-full overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <CategoriesComponent />
        </Suspense>
      </div>
    </main>
  );
}
