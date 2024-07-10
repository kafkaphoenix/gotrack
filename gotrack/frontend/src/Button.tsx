export const Button = ({ onClick, children, ...props }: { onClick: () => void, children: React.ReactNode, [key: string]: any }) => (
    <button
        onClick={onClick}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mx-2"
        {...props}
    >
        {children}
    </button>
);