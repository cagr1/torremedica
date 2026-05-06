"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  delay?: "none" | "1" | "2";
};

export function Reveal({
  as,
  children,
  className = "",
  delay = "none",
  ...props
}: RevealProps) {
  const component = as ?? "div";
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === "1" ? "reveal-delay-1" : delay === "2" ? "reveal-delay-2" : "";
  const visibleClass = isVisible ? "is-visible" : "";
  const mergedClassName = ["reveal-on-scroll", delayClass, visibleClass, className]
    .filter(Boolean)
    .join(" ");

  return createElement(component, { ...props, ref, className: mergedClassName }, children);
}
