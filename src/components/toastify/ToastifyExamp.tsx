import { useState, useRef, useEffect } from "react";
import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastViewport,
} from "./ToastComponent";

const ToastifyExamp = () => {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef<number>(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  // Helper function to calculate one week ahead
  const oneWeekAway = (): Date => {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7); // Adds 7 days to current date
    return new Date(inOneWeek);
  };

  // Helper function to format the date in a readable format
  const prettyDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <div>
      <h1>Toast Example</h1>
      <ToastProvider >
        <button
          className="Button large violet"
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = oneWeekAway();
              setOpen(true);
            }, 100);
          }}
        >
          Add to calendar
        </button>

        <ToastRoot open={open} onOpenChange={setOpen} className="ToastRoot" >
          <ToastTitle className="ToastTitle">Scheduled: Catch up</ToastTitle>
          <ToastDescription className="ToastDescription">
            <time dateTime={eventDateRef.current.toISOString()}>
              {prettyDate(eventDateRef.current)}
            </time>
          </ToastDescription>
          <ToastAction className="ToastAction" altText="Undo schedule">
            <button className="Button ">Undo</button>
          </ToastAction>
        </ToastRoot>

        <ToastViewport className="ToastViewport" />
      </ToastProvider>
    </div>
  );
};

export default ToastifyExamp;
