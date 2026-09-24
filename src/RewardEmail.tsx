import { useState } from "react";
import SpinTheWheel from "./SpinTheWheel";
import imgConfetti from "@/imports/frame4-confetti.svg";

// Frame 4 — "Your reward is waiting..." name + email form (Figma node 7701:20408).
// Same background as Frame 3 (base #741C59, blurred Frame 1 content, overlay
// 7701:20513 with the sun-ray watermark — identical geometry to Frame 3).
// Card 7701:20517 sits at (50,257) inside the overlay at (-5,-19) → (45,238).
const inputText =
  "w-full bg-transparent border-0 outline-none p-0 m-0 font-jakarta font-medium leading-[1.24] text-[14px] text-[#3e002e] placeholder:text-[#3e002e]";

export function EmailCard({
  title = "Your reward is waiting...",
  className = "absolute left-[45px] top-[238px]",
  onSubmit,
}: {
  title?: string;
  className?: string;
  onSubmit?: (name: string, email: string) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(name, email);
      }}
      className={`${className} w-[301px] flex flex-col gap-[24px] items-center pt-[24px] pb-[32px] px-[24px] rounded-[16px] overflow-clip border-[1.741px] border-[#eadbcd] border-solid bg-gradient-to-b from-[#fff7fd] from-[58.879%] to-[#fff2fe] to-[191.74%] shadow-[0px_-4px_19.7px_-3px_rgba(12,11,10,0.65)]`}
    >
      {/* Confetti (node 7701:20522 / 7706:20687), behind the fields */}
      <img alt="" src={imgConfetti} className="absolute left-[-1.741px] top-[96.26px] w-[297px] h-[222px] max-w-none pointer-events-none" />

      {/* Title block */}
      <div className="relative flex flex-col gap-[8px] items-center w-full">
        <div className="flex items-start w-full">
          <p className="flex-[1_0_0] min-w-px font-jakarta font-semibold leading-[1.3] text-[#2e1e1e] text-[20px] text-center tracking-[-0.4px]">
            {title}
          </p>
        </div>
        <p className="w-full font-jakarta font-medium leading-[1.35] text-[#887065] text-[14px] text-center">
          Enter your email, and get the code!
        </p>
      </div>

      {/* Name */}
      <label className="relative flex flex-col gap-[6.963px] items-start w-full">
        <span className="font-jakarta font-medium leading-[normal] text-[12px] text-[#3e002e] whitespace-nowrap">Name</span>
        <div className="bg-white border-[0.87px] border-[#ffefe3] border-solid flex items-center px-[17.407px] py-[10.444px] rounded-[10.444px] w-full">
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rahul Singh"
            className={inputText}
          />
        </div>
      </label>

      {/* Email */}
      <label className="relative flex flex-col gap-[6.963px] items-start w-full">
        <span className="font-jakarta font-medium leading-[normal] text-[12px] text-[#3e002e] whitespace-nowrap">Email</span>
        <div className="bg-white border-[1.741px] border-[#ffefe3] border-solid flex items-start px-[17.407px] py-[10.444px] rounded-[10.444px] w-full">
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rahulsingh21@gmail.com"
            className={inputText}
          />
        </div>
      </label>

      {/* Button — goes to the reward-code screen */}
      <button
        type="submit"
        className="relative bg-[#750558] flex items-center justify-center px-[20px] py-[12px] rounded-[869.5px] cursor-pointer border-0"
      >
        <span className="font-jakarta font-semibold leading-[1.3] text-[16px] text-[#fff2fe] text-center whitespace-nowrap">
          Unlock the Reward
        </span>
      </button>
    </form>
  );
}

export default function RewardEmail({ onSubmit }: { onSubmit?: (name: string, email: string) => void }) {
  return (
    <div className="relative size-full">
      <SpinTheWheel variant="reward" />
      {/* Card (node 7701:20517) */}
      <EmailCard onSubmit={onSubmit} />
    </div>
  );
}
