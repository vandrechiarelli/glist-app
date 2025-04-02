import {
  Avatar as UIAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import React from "react";

interface AvatarProps {
    src: string;
    alt: string;    
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <UIAvatar className="h-7 w-7">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>GL</AvatarFallback>
    </UIAvatar>
  );
}

export default Avatar;