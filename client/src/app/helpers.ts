import { Tag } from "./app.model";

export const parseHtmlEntities = (str) => {
  return str.replace(/&#([0-9]{1,3});/gi, (match, numStr) => {
    var num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
};

export const StringifyTagSet = (tagSet: Set<Tag>): string => {
  return `${Array.from(tagSet).map((tag) => tag.name)}`;
};

export const StringifyTag = (tag: Tag): string => {
  return `["${tag.name}"]`;
};
