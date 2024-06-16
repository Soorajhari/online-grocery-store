'use client'
import { Button } from "@/components/ui/button";
import { Layout, LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React,{useEffect,useState} from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";
// import { useEffect } from "react/cjs/react.production.min";

const Header = () => {
    const [categoryList,setCategoryList]=useState([])
    useEffect(()=>{
   getCategoryList()
    },[])

    const getCategoryList=()=>{
        GlobalApi.getCategory().then(resp=>{
            setCategoryList(resp.data.data)
            console.log(resp.data.data)
        })
    }
  return (
    <div className="p-5  shadow-lg flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/14456.jpg" alt="logo" width={150} height={100} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200  hidden cursor-pointer">
              {" "}
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category,index)=>(
  <DropdownMenuItem>
<Image src={ process.env.NEXT_PUBLIC_BACKEND_BASE_URL+ category?.attributes?.icon?.data?.attributes?.url} unoptimized={true} width={23} height={23} />
    <h2>{category.attributes.name}</h2>
  </DropdownMenuItem>
            ))}
        
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 outline-none hidden">
          <Search />
          <input type="text" placeholder="Serach" className="outline-none" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <h2 className="flex gap-2 items-center">
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
