export type ID = string | number;
export type Text = string | number;
export type Answer = { id: ID; text: Text };

export type AnyAction = {
  type: string;
  payload: any;
};
