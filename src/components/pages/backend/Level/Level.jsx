import { Plus } from "lucide-react";
import React from "react";
import SideNavigation from "../partials/SideNavigation";
import Header from "../partials/Header";
import SearchBar from "../partials/Searchbar";
import Footer from "../partials/Footer";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ToastSuccess from "../partials/ToastSuccess";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalAddLevel from "./ModalAddLevel";
import LevelTable from "./LevelTable";

const Level = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isLevelEdit, setIsLevelEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsLevelEdit(null);
  };

  // const handleAdd = () => {
  //   dispatch(setIsAdd(true));
  // }
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="level" />
          <main>
            <Header title="Level" subtitle="Manage Kiosk Level" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <LevelTable
                isLevelEdit={isLevelEdit}
                setIsLevelEdit={setIsLevelEdit}
              />
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {/* <SpinnerWindow/> */}
      {store.isAdd && (
        <ModalAddLevel
          isLevelEdit={isLevelEdit}
          setIsLevelEdit={setIsLevelEdit}
        />
      )}
    </>
  );
};

export default Level;
