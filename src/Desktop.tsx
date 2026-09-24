import { useState, type MouseEvent, type ReactNode } from "react";
import { SponsorLogo } from "./SpinTheWheel";
import { CodeCard, REWARD_CODE } from "./RewardCode";
import imgLogo from "@/imports/SpinTheWheelAnimation/f30fbe8263dd7fdee4c4d27d0713de568c6c4de6.png";
import imgCoins from "@/imports/SpinTheWheelAnimation/5d417.png";
import imgGiftEmoji from "@/imports/gift-emoji.png"; // Apple 🎁, as Figma renders it
import imgGift from "@/imports/SpinTheWheelAnimation/28abd.png";
import imgConfetti from "@/imports/SpinTheWheelAnimation/f1aa9.svg";
import imgBlurCode from "@/imports/blur-code-narrow.png";
import imgHeadline from "@/imports/desktop/d-headline.svg";
import imgWheel from "@/imports/desktop/d-wheel.svg";
import imgPointer from "@/imports/desktop/d-pointer.svg";
import imgHubLogo from "@/imports/desktop/d-hub-logo.svg";
import imgQr from "@/imports/desktop/d-qr.svg";
import imgPattern from "@/imports/code-pattern.svg";

// Desktop versions (Figma section 7706:19857, five 1440×1024 frames).
// Every position below is the Figma absolute position inside the 1440×1024 frame.
export const DESKTOP_W = 1440;
export const DESKTOP_H = 1024;

const jakarta = (w: "Regular" | "Medium" | "SemiBold" | "Bold") =>
  `font-jakarta ${
    w === "Regular" ? "font-normal" : w === "Medium" ? "font-medium" : w === "SemiBold" ? "font-semibold" : "font-bold"
  }`;

// ── Full-bleed layout ────────────────────────────────────────────────────────
// All content lives in a centred 1440px "stage" (Figma coordinates). On windows
// wider than 1440:1024 the frame gets wider (App sets --ext = extra px per side)
// and backgrounds, overlays, rays and the ticker stretch edge to edge, so there
// are no side bands. Taller windows likewise get --exty above/below.
const BLEED = "absolute top-[calc(-1*var(--exty,0px))] bottom-[calc(-1*var(--exty,0px))] left-[calc(-1*var(--ext,0px))] right-[calc(-1*var(--ext,0px))]";

function Stage({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div className={`relative size-full overflow-hidden ${className}`} onClick={onClick}>
      <div className="absolute top-[var(--exty,0px)] h-[1024px] w-[1440px] left-[var(--ext,0px)]">{children}</div>
    </div>
  );
}

// ── Shared pieces ────────────────────────────────────────────────────────────

/** Pink page background + floating coins (group 7706:19859, 28% opacity). */
function PinkBase() {
  return (
    <>
      <div className={`${BLEED} bg-gradient-to-b from-[#fff2fe] from-[20.801%] to-[#ffc3fb] to-[95.324%]`} />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-[59.773px] left-[868.77px] opacity-[0.28] top-[106.07px] w-[50.577px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} /></div>
        </div>
        <div className="absolute flex h-[130.131px] items-center justify-center left-[283.27px] top-[166.06px] w-[132.132px]">
          <div className="flex-none rotate-[10.82deg]"><div className="h-[110.829px] opacity-[0.28] relative w-[113.348px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[436.36%] left-[-57.78%] max-w-none top-[-290.91%] w-[426.67%]" src={imgCoins} /></div></div></div>
        </div>
        <div className="absolute h-[198.696px] left-[978.73px] opacity-[0.28] top-[305.24px] w-[177.998px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div>
        </div>
        <div className="absolute flex h-[107.734px] items-center justify-center left-[381.35px] top-[585.07px] w-[120.261px]">
          <div className="-rotate-90 -scale-y-100 flex-none"><div className="h-[120.261px] opacity-[0.28] relative w-[107.734px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div></div></div>
        </div>
        <div className="absolute flex h-[55.542px] items-center justify-center left-[969.95px] top-[165.71px] w-[62px]">
          <div className="-rotate-90 -scale-y-100 flex-none"><div className="h-[62px] opacity-[0.28] relative w-[55.542px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div></div></div>
        </div>
        <div className="absolute h-[123.076px] left-[631.22px] opacity-[0.28] top-[24.49px] w-[95.447px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} /></div>
        </div>
        <div className="absolute bottom-[483.81px] h-[59.773px] left-[909.56px] opacity-[0.28] w-[50.577px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} /></div>
        </div>
        <div className="absolute h-[71.545px] left-[379.26px] opacity-[0.28] top-[384.43px] w-[77.268px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div>
        </div>
        <div className="absolute bottom-[338.08px] h-[123.076px] left-[892.25px] opacity-[0.28] w-[95.447px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} /></div>
        </div>
      </div>
    </>
  );
}

