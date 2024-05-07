export default function Header({ current }) {
    return (
        <div className="w-screen max-w-full" style={{
            fontFamily: 'Neue Montreal',
            fontWeight: 500
        }}>
            <div className="flex justify-center p-5 text-sm">
                <div className="flex flex-row gap-1 p-1 rounded-full backdrop-blur-lg fixed" style={{
                    backgroundColor: 'rgba(232, 229, 228, 0.5)'
                }}>
                    <a href="/" className={`py-2.5 px-6 ${current === "Home" ? "bg-white rounded-full" : ""}`}>Home</a>
                    <a href="/profile" className={`py-2.5 px-6 ${current === "Profile" ? "bg-white rounded-full" : ""}`}>Profile</a>
                    <a href="/contact" className={`py-2.5 px-6 ${current === "Contact" ? "bg-white rounded-full" : ""}`}>Contact</a>
                </div>
            </div>
        </div>  
    );
}