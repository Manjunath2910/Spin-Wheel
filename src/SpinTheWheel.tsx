// Animations are driven by CSS (see src/index.css: .f2-wheel-spin, .f2-suspense-*)
// so the exact Figma export renders without the runtime motion dependency.
import svgPaths from "@/imports/SpinTheWheelAnimation/svg-q30emd064u";
import imgImg73391 from "@/imports/SpinTheWheelAnimation/f30fbe8263dd7fdee4c4d27d0713de568c6c4de6.png";
import imgCoins from "@/imports/SpinTheWheelAnimation/3802f91808ac57b52c9b3fa5768079a91b6f0c80.png";

// ── Dot SVG helpers ──────────────────────────────────────────────────────────

function DotA() {
  return (
    <svg className="block size-full" fill="none" height="4.58043" preserveAspectRatio="none" viewBox="0 0 4.58043 4.58043" width="4.58043">
      <g filter="url(#dot-a)" id="Ellipse 1534">
        <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" />
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.58043" id="dot-a" width="4.58043" x="0" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="0.327174" dy="0.327174" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

function DotB() {
  return (
    <svg className="block size-full" fill="none" height="4.58043" preserveAspectRatio="none" viewBox="0 0 4.58043 4.58043" width="4.58043">
      <g filter="url(#dot-b)" id="Ellipse 1537">
        <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" />
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.58043" id="dot-b" width="4.58043" x="0" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="0.327174" dy="0.327174" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

function DotC() {
  return (
    <svg className="block size-full" fill="none" height="4.58043" preserveAspectRatio="none" viewBox="0 0 4.58043 4.58043" width="4.58043">
      <g filter="url(#dot-c)" id="Ellipse 1540">
        <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" />
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.58043" id="dot-c" width="4.58043" x="0" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="0.327174" dy="0.327174" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

// ── Status Bar ───────────────────────────────────────────────────────────────

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p
            className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#454545] text-[17px] text-center whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] relative shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 27.328 13" width="27.328">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="#454545" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="#454545" id="Cap" opacity="0.4" />
          <rect fill="#454545" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" height="12.2264" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264" width="19.2">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="#454545" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" height="12.3283" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283" width="17.1417">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="#454545" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

export function StatusBarFrame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

// ── Sponsor Logo ─────────────────────────────────────────────────────────────

function Group1() {
  return (
    <div className="col-1 h-[18.044px] ml-0 mt-0 relative row-1 w-[18.522px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.0413" preserveAspectRatio="none" viewBox="0 0 18.5216 18.0413" width="18.5216">
        <g id="Group">
          <path d={svgPaths.p13bf2400} fill="#A82486" id="Vector" />
          <path d={svgPaths.p361acd00} fill="#A82486" id="Vector_2" />
          <path d={svgPaths.p39ea2700} fill="#A82486" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 h-[16.553px] ml-[27.36px] mt-[7.45px] relative row-1 w-[85.947px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.5544" preserveAspectRatio="none" viewBox="0 0 85.9472 16.5544" width="85.9472">
        <g id="Group">
          <path d={svgPaths.p32208600} fill="#A82486" id="Vector" />
          <path d={svgPaths.p1809a400} fill="#A82486" id="Vector_2" />
          <path d={svgPaths.p2994cfc0} fill="#A82486" id="Vector_3" />
          <path d={svgPaths.p36cdd240} fill="#A82486" id="Vector_4" />
          <path d={svgPaths.p2735f580} fill="#A82486" id="Vector_5" />
          <path d={svgPaths.p3dd07280} fill="#A82486" id="Vector_6" />
          <path d={svgPaths.p1c27c300} fill="#A82486" id="Vector_7" />
          <path d={svgPaths.p3833b621} fill="#A82486" id="Vector_8" />
          <path d={svgPaths.p1b5cac70} fill="#A82486" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

export function SponsorLogo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[4.19px] mt-[4.35px] place-items-start relative row-1">
              <Group1 />
            </div>
            <div className="col-1 h-[28.822px] ml-0 mt-0 relative row-1 w-[118.015px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Vector" />
              </svg>
            </div>
            <Group2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-[calc(50%+0.01px)] top-[770px]">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#e25dc0] text-[14px] text-center whitespace-nowrap">Official Sponsor</p>
      <SponsorLogo />
    </div>
  );
}

// ── Win section (Frame8) ─────────────────────────────────────────────────────

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['GC_North_Sans_Demo:Extra_Bold',sans-serif] items-start mb-[-18px] not-italic relative shrink-0 text-[#a82486] uppercase w-[137.336px]">
      <p className="leading-[63px] mb-[-30px] relative shrink-0 text-[33.224px] tracking-[0.6645px] w-full">Spin to</p>
      <p className="h-[62.842px] leading-[80.324px] relative shrink-0 text-[65.236px] tracking-[1.3047px] w-full">win</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex h-[45.445px] items-center justify-center relative shrink-0 w-full">
      <div className="-rotate-6 flex-none w-full">
        <div className="bg-[#ffd5b3] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[4px] relative rounded-[16px] w-full">
          <p className="[word-break:break-word] font-['GC_North_Sans_Demo:Extra_Bold',sans-serif] leading-[21.577px] not-italic relative shrink-0 text-[#e56805] text-[22px] text-center tracking-[0.44px] uppercase whitespace-nowrap">upto €100</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[149.331px]">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <Frame6 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#898989] text-[16px] text-center whitespace-nowrap">Spin the wheel to test your luck!</p>
    </div>
  );
}

// ── Background wheel (Group7 / Frame8) ──────────────────────────────────────

function Group10() {
  return (
    <div className="col-1 h-[301px] ml-0 mt-0 relative row-1 w-[300.946px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="301" preserveAspectRatio="none" viewBox="0 0 300.946 301" width="300.946">
        <g id="Group 2147227489">
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661286" rx="0.654348" width="7.85217" x="264.681" y="149.531" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661292" rx="0.654348" transform="rotate(180 36.9539 151.488)" width="7.85217" x="36.9539" y="151.488" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661289" rx="0.654348" transform="matrix(-1 0 0 1 36.9539 149.543)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661293" rx="0.654348" transform="matrix(1 0 0 -1 264.681 151.472)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661287" rx="0.654348" transform="rotate(-34.9019 241.77 83.6795)" width="7.85217" x="241.77" y="83.6795" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661294" rx="0.654348" transform="rotate(145.098 59.8562 217.339)" width="7.85217" x="59.8562" y="217.339" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661290" rx="0.654348" transform="matrix(-0.820133 -0.572173 -0.572173 0.820133 59.8562 83.699)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661295" rx="0.654348" transform="matrix(0.820133 0.572173 0.572173 -0.820133 241.77 217.324)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661288" rx="0.654348" transform="rotate(-66.4515 185.825 43.5076)" width="7.85217" x="185.825" y="43.5076" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661296" rx="0.654348" transform="rotate(113.548 115.806 257.507)" width="7.85217" x="115.806" y="257.507" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661291" rx="0.654348" transform="matrix(-0.399525 -0.916722 -0.916722 0.399525 115.806 43.5233)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" id="Rectangle 34661297" rx="0.654348" transform="matrix(0.399525 0.916722 0.916722 -0.399525 185.825 257.492)" width="7.85217" />
          <path d={svgPaths.p2d4b6670} fill="#FFC3FB" id="Ellipse 1522" />
          <path d={svgPaths.p22a72000} fill="#FFC3FB" id="Ellipse 1526" />
          <path d={svgPaths.p4856300} fill="#FFC3FB" id="Ellipse 1524" />
          <path d={svgPaths.p2a46da80} fill="#FFC3FB" id="Ellipse 1527" />
          <path d={svgPaths.p3e9a0300} fill="#FFC3FB" id="Ellipse 1530" />
          <path d={svgPaths.p16d18e00} fill="#A82486" id="Ellipse 1523" />
          <path d={svgPaths.p38e99b70} fill="#A82486" id="Ellipse 1528" />
          <path d={svgPaths.p37e46770} fill="#A82486" id="Ellipse 1525" />
          <path d={svgPaths.p7fb0080} fill="#A82486" id="Ellipse 1529" />
          <path d={svgPaths.p1b168f00} fill="#A82486" id="Ellipse 1531" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 h-[229.135px] ml-[35.99px] mt-[35.68px] relative row-1 w-[260.162px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="229.135" preserveAspectRatio="none" viewBox="0 0 260.161 229.135" width="260.161">
        <g id="Group 2147227488">
          <g filter="url(#filter0_d_0_106)" id="Ellipse 1532">
            <circle cx="114.493" cy="114.822" fill="#FDF9EE" r="22.1614" />
          </g>
          <circle cx="114.567" cy="114.567" id="Ellipse 1533" r="110.673" stroke="#FFF2FE" strokeWidth="7.78857" />
          <g filter="url(#filter1_d_0_106)" id="Ellipse 1534">
            <circle cx="204.638" cy="50.2243" fill="#1C181E" r="2.12663" />
          </g>
          <g filter="url(#filter2_d_0_106)" id="Ellipse 1537">
            <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" transform="matrix(-1 0 0 1 26.4961 48.0977)" />
          </g>
          <g filter="url(#filter3_d_0_106)" id="Ellipse 1540">
            <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" transform="matrix(-0.315495 -0.948927 -0.948927 0.315495 151.008 10.9062)" />
          </g>
          <g filter="url(#filter4_d_0_106)" id="Ellipse 1542">
            <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" transform="matrix(-0.315495 -0.948927 -0.948927 0.315495 151.008 221.273)" />
          </g>
          <g filter="url(#filter5_d_0_106)" id="Ellipse 1535">
            <circle cx="225.584" cy="114.677" fill="#1C181E" r="2.12663" />
          </g>
          <g filter="url(#filter6_d_0_106)" id="Ellipse 1538">
            <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" transform="matrix(-1 0 0 1 5.55469 112.551)" />
          </g>
          <g filter="url(#filter7_d_0_106)" id="Ellipse 1541">
            <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" transform="matrix(-0.315495 -0.948927 -0.948927 0.315495 83.2383 11.3711)" />
          </g>
          <g filter="url(#filter8_d_0_106)" id="Ellipse 1543">
            <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" transform="matrix(-0.315495 -0.948927 -0.948927 0.315495 82.918 221.41)" />
          </g>
          <g filter="url(#filter9_d_0_106)" id="Ellipse 1536">
            <circle cx="203.658" cy="180.431" fill="#1C181E" r="2.12663" />
          </g>
          <g filter="url(#filter10_d_0_106)" id="Ellipse 1539">
            <circle cx="2.12663" cy="2.12663" fill="#1C181E" r="2.12663" transform="matrix(-1 0 0 1 27.4805 178.301)" />
          </g>
          <g id="Group 2147227485">
            <g id="Union">
              <mask fill="white" id="path-13-inside-1_0_106">
                <path d={svgPaths.p7028600} />
              </mask>
              <path d={svgPaths.p7028600} fill="url(#paint0_linear_0_106)" />
              <path d={svgPaths.p8e4aa00} fill="black" fillOpacity="0.15" mask="url(#path-13-inside-1_0_106)" />
            </g>
            <g id="Ellipse 1546">
              <circle cx="248.537" cy="114.957" fill="url(#paint1_linear_0_106)" r="3.76794" />
              <circle cx="248.537" cy="114.957" r="3.26794" stroke="black" strokeOpacity="0.09" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="47.202" id="filter0_d_0_106" width="46.8748" x="92.332" y="92.6602">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="1.96304" dy="2.29022" />
            <feGaussianBlur stdDeviation="0.294456" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_106" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_106" mode="normal" result="shape" />
          </filter>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <filter key={n} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.58043" id={`filter${n}_d_0_106`} width="4.58043" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="0.327174" dy="0.327174" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_106" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_106" mode="normal" result="shape" />
            </filter>
          ))}
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_106" x1="240.107" x2="240.107" y1="103.215" y2="127.215">
            <stop offset="0.529542" stopColor="#1C181E" />
            <stop offset="1" stopColor="#7B6A84" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_106" x1="248.537" x2="248.537" y1="111.189" y2="118.725">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.572115" stopColor="white" />
            <stop offset="1" stopColor="#737373" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 h-[18.385px] ml-0 mt-0 relative row-1 w-[18.987px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3849" preserveAspectRatio="none" viewBox="0 0 18.9874 18.3849" width="18.9874">
        <g id="Group">
          <path d={svgPaths.pdbb80} fill="#750558" id="Vector" />
          <path d={svgPaths.p2c95a100} fill="#750558" id="Vector_2" />
          <path d={svgPaths.p1a1f52f0} fill="#750558" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group10 />
      <Group9 />
      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[141.15px] mt-[141.97px] place-items-start relative row-1" data-name="uuid-b09628e3-8124-4d6b-b66c-36edea1e00cb">
        <Group3 />
      </div>
      <div className="col-1 flex h-[24.216px] items-center justify-center ml-[142.86px] mt-[205.36px] relative row-1 w-[14.373px]">
        <div className="flex-none rotate-[89.1deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€25</p>
        </div>
      </div>
      <div className="col-1 flex h-[20.756px] items-center justify-center ml-[71.98px] mt-[161.37px] relative row-1 w-[27.16px]">
        <div className="flex-none rotate-[161.92deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€75</p>
        </div>
      </div>
      <div className="col-1 flex h-[20.174px] items-center justify-center ml-[205.84px] mt-[160.52px] relative row-1 w-[25.273px]">
        <div className="flex-none rotate-[18.21deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€15</p>
        </div>
      </div>
      <div className="col-1 flex h-[21.855px] items-center justify-center ml-[201.84px] mt-[117.66px] relative row-1 w-[26.637px]">
        <div className="flex-none rotate-[-22.93deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#fff2fe] text-[12px] text-center whitespace-nowrap">€10</p>
        </div>
      </div>
      <div className="col-1 flex h-[21.947px] items-center justify-center ml-[174.85px] mt-[86px] relative row-1 w-[21.19px]">
        <div className="flex-none rotate-[-55.27deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€5</p>
        </div>
      </div>
      <div className="col-1 flex h-[29.118px] items-center justify-center ml-[179.75px] mt-[193.49px] relative row-1 w-[27.014px]">
        <div className="flex-none rotate-[52.12deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">€20</p>
        </div>
      </div>
      <div className="col-1 flex h-[28.991px] items-center justify-center ml-[96.13px] mt-[191.56px] relative row-1 w-[27.294px]">
        <div className="flex-none rotate-[129.26deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">€50</p>
        </div>
      </div>
      <div className="col-1 flex h-[32.42px] items-center justify-center ml-[51px] mt-[113.89px] relative row-1 w-[66.25px]">
        <div className="flex-none rotate-[-162.97deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">TRY AGAIN!</p>
        </div>
      </div>
      <div className="col-1 flex h-[34.231px] items-center justify-center ml-[95.9px] mt-[75.71px] relative row-1 w-[29.853px]">
        <div className="flex-none rotate-[-125.1deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€100</p>
        </div>
      </div>
      <div className="col-1 flex h-[66px] items-center justify-center ml-[144px] mt-[47.89px] relative row-1 w-[14px]">
        <div className="-rotate-90 flex-none">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">SO CLOSE!</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Group7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <div className="h-[45.788px] relative shrink-0 w-[95.097px]" data-name="IMG_7339 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[259.56%] left-[-27.51%] max-w-none top-[-65.99%] w-[156.21%]" src={imgImg73391} />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function ButtonMain() {
  return (
    <div className="bg-[#750558] border-0 border-[#c044a0] border-solid content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[869.5px] shrink-0 w-[120px]" data-name="Button Main">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#fff2fe] text-[14px] text-center whitespace-nowrap">{`Spin `}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[43px] top-[112px] w-[300.946px]">
      <Frame7 />
      <ButtonMain />
    </div>
  );
}

// ── Coin decorations (Group8) ────────────────────────────────────────────────

function Group8() {
  return (
    <div className="absolute contents left-[26px] top-[50px]">
      <div className="absolute h-[25px] left-[calc(60%+36px)] opacity-28 top-[84px] w-[21px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} />
        </div>
      </div>
      <div className="absolute flex h-[54.229px] items-center justify-center left-[26px] top-[109px] w-[55.063px]">
        <div className="flex-none rotate-[10.82deg]">
          <div className="h-[46.186px] opacity-28 relative w-[47.235px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[436.36%] left-[-57.78%] max-w-none top-[-290.91%] w-[426.67%]" src={imgCoins} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[83px] left-[calc(80%+4px)] opacity-28 top-[167px] w-[74px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} />
        </div>
      </div>
      <div className="absolute flex h-[45px] items-center justify-center left-[34px] top-[311px] w-[50px]">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[50px] opacity-28 relative w-[45px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[23px] items-center justify-center left-[80%] top-[109px] w-[26px]">
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="h-[26px] opacity-28 relative w-[23px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[400%] left-[-318.6%] max-w-none top-[-88.28%] w-[446.51%]" src={imgCoins} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[51px] left-[calc(40%+15px)] opacity-28 top-[50px] w-[40px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} />
        </div>
      </div>
      <div className="absolute bottom-[579px] h-[25px] left-[calc(60%+53px)] opacity-28 w-[21px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[738.46%] left-[-563.64%] max-w-none top-[-492.31%] w-[872.73%]" src={imgCoins} />
        </div>
      </div>
      <div className="absolute h-[30px] left-[66px] opacity-28 top-[200px] w-[32px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[768%] left-[-77.78%] max-w-none top-[-333.5%] w-[711.11%]" src={imgCoins} />
        </div>
      </div>
      <div className="absolute bottom-[476px] h-[51px] left-[calc(80%-8px)] opacity-28 w-[40px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[391.84%] left-[-68.42%] max-w-none top-[-59.95%] w-[505.26%]" src={imgCoins} />
        </div>
      </div>
    </div>
  );
}

// ── Overlay background ───────────────────────────────────────────────────────

function Overlay() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-8px)] size-[1254px] top-[calc(50%+84px)]">
      <div className="flex-none rotate-90">
        <div className="relative size-[1254px]" data-name="Overlay">
          <svg className="absolute block inset-0 size-full" fill="none" height="1254" preserveAspectRatio="none" viewBox="0 0 1254 1254" width="1254" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g clipPath="url(#clip0_0_50)" id="Overlay">
              <g id="Repeat group 1">
                {/* Sun-ray base. NB: the id must have NO spaces and be referenced
                    without URL-encoding, otherwise mobile Safari/Chrome fail to
                    resolve the <use> copies and only one ray renders. */}
                <g id="f2sunray" data-figma-trr="r8u1-0f">
                  <path d={svgPaths.p3a611100} fill="#3A092D" fillOpacity="0.37" id="Vector 248" stroke="#9C3C8F" />
                </g>
                <use transform="translate(612.491 -233.199) rotate(45)" href="#f2sunray" xlinkHref="#f2sunray" />
                <use transform="translate(1210.49 35.0006) rotate(90)" href="#f2sunray" xlinkHref="#f2sunray" />
                <use transform="translate(1443.68 647.492) rotate(135)" href="#f2sunray" xlinkHref="#f2sunray" />
                <use transform="translate(1175.48 1245.49) rotate(-180)" href="#f2sunray" xlinkHref="#f2sunray" />
                <use transform="translate(562.993 1478.69) rotate(-135)" href="#f2sunray" xlinkHref="#f2sunray" />
                <use transform="translate(-35.0006 1210.49) rotate(-90)" href="#f2sunray" xlinkHref="#f2sunray" />
                <use transform="translate(-268.2 597.993) rotate(-45)" href="#f2sunray" xlinkHref="#f2sunray" />
              </g>
              <g filter="url(#filter0_f_0_50)" id="Ellipse 1547">
                <circle cx="592.829" cy="625.964" fill="#692359" r="56.4336" transform="rotate(-90 592.829 625.964)" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="226.067" id="filter0_f_0_50" width="226.067" x="479.796" y="512.931">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_0_50" stdDeviation="28.3" />
              </filter>
              <clipPath id="clip0_0_50">
                <rect fill="white" height="1254" width="1254" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Frame 3 overlay (Figma node 7701:20360) ──────────────────────────────────
// Exact Figma values: 400x881 at (-5,-19), background blur 7.6 (CSS 3.8px),
// linear gradient #F9A6F1 -> #28001E at 29% fill opacity, no extra tint layer.
// The sun-ray watermark ("Repeat group 1", node 7701:20362) is Figma's own SVG
// export in frame coordinates (390x844), so every ray lines up 1:1.
function Frame3Overlay() {
  return (
    <div
      className="absolute backdrop-blur-[3.8px] h-[881px] left-[-5px] overflow-clip top-[-19px] w-[400px]"
      style={{ backgroundImage: "linear-gradient(180deg, rgba(249, 166, 241, 0.29) 21.29%, rgba(40, 0, 30, 0.29) 82.86%)" }}
      data-node-id="7701:20360"
    >
      <svg
        className="absolute block left-[5px] top-[19px] overflow-visible"
        width="390"
        height="844"
        viewBox="0 0 390 844"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* NB: id without spaces so mobile browsers resolve every <use> copy. */}
        <g id="f3sunray">
          <path d="M-655.316 742.85L198.8 379.147L-726.394 334.529L-655.316 742.85Z" fill="#3A092D" fillOpacity="0.37" stroke="#9C3C8F" />
        </g>
        <use href="#f3sunray" xlinkHref="#f3sunray" transform="translate(328.293 -29.0866) rotate(45)" />
        <use href="#f3sunray" xlinkHref="#f3sunray" transform="translate(580.998 182.484) rotate(90)" />
        <use href="#f3sunray" xlinkHref="#f3sunray" transform="translate(610.085 510.777) rotate(135)" />
        <use href="#f3sunray" xlinkHref="#f3sunray" transform="translate(398.514 763.482) rotate(-180)" />
        <use href="#f3sunray" xlinkHref="#f3sunray" transform="translate(70.2213 792.569) rotate(-135)" />
        <use href="#f3sunray" xlinkHref="#f3sunray" transform="translate(-182.484 580.998) rotate(-90)" />
        <use href="#f3sunray" xlinkHref="#f3sunray" transform="translate(-211.571 252.705) rotate(-45)" />
      </svg>
    </div>
  );
}

// ── Animated Wheel ───────────────────────────────────────────────────────────
// Wheel origin: left-[44.44px] top-[349.58px] size-[300.946×301px]
// All child coords offset by (-44.44, -349.58) vs original Frame9 coords.

function Group11() {
  return (
    <div className="absolute left-0 top-0 h-[301px] w-[300.946px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="301" preserveAspectRatio="none" viewBox="0 0 300.947 301" width="300.947">
        <g id="Group 2147227489b">
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" width="7.85217" x="264.681" y="149.531" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="rotate(180 36.954 151.488)" width="7.85217" x="36.954" y="151.488" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="matrix(-1 0 0 1 36.954 149.543)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="matrix(1 0 0 -1 264.681 151.472)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="rotate(-34.9019 241.77 83.6796)" width="7.85217" x="241.77" y="83.6796" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="rotate(145.098 59.8563 217.339)" width="7.85217" x="59.8563" y="217.339" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="matrix(-0.820133 -0.572173 -0.572173 0.820133 59.8563 83.6991)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="matrix(0.820133 0.572173 0.572173 -0.820133 241.77 217.324)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="rotate(-66.4515 185.825 43.5077)" width="7.85217" x="185.825" y="43.5077" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="rotate(113.548 115.806 257.507)" width="7.85217" x="115.806" y="257.507" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="matrix(-0.399525 -0.916722 -0.916722 0.399525 115.806 43.5233)" width="7.85217" />
          <rect fill="#EAEAEA" height="1.96304" rx="0.654348" transform="matrix(0.399525 0.916722 0.916722 -0.399525 185.825 257.492)" width="7.85217" />
          <path d={svgPaths.p10aaad70} fill="#FFC3FB" />
          <path d={svgPaths.p26015800} fill="#FFC3FB" />
          <path d={svgPaths.p4856300} fill="#FFC3FB" />
          <path d={svgPaths.p2a46da80} fill="#FFC3FB" />
          <path d={svgPaths.p23f53900} fill="#FFC3FB" />
          <path d={svgPaths.p1a785a00} fill="#A82486" />
          <path d={svgPaths.pb12dfa0} fill="#A82486" />
          <path d={svgPaths.p3696ee00} fill="#A82486" />
          <path d={svgPaths.p16043180} fill="#A82486" />
          <path d={svgPaths.p2dcf9100} fill="#A82486" />
        </g>
      </svg>
    </div>
  );
}

function WheelDotA() {
  return (
    <div className="absolute inset-[0_-7.69%_-7.69%_0]">
      <DotA />
    </div>
  );
}

function WheelDotBInner() {
  return (
    <div className="-scale-y-100 flex-none rotate-180">
      <div className="relative size-[4.253px]">
        <div className="absolute inset-[0_-7.69%_-7.69%_0]">
          <DotB />
        </div>
      </div>
    </div>
  );
}

function WheelDotCInner(props: { rot: string }) {
  return (
    <div className={`-scale-y-100 flex-none ${props.rot}`}>
      <div className="relative size-[4.253px]">
        <div className="absolute inset-[0_-7.69%_-7.69%_0]">
          <DotC />
        </div>
      </div>
    </div>
  );
}

function AnimatedWheel({ phase = "loop" }: { phase?: "loop" | "spinstop" }) {
  return (
    <div
      className={`${phase === "spinstop" ? "f2-wheel-spinstop" : "f2-wheel-spin"} absolute overflow-visible`}
      data-name="Wheel"
      style={{ left: "44.44px", top: "349.58px", width: "300.946px", height: "301px", transformOrigin: "center center" }}
    >
      <Group11 />
      {/* Outer stroke ring with the Figma wheel's soft drop-shadow. */}
      <div
        className="absolute"
        style={{
          left: "35.99px",
          top: "35.68px",
          width: "229.135px",
          height: "229.135px",
          filter: "drop-shadow(0px 2px 5px rgba(28,0,22,0.33))",
        }}
      >
        <svg className="absolute block inset-0 size-full" fill="none" height="229.135" preserveAspectRatio="none" viewBox="0 0 229.135 229.135" width="229.135">
          <circle cx="114.567" cy="114.567" r="110.673" stroke="#FFF2FE" strokeWidth="7.78857" />
        </svg>
      </div>
      {/* Perimeter dots */}
      <div className="absolute" style={{ left: "238.5px", top: "83.77px", width: "4.253px", height: "4.253px" }}>
        <WheelDotA />
      </div>
      <div className="absolute flex items-center justify-center" style={{ left: "58.23px", top: "83.77px", width: "4.253px", height: "4.253px" }}>
        <WheelDotBInner />
      </div>
      <div className="absolute flex items-center justify-center" style={{ left: "181.62px", top: "42.55px", width: "5.378px", height: "5.378px" }}>
        <WheelDotCInner rot="rotate-[-108.39deg]" />
      </div>
      <div className="absolute flex items-center justify-center" style={{ left: "181.62px", top: "252.91px", width: "5.378px", height: "5.378px" }}>
        <WheelDotCInner rot="rotate-[-108.39deg]" />
      </div>
      <div className="absolute" style={{ left: "259.44px", top: "148.23px", width: "4.253px", height: "4.253px" }}>
        <WheelDotA />
      </div>
      <div className="absolute flex items-center justify-center" style={{ left: "37.29px", top: "148.23px", width: "4.253px", height: "4.253px" }}>
        <WheelDotBInner />
      </div>
      <div className="absolute flex items-center justify-center" style={{ left: "113.85px", top: "43.01px", width: "5.378px", height: "5.378px" }}>
        <WheelDotCInner rot="rotate-[-108.39deg]" />
      </div>
      <div className="absolute flex items-center justify-center" style={{ left: "113.53px", top: "253.05px", width: "5.378px", height: "5.378px" }}>
        <WheelDotCInner rot="rotate-[-108.39deg]" />
      </div>
      <div className="absolute" style={{ left: "237.52px", top: "213.98px", width: "4.253px", height: "4.253px" }}>
        <WheelDotA />
      </div>
      <div className="absolute flex items-center justify-center" style={{ left: "59.21px", top: "213.98px", width: "4.253px", height: "4.253px" }}>
        <WheelDotBInner />
      </div>
      {/* Price labels */}
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "150.04px", top: "205.36px", width: "14.373px", height: "24.216px" }}>
        <div className="flex-none rotate-[89.1deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€25</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "85.56px", top: "161.06px", width: "29.061px", height: "21.377px" }}>
        <div className="flex-none rotate-[161.92deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€50</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "218.47px", top: "160.52px", width: "25.273px", height: "20.174px" }}>
        <div className="flex-none rotate-[18.21deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€15</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "215.16px", top: "117.67px", width: "26.637px", height: "21.855px" }}>
        <div className="flex-none rotate-[-22.93deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#fff2fe] text-[12px] text-center whitespace-nowrap">€10</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "185.44px", top: "86px", width: "21.19px", height: "21.947px" }}>
        <div className="flex-none rotate-[-55.27deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€5</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "193.25px", top: "193.49px", width: "27.014px", height: "29.118px" }}>
        <div className="flex-none rotate-[52.12deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">€20</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "109.46px", top: "192.33px", width: "26.661px", height: "28.217px" }}>
        <div className="flex-none rotate-[129.26deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">€35</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "84.6px", top: "120.04px", width: "27.048px", height: "20.414px" }}>
        <div className="flex-none rotate-[-162.97deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">€65</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "110.82px", top: "78.99px", width: "25.254px", height: "27.686px" }}>
        <div className="flex-none rotate-[-125.1deg]">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[#28001e] text-[12px] text-center whitespace-nowrap">€75</p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex items-center justify-center" style={{ left: "151.01px", top: "64.89px", width: "14px", height: "32px" }}>
        <div className="-rotate-90 flex-none">
          <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.2] relative text-[12px] text-center text-white whitespace-nowrap">€100</p>
        </div>
      </div>
      {/* Center hub */}
      <div className="absolute" style={{ left: "128.32px", top: "128.34px", width: "44.323px", height: "44.323px" }}>
        <div className="absolute inset-[0_-5.76%_-6.5%_0]">
          <svg className="block size-full" fill="none" height="47.202" preserveAspectRatio="none" viewBox="0 0 46.8748 47.202" width="46.8748">
            <g filter="url(#filter0_d_0_26)">
              <circle cx="22.1614" cy="22.1614" fill="#FDF9EE" r="22.1614" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="47.202" id="filter0_d_0_26" width="46.8748" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1.96304" dy="2.29022" />
                <feGaussianBlur stdDeviation="0.294456" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_26" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_26" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Pin ──────────────────────────────────────────────────────────────────────

