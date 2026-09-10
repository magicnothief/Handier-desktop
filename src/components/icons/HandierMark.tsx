/**
 * Handier's mark as a line icon: a speech bubble holding a waveform.
 *
 * Drawn on lucide's 24px grid with a 2px stroke so it sits naturally among the
 * other sidebar icons, and takes `currentColor` like them. Replaces Handy's
 * glove, which is upstream's brand and not a fork's to use.
 */
const HandierMark = ({
  width,
  height,
  className,
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) => (
  <svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M7 4h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6l-4 3.5V16a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
    <path d="M9 8.5v3M12 7v6M15 8.5v3" />
  </svg>
);

export default HandierMark;
