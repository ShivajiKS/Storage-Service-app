'use client';

import { cn } from '@/lib/utils';
import { Divide } from 'lucide-react';
import React from 'react';
import Dropzone from 'react-dropzone';

const DropAndDrag = () => {
   const maxSize = 100;
   return (
      <Dropzone
         minSize={0}
         maxSize={maxSize}
         onDrop={(acceptedFiles) => console.log(acceptedFiles)}
      >
         {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragReject,
            fileRejections,
         }) => {
            let isFileTooLarge =
               fileRejections.length > 0 &&
               fileRejections[0].file.size > maxSize;
            return (
               <section className='m-2'>
                  <div
                     {...getRootProps()}
                     className={cn(
                        'flex h-56 w-screen items-center justify-center rounded-lg border-b border-dashed p-5 text-center text-xl',
                        isDragActive
                           ? 'animate-pulse bg-blue-600 text-white'
                           : 'bg-slate-100/50 text-slate-400 dark:bg-slate-800/80'
                     )}
                  >
                     <input {...getInputProps()} />

                     {!isDragActive && 'Click Here or Drag a files to Upload '}
                     {isDragActive &&
                        !isDragReject &&
                        'Drag to Upload this file'}
                     {isDragReject && 'File type not accepted, Sorry'}
                     {isFileTooLarge && <div>File is too Large</div>}
                  </div>
               </section>
            );
         }}
      </Dropzone>
   );
};

export default DropAndDrag;
