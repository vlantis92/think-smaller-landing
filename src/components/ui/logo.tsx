import { cn } from "@/lib/utils";

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
      src="/lovable-uploads/83bd4db1-eff7-4e60-b5bf-c7ea1a7a9365.png" 
      alt="Smaller logo"
      className={cn("w-auto", sizeClasses[size], className)}
    />
  );
};