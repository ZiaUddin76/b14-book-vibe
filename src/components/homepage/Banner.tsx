import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-8 py-10 shadow-xl md:px-12 lg:px-16">

                {/* Left Content */}
                <div className="space-y-6">
                    <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                        📚 Your next great read awaits
                    </span>

                    <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                        Books to{' '}
                        <span className="text-emerald-600">
                            freshen up
                        </span>
                        <br />
                        your bookshelf
                    </h2>

                    <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
                        Discover inspiring stories, timeless classics, and
                        exciting new reads to make your bookshelf even better.
                    </p>

                    <button className="rounded-full bg-emerald-600 px-7 py-3 font-semibold text-white shadow-lg shadow-emerald-200 transition duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl">
                        View The List →
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-yellow-200/60 blur-2xl"></div>

                    <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
                        <Image
                            src={bannerImg}
                            alt="Books"
                            className="h-auto w-full rounded-2xl object-cover"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;