/** MELAM logo, "Total Rewards 100:", "Only 20 Rewards are left", SPIN TO WIN, subtitle. `className` positions the block (Frame 5 sits 45.97px lower). */
function TopBlock({ className = "top-0", subtitle = true }: { className?: string; subtitle?: boolean }) {
  return (
    <div className={`absolute left-0 w-[1440px] ${className}`}>
      <div className="absolute h-[68px] left-[649.38px] top-[46.98px] w-[141.23px]" data-name="IMG_7339 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Hello Germany presents MELAM" className="absolute h-[259.56%] left-[-27.51%] max-w-none top-[-65.99%] w-[156.21%]" src={imgLogo} />
        </div>
      </div>
      <p className={`absolute left-[611.5px] top-[134.98px] w-[217px] ${jakarta("Medium")} leading-[1.2] text-[14px] text-[#898989] text-center`}>
        Total Rewards 100:
      </p>
      <div className="absolute left-[613px] top-[159.98px] w-[214px] h-[29px] bg-[#ffe2ff] border border-[#ffc3fb] border-solid flex items-center justify-center px-[12px] py-[4px] rounded-[32px]">
        <p className={`${jakarta("Medium")} leading-[1.2] text-[16px] text-[#28001e] text-center whitespace-pre`}>
          {"Only "}
          <span className={`${jakarta("Bold")} text-[#a82486]`}>20</span>
          <span className="text-[#a82486]"> </span>
          <span className={`${jakarta("Bold")} text-[#a82486]`}>Rewards</span>
          {" are left"}
        </p>
      </div>
      <img src={imgHeadline} alt="Spin to win — upto €100" className="absolute left-[627.39px] top-[208.98px] w-[186px] h-[137px] max-w-none" />
      {subtitle && (
        <p className={`absolute left-[600px] top-[350.6px] w-[240px] ${jakarta("Medium")} leading-[1.2] text-[16px] text-[#898989] text-center whitespace-nowrap`}>
          Spin the wheel to test your luck!
        </p>
      )}
    </div>
  );
}

// Wheel labels, relative to the wheel's 407.93×408 box (Figma 7706:20250-20259).
const LABELS: { t: string; box: string; text: string }[] = [
  { t: "€25", box: "left-[202.87px] top-[278.36px] w-[20.513px] h-[33.308px]", text: "rotate-[89.1deg] text-[#28001e]" },
  { t: "€50", box: "left-[115.59px] top-[217.45px] w-[39.478px] h-[29.873px]", text: "rotate-[161.92deg] text-[#28001e]" },
  { t: "€15", box: "left-[295.59px] top-[217.57px] w-[33.797px] h-[28.061px]", text: "rotate-[18.21deg] text-[#28001e]" },
  { t: "€10", box: "left-[291.76px] top-[159.56px] w-[36.343px] h-[30.498px]", text: "rotate-[-22.93deg] text-[#fff2fe]" },
  { t: "€5", box: "left-[251.77px] top-[116.6px] w-[29.54px] h-[30.296px]", text: "rotate-[-55.27deg] text-[#28001e]" },
  { t: "€20", box: "left-[261.47px] top-[262.27px] w-[37.276px] h-[39.906px]", text: "rotate-[52.12deg] text-[#ffffff]" },
  { t: "€35", box: "left-[148.48px] top-[259.77px] w-[36.369px] h-[38.208px]", text: "rotate-[129.26deg] text-[#ffffff]" },
  { t: "€65", box: "left-[113.75px] top-[161.33px] w-[37.41px] h-[28.787px]", text: "rotate-[-162.97deg] text-[#ffffff]" },
  { t: "€75", box: "left-[151.03px] top-[107.25px] w-[34.762px] h-[37.681px]", text: "rotate-[-125.1deg] text-[#28001e]" },
  { t: "€100", box: "left-[205.2px] top-[88.37px] w-[20px] h-[43px]", text: "rotate-[-90deg] text-[#ffffff]" },
];

