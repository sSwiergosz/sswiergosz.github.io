export const countReadingTime = (numOfWords: number) => {
  const WORDS_PER_MINUTE = 225;
  
  return Math.ceil(numOfWords / WORDS_PER_MINUTE);
}

export const formatDate = (date: string) => date ? new Date(date).toLocaleDateString("pl-PL") : null;