"use client"
import ComponentData from "@/interfaces/ComponentsData";
import { useLocation } from "react-router-dom";

export default function Preview() {
    const location = useLocation();
    const { components } = location.state || { components: [] };

    return (
        <section className='h-screen w-screen grid place-items-center overflow-scroll'>
            <div className='certificate h-[647px] w-[1150px] bg-red-700 rounded relative'>
                {components.map((component: ComponentData, index: number) => (
                    <div
                        key={index}
                        className="absolute"
                        style={{ left: `${component.coordinates.x}px`, top: `${component.coordinates.y}px` }}
                        dangerouslySetInnerHTML={{ __html: component.content }}
                    />
                ))}
            </div>
        </section>
    );
}
