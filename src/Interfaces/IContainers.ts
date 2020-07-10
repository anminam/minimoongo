import { IEvent } from "./IEventList";

type TBoxType = undefined | "tab" | "slrider" | "oneCol";
export interface IBox {
  eventObj: IEvent;
  isBorder?: boolean;
  type?: TBoxType;
  itemViewLength?: number;
}
