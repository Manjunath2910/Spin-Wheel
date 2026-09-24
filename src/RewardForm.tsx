import { useState } from "react";
import SpinTheWheel from "./SpinTheWheel";
import imgGift from "@/imports/SpinTheWheelAnimation/28abd.png";
import imgCoins from "@/imports/SpinTheWheelAnimation/5d417.png";
import imgConfetti from "@/imports/SpinTheWheelAnimation/f1aa9.svg";
import imgBlurCode from "@/imports/blur-code.png";

// Mobile Frame 3 — "Congratulations! You won." + name/email form (Figma node 7772:21011).
// Card 7772:21120 sits at (50,257) inside overlay 7772:21116 at (-5,-19) → (45,238).
const label = "font-jakarta font-medium leading-[normal] text-[12px] text-[#3e002e] whitespace-nowrap";
const inputText =
  "w-full bg-transparent border-0 outline-none p-0 m-0 font-jakarta font-medium leading-[1.24] text-[14px] text-[#3e002e] placeholder:text-[#3e002e]";

export default function RewardForm({ onUnlock }: { onUnlock?: (name: string, email: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="relative size-full">
      {/* Background: #D2AECE base, blurred Frame 1 content, tinted overlay + sun-rays. */}
      <SpinTheWheel variant="form" />

      {/* Card (node 7772:21120) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onUnlock?.(name, email);
        }}
        className="absolute left-[45px] top-[238px] w-[301px] flex flex-col gap-[24px] items-center pt-[65px] pb-[32px] px-[24px] rounded-[16px] overflow-clip border-[1.741px] border-[#eadbcd] border-solid bg-gradient-to-b from-[#fff7fd] from-[58.879%] to-[#fff2fe] to-[191.74%] shadow-[0px_-4px_19.7px_-3px_rgba(12,11,10,0.65)]"
      >
        {/* Title block (node 7772:21121) */}
        <div className="relative flex flex-col gap-[8px] items-center w-full">
          <p className="w-full font-jakarta font-semibold leading-[1.3] text-[#2e1e1e] text-[20px] text-center tracking-[-0.4px]">
            Congratulations! You won.
          </p>
          <p className="w-[238.773px] font-jakarta font-medium leading-[1.35] text-[#887065] text-[14px] text-center">
            Enter your email, and get the code!
          </p>
        </div>

        {/* Confetti (node 7772:21125) — behind the code box and fields */}
        <div className="absolute inset-[calc(18.8%-1.09px)_calc(1.33%-1.69px)_calc(38.63%-0.4px)_calc(-1.33%-1.79px)] pointer-events-none">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgConfetti} />
        </div>

        {/* Hidden reward code box (node 7772:21151) — Figma's noise-dissolved "€h99!" */}
        <img src={imgBlurCode} alt="Reward code hidden until unlocked" className="relative block w-full h-[102px] select-none" />

        {/* Name (node 7772:21154) */}
        <label className="relative flex flex-col gap-[6.963px] items-start w-full">
          <span className={label}>Name</span>
          <div className="bg-white border-[0.87px] border-[#ffefe3] border-solid flex items-center px-[17.407px] py-[10.444px] rounded-[10.444px] w-full">
            <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Rahul Singh" className={inputText} />
          </div>
        </label>

        {/* Email (node 7772:21158) */}
        <label className="relative flex flex-col gap-[6.963px] items-start w-full">
          <span className={label}>Email</span>
          <div className="bg-white border-[1.741px] border-[#ffefe3] border-solid flex items-start px-[17.407px] py-[10.444px] rounded-[10.444px] w-full">
            <input type="email" autoComplete="email" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rahulsingh21@gmail.com" className={inputText} />
          </div>
        </label>

        {/* Button (node 7772:21162) — goes to Frame 4 */}
        <button type="submit" className="relative bg-[#750558] flex items-center justify-center px-[20px] py-[12px] rounded-[869.5px] cursor-pointer border-0">
          <span className="font-jakarta font-semibold leading-[1.3] text-[16px] text-[#fff2fe] text-center whitespace-nowrap">
            Unlock your Reward!
          </span>
        </button>
      </form>

      {/* Gift + coins cluster (nodes 7772:21164-21172), on top of the card. */}
      <div className="absolute contents left-[calc(20%+42px)] top-[164px]">
        <div className="absolute h-[20px] left-[calc(40%+54px)] top-[168px] w-[25px]">
          <div className="absolute inset-0 opacity-[0.68] overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} />
          </div>
        </div>
        <div className="absolute h-[63px] left-[calc(20%+42px)] top-[164px] w-[54px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[395.64%] left-[-50.33%] max-w-none top-[-63.72%] w-[460.13%]" src={imgCoins} />
          </div>
        </div>
        <div className="absolute flex h-[51px] items-center justify-center left-[calc(40%+61px)] top-[208px] w-[55px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[51px] relative w-[55px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[29px] left-[calc(40%+62px)] top-[240px] w-[35px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} />
          </div>
        </div>
        {/* Gift box (image 856, node 7772:21169) */}
        <div className="absolute h-[91px] left-[calc(40%-3px)] top-[191px] w-[86px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[242.27%] left-[-77.17%] max-w-none top-[-70.82%] w-[256%]" src={imgGift} />
          </div>
        </div>
        <div className="absolute flex h-[49.128px] items-center justify-center left-[calc(20%+61.9px)] top-[245.44px] w-[56.2px]">
          <div className="-scale-y-100 flex-none rotate-[165deg]">
            <div className="h-[38px] relative w-[48px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[51px] left-[calc(20%+42px)] top-[210px] w-[55px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} />
          </div>
        </div>
        <div className="absolute flex h-[29px] items-center justify-center left-[calc(40%+29px)] top-[173px] w-[31px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[29px] relative w-[31px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
