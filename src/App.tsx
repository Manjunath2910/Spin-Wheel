import { useEffect, useState, type CSSProperties } from "react";
import Onboarding01Option1Default from "../imports/index";
import SpinTheWheel from "./SpinTheWheel";
import RewardForm from "./RewardForm";
import RewardEmail from "./RewardEmail";
import RewardCode from "./RewardCode";
import { DESKTOP_W, DESKTOP_H, DesktopMain, DesktopSpin, DesktopReward, DesktopEmail, DesktopCode } from "./Desktop";

type Screen = "main" | "spin" | "reward" | "email" | "code";

// How long Frame 2 shows before revealing Frame 3. The wheel starts a bit fast
// and decelerates to a stop, while the three suspense texts play 3 seconds each
// (9s total); once all three have shown, Frame 3 appears.
const SPIN_DURATION_MS = 9200;

const FRAME_W = 390;
const FRAME_H = 844;

export default function App() {
  const [screen, setScreen] = useState<Screen>("main");
  const [userName, setUserName] = useState("");
  const [scale, setScale] = useState(1);
  // Desktop layout (Figma section 7706:19857, 1440×1024 frames) on wide screens;
  // phones and portrait tablets get the 390×844 mobile frames.
  const [isDesktop, setIsDesktop] = useState(false);
  const [viewW, setViewW] = useState(DESKTOP_W);
  const [viewH, setViewH] = useState(DESKTOP_H);

  // Responsive. Phones (<=640px wide): scale to the FULL width so the design fills
  // the screen with no side margins; it's top-anchored, so on an unusually short
  // phone the bottom simply scrolls instead of leaving white gaps on the sides.
  // Larger screens: fit the whole frame inside the viewport and centre it.
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const desktop = w >= 1024 || (w >= 768 && w > h);
      setIsDesktop(desktop);
      if (desktop) {
        // Fit the 1024px design height (or the 1440px width on narrow/tall
        // windows); any extra width becomes full-bleed background (see --ext).
        setScale(Math.min(w / DESKTOP_W, h / DESKTOP_H));
        setViewW(w);
        setViewH(h);
      } else {
        setScale(w <= 640 ? w / FRAME_W : Math.min(w / FRAME_W, h / FRAME_H));
      }
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  useEffect(() => {
    if (screen !== "spin") return;
    const t = setTimeout(() => setScreen("reward"), SPIN_DURATION_MS);
    return () => clearTimeout(t);
  }, [screen]);

  if (isDesktop) {
    // Logical frame width: the full window width in design px (never below 1440).
    const frameW = Math.max(DESKTOP_W, Math.floor(viewW / scale));
    const frameH = Math.max(DESKTOP_H, Math.floor(viewH / scale));
    const dark = screen === "reward" || screen === "email";
    return (
      <div
        className="h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ background: dark ? "#5c1648" : "linear-gradient(180deg, #fff2fe 20.8%, #ffc3fb 95.3%)" }}
      >
        <div style={{ width: frameW * scale, height: frameH * scale }}>
          <div
            className="relative overflow-hidden"
            style={
              {
                width: frameW,
                height: frameH,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                "--ext": `${(frameW - DESKTOP_W) / 2}px`,
                "--exty": `${(frameH - DESKTOP_H) / 2}px`,
              } as CSSProperties
            }
          >
            {screen === "main" && <DesktopMain onSpin={() => setScreen("spin")} />}
            {screen === "spin" && <DesktopSpin />}
            {screen === "reward" && <DesktopReward onUnlock={() => setScreen("email")} />}
            {screen === "email" && (
              <DesktopEmail
                onSubmit={(name) => {
                  setUserName(name);
                  setScreen("code");
                }}
              />
            )}
            {screen === "code" && <DesktopCode name={userName} onBack={() => setScreen("main")} />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full flex items-start justify-center overflow-x-hidden ${screen === "spin" || screen === "reward" || screen === "email" ? "bg-[#5c1648]" : "bg-[#fff2fe]"}`}>
      {/* Wrapper takes the on-screen (scaled) size so the frame stays centred and
          the app fills the device width on phones. */}
      <div style={{ width: FRAME_W * scale, height: FRAME_H * scale }}>
        <div
          className="relative overflow-hidden"
          style={{
            width: FRAME_W,
            height: FRAME_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {screen === "main" && (
            <Onboarding01Option1Default onSpin={() => setScreen("spin")} />
          )}

          {/* Frame 2: wheel starts a bit fast, decelerates to a stop, while the three
              suspense texts play 5s each; once it stops, Frame 3 appears. */}
          {screen === "spin" && <SpinTheWheel phase="spinstop" />}

          {/* Frame 3: Congratulations / reward card (node 7701:20255). "Unlock it!"
              advances to Frame 4. */}
          {screen === "reward" && (
            <RewardForm onUnlock={() => setScreen("email")} />
          )}

          {/* Frame 4: name + email form (node 7701:20408). "Unlock the Reward"
              advances to Frame 5. */}
          {screen === "email" && (
            <RewardEmail
              onSubmit={(name) => {
                setUserName(name);
                setScreen("code");
              }}
            />
          )}

          {/* Frame 5: reward code (node 7701:19998). Tap to return to Frame 1. */}
          {screen === "code" && (
            <RewardCode name={userName} onBack={() => setScreen("main")} />
          )}
        </div>
      </div>
    </div>
  );
}
