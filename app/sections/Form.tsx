"use client"


import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";





const Form = () => {
    const router: AppRouterInstance = useRouter(); 
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${searchTerm}`)
    setSearchTerm("");
}
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <section className="feed">
    <form onSubmit={handleSubmit}  className="relative w-full flex-center ">
      <input
        type="text"
        placeholder="search movies"
        value={searchTerm}
        onChange={(e:ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        className="search_input font-montserrat mr-3   peer" />   
          <BsSearch className="cursor-pointer"/>
            </form>
        </section>
    );
};

export default Form;
