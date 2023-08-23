/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { useSpring, to, animated, config } from "@react-spring/web";
import { scale, dist } from "vec-la";
import { useDrag } from "react-use-gesture";

import styles from "@/styles/rocket.module.css";

export default function Rocket() {
  const [{ pos }, api] = useSpring(() => ({ pos: [0, 0] }));
  const [{ angle }, angleApi] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }));

  const bind = useDrag(
    // eslint-disable-next-line no-shadow
    ({ xy, previous, down, movement: pos, velocity, direction }) => {
      api.start({
        pos,
        immediate: down,
        config: { velocity: scale(direction, velocity), decay: true },
      });

      if (dist(xy, previous) > 10 || !down)
        angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) });
    },
    { initial: () => pos.get() },
  );

  return (
    <animated.div
      className={styles.rocket}
      {...bind()}
      style={{
        transform: to(
          [pos, angle],
          // @ts-ignore
          ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`,
        ),
      }}
    />
  );
}
