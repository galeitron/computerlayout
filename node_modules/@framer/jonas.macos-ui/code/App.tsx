import { PropertyStore, animate } from "framer";

export const Bounce = PropertyStore(
  {
    scale: 1,
    onTap() {
      this.scale.set(0.6);
      animate.spring(this.scale, 1);
    }
  },
  true
);

export const Animation = PropertyStore(
  {
    opacity: 1,
    rotation: 0
  },
  true
);

export const Switch = PropertyStore({
  toggle: true,
  onTap() {
    animate.spring(Animation, {
      opacity: this.toggle ? 0.5 : 1,
      rotation: this.toggle ? 180 : 0
    });
    this.toggle = !this.toggle;
  }
});
