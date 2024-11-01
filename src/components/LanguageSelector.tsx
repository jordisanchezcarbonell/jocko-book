import { useLanguage } from "@/lib/i18n/LanguageContextType";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as "en" | "es")}
      className="bg-white border border-gray-300 rounded-md text-sm px-2 py-1 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}
