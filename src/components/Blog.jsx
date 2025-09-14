import React from "react";
import { Card } from "./ui/card";

const Blog = () => {
  return (
    <div className="w-full md:w-1/2">
      <div className=" flex flex-col flex-wrap m-6 text-2xl ">
        <div className="m-3">
          <p className="text-xl text-red-800">Blog</p>
          <p>บทความ</p>
        </div>
        <Card>
          <p className="m-20 p-6 text-3xl text-gray-500">Comming Soon...</p>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
