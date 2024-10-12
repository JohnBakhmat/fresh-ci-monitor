interface ProjectCardProps {
  name: string;
  steps: { name: string; status: JobStatus }[];
}

const statuses = ["passed", "failed", "running", "unstarted"] as const;
export type JobStatus = typeof statuses[number];

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div class="w-fit rounded-xl flex flex-col gap-2 py-3 px-6 bg-black text-white">
      <h1>{props.name}</h1>
      <div class="flex flex-row gap-4">
        {props.steps.map((s) => (
          <div class="flex flex-col items-center gap-4">
            <span>{s.name}</span>
            {s.status === "passed" && <PassedStatusIcon />}
            {s.status === "failed" && <FailedStatusIcon />}
            {s.status === "unstarted" && <UnstartedStatusIcon />}
            {s.status === "running" && <RunningStatusIcon />}
          </div>
        ))}
      </div>
    </div>
  );
}

function PassedStatusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-check bg-emerald-300 rounded-full ring-emerald-800 ring-4 text-emerald-800 w-5 h-5 p-1"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function FailedStatusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-check bg-red-300 rounded-full ring-red-800 ring-4 text-red-800 w-5 h-5 p-1"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function UnstartedStatusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-check bg-amber-300 rounded-full ring-amber-800 ring-4 text-amber-800 w-5 h-5 p-1"
    >
      <line x1="8" x2="8" y1="18" y2="6" />
      <line x1="16" x2="16" y1="18" y2="6" />
    </svg>
  );
}
function RunningStatusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-check bg-blue-300 rounded-full ring-blue-800 ring-4 text-blue-800 w-5 h-5 p-1 animate-spin-slow"
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  );
}
