import { IEvent } from "./IEventList";

type TBoxType = undefined | "tab" | "slrider";
export interface IBox {
  eventObj: IEvent;
  isBorder?: boolean;
  type?: TBoxType;
}
