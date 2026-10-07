import { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from "react";
import { wedding } from "@/lib/wedding";

export interface BgmPlayerHandle {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  isAudioPlaying: () => boolean;
}

interface BgmPlayerProps {
  autoPlayTrigger?: boolean;
}

export const BgmPlayer = forwardRef<BgmPlayerHandle, BgmPlayerProps>(function BgmPlayer(
  { autoPlayTrigger },
  ref
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const postYtCommand = useCallback((command: string, args: unknown = "") => {
    if (iframeRef.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: command,
            args: args,
          }),
          "*"
        );
      } catch {
        // ignore cross-origin error
      }
    }
  }, []);

  const playAudio = useCallback(() => {
    postYtCommand("unMute");
    postYtCommand("setVolume", [80]);
    postYtCommand("playVideo");
    setIsPlaying(true);
  }, [postYtCommand]);

  const pauseAudio = useCallback(() => {
    postYtCommand("pauseVideo");
    setIsPlaying(false);
  }, [postYtCommand]);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying, playAudio, pauseAudio]);

  useImperativeHandle(ref, () => ({
    play: playAudio,
    pause: pauseAudio,
    toggle: toggleAudio,
    isAudioPlaying: () => isPlaying,
  }));

  // Auto-play when trigger fires
  useEffect(() => {
    if (autoPlayTrigger) {
      playAudio();
    }
  }, [autoPlayTrigger, playAudio]);

  // Listen to incoming YouTube postMessages to update playing state if available
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.event === "onStateChange") {
          if (data.info === 1) {
            setIsPlaying(true);
          } else if (data.info === 2 || data.info === 0) {
            setIsPlaying(false);
          }
        }
      } catch {
        // Non-JSON message, safely ignore
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${wedding.bgm.youtubeId}?enablejsapi=1&loop=1&playlist=${wedding.bgm.youtubeId}&playsinline=1&rel=0&modestbranding=1`;

  return (
    <>
      {/* Invisible YouTube IFrame audio source */}
      <div
        aria-hidden="true"
        className="fixed -left-[9999px] -top-[9999px] h-1 w-1 opacity-0 pointer-events-none"
      >
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title={`Wedding BGM: ${wedding.bgm.title}`}
          allow="autoplay; encrypted-media"
          className="h-1 w-1 border-0"
        />
      </div>

      {/* Floating Wedding BGM Control Pill */}
      <aside
        aria-label="Wedding Music Soundtrack"
        className="fixed bottom-6 left-6 z-45 flex items-center gap-2"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          type="button"
          onClick={toggleAudio}
          className={`group flex items-center gap-3 rounded-full border px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 cursor-pointer ${
            isPlaying
              ? "border-hall-glow bg-[#281806]/90 shadow-[0_0_20px_rgba(233,200,121,0.35)]"
              : "border-hall-glow/40 bg-[#1a0f03]/85 hover:border-hall-glow/80 hover:bg-[#251606]/90"
          }`}
          title={isPlaying ? "Pause wedding music" : "Play wedding music"}
        >
          {/* Animated Equalizer Wave / Music Note */}
          <span className="relative flex h-5 w-5 items-center justify-center">
            {isPlaying ? (
              <span className="flex items-end gap-0.5 h-3.5">
                <span className="w-0.5 rounded-full bg-hall-glow animate-[sound-bar_0.8s_ease-in-out_infinite]" />
                <span className="w-0.5 rounded-full bg-hall-glow animate-[sound-bar_1.1s_ease-in-out_infinite_0.15s]" />
                <span className="w-0.5 rounded-full bg-hall-glow animate-[sound-bar_0.9s_ease-in-out_infinite_0.3s]" />
                <span className="w-0.5 rounded-full bg-hall-glow animate-[sound-bar_1.2s_ease-in-out_infinite_0.45s]" />
              </span>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-hall-glow/70 group-hover:fill-hall-glow transition-colors"
              >
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            )}
          </span>

          <div className="flex flex-col text-left pr-1">
            <span className="font-title text-[0.6rem] tracking-[0.2em] uppercase text-hall-glow leading-none">
              {isPlaying ? "Soundtrack Playing" : "Wedding BGM"}
            </span>
            <span className="font-display text-[0.8rem] text-ivory tracking-wide leading-tight mt-0.5 max-w-[140px] truncate">
              {wedding.bgm.title}
            </span>
          </div>

          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-ink transition-transform duration-300 group-hover:scale-105 ${
              isPlaying ? "bg-hall-glow shadow-[0_0_10px_rgba(233,200,121,0.6)]" : "bg-hall-light/90"
            }`}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
        </button>

        {/* Floating Tooltip info */}
        {showTooltip && (
          <div className="hidden sm:block absolute left-0 bottom-full mb-2 whitespace-nowrap rounded border border-hall-glow/30 bg-[#1c1206]/95 px-3 py-1.5 text-[0.62rem] text-hall-light shadow-xl backdrop-blur-md animate-in fade-in">
            <span>Soundtrack: {wedding.bgm.title} · {wedding.bgm.artist}</span>
          </div>
        )}
      </aside>
    </>
  );
});
