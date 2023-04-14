import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactPortal from "./ReactPortal";
import { useEffect } from "react";

export default function ErrorPopUp({ open, handleClose, content }) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => {
      e.key === "Escape" ? handleClose() : null;
      document.body.addEventListener("keydown", closeOnEscapeKey);
    };
    return () => {
      document.body.addEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  if (!open) return null;
  return (
    <ReactPortal wrapperId="error-pop-up">
      <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-neutral-800 opacity-50"></div>
      <div className="fixed box-border h-max z-50 min-w-fit my-auto max-w-max mx-auto  py-5 inset-y-0 inset-x-12">
        <div className="box-border flex flex-col items-center gap-2  justify-center bg-white rounded-lg h-full overflow-hidden px-6 py-4">
          <AiOutlineCloseCircle
            color="red"
            fontSize={64}
          ></AiOutlineCloseCircle>
          <p className="text-red-400 text-xl text-semibold mb-6 text-center">
            {content}
          </p>
          <button
            className="bg-gray-700 px-6 py-2 text-gray-200 rounded-full flex items-center justify-center"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </ReactPortal>
  );
}
