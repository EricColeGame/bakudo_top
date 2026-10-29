export type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.key);
