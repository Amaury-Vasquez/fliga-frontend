import { FC } from "react";

export interface ConfirmSubmitState {
  isSubmitting: boolean;
  submittingMessage: string;
  success: boolean;
  successMessage: string;
  errorMessage: string;
}

export interface ConfirmSubmitProps {
  state?: ConfirmSubmitState;
}

const ConfirmSubmit: FC<ConfirmSubmitProps> = ({ state }) => {
  if (!state) return null;

  function getMessage(state: ConfirmSubmitState) {
    if (state.isSubmitting) return state.submittingMessage;
    if (state.success) return state.successMessage;
    else return state.errorMessage;
  }

  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">{getMessage(state)}</h1>
    </article>
  );
};

export default ConfirmSubmit;
