import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
};

/**
 * Image with a dark gradient "bed" behind it so layout never flashes white
 * and the composition holds while the photo streams in.
 */
export default function Shot({
  src,
  alt,
  className = "",
  imgClassName = "object-cover",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 72,
}: Props) {
  return (
    <div className={`img-bed overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={imgClassName}
      />
    </div>
  );
}
