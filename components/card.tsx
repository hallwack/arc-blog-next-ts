import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  author: string;
  excerpt: string;
  category: string;
  slugAuthor: string;
  slugTitle: string;
  slugCategory: string;
}

const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
  const {
    title,
    author,
    category,
    excerpt,
    slugAuthor,
    slugCategory,
    slugTitle,
  } = props;
  return (
    <>
      <div className="rounded-xl bg-transparent border-dark border-opacity-70 border-2 p-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-dark font-inter text-3xl font-semibold">
              {title}
            </h1>
            <p className="text-dark font-inter font-medium">
              by{" "}
              <Link href={`/user/${slugAuthor}`}>
                <a>{author}</a>
              </Link>
            </p>
          </div>
          <p className="text-dark font-inter mt-4 mb-1">{`${excerpt}...`}</p>
          <Link href={`/article/${slugTitle}`}>
            <a className="underline hover:no-underline text-dark font-inter">
              Read More...
            </a>
          </Link>
          <p className="text-dark font-inter text-lg font-medium mt-4">
            Category:{" "}
            <Link href={`/category/${slugCategory}`}>
              <a>{category}</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
