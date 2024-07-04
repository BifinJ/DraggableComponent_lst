import ComponentData from "@/interfaces/ComponentsData";


async function getComponents() {
    const response = await fetch("http://localhost:3000/api/fetchComponents", {
        method: "GET"
    })
    console.log(" in get components ")
    console.log(" in get components ",response.json)
    return response.json();
}

export default async function Preview() {

    // const components = await getComponents();
    // console.log("components: ",components)


    const components: any = [
        {
          content:
            '<p>hello hi hi jsdjsbdjbsjb <strong><em><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000; font-size: 26px; font-family: Arial"><u>bifin </u></span><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000"><u>james</u></span></em></strong></p>',
          coordinates: {
            x: 337,
            y: 244,
          },
        },
        {
          content:
            '<p>hello iam <strong><em><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000; font-size: 26px; font-family: Arial"><u>bifin </u></span><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000"><u>james</u></span></em></strong></p>',
          coordinates: {
            x: 37,
            y: 400,
          },
        },
        {
          content:
            '<p>hello everyone iam <strong><em><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000; font-size: 26px; font-family: Arial"><u>bifin </u></span><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000"><u>james</u></span></em></strong></p>',
          coordinates: {
            x: 500,
            y: 270,
          },
        },
    ];

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