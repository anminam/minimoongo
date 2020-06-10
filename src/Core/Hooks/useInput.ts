import { useState, useCallback } from "react";

function useInputs<T>(
  initForm: T
): [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (value: T) => void,
  (value: T) => void
] {
  const [form, setForm] = useState<T>(initForm);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const setValue = (value: T) => {
    setForm((form) => ({ ...form, value: value }));
  };

  const reset = useCallback(() => setForm(initForm), [initForm]);

  return [form, onChange, setValue, reset];
}

export default useInputs;
