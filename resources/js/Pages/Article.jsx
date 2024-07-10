import { useEffect } from "react";
import { Link } from "@inertiajs/react";
import SiteLayout from "../Layouts/SiteLayout";

export default function Article({ type, article, otherNews }) {
    useEffect(() => {
        console.log(article);
    });
    return (
        <SiteLayout title={article.title} backgroundImage={location.origin + '/Art/lamina_bg.jpg'}>
            <div class="flex md:mx-20 md:p-12 md:pt-20 min-h-screen bg-gray-100 rounded-xl">
                <div class="flex flex-col xl:basis-3/4 basis-full">
                    <div class="h-[20rem] w-full bg-gray-200 mb-8">
                        <img
                            class="h-full w-full object-contain"
                            src={`${location.origin}/${article.image_name}`}
                            width="300px"
                            height="300"
                        />
                    </div>

                    <div class="flex flex-col lg:px-0 px-4">
                        <h2 class="text-gray-700 font-bold text-5xl">
                            {article.title}
                        </h2>

                        <span class="text-gray-500">
                            By{" "}
                            <span class="font-bold italic text-gray-800 ">
                                {article.author.name}
                            </span>{" "}
                            , Created on {article.created_at}
                        </span>

                        <span class="mt-8 text-xl text-gray-700 leading-8 font-light whitespace-pre-line">
                            {article.article}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col basis-1/4 px-4">
                    <p className="text-3xl font-bold capitalize">Latest {type}</p>
                    {otherNews.map((news, id) => (
                        <Link className="w-full flex flex-col mt-4" href={`/${type}/${news.id}`} key={id}>
                            <img className="h-32 w-full object-contain bg-gray-200 self-center" src={`${location.origin}/${news.image_name}`} alt={news.title} />
                            <p className="text-lg underline line-clamp-2">{news.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </SiteLayout>
    );
}
