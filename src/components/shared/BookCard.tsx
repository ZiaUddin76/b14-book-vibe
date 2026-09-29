import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface IBookCardProps {
    book: IBook;
}


const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            className='group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'
        >

            {/* Book Image */}
            <div className='relative h-[320px] overflow-hidden bg-slate-100'>

                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className='object-cover transition duration-500 group-hover:scale-105'
                />

                {/* Category */}
                <div className='absolute left-4 top-4'>
                    <span className='rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-600 shadow-md backdrop-blur-sm'>
                        {book.category}
                    </span>
                </div>

                {/* Favorite Button */}
                <button className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl shadow-md backdrop-blur-sm transition hover:bg-white hover:text-red-500'>
                    ♡
                </button>

            </div>

            {/* Card Content */}
            <div className='p-6'>

                {/* Book Name */}
                <h2 className='line-clamp-1 text-2xl font-bold text-slate-800'>
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className='mt-1 text-sm text-slate-500'>
                    by{' '}
                    <span className='font-medium text-slate-700'>
                        {book.author}
                    </span>
                </p>

                {/* Rating */}
                <div className='mt-4 flex items-center gap-2'>

                    <div className='text-yellow-400'>
                        ★★★★★
                    </div>

                    <span className='font-semibold text-slate-700'>
                        {book.rating}
                    </span>

                </div>

                {/* Tags */}
                <div className='mt-4 flex flex-wrap gap-2'>

                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className='rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600'
                        >
                            {tag}
                        </span>
                    ))}

                </div>

                {/* Book Information */}
                <div className='my-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-4 text-center'>

                    <div>
                        <p className='text-xs text-slate-400'>
                            Pages
                        </p>

                        <p className='mt-1 font-semibold text-slate-700'>
                            {book.totalPages}
                        </p>
                    </div>

                    <div className='border-x border-slate-100'>
                        <p className='text-xs text-slate-400'>
                            Published
                        </p>

                        <p className='mt-1 font-semibold text-slate-700'>
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className='text-xs text-slate-400'>
                            Publisher
                        </p>

                        <p className='mt-1 truncate px-1 font-semibold text-slate-700'>
                            {book.publisher}
                        </p>
                    </div>

                </div>

                {/* Review */}
                <p className='line-clamp-3 text-sm leading-6 text-slate-500'>
                    {book.review}
                </p>

                {/* Read More Button */}

                <Link href={`/books/${book.bookId}`} >
                    <button className='mt-6 w-full rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg'>
                        Read More →
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default BookCard;

