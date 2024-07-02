import FormComponent from "@/components/FormComponent";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-orange-200 text-black px-4">
      <div className="w-full px-6 flex flex-col justify-center lg:w-[600px] shadow-lg bg-orange-50 h-[180px] rounded-lg p-2">
        <FormComponent />
      </div>
    </div>
  );
}
