import { useEffect, useState } from "react";
import Onboarding01Option1Default from "../imports/index";
import SpinTheWheel from "./SpinTheWheel";
import RewardForm from "./RewardForm";
import RewardCode from "./RewardCode";

type Screen = "main" | "spin" | "reward" | "code";

// How long Frame 2 shows before revealing Frame 3. The wheel starts a bit fast
// and decelerates to a stop at 4s (.f2-wheel-spinstop) while the three suspense
// texts play one per second; once the wheel has stopped, Frame 3 appears.
const SPIN_DURATION_MS = 4300;

// The design is a fixed 390x844 canvas. To stay pixel-exact while being fully
// responsive, the whole canvas is scaled to fit the viewport (fills the width on
// phones, fits the height on wider screens) and centered.
const FRAME_W = 390;
const FRAME_H = 844;

export default function App() {
  const [screen, setScreen] = useState<Screen>("main");
  const [userName, setUserName] = useState("");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () =>
      setScale(Math.min(window.innerWidth / FRAME_W, window.innerHeight / FRAME_H));
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
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#fff2fe]">
      {/* Scaled wrapper occupies the on-screen (scaled) size so the frame stays
          centred without overflow at any viewport size. */}
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
              suspense texts play 1s each; once it stops, Frame 3 appears. */}
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
