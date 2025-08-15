const getAlbums = async () => {
  const response = await fetch("https://api.example.com/albums");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export default getAlbums;
