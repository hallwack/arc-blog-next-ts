import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import Navbar from "../../components/navbar";

interface Props {}

const ArticleDetail: FunctionComponent<NextPage> = (props: Props) => {
  return (
    <>
      <Head>
        <title>ARC Blog | Lorem Ipsum.</title>
      </Head>

      <div className="bg-blue-light min-h-screen h-full">
        <header className="bg-dark w-full py-8 px-24">
          <Navbar />
        </header>

        <main className="bg-transparent w-full container mx-auto py-12">
          <div className="flex flex-col">
            <div className="text-left mb-6">
              <h1 className="font-inter text-dark text-5xl font-bold">
                Lorem, ipsum.
              </h1>
            </div>
            <div className="mb-4">
              <p className="text-dark font-medium text-xl">
                Author by{" "}
                <Link href="/user/raihan-adam">
                  <a className="underline hover:no-underline">Raihan Adam</a>
                </Link>
              </p>
            </div>
            <div className="my-4">
              <p className="text-dark text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                dolores sapiente quibusdam ipsam vero, blanditiis animi quos
                aspernatur, neque quisquam, dolorum labore numquam commodi
                reiciendis laboriosam quam ea! Officiis quos doloremque dolorum
                soluta! Facere quibusdam commodi recusandae incidunt aut
                reprehenderit sed temporibus autem praesentium eum officiis quia
                eveniet explicabo numquam iure, consequuntur provident molestias
                optio aperiam soluta? Ipsam, voluptatibus maiores rerum eos
                maxime fugit adipisci eius quo excepturi nisi? Nesciunt, ex.
                Aliquid laborum impedit possimus quas quae et fugiat
                accusantium.
              </p>
            </div>
            <div className="mt-4 text-right">
              <p className="text-dark font-medium text-xl">
                Category:{" "}
                <Link href="/category/programming">
                  <a className="underline hover:no-underline">Programming</a>
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ArticleDetail;
