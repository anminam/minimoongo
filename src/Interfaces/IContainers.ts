import { IEvent } from "./IEventList";

type TBoxType = undefined | "TAB" | "SLRIDER";
export interface IBox {
  eventObj: IEvent;
  isBorder?: boolean;
  type?: TBoxType;
}
