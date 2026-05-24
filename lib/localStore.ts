export const localStoreVersion = 1;

const storagePrefix = `sma:v${localStoreVersion}:`;

export const localStoreKeys = {
  dailyAlignment: `${storagePrefix}daily-alignment`,
  intentions: `${storagePrefix}intentions`,
  journal: `${storagePrefix}journal`,
} as const;

export type LocalStoreKey =
  (typeof localStoreKeys)[keyof typeof localStoreKeys];

function getStorage() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function readLocalStore<T>(
  key: LocalStoreKey,
  fallback: T,
  isValid?: (value: unknown) => value is T,
): T {
  const storage = getStorage();

  if (!storage) {
    return fallback;
  }

  try {
    const rawValue = storage.getItem(key);

    if (!rawValue) {
      return fallback;
    }

    const parsedValue = JSON.parse(rawValue);

    if (isValid && !isValid(parsedValue)) {
      return fallback;
    }

    return parsedValue as T;
  } catch {
    return fallback;
  }
}

export function writeLocalStore<T>(key: LocalStoreKey, value: T) {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Local storage may be unavailable or full; MVP persistence should fail quietly.
  }
}

export function removeLocalStore(key: LocalStoreKey) {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  try {
    storage.removeItem(key);
  } catch {
    // Ignore unavailable storage in nonstandard browser modes.
  }
}

export function clearSmaLocalData() {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  try {
    Object.values(localStoreKeys).forEach((key) => storage.removeItem(key));
  } catch {
    // Ignore unavailable storage in nonstandard browser modes.
  }
}
