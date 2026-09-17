import { SponsorLogo } from "./SpinTheWheel";
import imgTopSection from "@/imports/top-section.png";
import imgGift from "@/imports/SpinTheWheelAnimation/28abd.png";
import imgCoins from "@/imports/SpinTheWheelAnimation/5d417.png";

// Frame 4 — "Your Reward Is One Step Away" reward-code screen (Figma node
// 7772:21461). Bright Frame-1 layout with a reward card in place of the wheel.
export default function RewardCode({ onBack, name }: { onBack?: () => void; name?: string }) {
  // The name entered on Frame 3 personalises the greeting (falls back to "Rahul").
  const firstName = (name || "").trim().split(/\s+/)[0] || "Rahul";
  return (
    <div
      className="relative size-full overflow-hidden bg-gradient-to-b from-[#fff2fe] to-[#ffc3fb] to-[150.83%] cursor-pointer"
      onClick={onBack}
    >

      {/* Floating background coins (Figma nodes 7772:21465-21473). */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-[25px] left-[calc(60%+37.3px)] opacity-[0.28] top-[82.2px] w-[21px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} /></div>
        </div>
        <div className="absolute flex h-[54.229px] items-center justify-center left-[27.31px] top-[107.2px] w-[55.063px]">
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
        <div className="absolute h-[30px] left-[67.3px] opacity-[0.28] top-[198.2px] w-[32px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div>
        </div>
      </div>

      {/* Main content column, bottom-anchored (Figma node 7772:21474). */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[390px] flex flex-col items-center">
        <div className="flex flex-col gap-[12px] items-center px-[16px] w-full">
          {/* Exact Figma top section (Frame 2147241226 at 2x): MELAM logo, the
              two-line SPIN TO / WIN headline, the UPTO €100 pill, and
              "Your Reward Is One Step Away". Rendered at its 246px design width. */}
          <img
            src={imgTopSection}
            alt="Hello Germany presents MELAM — Spin to Win, upto €100. Your Reward Is One Step Away"
            className="block h-auto w-[246px] max-w-none"
          />

          {/* Card + ticker (node 7772:21490) */}
          <div className="flex flex-col gap-[10px] items-center w-full">
            <div className="bg-[#fff2fe] border border-[#ffc3fb] border-solid flex flex-col gap-[10px] items-center justify-center overflow-clip pb-[12px] pt-[8px] px-[12px] rounded-[16px] shadow-[0px_0px_12px_6px_rgba(117,5,88,0.08)] w-[318px]">
              <div className="flex flex-col gap-[8px] items-center w-full">
                {/* Gift + coins cluster (nodes 7772:21493-21501) */}
                <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative">
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
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#750558] text-[16px] text-center whitespace-nowrap">{`Hi ${firstName},`}</p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#750558] text-[14px] text-center leading-[1.2] w-[275.27px]">
                      Sign up to know what you have won.Your reward is waiting for you in the{" "}
                      <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Zolt app.</span>
                    </p>
                  </div>
                  <div className="bg-[#750558] flex items-center justify-center px-[20px] py-[12px] rounded-[869.5px] w-full">
                    <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#fff2fe] text-center whitespace-nowrap leading-[1.3]">
                      Sign Up Now
                    </p>
                  </div>
                </div>
              </div>

              {/* Or divider (node 7772:21509) */}
              <div className="flex gap-[10px] items-center justify-center w-full">
                <div className="flex-1 border-t border-dashed border-[#e6cfe0]" />
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#898989] text-center whitespace-nowrap">Or</p>
                <div className="flex-1 border-t border-dashed border-[#e6cfe0]" />
              </div>

              {/* Reward code (nodes 7772:21513, 23700) */}
              <div className="flex flex-col gap-[12px] items-start w-full">
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[#515151] text-[14px] text-center w-full leading-[1.2]">
                  You can also use this reward code to get your reward in your{" "}
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Zolt account.</span>
                </p>
                <div
                  className="bg-gradient-to-b from-[#fff7fd] from-[71.861%] to-[#fff2fe] to-[99.837%] border-[1.741px] border-[#eadbcd] border-solid flex flex-col gap-[5px] h-[62px] items-center justify-center overflow-clip rounded-[12px] w-full relative"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-20deg, rgba(215,204,179,0.16) 0px, rgba(215,204,179,0.16) 1px, transparent 1px, transparent 9px), linear-gradient(180deg, #fff7fd 71.861%, #fff2fe 99.837%)",
                  }}
                >
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#b4b4b4] text-center whitespace-nowrap">Reward Code:</p>
                  <div className="flex gap-[12px] items-center justify-center">
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#3f0831] text-[20px] text-center">C45681J5</p>
                    <div className="size-[20px] relative shrink-0 text-[#3f0831]">
                      <svg viewBox="0 0 20 20" fill="none" className="size-full" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6.7" y="6.7" width="9.5" height="9.5" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M13 6.2V5A2.2 2.2 0 0 0 10.8 2.8H5A2.2 2.2 0 0 0 2.8 5v5.8A2.2 2.2 0 0 0 5 13h1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticker (node 7772:21531) — scrolling reward notifications. */}
            <div className="bg-[#ffc3fb] w-[390px] h-[37px] overflow-hidden relative flex items-center">
              <div className="f4-marquee flex gap-[19px] items-center whitespace-nowrap px-[8px]">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex gap-[19px] items-center">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[#af0e89] text-[13px]">Aarav just got <span className="font-bold">€25 reward.</span></p>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[#af0e89] text-[13px]">Ankit just got <span className="font-bold">€100 reward.</span></p>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[#af0e89] text-[13px]">Priya just got <span className="font-bold">€50 reward.</span></p>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[#af0e89] text-[13px]">Rahul just got <span className="font-bold">€75 reward.</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor + terms (node 7772:21538) */}
        <div className="flex flex-col gap-[10px] items-center py-[10px] w-[390px]">
          <div className="flex flex-col gap-[4px] items-center">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#af0e89] text-[14px] text-center">Official Sponsor</p>
            <SponsorLogo />
          </div>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#898989] text-[14px] text-center">*Terms &amp; Conditions Apply</p>
        </div>
      </div>
    </div>
  );
}
