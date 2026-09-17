import { useEffect, useState } from "react";
import Onboarding01Option1Default from "../imports/index";
import SpinTheWheel from "./SpinTheWheel";
import RewardForm from "./RewardForm";
import RewardCode from "./RewardCode";

type Screen = "main" | "spin" | "reward" | "code";

// How long Frame 2 shows before revealing Frame 3. The wheel starts a bit fast
// and decelerates to a stop, while the three suspense texts play 5 seconds each
// (15s total); once all three have shown, Frame 3 appears.
const SPIN_DURATION_MS = 15200;

const FRAME_W = 390;
const FRAME_H = 844;

export default function App() {
  const [screen, setScreen] = useState<Screen>("main");
  const [userName, setUserName] = useState("");
  const [scale, setScale] = useState(1);

  // On phones, scale the fixed 390x844 design to fill the device width so the top
  // bar and everything spans edge-to-edge, matching the Figma. On wider screens
  // it stays at the native 390px, centred.
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setScale(w < 500 ? w / FRAME_W : 1);
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

  return (
    <div className="min-h-screen w-full flex items-start justify-center overflow-hidden bg-[#fff2fe]">
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

          {/* Frame 3: Congratulations / reward form. "Unlock" advances to Frame 4,
              carrying the entered name so Frame 4 can greet the user. */}
          {screen === "reward" && (
            <RewardForm
              onUnlock={({ name }) => {
                setUserName(name);
                setScreen("code");
              }}
            />
          )}

          {/* Frame 4: reward code. Tap to return to Frame 1. */}
          {screen === "code" && (
            <RewardCode name={userName} onBack={() => setScreen("main")} />
          )}
        </div>
      </div>
    </div>
  );
}
