import { Chapter } from "@/lib/chapters";
import ReactMarkdown from "react-markdown";
import AudioPlayer from "./AudioPlayer";
import { useLanguage } from "@/lib/i18n/LanguageContextType";

interface ChapterContentProps {
  chapter: Chapter;
}

export default function ChapterContent({ chapter }: ChapterContentProps) {
  const { t } = useLanguage();

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mb-20">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t(chapter.title)}
          </h1>
        </header>

        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <ReactMarkdown>{t(chapter.contentKey)}</ReactMarkdown>
        </div>
      </article>
      {chapter.audioUrl !== "" && <AudioPlayer audioUrl={chapter.audioUrl} />}
    </>
  );
}
