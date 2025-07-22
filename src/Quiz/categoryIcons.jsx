
const categoryIcons = {
    Littérature: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13.5z" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
    ),
    Musique: (
        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    ),
    Film: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M7 6V4M17 6V4" />
        </svg>
    ),
    Sport: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" />
        </svg>
    ),
    Histoire: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 8v4l3 2" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    ),
    Personnages_Historiques: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 24"
            fill="currentColor"
            className="w-8 h-8 text-red-600"
        >
            <path d="M22.313 17.295a7.44 7.44 0 0 0-4.089-2.754l-.051-.011l-1.179 1.99a1.003 1.003 0 0 1-1 1c-.55 0-1-.45-1.525-1.774v-.032a1.25 1.25 0 1 0-2.5 0v.033v-.002c-.56 1.325-1.014 1.774-1.563 1.774a1.003 1.003 0 0 1-1-1l-1.142-1.994a7.47 7.47 0 0 0-4.126 2.746l-.014.019a4.5 4.5 0 0 0-.655 2.197v.007c.005.15 0 .325 0 .5v2a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-2c0-.174-.005-.35 0-.5a4.5 4.5 0 0 0-.666-2.221l.011.02zM7.968 5.29c0 2.92 1.82 7.21 5.25 7.21c3.37 0 5.25-4.29 5.25-7.21v-.065a5.25 5.25 0 1 0-10.5 0v.068zm11.234 1.72c0 1.902 1.186 4.698 3.42 4.698c2.195 0 3.42-2.795 3.42-4.698v-.052a3.421 3.421 0 0 0-6.842 0v.055v-.003zm-19.2 1.6c0 1.902 1.186 4.698 3.42 4.698c2.195 0 3.42-2.795 3.42-4.698v-.052a3.421 3.421 0 0 0-6.842 0v.055v-.003z" />
        </svg>
    )
};
export default categoryIcons;