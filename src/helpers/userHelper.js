export async function getUserData(url, headers) {
  console.log(url, headers);
  const res = await fetch(url, {
    headers,
  });
  if (res.status === 200) {
    const json = await res.json();
    return json;
  } else {
    console.error("Could not request user data", res.status);
    return null;
  }
}
