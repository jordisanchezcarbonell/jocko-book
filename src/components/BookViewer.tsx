"use client";

import { FaArrowLeft, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import TableOfContents from "./TableOfContents";
import ChapterContent from "./ChapterContent";
import LanguageSelector from "./LanguageSelector";
import {
  chapters,
  getChapterById,
  getNextChapter,
  getPreviousChapter,
} from "@/lib/chapters";
import { useLanguage } from "@/lib/i18n/LanguageContextType";

export default function BookViewer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLanguage();

  const chapterId = searchParams.get("chapter") || "chapter_1";
  const currentChapter = getChapterById(chapterId);
  const nextChapter = getNextChapter(chapterId);
  const previousChapter = getPreviousChapter(chapterId);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateToChapter = (id: string) => {
    router.push(`/?chapter=${id}`);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30 
          bg-gray-50 border-r border-gray-200 
          transition-transform duration-300 ease-in-out
          w-80
          ${
            isMobile
              ? isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
          ${!isMobile && !isSidebarOpen ? "lg:hidden" : ""}
        `}
      >
        <div className="flex justify-between items-center p-4 lg:hidden">
          <LanguageSelector />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <TableOfContents
          chapters={chapters}
          currentChapterId={chapterId}
          onChapterSelect={(id) => navigateToChapter(id)}
        />
      </aside>

      <main className="flex-1 flex flex-col">
        <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <FaBars size={20} />
              <span className="hidden sm:inline">{t("navigation.menu")}</span>
            </button>
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={() =>
                previousChapter && navigateToChapter(previousChapter.id)
              }
              disabled={!previousChapter}
              className="text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              <FaArrowLeft className="inline mr-1 sm:mr-2" />
              <span className="hidden sm:inline">
                {t("navigation.previous")}
              </span>
            </button>
            <button
              onClick={() => nextChapter && navigateToChapter(nextChapter.id)}
              disabled={!nextChapter}
              className="text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              <span className="hidden sm:inline">{t("navigation.next")}</span>
              <FaArrowRight className="inline ml-1 sm:ml-2" />
            </button>
          </div>
        </nav>

        <div className="flex-1 overflow-auto">
          {currentChapter && <ChapterContent chapter={currentChapter} />}
        </div>
      </main>
    </div>
  );
}
