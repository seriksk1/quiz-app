export type ID = string | number;
export type Text = string | number;
export type NotificationType =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "default";

export type AnyAction = {
  type: string;
  payload: any;
};
