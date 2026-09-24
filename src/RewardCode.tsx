import { useState, type MouseEvent } from "react";
import { SponsorLogo } from "./SpinTheWheel";
import imgLogo from "@/imports/SpinTheWheelAnimation/f30fbe8263dd7fdee4c4d27d0713de568c6c4de6.png";
import imgCoins from "@/imports/SpinTheWheelAnimation/5d417.png";
import imgGift from "@/imports/SpinTheWheelAnimation/28abd.png";
import imgHeadline from "@/imports/frame4-headline.svg";
import imgPattern from "@/imports/code-pattern.svg";

// Mobile Frame 4 — "Your Reward Is One Step Away" sign-up + reward code (Figma node 7772:21461).
// Tapping anywhere except the copy icon and the Sign Up button returns to Frame 1.
export const REWARD_CODE = "C45681J5";

export function DashedLine() {
  // Vector 251: 1px #898989 stroke, dash 6 / gap 3.
  return (
    <svg className="flex-[1_0_0] min-w-px h-px block" preserveAspectRatio="none" aria-hidden>
      <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="#898989" strokeWidth="1" strokeDasharray="6 3" />
    </svg>
  );
}

/**
 * The white sign-up + reward-code card (mobile Frame 4 node 7772:21491, also used
 * by desktop Frame 4 node 7772:20055 — same 318px design).
 */
