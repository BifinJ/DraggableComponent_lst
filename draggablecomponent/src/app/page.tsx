"use client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditorPage from "@/pages/EditorPage";
import Image from "next/image";
import Preview from "@/pages/PreviewPage";

export default function Home() {
  return (
    <main className=" min-h-screen w-dvw bg-white grid place-items-center">
      <Router>
        <Routes>
          <Route path="/" element={<EditorPage />}/>
          <Route path="/preview" element={<Preview />}/>
        </Routes>
      </Router>
    </main>
  );
}
