import React, { useState } from "react";

/**
 * 범위가 있는 버튼
 * @methods useButtonLength
 * @param initNumber 초기 인덱스
 * @param max 최대값
 * @return [
 * now: number,
 * next: () => void
 * prev: () => void
 * ]
 */
const useButtonLength = (initNumber: number, max: number) => {
  const [now, setNow] = useState(initNumber);

  const next = () => {
    if (now < max) {
      setNow(now + 1);
    }
  };
  const prev = () => {
    if (initNumber < now) {
      setNow(now - 1);
    }
  };

  return [now, next, prev] as const;
};

export default useButtonLength;