/** The desktop prize wheel. `spin` plays the same 9s spin-and-stop as mobile Frame 2. */
function Wheel({ className, spin = false, glow = false }: { className: string; spin?: boolean; glow?: boolean }) {
  return (
    <div
      // glow: Figma drop shadow on the spinning wheel (7772:20327) — #D687C1, offset 1.36, blur 23.94.
      className={`absolute w-[407.93px] h-[408px] ${className} ${glow ? "drop-shadow-[1.362px_1.362px_11.97px_#d687c1]" : ""}`}
      data-name="Wheel"
    >
      <div className={`absolute inset-0 origin-center ${spin ? "animate-wheel-spinstop will-change-transform" : ""}`}>
        <img src={imgWheel} alt="" className="absolute left-0 top-0 w-[407.93px] h-[408px] max-w-none overflow-visible" />
        {LABELS.map((l) => (
          <div
            key={l.t}
            className={`absolute flex items-center justify-center -translate-x-1/2 ${l.box}`}
          >
            <p
              className={`flex-none ${jakarta("Medium")} leading-[1.2] text-[16.266px] text-center whitespace-nowrap ${l.text}`}
            >
              {l.t}
            </p>
          </div>
        ))}
      </div>
      {/* Fixed parts: pointer (7706:20240) and the Z hub logo (7706:20246). */}
      <img src={imgPointer} alt="" className="absolute left-[347px] top-[188.27px] w-[55px] h-[33px] max-w-none" />
      <img src={imgHubLogo} alt="" className="absolute left-[191.33px] top-[192.44px] w-[26px] h-[25px] max-w-none" />
    </div>
  );
}

