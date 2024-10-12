import ProjectCard, { type JobStatus } from "../islands/ProjectCard.tsx";

export default function Home() {
  const projects = [
    {
      name: "uz/uz",
      steps: [
        {
          name: "build",
          status: "passed",
        },
        {
          name: "publish",
          status: "failed",
        },
        {
          name: "deploy",
          status: "unstarted",
        },
      ],
    },
    {
      name: "uz/uz",
      steps: [
        {
          name: "build",
          status: "passed",
        },
        {
          name: "publish",
          status: "failed",
        },
        {
          name: "deploy",
          status: "unstarted",
        },
      ],
    },
  ] satisfies { name: string; steps: { name: string; status: JobStatus }[] }[];

  return (
    <div class="p-4 flex flex-col h-screen">
      <div class="flex flex-row gap-5">
        {projects.map((x) => (
          <ProjectCard
            name={x.name}
            steps={x.steps}
          />
        ))}
      </div>
    </div>
  );
}
