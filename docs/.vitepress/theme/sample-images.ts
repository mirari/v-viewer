export const defaultImageCount = 5
export const sampleImages = Array.from(
  { length: 10 },
  (_, index) => `/images/photo-${String(index + 1).padStart(2, '0')}.jpg`,
)

export const defaultImages = sampleImages.slice(0, defaultImageCount)
