import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';


interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}


const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
};



const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {

    const { id } = await params;

    const booksData = await getBooks();

    const book = booksData.find((book: IBook) => String(book.bookId) === String(id)) as IBook;


    console.log(book, "book");


    return (
        <div className='container mx-auto py-12 px-4'>

            <div className="card lg:card-side overflow-hidden bg-base-100 border border-slate-200 shadow-xl rounded-3xl">

                {/* Book Image */}
                <figure className='lg:w-1/2 bg-slate-100 p-6 lg:p-10'>
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={300}
                        className='w-full max-h-[550px] object-contain rounded-2xl shadow-lg'
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body lg:w-1/2 justify-center p-6 md:p-10">

                    {/* Category */}
                    <div>
                        <span className='inline-block rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-600'>
                            {book.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="card-title mt-3 text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className='text-lg text-slate-500'>
                        by <span className='font-semibold text-slate-700'>{book.author}</span>
                    </p>

                    {/* Rating */}
                    <div className='flex items-center gap-3 mt-3'>
                        <div className='text-yellow-400 text-xl'>
                            ★★★★★
                        </div>

                        <span className='font-semibold text-slate-700'>
                            {book.rating}
                        </span>
                    </div>

                    {/* Review */}
                    <p className='mt-5 text-slate-500 leading-7'>
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mt-5'>
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className='rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600'
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Book Information */}
                    <div className='grid grid-cols-3 gap-3 mt-7 border-y border-slate-200 py-5 text-center'>

                        <div>
                            <p className='text-xs uppercase tracking-wide text-slate-400'>
                                Pages
                            </p>

                            <p className='mt-1 text-lg font-bold text-slate-700'>
                                {book.totalPages}
                            </p>
                        </div>

                        <div className='border-x border-slate-200'>
                            <p className='text-xs uppercase tracking-wide text-slate-400'>
                                Published
                            </p>

                            <p className='mt-1 text-lg font-bold text-slate-700'>
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className='text-xs uppercase tracking-wide text-slate-400'>
                                Publisher
                            </p>

                            <p className='mt-1 text-sm md:text-base font-bold text-slate-700'>
                                {book.publisher}
                            </p>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="card-actions mt-7 flex gap-3">

                        <ReadButton book={book} />

                        <WishListButton book={book} />

                    </div>

                </div>

            </div>

        </div>
    );


};

export default BookDetailsPage;