import { Link } from "@inertiajs/react";
import Title from "../Components/Title";
import SiteLayout from "../Layouts/SiteLayout";

function NewsCard({ article, type }) {
    return (
        <div className="p-4 lg:basis-1/2">
            <Link
                href={`/${type}/${article.id}`}
                className="bg-white flex flex-col rounded-2xl p-8 text-center gap-4  "
            >
                {/* News Title Here */}
                <p className="font-bold capitalize underline text-2xl">
                    {article.title}
                </p>

                {/*  News Description Here*/}
                <p className="font-medium text-xl line-clamp-2">
                    {article.article}
                </p>

                {/* News Image Here */}
                <div
                    className="w-full h-72 bg-cover bg-center"
                    style={{ backgroundImage: `url('${article.image_name}')` }}
                />
                {/* <div className="mx-auto ">
                    <img src="/Art/06.png" className="w-96" />
                </div> */}
            </Link>
        </div>
    );
}

export default function News({ news, blogs }) {
    return (
        <SiteLayout title={'News and Features'} backgroundImage={'Art/08.png'}>
            <div className="flex flex-col">
                <Title>News</Title>
                <div className="flex flex-wrap px-24">
                    {news.map((article, id) => (
                        <NewsCard article={article} type={"news"} key={id} />
                    ))}
                </div>
                <Title>Blogs</Title>
                <div className="flex flex-wrap px-24">
                    {blogs.map((blog, id) => (
                        <NewsCard article={blog} type={"blog"} key={id} />
                    ))}
                </div>
                {/* <div className="flex justify-center">
                <a
                    href="#_"
                    className="relative inline-flex items-center justify-start px-8 py-3 my-8 overflow-hidden font-medium transition-all bg-white rounded-xl hover:bg-white group"
                >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-yellow-400 ">
                        See More News
                    </span>
                </a>
            </div> */}
            </div>
        </SiteLayout>
    );
}
