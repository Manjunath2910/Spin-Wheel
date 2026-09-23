import { useState, type MouseEvent } from "react";
import { SponsorLogo } from "./SpinTheWheel";
import imgLogo from "@/imports/SpinTheWheelAnimation/f30fbe8263dd7fdee4c4d27d0713de568c6c4de6.png";
import imgCoins from "@/imports/SpinTheWheelAnimation/5d417.png";
import imgGiftEmoji from "@/imports/gift-emoji.png"; // Apple 🎁, as Figma renders it
import imgHeadline from "@/imports/frame4-headline.svg";

// Frame 5 — reward code screen (Figma node 7701:19998), built line by line from
// the Figma layer tree. Tapping anywhere except the copy icon returns to Frame 1.
const REWARD_CODE = "C45681J5";

export default function RewardCode({ onBack, name }: { onBack?: () => void; name?: string }) {
  const firstName = (name || "").trim().split(/\s+/)[0] || "Rahul";
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
    <div
      className="relative size-full overflow-hidden bg-gradient-to-b from-[#fff2fe] to-[#ffc3fb] to-[150.83%] cursor-pointer"
      onClick={onBack}
      data-node-id="7701:19998"
    >
      {/* Floating background coins (group 7701:20001, 28% opacity) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-[25px] left-[calc(60%+37.3px)] opacity-[0.28] top-[82.7px] w-[21px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} /></div>
        </div>
        <div className="absolute flex h-[54.229px] items-center justify-center left-[27.3px] top-[107.7px] w-[55.063px]">
          <div className="flex-none rotate-[10.82deg]"><div className="h-[46.186px] opacity-[0.28] relative w-[47.235px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[436.36%] left-[-57.78%] max-w-none top-[-290.91%] w-[426.67%]" src={imgCoins} /></div></div></div>
        </div>
        <div className="absolute h-[83px] left-[calc(80%+5.3px)] opacity-[0.28] top-[165.7px] w-[74px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div>
        </div>
        <div className="absolute flex h-[45px] items-center justify-center left-[21.18px] top-[309.7px] w-[50px]">
          <div className="-rotate-90 -scale-y-100 flex-none"><div className="h-[50px] opacity-[0.28] relative w-[45px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div></div></div>
        </div>
        <div className="absolute flex h-[23px] items-center justify-center left-[calc(80%+1.3px)] top-[107.7px] w-[26px]">
          <div className="-rotate-90 -scale-y-100 flex-none"><div className="h-[26px] opacity-[0.28] relative w-[23px]"><div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} /></div></div></div>
        </div>
        <div className="absolute h-[51px] left-[calc(40%+32.38px)] opacity-[0.28] top-[38.72px] w-[40px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} /></div>
        </div>
        <div className="absolute bottom-[580.3px] h-[25px] left-[calc(60%+54.3px)] opacity-[0.28] w-[21px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} /></div>
        </div>
        <div className="absolute h-[30px] left-[67.3px] opacity-[0.28] top-[198.7px] w-[32px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} /></div>
        </div>
        <div className="absolute bottom-[482.01px] h-[51px] left-[calc(80%+4.29px)] opacity-[0.28] w-[40px]">
          <div className="absolute inset-0 overflow-hidden"><img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} /></div>
        </div>
      </div>

      {/* Main column, bottom-anchored (node 7701:20011) */}
      <div className="-translate-x-1/2 absolute bottom-0 flex flex-col h-[770px] items-center left-1/2 w-[390px]">
        <div className="flex flex-col gap-[16px] h-[656px] items-center shrink-0 w-full">
          {/* Logo + headline (node 7701:20013) */}
          <div className="flex flex-col gap-[20px] items-center shrink-0">
            <div className="h-[50.881px] relative shrink-0 w-[105.675px]" data-name="IMG_7339 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Hello Germany presents MELAM" className="absolute h-[259.56%] left-[-27.51%] max-w-none top-[-65.99%] w-[156.21%]" src={imgLogo} />
              </div>
            </div>
            <div className="flex flex-col gap-[4px] items-center shrink-0">
              {/* SPIN TO WIN + white UPTO €100 pill (node 7701:20020), exported from Figma with outlined text */}
              <div className="h-[111.287px] relative shrink-0 w-[149.331px]">
                <img src={imgHeadline} alt="Spin to win — upto €100" className="absolute block left-0 top-0 h-[112px] w-[152px] max-w-none" />
              </div>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] shrink-0 text-[12px] text-[#750558] text-center whitespace-nowrap">
                Spin the wheel to test your luck!
              </p>
            </div>
          </div>

          {/* Node 7701:20027 */}
          <div className="flex flex-col gap-[32px] items-center shrink-0">
            <div className="flex flex-col gap-[60px] items-center shrink-0 w-[301px]">
              <div className="flex flex-col gap-[32px] items-start shrink-0 w-full">
                {/* Greeting (node 7701:20029) */}
                <div className="flex flex-col gap-[8px] items-center shrink-0 text-center w-full">
                  <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] shrink-0 text-[#750558] text-[20px] whitespace-nowrap">{`Hey ${firstName}!`}</p>
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] shrink-0 text-[#898989] text-[15px] w-[257.529px]">
                    Here’s your code. We’ve sent your code to your email too.<img src={imgGiftEmoji} alt="🎁" className="inline-block w-[15px] h-[15px] align-[-1.05px]" />
                  </p>
                </div>

                {/* Code box (node 7701:20032) */}
                <div className="bg-gradient-to-b from-[#fff7fd] from-[71.861%] to-[#fff2fe] to-[99.837%] border-[#eadbcd] border-[1.741px] border-solid flex gap-[12px] items-center justify-center overflow-clip px-[36px] py-[24px] relative rounded-[12px] shadow-[0px_0px_15.493px_-21px_rgba(215,204,179,0.27)] shrink-0 w-full">
                  <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] shrink-0 text-[#3f0831] text-[20px] text-center">
                    {REWARD_CODE}
                  </p>
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
                      <span className="absolute left-1/2 -translate-x-1/2 top-[-26px] rounded-[6px] bg-[#3f0831] px-[6px] py-[2px] text-[11px] text-white whitespace-nowrap font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Sign-up copy + button (node 7701:20045) */}
              <div className="flex flex-col gap-[20px] items-center shrink-0 w-full">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] shrink-0 text-[15px] text-[#515151] text-center w-[257.529px]">
                  Use your code to Sign up on
                  <br aria-hidden />
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">Zolt Money App </span>
                  to get your reward.
                </p>
                <div className="bg-[#750558] flex items-center justify-center px-[20px] py-[12px] rounded-[869.5px] shrink-0 w-full" data-name="Button Main">
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] shrink-0 text-[16px] text-[#fff2fe] text-center whitespace-nowrap">
                    Download App Now!
                  </p>
                </div>
              </div>
            </div>

            {/* Notification ticker (node 7701:20049) */}
            <div className="bg-[#ffc3fb] overflow-clip py-[8px] relative shrink-0 w-[390px]" data-name="Notification">
              <div className="f4-marquee flex w-max items-center whitespace-nowrap">
                {[0, 1].map((dup) => (
                  <div key={dup} className="flex gap-[19px] items-center pr-[19px]">
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] text-[#af0e89] text-[13px]">Aarav just got <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">€25 reward.</span></p>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] text-[#af0e89] text-[13px]">Ankit just got <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">€100 reward.</span></p>
                    <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] text-[#af0e89] text-[13px]">Ankit just got <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">€100 reward.</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sponsor + terms (node 7701:20056) */}
        <div className="flex flex-col gap-[12px] items-center py-[20px] shrink-0 w-full">
          <div className="flex flex-col gap-[4px] items-center shrink-0 w-full">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] shrink-0 text-[#af0e89] text-[14px] text-center whitespace-nowrap">Official Sponsor</p>
            {/* Frame 4 logo is Primary Magenta #750558 */}
            <div className="[&_path]:fill-[#750558]">
              <SponsorLogo />
            </div>
          </div>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] shrink-0 text-[14px] text-[#898989] text-center whitespace-nowrap">*Terms &amp;Conditions Apply</p>
        </div>
      </div>
    </div>
  );
}
