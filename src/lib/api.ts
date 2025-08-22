export async function fetchData<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {
    const baseURL = process.env.API_URL || '';
    const res = await fetch(`${baseURL}${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.API_TOKEN}`,
            ...options?.headers,
        },
        next: { revalidate: 60 },
        ...options,
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function saveData<T>(
  endpoint: string,
  method: "POST" | "PUT" | "PATCH" | "DELETE",
  data?: unknown
): Promise<T | void> {
  const fullUrl = `${process.env.API_URL}${endpoint}`;
  console.log("Saving to:", fullUrl);

  const response = await fetch(fullUrl, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: data ? JSON.stringify(data) : undefined,
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to save data: ${response.status}`);
  }

  if (response.status === 204 || response.headers.get("Content-Length") === "0") {
    return;
  }

  try {
    return (await response.json()) as T;
  } catch {
    return;
  }
}