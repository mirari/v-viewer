export const defaultImageCount = 5
export const sampleImages = [
  'valley',
  'river',
  'ridge',
  'photo-10',
  'photo-11',
  'photo-12',
  'photo-13',
  'photo-14',
  'photo-15',
  'photo-16',
].map((name) => `/images/${name}.jpg`)

export const defaultImages = sampleImages.slice(0, defaultImageCount)
