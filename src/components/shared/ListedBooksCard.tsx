
import Image from 'next/image';
import React from 'react';
import { IBook } from '@/types/books.type';
import Link from 'next/link';

interface ListedBookCardProps {
    book: IBook;
}

const ListedBookCard = ({ book }: ListedBookCardProps) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm border border-base-300">

            {/* Image */}
            <figure className="lg:w-1/3">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={500}
                    height={300}
                    className="w-full h-[250px] object-cover"
                />
            </figure>

            {/* Book Information */}
            <div className="card-body lg:w-2/3">

                <h2 className="card-title text-2xl">
                    {book.bookName}
                </h2>

                <p>
                    <span className="font-semibold">Author:</span>{' '}
                    {book.author}
                </p>

                <p>
                    <span className="font-semibold">Category:</span>{' '}
                    {book.category}
                </p>

                <p>
                    <span className="font-semibold">Rating:</span>{' '}
                    {book.rating}
                </p>

                <p>
                    <span className="font-semibold">Published:</span>{' '}
                    {book.yearOfPublishing}
                </p>
                <p>
                    <span className="font-semibold">Pages:</span>{' '}
                    {book.totalPages}
                </p>

                

                <div className="card-actions justify-end">
                    <Link
                        href={`/books/${book.bookId}`}
                        className="btn btn-primary"
                    >
                        View Details
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default ListedBookCard;
