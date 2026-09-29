import React from 'react';
import { IBook } from '@/types/books.type';
import BookCard from '@/components/shared/BookCard';

const getBooks = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error("Error fetching books data:", error);
        return [];
    }
};

const Books = async () => {
    const booksData = await getBooks();

    console.log(booksData);

    return (
        <section className='container mx-auto my-[70px]'>

            <h2 className='text-3xl font-bold text-slate-800 mb-8'>
                Explore All Books
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                {booksData.map((book:IBook , ind:number) => (
                    <BookCard key={ind} book={book} />
                ))}

            </div>

        </section>
    );
};

export default Books;

