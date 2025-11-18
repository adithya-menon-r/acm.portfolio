import { useState, useEffect, useRef } from "react";
import type { StatItem } from "@/lib/event-data";

// ScramblingDigit Component
interface ScramblingDigitProps {
  targetDigit: string;
  scrambleDuration: number;
  inView: boolean;
  plain?: boolean;
  digitClass?: string;
}

function ScramblingDigit(props: ScramblingDigitProps) {
  const {
    targetDigit,
    scrambleDuration,
    inView,
    plain = false,
    digitClass = "",
  } = props;
  const [currentDigit, setCurrentDigit] = useState("0");

  useEffect(() => {
    let scrambleInterval: NodeJS.Timeout;
    let stopTimeout: NodeJS.Timeout;

    if (inView) {
      scrambleInterval = setInterval(() => {
        const randomDigit = Math.floor(Math.random() * 10).toString();
        setCurrentDigit(randomDigit);
      }, 50);

      stopTimeout = setTimeout(() => {
        clearInterval(scrambleInterval);
        setCurrentDigit(targetDigit);
      }, scrambleDuration);
    }

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(stopTimeout);
    };
  }, [targetDigit, scrambleDuration, inView]);

  return plain ? (
    <span
      className={`font-semibold mx-0.5 text-foreground ${digitClass}`}
      style= {{
        fontFamily: "'JetBrains Mono', monospace"
      }}
    >
      {currentDigit}
    </span>
  ) : (
    <span
      className={`
        inline-block
        bg-muted/70 
        border
        text-foreground 
        font-semibold 
        rounded-md
        px-1 py-1
        mx-0.5
        text-xl md:text-2xl
        min-w-[28px]
        text-center
        ${digitClass}
      `}
      style= {{
        fontFamily: "'JetBrains Mono', monospace"
      }}
    >
      {currentDigit}
    </span>
  );
}

// AnimatedStat Component
interface AnimatedStatProps {
  stat: StatItem;
  plainDigits?: boolean;
  digitClass?: string;
  tightSuffix?: boolean;
}

export function AnimatedStat({
  stat,
  plainDigits = false,
  digitClass = "",
  tightSuffix = false,
}: AnimatedStatProps) {
  const digits = String(stat.value).split("");
  const baseDuration = 800;
  const stagger = 250;

  const [isInView, setIsInView] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = statRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(node);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="flex flex-row flex-wrap items-center justify-center gap-x-1 gap-y-2 p-2"
      ref={statRef}
    >
      {/* Prefix*/}
      {stat.prefix && (
        <span className="text-xl md:text-2xl  font-semibold text-foreground">
          {stat.prefix}
        </span>
      )}

      {/* The Digits */}
      <div className="flex items-center justify-center">
        {digits.map((digit, index) => (
          <ScramblingDigit
            key={index}
            targetDigit={digit}
            scrambleDuration={baseDuration + index * stagger}
            inView={isInView}
            plain={plainDigits}
            digitClass={digitClass}
          />
        ))}
      </div>

      {/* Suffix*/}
      {stat.suffix && (
        <span
          className={`text-xl md:text-2xl font-semibold text-foreground${tightSuffix ? " ml-0" : " ml-1"}`}
        >
          {stat.suffix}
        </span>
      )}
    </div>
  );
}
