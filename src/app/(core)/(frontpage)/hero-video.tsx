export default function HeroVideo() {
  return (
    <video
      className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source
        src="/assets/hero-mobile.webm"
        type="video/webm"
        media="(max-width: 600px)"
      />

      <source src="/assets/hero-desktop.webm" type="video/webm" />
    </video>
  );
}
