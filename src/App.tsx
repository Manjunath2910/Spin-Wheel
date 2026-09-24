import { useEffect, useState, type CSSProperties } from "react";
import Onboarding01Option1Default from "../imports/index";
import SpinTheWheel from "./SpinTheWheel";
import RewardForm from "./RewardForm";
import RewardCode from "./RewardCode";
import { DESKTOP_W, DESKTOP_H, DesktopMain, DesktopSpin, DesktopReward, DesktopSignup, DesktopCode } from "./Desktop";

type Screen = "main" | "spin" | "reward" | "email" | "code" | "qr";

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
    const dark = screen === "spin" || screen === "reward" || screen === "email";
    return (
      <div
        className={`h-screen w-full flex items-center justify-center overflow-hidden ${
          dark ? "bg-[#5c1648]" : "bg-[linear-gradient(180deg,#fff2fe_20.8%,#ffc3fb_95.3%)]"
        }`}
        // Only runtime numbers are passed in; every property is a Tailwind class.
        style={
          {
            "--s": scale,
            "--fw": `${frameW}px`,
            "--fh": `${frameH}px`,
            "--ext": `${(frameW - DESKTOP_W) / 2}px`,
            "--exty": `${(frameH - DESKTOP_H) / 2}px`,
          } as CSSProperties
        }
      >
        <div className="w-[calc(var(--fw)*var(--s))] h-[calc(var(--fh)*var(--s))]">
          <div className="relative overflow-hidden w-(--fw) h-(--fh) origin-top-left scale-(--s)">
            {screen === "main" && <DesktopMain onSpin={() => setScreen("spin")} />}
            {screen === "spin" && <DesktopSpin />}
            {/* Frame 3 (7772:20384): form → Frame 4 */}
            {(screen === "reward" || screen === "email") && (
              <DesktopReward
                onUnlock={(name) => {
                  setUserName(name);
                  setScreen("code");
                }}
              />
            )}
            {/* Frame 4 (7772:20028): "Sign Up Now" → Frame 5; tap elsewhere → Frame 1 */}
            {screen === "code" && (
              <DesktopSignup name={userName} onSignUp={() => setScreen("qr")} onBack={() => setScreen("main")} />
            )}
            {/* Frame 5 (7807:20417): QR sign-up; tap outside the card → Frame 1 */}
            {screen === "qr" && <DesktopCode name={userName} onBack={() => setScreen("main")} />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full flex items-start justify-center overflow-x-hidden ${screen === "spin" || screen === "reward" || screen === "email" ? "bg-[#5c1648]" : "bg-[#fff2fe]"}`}>
      {/* Wrapper takes the on-screen (scaled) size so the frame stays centred and
          the app fills the device width on phones. */}
      <div className="w-[calc(390px*var(--s))] h-[calc(844px*var(--s))]" style={{ "--s": scale } as CSSProperties}>
        <div className="relative overflow-hidden w-[390px] h-[844px] origin-top-left scale-(--s)">
          {screen === "main" && (
            <Onboarding01Option1Default onSpin={() => setScreen("spin")} />
          )}

          {/* Frame 2: wheel starts a bit fast, decelerates to a stop, while the three
              suspense texts play 5s each; once it stops, Frame 3 appears. */}
          {screen === "spin" && <SpinTheWheel phase="spinstop" />}

          {/* Frame 3: Congratulations + name/email form (node 7772:21011).
              "Unlock your Reward!" advances to Frame 4. ("email" only exists on
              desktop; if the window shrinks mid-flow it shows this form too.) */}
          {(screen === "reward" || screen === "email") && (
            <RewardForm
              onUnlock={(name) => {
                setUserName(name);
                setScreen("code");
              }}
            />
          )}

          {/* Frame 4: sign up + reward code (node 7772:21461). Tap to return to Frame 1. */}
          {(screen === "code" || screen === "qr") && (
            <RewardCode name={userName} onBack={() => setScreen("main")} />
          )}
        </div>
      </div>
    </div>
  );
}
