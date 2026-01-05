import { cn } from "@/lib/utils";
import smallerLogo from "@/assets/smaller-logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <img 
      src={smallerLogo} 
      alt="Smaller logo"
      className={cn("w-auto", sizeClasses[size], className)}
    />
  );
};