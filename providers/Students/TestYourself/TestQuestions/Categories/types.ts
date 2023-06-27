export namespace Category {
  export type Item = {
    id: number;
    type: string;
    name: string;
    userId: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    deletedAt?: string | Date | null;
  };

  //Listing
  export type ListingProps = {};
  export type ListingResponse = { data: Item[]; count: number };
  export interface ListingAPIPayload extends ListingProps {}
}
