const GEOAPIFY_API_KEY="f6cf0c814f3944b0bdc77a1662a18224"

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?apiKey=${GEOAPIFY_API_KEY}&format=jpeg&center=lonlat:${lng},${lat}&marker=lonlat:${lng},${lat};color:%23ff0000;size:medium`;

  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=${GEOAPIFY_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }
  const data = await response.json();
  const address = await data.results[0].formatted;
  // console.log(address);
  return address;
}
