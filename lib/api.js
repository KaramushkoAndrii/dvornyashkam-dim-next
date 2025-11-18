const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchApi(
  url,
  { locale, revalidate = 60, ...params } = {}
) {
  const searchParams = new URLSearchParams();

  if (locale) {
    searchParams.append("locale", locale);
  }

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => searchParams.append(key, val));
    } else {
      searchParams.append(key, value);
    }
  });

  const queryString = searchParams.toString();
  const fullUrl = `${API_URL}${url}${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(fullUrl, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Error fetching ${url}`);
  }

  return res.json();
}
