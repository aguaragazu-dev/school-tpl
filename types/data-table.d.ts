export interface SwitchColumnProps {
  value: boolean;
  onChange?: (checked: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
  immediate?: boolean;
  onConfirm?: (checked: boolean) => Promise<void>;
  loading?: boolean;
}

export interface SelectColumnProps<T = string> {
  value: T;
  options: { label: string; value: T }[];
  onChange?: (value: T) => void;
  onConfirm?: (value: T) => Promise<void>;
  immediate?: boolean;
  loading?: boolean;
}

export interface ActionColumnProps<T = any> {
  row: T;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => Promise<void>;
  disableDelete?: boolean;
}
