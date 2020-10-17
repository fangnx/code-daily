import { Tag } from "./models/stackExchange.model";
import * as he from "he";

export const throttle = (func, limit: number) => {
  return function () {
    let inThrottle;

    const args = arguments;
    const context = this;

    if (!inThrottle) {
      inThrottle = true;
      func.apply(context, args);

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

export const parseHtmlEntities = (str: string): string => {
  return he.decode(str);
};

export const months: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const parseUnixTimestamp = (timestamp: number): string => {
  const date: Date = new Date(timestamp * 1000);
  const year: number = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month}. ${day}, ${year}`;
};

export const StringifyTagSet = (tagSet: Set<Tag>): string => {
  return `${Array.from(tagSet).map((tag) => tag.name)}`;
};

export const StringifyTag = (tag: Tag): string => {
  return `["${tag.name}"]`;
};

export const normalizePageNumber = (
  page: number,
  maxPageNum: number
): number => {
  if (page > maxPageNum) {
    return maxPageNum;
  } else if (page < 0) {
    return 0;
  }
  return page;
};
