import { modules } from "@/data/index";
import Module from "@/components/Module";
import NavBar from "@/components/NavBar";
import { useLevel } from "@/context/LevelContext";

export async function generateStaticParams() {
  return modules.map((module) => ({ slug: module.slug }));
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  console.log(params, params.slug);
  const { level } = useLevel(); // Access the user's level from context
  console.log("within filter:", level);

  // Filter modules based on level
  const filteredModules = modules.filter((module) => module.level === level);

  const moduleData = filteredModules.find((module) => module.slug === params.slug);

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  const nextModuleIndex = filteredModules.findIndex((mod) => mod.slug === params.slug) + 1;
  const nextModule = filteredModules[nextModuleIndex] || null;

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