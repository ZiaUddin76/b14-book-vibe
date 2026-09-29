// 'use client';

// import BookCard from '@/components/shared/BookCard';
// import { BooksContext } from '@/context/BooksContext';
// import { IBook } from '@/types/books.type';
// import React, { useContext } from 'react';


// const ListedBooks = () => {

//     const { readBooks, wishlist } = useContext(BooksContext);

//     console.log(readBooks, wishlist, "readBooks", "wishlist");

//     return (
//         <div className='container mx-auto py-[20px]'>

//             <h2 className='my-4 bg-amber-100 rounded-3xl py-16 font-bold
//             text-center text-4xl' >
//                 Listed Books
//             </h2>

//             {/* name of each tab group should be unique */}
//             <div className="tabs tabs-lift">
//                 <input type="radio" name="my_tabs_3"
//                     className="tab"
//                     aria-label={`Read Books (${readBooks.length})`} />
//                 <div className="tab-content bg-base-100 border-base-300 p-6">
//                     {readBooks.length > 0 ? readBooks.map((book: IBook) => {
//                         return <BookCard key={book.bookId} book={book} />
//                     }) : <p className='text-center text-lg font-semibold' >
//                         No read books found
//                     </p>
//                     }  </div>

//                 <input type="radio" name="my_tabs_3" className="tab"
//                     aria-label={`Wishlist Books (${wishlist.length})`} />
//                 <div className="tab-content bg-base-100 border-base-300 p-6">
//                     {wishlist.length > 0 ? wishlist.map((book: IBook) => {
//                         return <BookCard key={book.bookId} book={book} />
//                     }) : <p className='text-center text-lg font-semibold'>
//                         No wishlist books found
//                     </p>
//                     }  </div>
//             </div>
//         </div>
//     );
// };

// export default ListedBooks;



//  ai



'use client';

import ListedBookCard from '@/components/shared/ListedBooksCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext, useState } from 'react';


const ListedBooks = () => {

    const { readBooks, wishlist } = useContext(BooksContext);
    const  [sortBy, setSortBy]  = useState<"rating" | "pages" | "year">("rating");

    // console.log(readBooks, wishlist, "readBooks", "wishlist");
    // console.log(sortBy, 'sortby');


    const sortBooks = (books: IBook[]) => {

        const sortedBooks = [...books];

        if(sortBy === "rating"){
            sortedBooks.sort((a,b) => b.rating - a.rating);
        }
        else if(sortBy === "pages"){
            sortedBooks.sort((a,b) => b.totalPages - a.totalPages);
        }
        else if(sortBy === "year"){
            sortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing);
        }

        return sortedBooks;
    };


    const sortedReadBooks = sortBooks(readBooks);
    const sortedwishlist = sortBooks(wishlist);


    console.log(sortedReadBooks, "sorted Read Books");
    console.log(sortedwishlist, "sorted wishlist Books");



    console.log(readBooks, wishlist, "readBooks", "wishlist");

    return (
        <div className='container mx-auto py-[20px]'>

            <h2 className='my-4 bg-amber-100 rounded-3xl py-16 font-bold
            text-center text-4xl'>
                Listed Books
            </h2>

            <div className='text-center'>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                    className="select select-success ">
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"} >Rating</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Published Year</option>
                </select>
            </div>

            <div className="tabs tabs-lift">

                {/* Read Books Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books (${readBooks.length})`}
                    defaultChecked
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {readBooks.length > 0
                        ? sortedReadBooks.map((book: IBook) => {
                            return (
                                <div
                                    key={book.bookId}
                                    className="mb-6"
                                >
                                    <ListedBookCard book={book} />
                                </div>
                            );
                        })
                        : (
                            <p className='text-center text-lg font-semibold'>
                                No read books found
                            </p>
                        )
                    }

                </div>

                {/* Wishlist Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wishlist Books (${wishlist.length})`}
                />

                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {wishlist.length > 0
                        ? sortedwishlist.map((book: IBook) => {
                            return (
                                <div
                                    key={book.bookId}
                                    className="mb-6"
                                >
                                    <ListedBookCard book={book} />
                                </div>
                            );
                        })
                        : (
                            <p className='text-center text-lg font-semibold'>
                                No wishlist books found
                            </p>
                        )
                    }

                </div>

            </div>
        </div>
    );
};

export default ListedBooks;
