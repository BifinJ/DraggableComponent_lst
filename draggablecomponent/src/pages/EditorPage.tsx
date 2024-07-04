"use client"
import ComponentData from "@/interfaces/ComponentsData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputComponentTiptap from "./InputComponentTipTap";

export default function Page1() {
    const [components, setComponents] = useState<ComponentData[]>([]);
    const navigate = useNavigate();

    const addComponent = () => {
        setComponents([...components, { content: "", coordinates: { x: 0, y: 0 } }]);
    };

    const updateComponent = (index: number, newData: Partial<ComponentData>) => {
        const updatedComponents = [...components];
        updatedComponents[index] = { ...updatedComponents[index], ...newData };
        setComponents(updatedComponents);
    };

    const handleSave = () => {
        navigate('/preview', { state: { components } });
        console.log(components)
    };

    return (
        <>
            <div className=" flex gap-3 absolute top-3">
                <button onClick={addComponent} className="w-[5dvw] h-[5dvh] bg-blue-700 border border-slate-600 rounded text-white font-bold text-2xl grid place-content-center">+</button>
                <button onClick={handleSave} className="w-[5dvw] h-[5dvh] bg-blue-700 border border-slate-600 rounded text-white font-bold text-1xl grid place-content-center">Save</button>
                <button className="w-[5dvw] h-[5dvh] bg-blue-700 border border-slate-600 rounded text-white font-bold text-1xl grid place-content-center">Reset</button>
            </div>
            <div className=" h-dvh w-dvw grid place-items-center overflow-scroll">
                <section className="certificate h-[647px] w-[1150px] bg-red-600 rounded-md relative">
                    {components.map((component, index) => (
                        <InputComponentTiptap
                            key={index}
                            id={index}
                            content={component.content}
                            coordinates={component.coordinates}
                            updateComponent={updateComponent}
                        />
                    ))}
                </section>
            </div>
            <pre className=" w-96 h-60 overflow-scroll absolute bottom-0 left-0 bg-white p-2">{JSON.stringify(components, null, 2)}</pre>
        </>
    );
}
