export interface Chapter {
  id: string;
  title: string;
  number: number;
  contentKey: string;
  audioUrl: string;
}

export const chapters: Chapter[] = [
  {
    id: "chapter_1",
    title: "chapters.chapter_1.title",
    number: 1,
    contentKey: "chapters.chapter_1.content",
    audioUrl: "/audio/Chapter1.mp3",
  },
  {
    id: "chapter_2",
    title: "chapters.chapter_2.title",
    number: 2,
    contentKey: "chapters.chapter_2.content",
    audioUrl: "/audio/Chapter2.mp3",
  },
  {
    id: "chapter_3",
    title: "chapters.chapter_3.title",
    number: 3,
    contentKey: "chapters.chapter_3.content",
    audioUrl: "/audio/Chapter3.mp3",
  },
  {
    id: "chapter_4",
    title: "chapters.chapter_4.title",
    number: 4,
    contentKey: "chapters.chapter_4.content",
    audioUrl: "/audio/Chapter4.mp3",
  },
  {
    id: "chapter_5",
    title: "chapters.chapter_5.title",
    number: 5,
    contentKey: "chapters.chapter_5.content",
    audioUrl: "/audio/Chapter5.mp3",
  },
  {
    id: "chapter_6",
    title: "chapters.chapter_6.title",
    number: 6,
    contentKey: "chapters.chapter_6.content",
    audioUrl: "/audio/Chapter6.mp3",
  },
  {
    id: "chapter_7",
    title: "chapters.chapter_7.title",
    number: 7,
    contentKey: "chapters.chapter_7.content",
    audioUrl: "/audio/Chapter7.mp3",
  },
  {
    id: "chapter_8",
    title: "chapters.chapter_8.title",
    number: 8,
    contentKey: "chapters.chapter_8.content",
    audioUrl: "/audio/Chapter8.mp3",
  },
  {
    id: "chapter_9",
    title: "chapters.chapter_9.title",
    number: 9,
    contentKey: "chapters.chapter_9.content",
    audioUrl: "/audio/Chapter9.mp3",
  },
  {
    id: "chapter_10",
    title: "chapters.chapter_10.title",
    number: 10,
    contentKey: "chapters.chapter_10.content",
    audioUrl: "/audio/Chapter10.mp3",
  },
  {
    id: "chapter_11",
    title: "chapters.chapter_11.title",
    number: 11,
    contentKey: "chapters.chapter_11.content",
    audioUrl: "/audio/Chapter11.mp3",
  },
  {
    id: "chapter_12",
    title: "chapters.chapter_12.title",
    number: 12,
    contentKey: "chapters.chapter_12.content",
    audioUrl: "/audio/Chapter12.mp3",
  },
  {
    id: "resume",
    title: "chapters.resume.title",
    number: 13,
    contentKey: "chapters.resume.content",
    audioUrl: "",
  },
];

export const getChapterById = (id: string): Chapter | undefined => {
  return chapters.find((chapter) => chapter.id === id);
};

export const getNextChapter = (currentId: string): Chapter | undefined => {
  const currentIndex = chapters.findIndex(
    (chapter) => chapter.id === currentId
  );
  return currentIndex < chapters.length - 1
    ? chapters[currentIndex + 1]
    : undefined;
};

export const getPreviousChapter = (currentId: string): Chapter | undefined => {
  const currentIndex = chapters.findIndex(
    (chapter) => chapter.id === currentId
  );
  return currentIndex > 0 ? chapters[currentIndex - 1] : undefined;
};
