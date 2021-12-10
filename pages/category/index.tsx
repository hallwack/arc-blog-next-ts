import { NextPage } from "next";
import Head from "next/head";
import React, { FunctionComponent } from "react";
import Card from "../../components/card";
import Navbar from "../../components/navbar";

interface Props {}

const CategoryDetail: FunctionComponent<NextPage> = (props: Props) => {
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
              <p className="font-inter text-dark text-4xl font-bold">
                Category: Programming
              </p>
            </div>
            <div className="grid grid-flow-row grid-cols-3 gap-24">
              <Card
                author="Raihan Adam"
                category="Programming"
                excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, similique"
                title="Lorem, ipsum."
                slugAuthor="raihan-adam"
                slugCategory="programming"
                slugTitle="lorem-ipsum"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CategoryDetail;
