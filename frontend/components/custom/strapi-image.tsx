import Image from "next/image";

interface StrapiImageProps {
  src: string;
  alt: string | null;
  height?: number;
  width?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  // Video-specific props
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  noShowVideo?: boolean;
}

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "http://localhost:1337";

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_API_URL}${url}`;
}

// Utility to check if a file is a video based on extension
function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url);
}

export function StrapiImage({
  src,
  alt,
  className,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  poster,
  noShowVideo = false,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  if (isVideoFile(imageUrl)) {
    if (noShowVideo) {
      return (
        <Image
      src={'/video-file.png'}
      alt={alt ?? "No alternative text provided"}
      className={className}
      {...rest}
    />
      );
    }
    return (
      <video
        src={imageUrl}
        className={className}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        poster={poster}
        style={{ width: rest.width, height: rest.height }}
      >
        {alt && <track kind="captions" label={alt} />}
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt ?? "No alternative text provided"}
      className={className}
      {...rest}
    />
  );
}