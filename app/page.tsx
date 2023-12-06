import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function Home() {
   const { userId } = await auth();
   if (userId) {
      redirect('/dashboard');
   }

   return (
      <main className='mt-24 flex items-center justify-center'>
         <h2>Welcome Storage Service</h2>
      </main>
   );
}
