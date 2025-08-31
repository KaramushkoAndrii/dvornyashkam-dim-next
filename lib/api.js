const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchApi(
  url,
  { locale, revalidate = 60, ...params } = {}
) {
  const searchParams = new URLSearchParams(params);

  if (locale) {
    searchParams.append("locale", locale);
  }

  const fullUrl = `${API_URL}${url}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;

  const res = await fetch(fullUrl, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Error fetching ${url}`);
  }

  return res.json();
}
