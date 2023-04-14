import { useEffect } from "react";
import ReactPortal from "./ReactPortal";
import { IoIosCloseCircleOutline } from "react-icons/io";
const ConfirmationModal = ({ open, handleClose, children }) => {
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
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="fixed top-0 left-0 w-screen h-screen  z-40 bg-neutral-800 opacity-50"></div>
      <div className="fixed  flex flex-col box-border max-h-full  z-50 min-w-fit  py-5 inset-y-0 inset-x-12">
        <button
          onClick={handleClose}
          className="py-2  self-end font-bold flex justify-end -mr-5"
        >
          <IoIosCloseCircleOutline
            color="white"
            fontSize={24}
          ></IoIosCloseCircleOutline>
        </button>
        <div className="box-border  bg-white rounded-lg  overflow-y-scroll">
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default ConfirmationModal;
