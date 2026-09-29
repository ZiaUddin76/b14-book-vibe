'use client';

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const WishListButton = ( {book}: {book: IBook} ) => {


    const { wishlist, setWishlist } = useContext(BooksContext);


    // console.log(booksProvider, "booksProvider");


    const handleAddToWishlist = () => {


        console.log("read book btn triggered", book);

        // setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
        setWishlist([...wishlist, book]);
        toast.success(`You have added "${book.bookName}" to your wishlist `);

    };



//     const handleReadBook = () => {

//     console.log("read book btn triggered", book);

//     setWishlist((prevReadBooks) => {
//         const updatedBooks = [...prevReadBooks, book];

//         console.log("Updated", updatedBooks);

//         return updatedBooks;
//     });

//     alert(`You have read "${book.bookName}"`);
// };




    return (
        <button className="btn flex-1 rounded-full bg-gradient-to-r
         from-orange-500 via-pink-500
          to-purple-600 border-none text-white shadow-md 
         hover:scale-[1.02] hover:shadow-lg transition"
        onClick={() => handleAddToWishlist()}>
            Add to Wishlist
        </button>
    );
};

export default WishListButton;