function Button({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute bg-[#750558] flex items-center justify-center px-[24px] py-[12px] rounded-[869.5px] border-0 cursor-pointer ${className}`}
    >
      <span className={`${jakarta("SemiBold")} leading-[1.3] text-[16px] text-[#fff2fe] text-center whitespace-nowrap`}>{children}</span>
    </button>
  );
}

/** Reward ticker (Notification 7706:19944) — full width, scrolling. */
function Ticker({ className }: { className: string }) {
  const items: [string, string, boolean][] = [
    ["Aarav just got ", "€25 reward.", true],
    ["Ankit just got ", "€100 reward.", true],
    ["Bianca just got ", "€50 reward.", false],
    ["Carlos just got ", "€75 reward.", false],
    ["Carlos just got ", "€75 reward.", false],
    ["Carlos just got ", "€75 reward.", false],
    ["Carlos just got ", "€75 reward.", false],
    ["Carlos just got ", "€75 reward.", false],
  ];
  return (
    <div className={`absolute left-[calc(-1*var(--ext,0px))] w-[calc(1440px+2*var(--ext,0px))] h-[32px] overflow-clip ${className}`} data-name="Notification">
      <div className="animate-marquee will-change-transform flex w-max items-center whitespace-nowrap h-full">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-[24px] items-center pr-[24px]">
            {[...items, ...items].map(([a, b, medium], i) => (
              <p key={i} className="leading-[1.2] text-[#af0e89] text-[13px]">
                <span className={jakarta(medium ? "Medium" : "Regular")}>{a}</span>
                <span className={jakarta("Bold")}>{b}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute left-0 top-0 w-[1440px] ${className}`}>
      <p className={`absolute left-0 w-[1440px] top-[903.59px] ${jakarta("Medium")} leading-[1.2] text-[#af0e89] text-[14px] text-center`}>
        Official Sponsor
      </p>
      <div className="absolute left-[660.99px] top-[924.59px] [&_path]:fill-[#750558]">
        <SponsorLogo />
      </div>
      <p className={`absolute left-0 w-[1440px] top-[965.41px] ${jakarta("Medium")} leading-[1.2] text-[#898989] text-[14px] text-center`}>
        *Terms &amp;Conditions Apply
      </p>
    </div>
  );
}

/** Desktop Frame 1 content (7706:19858) — used on its own and under Frames 2-4. */
function MainContent({ onSpin }: { onSpin?: () => void }) {
  return (
    <>
      <PinkBase />
      <TopBlock />
      <Wheel className="left-[515.74px] top-[362.82px]" />
      <Button className="left-[637.5px] top-[752.02px] w-[165px] h-[45px]" onClick={onSpin}>
        Spin The Wheel
      </Button>
      <Ticker className="top-[817.02px] bg-[#ffc3fb]" />
      <Footer />
    </>
  );
}

// 29% pink→plum wash (7772:20263) and the same wash with a 75% #750558 tint (7772:20321).
const WASH = "bg-[image:linear-gradient(180deg,rgba(249,166,241,0.29)_21.29%,rgba(40,0,30,0.29)_82.86%)]";
const WASH_TINT = "bg-[image:linear-gradient(180deg,rgba(249,166,241,0.29)_21.29%,rgba(40,0,30,0.29)_82.86%),linear-gradient(90deg,rgba(117,5,88,0.75)_0%,rgba(117,5,88,0.75)_100%)]";

/** Dark reward background used by Frames 3 and 4 (7706:20387 + 7706:20445). */
function RewardBackdrop() {
  return (
    <>
      <MainContent />
      <div className={`${BLEED} backdrop-blur-[0.85px] ${WASH}`} />
      <Wheel className="left-[516.98px] top-[363.96px]" />
      <div
        className={`${BLEED} overflow-clip backdrop-blur-[3.991px] ${WASH_TINT}`}
      >
        <Rays />
      </div>
    </>
  );
}

/**
 * Sun-ray watermark (Figma "Repeat group 1", 7706:20447 / 7706:20680), drawn in
 * 1440×1024 frame coordinates with Figma's exact ray angle, width, fill, stroke
 * and the 8 rotated copies. Each ray is the Figma triangle extended 5× along
 * its own edges, so the rays always run past the window edges like in Figma,
 * however wide or tall the browser is (the overlay clips them).
 */
function Rays() {
  const copies = [
    "translate(541.277 -376.706) rotate(45)",
    "translate(1190.39 -260.337) rotate(90)",
    "translate(1567.1 280.94) rotate(135)",
    "translate(1450.73 930.052) rotate(-180)",
    "translate(909.449 1306.76) rotate(-135)",
    "translate(260.337 1190.39) rotate(-90)",
    "translate(-116.369 649.112) rotate(-45)",
  ];
  return (
    <svg
      className="absolute left-[var(--ext,0px)] top-[var(--exty,0px)] overflow-visible pointer-events-none"
      width="1440"
      height="1024"
      viewBox="0 0 1440 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="drays-ray">
        {/* Figma: M-297.169 897.111 L724.816 461.925 L-382.216 408.538 Z, extended 5× from the tip. */}
        <path d="M-4385.1 2637.96L724.816 461.925L-4810.3 195.0Z" fill="#3A092D" fillOpacity="0.37" stroke="#9C3C8F" strokeWidth="1.19654" />
      </g>
      {copies.map((t) => (
        <use key={t} href="#drays-ray" transform={t} />
      ))}
    </svg>
  );
}

// ── Frames ───────────────────────────────────────────────────────────────────

/** Frame 1 (7706:19858). */
export function DesktopMain({ onSpin }: { onSpin?: () => void }) {
  return (
    <Stage>
      <MainContent onSpin={onSpin} />
    </Stage>
  );
}

/** Frame 2 (7772:20136): dark sunburst, bright wheel spinning on top, suspense texts (3s each). */
export function DesktopSpin() {
  const text = `absolute left-[720px] bottom-[645.5px] w-[461.66px] ${jakarta("SemiBold")} leading-[1.3] text-[19px] text-[#fef5fd] text-center`;
  return (
    <Stage>
      <MainContent />
      {/* 7772:20263 — light blur + 29% gradient, faint wheel copy underneath the overlay */}
      <div className={`${BLEED} backdrop-blur-[0.85px] ${WASH}`} />
      <Wheel className="left-[528.49px] top-[390.28px]" />
      {/* 7772:20321 — tinted overlay, sun-rays, soft glow behind the wheel */}
      <div
        className={`${BLEED} overflow-clip backdrop-blur-[3.991px] ${WASH_TINT}`}
      >
        <Rays />
        <div className="absolute left-[calc(var(--ext,0px)+667.24px)] top-[calc(var(--exty,0px)+404.38px)] size-[112.87px] rounded-full bg-[#692359] blur-[28.3px]" />
      </div>
      {/* Suspense texts — one every 3 seconds (same timeline as mobile Frame 2). */}
      <p className={`${text} animate-suspense-a`}>Fun fact: Zolt has helped NRIs send over $10M back home. 💸.</p>
      <p className={`${text} animate-suspense-b`}>Your karma is looking pretty good today. 😉</p>
      <p className={`${text} animate-suspense-c`}>Fun fact: Zolt has helped NRIs send over $10M back home. 💸.</p>
      {/* 7772:20327 — the bright wheel that spins and stops */}
      <Wheel className="left-[516.98px] top-[363.96px]" spin glow />
    </Stage>
  );
}

const inputText = `w-full bg-transparent border-0 outline-none p-0 m-0 ${jakarta("Medium")} leading-[1.24] text-[14px] text-[#3e002e] placeholder:text-[#3e002e]`;
const fieldLabel = `${jakarta("Medium")} leading-[normal] text-[12px] text-[#3e002e] whitespace-nowrap`;

/** Frame 3 (7772:20384): "Congratulations! You won." + name/email form. */
export function DesktopReward({ onUnlock }: { onUnlock?: (name: string, email: string) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Stage>
      <RewardBackdrop />
      {/* Card 7772:20573 — 301px wide, vertically centred (top 251.3) */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onUnlock?.(name, email);
        }}
        className="absolute left-[569.27px] top-1/2 -translate-y-1/2 w-[301px] flex flex-col gap-[24px] items-center pt-[65px] pb-[32px] px-[24px] rounded-[16px] overflow-clip border-[1.741px] border-[#eadbcd] border-solid bg-gradient-to-b from-[#fff7fd] from-[58.879%] to-[#fff2fe] to-[191.74%] shadow-[0px_-4px_19.7px_-3px_rgba(12,11,10,0.65)]"
      >
        <div className="relative flex flex-col gap-[8px] items-center w-full">
          <p className={`w-full ${jakarta("SemiBold")} leading-[1.3] text-[#2e1e1e] text-[20px] text-center tracking-[-0.4px]`}>Congratulations! You won.</p>
          <p className={`w-[238.773px] ${jakarta("Medium")} leading-[1.35] text-[#887065] text-[14px] text-center`}>Enter your email, and get the code!</p>
        </div>
        <div className="absolute inset-[calc(18.8%-1.09px)_calc(1.33%-1.69px)_calc(38.63%-0.4px)_calc(-1.33%-1.79px)] pointer-events-none">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgConfetti} />
        </div>
        {/* 167px hidden-code box (7772:20604) */}
        <img src={imgBlurCode} alt="Reward code hidden until unlocked" className="relative block w-[167px] h-[102px] select-none" />
        <label className="relative flex flex-col gap-[6.963px] items-start w-full">
          <span className={fieldLabel}>Name</span>
          <div className="bg-white border-[0.87px] border-[#ffefe3] border-solid flex items-center px-[17.407px] py-[10.444px] rounded-[10.444px] w-full">
            <input type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Rahul Singh" className={inputText} />
          </div>
        </label>
        <label className="relative flex flex-col gap-[6.963px] items-start w-full">
          <span className={fieldLabel}>Email</span>
          <div className="bg-white border-[1.741px] border-[#ffefe3] border-solid flex items-start px-[17.407px] py-[10.444px] rounded-[10.444px] w-full">
            <input type="email" autoComplete="email" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rahulsingh21@gmail.com" className={inputText} />
          </div>
        </label>
        <button type="submit" className="relative bg-[#750558] flex items-center justify-center px-[20px] py-[12px] rounded-[869.5px] cursor-pointer border-0">
          <span className={`${jakarta("SemiBold")} leading-[1.3] text-[16px] text-[#fff2fe] text-center whitespace-nowrap`}>Unlock your Reward!</span>
        </button>
      </form>

      {/* Gift + coins (group 7772:20616) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-[20px] left-[734px] top-[182px] w-[25px]"><div className="absolute inset-0 opacity-[0.68] overflow-hidden"><img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} /></div></div>
        <div className="absolute h-[63px] left-[644px] top-[178px] w-[54px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[395.64%] left-[-50.33%] max-w-none top-[-63.72%] w-[460.13%]" src={imgCoins} /></div></div>
        <div className="absolute flex h-[51px] items-center justify-center left-[741px] top-[222px] w-[55px]"><div className="-scale-y-100 flex-none rotate-180"><div className="h-[51px] relative w-[55px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div></div></div></div>
        <div className="absolute h-[29px] left-[742px] top-[254px] w-[35px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} /></div></div>
        <div className="absolute h-[91px] left-[677px] top-[205px] w-[86px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[242.27%] left-[-77.17%] max-w-none top-[-70.82%] w-[256%]" src={imgGift} /></div></div>
        <div className="absolute flex h-[49.128px] items-center justify-center left-[663.9px] top-[259.44px] w-[56.2px]"><div className="-scale-y-100 flex-none rotate-[165deg]"><div className="h-[38px] relative w-[48px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} /></div></div></div></div>
        <div className="absolute h-[51px] left-[644px] top-[224px] w-[55px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div></div>
        <div className="absolute flex h-[29px] items-center justify-center left-[709px] top-[187px] w-[31px]"><div className="-scale-y-100 flex-none rotate-180"><div className="h-[29px] relative w-[31px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div></div></div></div>
      </div>
    </Stage>
  );
}

const firstNameOf = (name?: string) => (name || "").trim().split(/\s+/)[0] || "Rahul";

/** Frame 4 (7772:20028): "Your Reward Is 1 Step Away" + sign-up / reward-code card. "Sign Up Now" → Frame 5. */
export function DesktopSignup({ name, onSignUp, onBack }: { name?: string; onSignUp?: () => void; onBack?: () => void }) {
  return (
    <Stage className="cursor-pointer" onClick={onBack}>
      <PinkBase />
      <TopBlock className="top-[-1.5px]" subtitle={false} />
      <p className="absolute left-0 w-[1440px] top-[364.23px] capitalize leading-[1.2] text-[17px] text-center whitespace-nowrap text-[#282828]">
        <span className={jakarta("Regular")}>Your reward is </span>
        <span className={`${jakarta("Bold")} text-[#a82486]`}>1 step away</span>
      </p>
      <div className="absolute left-[561px] top-[420.23px]">
        <CodeCard firstName={firstNameOf(name)} onSignUp={onSignUp} />
      </div>
      <Ticker className="top-[852.69px] bg-[#ffe2ff]" />
      <Footer className="translate-y-[9.1px]" />
    </Stage>
  );
}

/** Frame 5 (7807:20417): QR "Scan to Sign up" + reward code. Tap anywhere else → Frame 1. */
export function DesktopCode({ name, onBack }: { name?: string; onBack?: () => void }) {
  const [copied, setCopied] = useState(false);
  const copyCode = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(REWARD_CODE).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      },
      () => {},
    );
  };
  return (
    <Stage className="cursor-pointer" onClick={onBack}>
      <PinkBase />
      <TopBlock className="top-[24.59px]" subtitle={false} />

      {/* Card 7807:20443 — 637px, two columns */}
      <div
        className="absolute left-[401.5px] top-[406.31px] w-[637px] bg-[#fff2fe] border border-[#ffc3fb] border-solid flex flex-col gap-[19px] items-center overflow-clip pb-[20px] pt-[12px] px-[12px] rounded-[16px] shadow-[0px_0px_12px_6px_rgba(117,5,88,0.08)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[8px] items-center text-center whitespace-nowrap">
          <p className={`${jakarta("Bold")} leading-[normal] text-[#750558] text-[16px]`}>{`Hi ${firstNameOf(name)},`}</p>
          <p className="capitalize leading-[1.2] text-[12px] text-[#282828]">
            <span className={jakarta("Regular")}>Your reward </span>
            <img src={imgGiftEmoji} alt="🎁" className="inline-block w-[12px] h-[12px] align-[-1px]" />
            <span className={jakarta("Regular")}> is </span>
            <span className={`${jakarta("Bold")} text-[#a82486]`}>1 step away</span>
          </p>
        </div>

        <div className="flex gap-[19px] items-center">
          {/* Left: QR sign-up */}
          <div className="w-[283px] flex flex-col gap-[23px] items-center">
            <p className={`w-[214.016px] ${jakarta("Regular")} leading-[1.2] text-[#750558] text-[14px] text-center`}>
              Sign up to know what you have won.Your reward is waiting for you in the <span className={jakarta("Bold")}>Zolt app.</span>
            </p>
            <img src={imgQr} alt="QR code — scan to sign up in the Zolt app" className="block size-[147.3px]" />
            <button type="button" className="bg-[#750558] flex items-center justify-center px-[20px] py-[12px] rounded-[869.5px] w-[180px] border-0 cursor-pointer">
              <span className={`${jakarta("SemiBold")} leading-[1.3] text-[16px] text-[#fff2fe] text-center whitespace-nowrap`}>Scan to Sign up</span>
            </button>
          </div>

          {/* Vertical "Or" divider (7807:20464) */}
          <div className="self-stretch w-[12px] flex flex-col gap-[10px] items-center justify-center">
            <svg className="flex-[1_0_0] w-px block" preserveAspectRatio="none" aria-hidden>
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#898989" strokeWidth="1" strokeDasharray="6 3" />
            </svg>
            <p className={`${jakarta("Medium")} leading-[1.2] text-[12px] text-[#898989] text-center whitespace-nowrap`}>Or</p>
            <svg className="flex-[1_0_0] w-px block" preserveAspectRatio="none" aria-hidden>
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#898989" strokeWidth="1" strokeDasharray="6 3" />
            </svg>
          </div>

          {/* Right: reward code */}
          <div className="w-[278px] flex flex-col gap-[12px] items-center">
            <p className="w-[189.106px] leading-[1.2] text-[14px] text-[#515151] text-center">
              <span className={jakarta("Regular")}>You can also use this reward code to get your reward in your </span>
              <span className={jakarta("Bold")}>Zolt account.</span>
            </p>
            <div className="relative w-[231px] h-[62px] flex flex-col gap-[5px] items-center justify-center overflow-clip rounded-[12px] border-[1.741px] border-[#eadbcd] border-solid bg-gradient-to-b from-[#fff7fd] from-[71.861%] to-[#fff2fe] to-[99.837%] shadow-[0px_0px_15.493px_-21px_rgba(215,204,179,0.27)]">
              <img src={imgPattern} alt="" className="absolute left-0 top-0 w-[292px] h-[60px] max-w-none pointer-events-none" />
              <p className={`relative ${jakarta("Medium")} leading-[normal] text-[12px] text-[#b4b4b4] text-center whitespace-nowrap`}>Reward Code:</p>
              <div className="relative flex gap-[12px] items-center justify-center">
                <p className={`${jakarta("Bold")} leading-[normal] text-[#3f0831] text-[20px] text-center`}>{REWARD_CODE}</p>
                <button type="button" onClick={copyCode} aria-label={copied ? "Code copied" : "Copy code"} className="relative shrink-0 size-[20px] cursor-pointer p-0 border-0 bg-transparent">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                    <path d="M7.5 12.5C7.5 10.143 7.5 8.96447 8.23223 8.23223C8.96447 7.5 10.143 7.5 12.5 7.5L13.3333 7.5C15.6904 7.5 16.8689 7.5 17.6011 8.23223C18.3333 8.96447 18.3333 10.143 18.3333 12.5V13.3333C18.3333 15.6904 18.3333 16.8689 17.6011 17.6011C16.8689 18.3333 15.6904 18.3333 13.3333 18.3333H12.5C10.143 18.3333 8.96447 18.3333 8.23223 17.6011C7.5 16.8689 7.5 15.6904 7.5 13.3333L7.5 12.5Z" stroke="#3F0831" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.1666 7.4974C14.1647 5.03315 14.1274 3.75674 13.4101 2.88275C13.2716 2.71397 13.1168 2.55921 12.9481 2.42069C12.0261 1.66406 10.6563 1.66406 7.91675 1.66406C5.17718 1.66406 3.8074 1.66406 2.88544 2.42069C2.71666 2.55921 2.56189 2.71397 2.42338 2.88275C1.66675 3.80471 1.66675 5.17449 1.66675 7.91406C1.66675 10.6536 1.66675 12.0234 2.42338 12.9454C2.56189 13.1142 2.71666 13.2689 2.88544 13.4074C3.75942 14.1247 5.03584 14.162 7.50008 14.164" stroke="#3F0831" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {copied && (
                    <span className={`absolute left-1/2 -translate-x-1/2 top-[-26px] rounded-[6px] bg-[#3f0831] px-[6px] py-[2px] text-[11px] text-white whitespace-nowrap ${jakarta("Medium")}`}>Copied!</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ticker className="top-[826.61px] bg-[#ffe2ff]" />
      <Footer className="translate-y-[-16.98px]" />
    </Stage>
  );
}
