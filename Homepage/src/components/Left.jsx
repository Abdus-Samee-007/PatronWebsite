import React from "react";

function Left() {
  return (
    <div className="left text-white bg-slate-800 h-screen  border-blue-200 border">
      <div className="menu text-3xl">
        Menu
      </div>
        <hr />
     <div className="box pt-2">

      <a href="" className="badge badge-outline ml-2 text-l">
        Community
      </a>

      <a href="" className="badge badge-primary badge-outline text-l">
        Popular
      </a>

      <a href="" className="badge badge-secondary badge-outline text-l">
        Trending
      </a>

      <a href="" className="badge badge-accent badge-outline ml-2 text-l">
        Best
      </a>
     </div>
      <br />
      <hr />
      <div className="menu text-3xl">
        Tags
      </div>
        <hr />
        <div className="box pt-2">
      <a href="" className="badge badge-primary badge-outline text-l  ml-2">
       Cloud
      </a>
      <a href="" className="badge badge-outline text-l">
        Photography
      </a>
      <a href="" className="badge badge-primary badge-outline text-l">
        Jazz
      </a>
      <a href="" className="badge badge-primary badge-outline text-l ml-2">
        Pop
      </a>
      </div>
     
      <br />
      <hr />
      <div className="group text-blue-200 p-5 text-xl">
        Want to make your own group?
        <br />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
  Button
</button>
      </div>
    </div>
  );
}

export default Left;
