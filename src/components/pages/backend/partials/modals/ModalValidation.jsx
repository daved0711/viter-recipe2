import { Info } from "lucide-react";
import React from "react";
import ModalWrapper from "./ModalWrapper";
import { StoreContext } from "@/components/store/storeContext";
import { setValidate } from "@/components/store/storeAction";

const ModalValidation = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setValidate(false));
  };
  return (
    <>
      <ModalWrapper zIndex="z-[60]">
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[250px] w-full rounded-md border border-line  ">
          <div className="modal-body p-2 py-4 text-center">
            <Info className="text-info mx-auto mb-4" size={40} />
            <h5>Validation Issue</h5>
            <p className="my-5 text-center">The title already exists</p>
            <button
              className="btn btn-info w-full flex justify-center"
              type="reset"
              onClick={handleClose}
            >
              Okay
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalValidation;
