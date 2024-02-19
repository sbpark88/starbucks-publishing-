// @ts-check

import { $, render } from "../../utils/render.js";
import { eventBind } from "../../utils/eventBinding.js";
import { throttle } from "../../utils/performance.js";

const BADGE_HIDING_POSITION = 500;

const container = $("header .badges");
const template = `
<div class="badge">
  <img src="../../../images/badge1.jpg" alt="Badge" />
</div>
<div class="badge">
  <img src="../../../images/badge2.jpg" alt="Badge" />
</div>
`;

render(container)(template);

/*
 * Framer-motion 은 리액트 컴포넌트에서만 사용 가능한거로 기억하는데 GSAP 은 Vanilla JS 에서도 사용이 가능하다.
 * */
const toggleBadgeDisplay = () => {
  window.scrollY > BADGE_HIDING_POSITION
    ? gsap.to(container, { opacity: 0, display: "none", duration: 0.6 })
    : gsap.to(container, { opacity: 1, display: "block", duration: 0.6 });
};

eventBind({
  $el: window,
  eventType: "scroll",
  listener: throttle(toggleBadgeDisplay, 200),
});