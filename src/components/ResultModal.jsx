import { forwardRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2); // toFixed(2) shows digits upto 2 decimal points
  const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset} >
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}<strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" >
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;

/* 
    dialog is a built in type of html attribute
    also form is also built in the dialog and it provides a button with method=dialog which automatically close/submit the form
    also it is invisible by default but can be made visible by using open prop
    but if we want to use a built in backdrop to dim the backgroud, we can not use this open prop
    instead we'll have to open this dialog programatically by sending a cmd to browser
    this is a situation where refs can help

    when we want to forward ref, we cant directly do it. instead we use forwardRef prop of react 
    and wrap it around our function and then export that function

    when wrapping a function with forwardRef, it recieves a second parameter named ref
*/
