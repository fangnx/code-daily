import { Tag } from "./models/stackExchange.model";
import * as he from "he";

export const parseHtmlEntities = (str) => {
  return he.decode(str);
};

export const months = [
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
