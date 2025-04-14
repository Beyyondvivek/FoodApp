export default interface PromotionState {
  code: string;
  autoApplied?: boolean;
  description?: string;
  tnc?: string;
  discount: number;
}
