export default function Title({ children, className }) {
    return (
        <span className={`text-lamina-yellow text-5xl font-bold text-center uppercase ${className}`}>
            {children}
        </span>
    );
}
