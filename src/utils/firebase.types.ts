import { WhereFilterOp } from "firebase/firestore";

export interface QueryOptions {
  field: string;
  operator: WhereFilterOp;
  value: string;
}

export type Collection = "receipts";
