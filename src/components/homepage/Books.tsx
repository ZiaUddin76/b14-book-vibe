import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/books.type';

const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    console.log(booksData);

    return (
        <section className='container mx-auto my-[70px]'>

            <h2 className='text-3xl font-bold text-slate-800 mb-8'>
                Books
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {booksData.slice(0,9).map((book:IBook , ind:number) => (
                    <BookCard key={ind} book={book} />
                ))}

            </div>

        </section>
    );
};

export default Books;

