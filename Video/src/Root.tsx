import "./index.css";
import { Composition } from "remotion";
import { GreenSparkDemo } from "./GreenSparkDemo";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="GreenSparkDemo"
      component={GreenSparkDemo}
      durationInFrames={3600}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
