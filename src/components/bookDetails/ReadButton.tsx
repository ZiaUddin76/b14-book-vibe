'use client';

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const ReadButton = ( {book}: {book: IBook} ) => {


    const { readBooks, setReadBooks } = useContext(BooksContext);


    // console.log(booksProvider, "booksProvider");


    // const handleReadBook = () => {


    //     console.log("read book btn triggered", book);

    //     // setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
    //     setReadBooks([...readBooks, book])
    //     alert(`You have read "${book.bookName}"`);

    // };



    const handleReadBook = () => {

    console.log("read book btn triggered", book);

    setReadBooks((prevReadBooks) => {
        const updatedBooks = [...prevReadBooks, book];

        console.log("Updated", updatedBooks);

        return updatedBooks;
    });

    toast.success(`You have read "${book.bookName}"`);
};




    return (
        <button className="btn flex-1 rounded-full bg-gradient-to-r
         from-orange-500 via-pink-500
          to-purple-600 border-none text-white shadow-md 
         hover:scale-[1.02] hover:shadow-lg transition"
        onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;