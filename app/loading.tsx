export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-pink-500 opacity-20"></div>
            </div>
        </div>
    );
}
