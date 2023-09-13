// import { TimerActions } from "../components/TimerActions";
// import { Time } from "../components/Time";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { alertSelector } from "../redux/reducers/alertReducer";
// import { resetAlert } from "../redux/reducers/alertReducer";

// export const Timer = () => {
//   // get alert message here
//   const dispatch = useDispatch();
//   const {message} = useSelector(alertSelector);
//   // create effect to reset alert message here
//   useEffect(()=>{
//     setTimeout(()=>{
//       dispatch(resetAlert())
//     },3000)
//   },[message])

//   return (
//     <div className="page">
//           {message && 
//       <div class="alert alert-success" role="alert">
//   {message}
// </div>}
//       <div className="alert"></div>
//       <h1>Simple Timer</h1>
//       <Time />
//       <TimerActions />
//     </div>
//   );
// };
import { useEffect } from "react";
import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { useDispatch, useSelector } from "react-redux";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";

export const Timer = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(alertSelector);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(resetAlert());
      }, 2000);
    }
  }, [message]);

  return (
    <div className="page">
      {message && <div className="alert">{message}</div>}
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