export function CodeCard({ firstName, onSignUp }: { firstName: string; onSignUp?: () => void }) {
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
    <div className="bg-[#fff2fe] border border-[#ffc3fb] border-solid flex flex-col gap-[19px] items-center justify-center overflow-clip pb-[12px] pt-[8px] px-[12px] rounded-[16px] shadow-[0px_0px_12px_6px_rgba(117,5,88,0.08)] shrink-0 w-[318px]">
      <div className="flex flex-col gap-[8px] items-center w-full">
        {/* Gift + coins (node 7772:21493) */}
        <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0">
          <div className="col-start-1 row-start-1 h-[12.525px] ml-[56.16px] mt-[2.5px] relative w-[15.543px]"><div className="absolute inset-0 opacity-[0.68] overflow-hidden"><img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} /></div></div>
          <div className="col-start-1 row-start-1 h-[39.277px] ml-0 mt-0 relative w-[33.723px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[395.64%] left-[-50.33%] max-w-none top-[-63.72%] w-[460.13%]" src={imgCoins} /></div></div>
          <div className="col-start-1 row-start-1 flex h-[31.799px] items-center justify-center ml-[60.5px] mt-[27.45px] relative w-[34.343px]"><div className="-scale-y-100 flex-none rotate-180"><div className="h-[31.799px] relative w-[34.343px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div></div></div></div>
          <div className="col-start-1 row-start-1 h-[17.847px] ml-[61.15px] mt-[47.42px] relative w-[22.147px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} /></div></div>
          <div className="col-start-1 row-start-1 h-[56.742px] ml-[20.59px] mt-[16.85px] relative w-[53.699px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[242.27%] left-[-77.17%] max-w-none top-[-70.82%] w-[256%]" src={imgGift} /></div></div>
          <div className="col-start-1 row-start-1 flex h-[30.791px] items-center justify-center ml-[12.67px] mt-[50.68px] relative w-[34.868px]"><div className="-scale-y-100 flex-none rotate-[165deg]"><div className="h-[23.923px] relative w-[29.687px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[471.9%] left-[-41.53%] max-w-none top-[-320.58%] w-[379.72%]" src={imgCoins} /></div></div></div></div>
          <div className="col-start-1 row-start-1 h-[31.799px] ml-0 mt-[28.7px] relative w-[34.343px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div></div>
          <div className="col-start-1 row-start-1 flex h-[18.003px] items-center justify-center ml-[40.46px] mt-[5.62px] relative w-[19.443px]"><div className="-scale-y-100 flex-none rotate-180"><div className="h-[18.003px] relative w-[19.443px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div></div></div></div>
        </div>

        <div className="flex flex-col gap-[16px] items-center w-full">
          <div className="flex flex-col gap-[10px] items-center">
            <p className="font-jakarta font-bold leading-[normal] text-[#750558] text-[16px] text-center whitespace-nowrap">{`Hi ${firstName},`}</p>
            <p className="w-[275.27px] font-jakarta font-normal leading-[1.2] text-[#750558] text-[14px] text-center">
              Sign up to know what you have won.Your reward is waiting for you in the{" "}
              <span className="font-jakarta font-bold">Zolt app.</span>
            </p>
          </div>
          {/* Button (node 7772:21507) */}
          <button
            type="button"
            onClick={(e) => {
          e.stopPropagation();
          onSignUp?.();
        }}
            className="bg-[#750558] flex items-center justify-center px-[20px] py-[12px] rounded-[869.5px] w-full border-0 cursor-pointer"
          >
            <span className="font-jakarta font-semibold leading-[1.3] text-[16px] text-[#fff2fe] text-center whitespace-nowrap">Sign Up Now</span>
          </button>
        </div>
      </div>

      {/* Or divider (node 7772:21509) */}
      <div className="flex gap-[10px] items-center justify-center w-full">
        <DashedLine />
        <p className="font-jakarta font-medium leading-[1.2] text-[12px] text-[#898989] text-center whitespace-nowrap">Or</p>
        <DashedLine />
      </div>

      {/* Reward code (nodes 7772:21513, 7772:23700) */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        <p className="w-full leading-[1.2] text-[14px] text-[#515151] text-center">
          <span className="font-jakarta font-normal">You can also use this reward code to get your reward in your </span>
          <span className="font-jakarta font-bold">Zolt account.</span>
        </p>
        <div className="relative w-full h-[62px] flex flex-col gap-[5px] items-center justify-center overflow-clip rounded-[12px] border-[1.741px] border-[#eadbcd] border-solid bg-gradient-to-b from-[#fff7fd] from-[71.861%] to-[#fff2fe] to-[99.837%] shadow-[0px_0px_15.493px_-21px_rgba(215,204,179,0.27)]">
          {/* Diagonal line texture (Vector 7772:23715) */}
          <img src={imgPattern} alt="" className="absolute left-0 top-0 w-[292px] h-[60px] max-w-none pointer-events-none" />
          <p className="relative font-jakarta font-medium leading-[normal] text-[12px] text-[#b4b4b4] text-center whitespace-nowrap">Reward Code:</p>
          <div className="relative flex gap-[12px] items-center justify-center">
            <p className="font-jakarta font-bold leading-[normal] text-[#3f0831] text-[20px] text-center">{REWARD_CODE}</p>
            <button
              type="button"
              onClick={copyCode}
              aria-label={copied ? "Code copied" : "Copy code"}
              className="relative shrink-0 size-[20px] cursor-pointer p-0 border-0 bg-transparent"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                <path d="M7.5 12.5C7.5 10.143 7.5 8.96447 8.23223 8.23223C8.96447 7.5 10.143 7.5 12.5 7.5L13.3333 7.5C15.6904 7.5 16.8689 7.5 17.6011 8.23223C18.3333 8.96447 18.3333 10.143 18.3333 12.5V13.3333C18.3333 15.6904 18.3333 16.8689 17.6011 17.6011C16.8689 18.3333 15.6904 18.3333 13.3333 18.3333H12.5C10.143 18.3333 8.96447 18.3333 8.23223 17.6011C7.5 16.8689 7.5 15.6904 7.5 13.3333L7.5 12.5Z" stroke="#3F0831" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.1666 7.4974C14.1647 5.03315 14.1274 3.75674 13.4101 2.88275C13.2716 2.71397 13.1168 2.55921 12.9481 2.42069C12.0261 1.66406 10.6563 1.66406 7.91675 1.66406C5.17718 1.66406 3.8074 1.66406 2.88544 2.42069C2.71666 2.55921 2.56189 2.71397 2.42338 2.88275C1.66675 3.80471 1.66675 5.17449 1.66675 7.91406C1.66675 10.6536 1.66675 12.0234 2.42338 12.9454C2.56189 13.1142 2.71666 13.2689 2.88544 13.4074C3.75942 14.1247 5.03584 14.162 7.50008 14.164" stroke="#3F0831" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copied && (
                <span className="absolute left-1/2 -translate-x-1/2 top-[-26px] rounded-[6px] bg-[#3f0831] px-[6px] py-[2px] text-[11px] text-white whitespace-nowrap font-jakarta font-medium">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>  );
}

