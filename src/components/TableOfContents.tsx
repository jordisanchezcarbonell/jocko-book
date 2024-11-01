import { Chapter } from "@/lib/chapters";
import { useLanguage } from "@/lib/i18n/LanguageContextType";

interface TableOfContentsProps {
  chapters: Chapter[];
  currentChapterId: string;
  onChapterSelect: (id: string) => void;
}

export default function TableOfContents({
  chapters,
  currentChapterId,
  onChapterSelect,
}: TableOfContentsProps) {
  const { t } = useLanguage();

  return (
    <div className="p-4 sm:p-6 sticky top-0 bg-gray-50">
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        {t("tableOfContents.title")}
      </h2>
      <ul className="space-y-2 sm:space-y-3">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <button
              onClick={() => onChapterSelect(chapter.id)}
              className={`w-full text-left block hover:bg-gray-100 p-2 rounded transition-colors
                ${currentChapterId === chapter.id ? "bg-gray-100" : ""}`}
            >
              <span className="text-gray-500 text-sm">
                {t("tableOfContents.chapter")} {chapter.number}:
              </span>
              <span className="block text-gray-900">{t(chapter.title)}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
