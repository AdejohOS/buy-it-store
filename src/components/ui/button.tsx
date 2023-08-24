import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Loader2 } from 'lucide-react'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {isLoading?: boolean}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    
    children,
    disabled,
    type= "button",
    isLoading,
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            className={cn(`w-auto rounded-full bg-black border-transparent px-5 py-3
             disabled:cursor-not-allowed disabled:opacity-50
             text-white font-semibold hover:opacity-75
             transition`, className)}
             {...props}
             
             disabled={disabled}
        >   
            {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;
