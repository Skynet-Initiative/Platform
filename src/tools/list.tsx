export default function range(
  start: number = 0,
  end: number,
  step: number = 1,
) {
  const result = [];

  // Si le pas est négatif, nous voulons une plage décroissante
  if (step < 0) {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  } else {
    // Plage croissante
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  }

  return result;
}
