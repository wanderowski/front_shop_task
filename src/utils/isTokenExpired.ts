function isTokenExpired(token: string): boolean {
  if (!token) {
    return true;
  }

  try {
    const tokenPayload = JSON.parse(atob(token.split(".")[1]));

    const expiryDate = tokenPayload.exp * 1000;
    const now = new Date();

    return now.getTime() >= expiryDate;
  } catch (e) {
    console.error("Error reading token's expiration", e);
    return true;
  }
}

export default isTokenExpired;
