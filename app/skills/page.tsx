import Link from "next/link";

const skills = [
  { name: "Product Strategy", value: 95 },
  { name: "Design Thinking", value: 90 },
  { name: "Product Execution", value: 95 },
  { name: "GTM", value: 85 },
  { name: "Technical Design", value: 80 },
  { name: "Stakeholder Engagement", value: 85 },
  { name: "Leadership", value: 80 },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 text-white px-6 py-20">

      {/* Top Nav */}
      <div className="flex justify-between items-center mb-16">
        <Link href="/" className="text-zinc-400 hover:text-white text-xl">
          ←
        </Link>

        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/experience" className="hover:text-white">Experience</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em]">
          Product and Technical Skills
        </h1>
        <p className="text-zinc-400 mt-6 tracking-[0.2em]">
          MY KNOWLEDGE LEVEL IN PRODUCT
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-5xl mx-auto space-y-10">

        {skills.map((skill) => (
          <div key={skill.name}>

            <div className="flex justify-between mb-2 text-zinc-300">
              <span>{skill.name}</span>
              <span>{skill.value}%</span>
            </div>

            {/* Bar */}
            <div className="w-full h-3 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 transition-all duration-1000"
                style={{ width: `${skill.value}%` }}
              />
            </div>

          </div>
        ))}

      </div>

      {/* Technical Skills */}
      <div className="max-w-5xl mx-auto mt-20 text-zinc-400 leading-relaxed">

        <p className="mb-6 font-semibold text-white">Technical Skills</p>

        <p>
          GCP Services, Vertex AI, BigQuery, Hadoop Big Data, Data Analytics,
          MDM, GenAI, NLP AI/ML MLOps
        </p>

        <p className="mt-4">
          Python/PySpark, Solution Architecture, Advanced SQL, Databases,
          Jira, Figma, Swagger API
        </p>

      </div>

    </div>
  );
}
