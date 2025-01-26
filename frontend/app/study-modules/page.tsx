import NavBar from "@/components/NavBar";
import { modules } from "@/data/index";
import Link from "next/link";

export default function ModulesPage() {
  return (
    <>
    <NavBar />
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Study Modules</h1>
      <ul className="space-y-4">
        {modules.map((module) => (
          <li key={module.slug} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold">{module.title}</h2>
            <p className="text-gray-600">{module.description}</p>
            <Link href={`/study-modules/${module.slug}`}>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-2 hover:bg-yellow-600">
                View Module
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}