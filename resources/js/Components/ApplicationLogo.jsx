export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="32" cy="20" r="10" />
            <path d="M20 36h24c6 0 12 6 12 12v8H8v-8c0-6 6-12 12-12z" />
            <rect x="26" y="46" width="12" height="6" rx="1" />
            <path d="M30 52v6" />
            <path d="M14 40l4-4" />
            <path d="M50 40l-4-4" />
        </svg>
    );
}
