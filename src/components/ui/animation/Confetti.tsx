import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function ConfettiAnimation() {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
}

export default ConfettiAnimation;
