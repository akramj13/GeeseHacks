import { modules } from "@/data/index";
import Module from "@/components/Module";
import NavBar from "@/components/NavBar";


export async function generateStaticParams() {
 return modules.map((module) => ({ slug: module.slug }));
}


export default function ModulePage({ params }: { params: { slug: string } }) {
 const moduleData = modules.find((module) => module.slug === params.slug);


 if (!moduleData) {
   return <div>Module not found</div>;
 }


 const nextModuleIndex = modules.findIndex((mod) => mod.slug === params.slug) + 1;
 const nextModule = modules[nextModuleIndex] || null;


 return (
   <>
   <NavBar />
   <Module
     title={moduleData.title}
     description={moduleData.description}
     nextModuleSlug={nextModule ? nextModule.slug : null}
   />
   </>
 );
}
