export interface PocketRequestToken {
  code: string;
  state: any;
}

export interface PocketAccessToken {
  access_token: string;
  username: string;
}

export interface AddItemToPocketDto {
  access_token: string;
  url: string;
  title?: string;
  tags?: string;
}

export enum PocketOperationType {
  addItem,
  remoteItem,
}
