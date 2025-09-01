import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({ className = "h-64" }: LoadingSpinnerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader className="w-8 h-8 text-[#C89B3C] animate-spin" />
    </div>
  );
};

export default LoadingSpinner;