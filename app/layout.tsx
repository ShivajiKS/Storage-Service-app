import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter as FontSans } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';

export const metadata: Metadata = {
   title: 'Storage Service App',
   description: 'we can store our files',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider>
         <html lang='en' suppressHydrationWarning>
            <body
               className={cn(
                  'flex min-h-screen flex-col bg-gray-200 font-sans antialiased transition-all duration-700 dark:bg-zinc-900'
               )}
            >
               <ThemeProvider
                  attribute='class'
                  defaultTheme='system'
                  enableSystem
                  disableTransitionOnChange
               >
                  <Header />
                  <main className='grow'>{children}</main>
                  <footer className='mb-2 flex h-12 items-center justify-center'>
                     <h2 className='text-lg font-bold capitalize lg:text-xl'>
                        @ shivaji - 2023
                     </h2>
                  </footer>
               </ThemeProvider>
            </body>
         </html>
      </ClerkProvider>
   );
}
