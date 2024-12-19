import React from "react";
import RecipeTable from "./RecipeTable";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import ModalAddRecipe from "./ModalAddRecipe";
import SideNavigation from "../partials/SideNavigation";
import { Plus } from "lucide-react";
import Header from "../partials/Header";
import SearchBar from "../partials/SearchBar";
import Footer from "../partials/Footer";
import ToastSuccess from "../partials/ToastSuccess";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";

const Recipe = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isRecipeEdit, setIsRecipeEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsRecipeEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="food" />
          <main>
            <Header title="Recipe" subtitle="Manage Recipes" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <RecipeTable
                isRecipeEdit={isRecipeEdit}
                setIsRecipeEdit={setIsRecipeEdit}
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
        <ModalAddRecipe
          isRecipeEdit={isRecipeEdit}
          setIsrecipeEdit={setIsRecipeEdit}
        />
      )}
    </>
  );
};

export default Recipe;
