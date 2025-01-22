const utilityFunctions = {};

// Set a cookie with a specific name, value, and expiration time in hours
utilityFunctions.setCookie = (cookieName, cookieValue, expirationHours) => {
  const d = new Date();
  d.setTime(d.getTime() + expirationHours * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/; SameSite=Strict`;
};

// Check if a cookie with a specific name exists
utilityFunctions.checkCookieExists = (cookieName) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName + "=") === 0) {
      return true;
    }
  }
  return false;
};

// Get the value of a specific cookie
utilityFunctions.getCookieValue = (cookieName) => {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
};

// Remove a specific cookie by name
utilityFunctions.removeCookie = (cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
};

// Parse JWT token to extract user data
utilityFunctions.parseJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Failed to parse JWT token:", error);
    return null;
  }
};

export { utilityFunctions };

/*const utilityFunctions = {
  setCookie: (cookieName, cookieValue, expirationHours, secure = true) => {
    const d = new Date();
    d.setTime(d.getTime() + expirationHours * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    const secureFlag = secure ? "; Secure" : "";
    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/; SameSite=Strict${secureFlag}`;
  },

  checkCookieExists: (cookieName) => {
    return document.cookie
      .split(";")
      .some((cookie) => cookie.trim().startsWith(`${cookieName}=`));
  },

  getCookieValue: (cookieName) => {
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
    const foundCookie = cookies.find((cookie) =>
      cookie.startsWith(`${cookieName}=`)
    );
    return foundCookie ? foundCookie.split("=")[1] : null;
  },

  removeCookie: (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
  },

  parseJwt: (token) => {
    try {
      if (!token || token.split(".").length !== 3) {
        throw new Error("Invalid JWT format.");
      }
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("");
      return JSON.parse(decodeURIComponent(jsonPayload));
    } catch (error) {
      console.error("Failed to parse JWT token:", error);
      return null;
    }
  },
};

export { utilityFunctions };
*/
