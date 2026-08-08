import NavigationButtons from "@/app/components/NavigationButtons";

export default function AboutPage() {
    return (
        <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center mt-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">About US</h1>
        <p className="text-gray-600 text-sm mb-6">BAck & Forward</p>
        <NavigationButtons />
        </div>
    );
}