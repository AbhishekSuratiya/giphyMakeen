function extractGifData(data = []) {
  const result = data.map(el => {
    return {
      id: el.id,
      url: el?.images?.original?.url,
    };
  });

  return result;
}

export default extractGifData;
