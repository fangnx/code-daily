export interface AddPocketItemDto {
  readonly access_token: string;
  readonly url: string;
  readonly title?: string;
  readonly tags?: string; // Comma-separated.
}
