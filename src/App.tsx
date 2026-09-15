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

export default function App() {
  const [screen, setScreen] = useState<Screen>("main");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (screen !== "spin") return;
    const t = setTimeout(() => setScreen("reward"), SPIN_DURATION_MS);
    return () => clearTimeout(t);
  }, [screen]);

  return (
    <div className="min-h-screen w-full flex items-start justify-center bg-[#fff2fe]">
      <div className="relative w-[390px] h-[844px] shrink-0 overflow-hidden">
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
  );
}
