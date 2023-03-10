export default async function getItemList(path: string) {
  let fetchResult;
  try {
    const result = await fetch(path);
    if (!result.ok) {
      console.error(result.status);
    }
    fetchResult = await result.json();
  } catch (e: unknown) {
    console.error(e);
    return [];
  }
  return fetchResult;
}