function Pin() {
  return (
    <div className="absolute h-[24px] left-[300.44px] top-[488.47px] w-[40.15px]" data-name="Pin">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 40.1502 24" width="40.1502">
        <g id="Pin">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_0_17">
              <path d={svgPaths.p110be380} />
            </mask>
            <path d={svgPaths.p110be380} fill="url(#paint0_linear_0_17)" />
            <path d={svgPaths.p29faec0} fill="black" fillOpacity="0.15" mask="url(#path-1-inside-1_0_17)" />
          </g>
          <g id="Ellipse 1546b">
            <circle cx="28.5253" cy="11.7422" fill="url(#paint1_linear_0_17)" r="3.76794" />
            <circle cx="28.5253" cy="11.7422" r="3.26794" stroke="black" strokeOpacity="0.09" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_17" x1="20.0954" x2="20.0954" y1="0" y2="24">
            <stop offset="0.529542" stopColor="#1C181E" />
            <stop offset="1" stopColor="#7B6A84" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_17" x1="28.5253" x2="28.5253" y1="7.97427" y2="15.5102">
            <stop stopColor="#D9D9D9" />
            <stop offset="0.572115" stopColor="white" />
            <stop offset="1" stopColor="#737373" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// ── Logo (center overlay) ────────────────────────────────────────────────────

function Group4() {
  return (
    <div className="absolute inset-[55.8%_48.86%_42.12%_46.4%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.3849" preserveAspectRatio="none" viewBox="0 0 18.9874 18.3849" width="18.9874">
        <g id="Group-logo">
          <path d={svgPaths.pdbb80} fill="#750558" />
          <path d={svgPaths.p2c95a100} fill="#750558" />
          <path d={svgPaths.p1a1f52f0} fill="#750558" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents inset-[55.79%_48.86%_42.12%_46.4%]" data-name="logo">
      <Group4 />
    </div>
  );
}

// ── Frame9 (animated overlay panel with text + wheel) ───────────────────────

// NB: horizontal centering (translateX(-50%)) is applied inside the CSS keyframes
// (.f2-suspense-*) together with the animated vertical offset, so it is omitted here.
const textBaseClass = "[word-break:break-word] absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] left-1/2 text-[#fef5fd] text-[16px] text-center top-[calc(50%-148.04px)] w-[247.809px]";

function Frame9({ phase = "loop", showWheel = true }: { phase?: "loop" | "spinstop"; showWheel?: boolean }) {
  return (
    <div
      className="-translate-y-1/2 absolute backdrop-blur-[3.8px] h-[881px] left-[-5px] overflow-clip top-1/2 w-[400px]"
      style={{ backgroundImage: "linear-gradient(180.00000000000207deg, rgba(249, 166, 241, 0.29) 21.29%, rgba(40, 0, 30, 0.29) 82.86%), linear-gradient(90deg, rgba(117, 5, 88, 0.75) 0%, rgba(117, 5, 88, 0.75) 100%)" }}
    >
      <Overlay />
      {showWheel && (
        <>
          {/* text 4 — node 1:199 (CSS keyframes f2-suspense-a, exact Figma timing) */}
          <p className={`${textBaseClass} f2-suspense-a`}>
            Fun fact: Zolt has helped NRIs send over $10M back home. 💸.
          </p>
          {/* text 3 — node 1:198 */}
          <p className={`${textBaseClass} f2-suspense-b`}>
            Your karma is looking pretty good today. 😉
          </p>
          {/* text 1 — node 1:197 */}
          <p className={`${textBaseClass} f2-suspense-c`}>
            Fun fact: Zolt has helped NRIs send over $10M back home. 💸.
          </p>
          <AnimatedWheel phase={phase} />
          <Pin />
          <Logo />
        </>
      )}
    </div>
  );
}

// ── Root component ───────────────────────────────────────────────────────────

export default function SpinTheWheel({
  phase = "loop",
  showWheel = true,
  variant = "spin",
}: {
  phase?: "loop" | "spinstop";
  showWheel?: boolean;
  /** "reward" = Frame 3 background (node 7701:20255): #741C59 base + its own overlay. */
  variant?: "spin" | "reward";
}) {
  if (variant === "reward") {
    return (
      <div className="bg-[#741c59] relative size-full" data-name="Frame 3 background">
        <Frame3 />
        <Frame8 />
        <Group8 />
        <Frame3Overlay />
      </div>
    );
  }
  return (
    <div className="bg-[#d2aece] relative size-full" data-name="Spin the wheel animation">
      <Frame3 />
      <Frame8 />
      <Group8 />
      <Frame9 phase={phase} showWheel={showWheel} />
    </div>
  );
}