export default function RewardCode({ onBack, name }: { onBack?: () => void; name?: string }) {
  const firstName = (name || "").trim().split(/\s+/)[0] || "Rahul";
  return (
    <div
      className="relative size-full overflow-hidden bg-[#fff2fe] cursor-pointer"
      onClick={onBack}
      data-node-id="7772:21461"
    >
      {/* Background layer = the full 390×899 Figma frame (7772:21461), shifted up
          55px so its bottom lines up with our 844px screen (the column below is
          bottom-anchored, exactly like Figma). The gradient and the faded coin
          "watermark" (group 7772:21464) therefore sit at their exact Figma
          positions relative to the content; only the status-bar strip is cut. */}
      <div className="absolute left-0 top-[-55px] w-[390px] h-[899px] pointer-events-none bg-gradient-to-b from-[#fff2fe] to-[#ffc3fb] to-[150.83%]">
        {/* Floating background coins (group 7772:21464, 28% opacity) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute h-[25px] left-[calc(60%+37.3px)] opacity-[0.28] top-[82.2px] w-[21px]">
            <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} /></div>
          </div>
          <div className="absolute flex h-[54.229px] items-center justify-center left-[27.3px] top-[107.2px] w-[55.063px]">
            <div className="flex-none rotate-[10.82deg]"><div className="h-[46.186px] opacity-[0.28] relative w-[47.235px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[436.36%] left-[-57.78%] max-w-none top-[-290.91%] w-[426.67%]" src={imgCoins} /></div></div></div>
          </div>
          <div className="absolute h-[83px] left-[calc(80%+5.3px)] opacity-[0.28] top-[165.2px] w-[74px]">
            <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div>
          </div>
          <div className="absolute flex h-[45px] items-center justify-center left-[21.18px] top-[309.2px] w-[50px]">
            <div className="-rotate-90 -scale-y-100 flex-none"><div className="h-[50px] opacity-[0.28] relative w-[45px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div></div></div>
          </div>
          <div className="absolute flex h-[23px] items-center justify-center left-[calc(80%+1.3px)] top-[107.2px] w-[26px]">
            <div className="-rotate-90 -scale-y-100 flex-none"><div className="h-[26px] opacity-[0.28] relative w-[23px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div></div></div>
          </div>
          <div className="absolute h-[51px] left-[calc(40%+32.38px)] opacity-[0.28] top-[38.22px] w-[40px]">
            <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} /></div>
          </div>
          <div className="absolute bottom-[702.8px] h-[25px] left-[calc(60%+54.3px)] opacity-[0.28] w-[21px]">
            <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} /></div>
          </div>
          <div className="absolute h-[30px] left-[67.3px] opacity-[0.28] top-[198.2px] w-[32px]">
            <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div>
          </div>
          <div className="absolute bottom-[604.51px] h-[51px] left-[calc(80%+4.29px)] opacity-[0.28] w-[40px]">
            <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} /></div>
          </div>
        </div>

      </div>

      {/* Main column, bottom-anchored (node 7772:21474) */}
      <div className="-translate-x-1/2 absolute bottom-0 left-1/2 flex flex-col items-center w-[390px]">
        <div className="flex flex-col gap-[12px] items-center px-[16px] w-full">
          {/* Logo + headline + "Your Reward Is One Step Away" (node 7772:21476) */}
          <div className="flex flex-col gap-[20px] items-center shrink-0">
            <div className="h-[50.881px] relative shrink-0 w-[105.675px]" data-name="IMG_7339 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Hello Germany presents MELAM" className="absolute h-[259.56%] left-[-27.51%] max-w-none top-[-65.99%] w-[156.21%]" src={imgLogo} />
              </div>
            </div>
            {/* SPIN TO WIN + white UPTO €100 pill (node 7772:21483), exported from Figma with outlined text */}
            <div className="h-[111.287px] relative shrink-0 w-[149.331px]">
              <img src={imgHeadline} alt="Spin to win — upto €100" className="absolute block left-0 top-0 h-[112px] w-[152px] max-w-none" />
            </div>
            <p className="capitalize leading-[1.2] text-[17px] text-center whitespace-nowrap text-[#282828]">
              <span className="font-jakarta font-normal">Your reward is </span>
              <span className="font-jakarta font-bold text-[#a82486]">One step away</span>
            </p>
          </div>

          {/* Card + ticker (node 7772:21490) */}
          <div className="flex flex-col gap-[24px] items-center shrink-0 w-full">
            <CodeCard firstName={firstName} />

            {/* Notification ticker (node 7772:21531) — scrolling, same as Frame 1 */}
            <div className="bg-[#ffc3fb] overflow-clip h-[32px] flex items-center relative shrink-0 w-[390px]" data-name="Notification">
              <div className="animate-marquee will-change-transform flex w-max items-center whitespace-nowrap">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex gap-[19px] items-center pr-[19px]">
                    {[["Aarav", "€25"], ["Ankit", "€100"], ["Ankit", "€100"]].map(([who, amt], i) => (
                      <p key={i} className="font-jakarta font-medium leading-[1.2] text-[#af0e89] text-[13px]">
                        {who} just got <span className="font-jakarta font-bold">{amt} reward.</span>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor + terms (node 7772:21538) */}
        <div className="flex flex-col gap-[12px] items-center py-[20px] shrink-0 w-[390px]">
          <div className="flex flex-col gap-[4px] items-center w-full">
            <p className="font-jakarta font-medium leading-[17px] h-[17px] text-[#af0e89] text-[14px] text-center whitespace-nowrap">Official Sponsor</p>
            <div className="[&_path]:fill-[#750558] leading-[0] h-[28.82px]">
              <SponsorLogo />
            </div>
          </div>
          <p className="font-jakarta font-medium leading-[17px] h-[17px] text-[14px] text-[#898989] text-center whitespace-nowrap">*Terms &amp;Conditions Apply</p>
        </div>
      </div>
    </div>
  );
}
