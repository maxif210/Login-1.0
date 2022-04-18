export const getPhotos = async () => {
  const CLIENT_ID = "GouY5JNwhsri6-FgOanLBOj3zWNTRcZ1GYUbpeWjq_k";
  const PER_PAGE = "9";
  const URL = `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}&per_page=${PER_PAGE}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data

    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};



export const getPhotosByKeyword = async (search) => {
  const CLIENT_ID = "GouY5JNwhsri6-FgOanLBOj3zWNTRcZ1GYUbpeWjq_k";
  const PER_PAGE = "9";
  const URL = `https://api.unsplash.com/search/photos?query=${search}&per_page=${PER_PAGE}&client_id=${CLIENT_ID}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data

    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
