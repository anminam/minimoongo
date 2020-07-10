import React, { useState, useEffect } from "react";
import { IMainCategoryId, ICategories } from "Interfaces/ICategory";
import { ICategoryReducer } from "Core/category/data";
import { connect } from "react-redux";
import { NavUtils } from "Core/nav/utils";
import { Utils } from "Core/Utils";
import { categoryUtils } from "Core/category/utils";
import { Link } from "react-router-dom";

interface INavCategory {
  // title?: string;
  navCategoryId?: IMainCategoryId;
  categoryData: ICategoryReducer;
}

const NavCategory = ({ categoryData, navCategoryId }: INavCategory) => {
  const [displayCategoryList, setDisplayCategoryList] = useState<
    ICategories[]
  >();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (navCategoryId) {
      setTitle(NavUtils.getCategoryName(navCategoryId));

      const categoryObj = Utils.findObject(
        categoryData.categoryList,
        navCategoryId
      );
      if (categoryObj) {
        setDisplayCategoryList(
          categoryUtils.getDisplayCategoryList(categoryObj.list)
        );
      }
    }
  }, [categoryData, navCategoryId]);

  return (
    <div className="nav_category">
      <h2 className="title">
        <Link to={"/"}>{title}</Link>
      </h2>
      {displayCategoryList &&
        displayCategoryList.map((item, i) => {
          return (
            <ul key={i} className="category">
              {item.list.map((iitem, ii) => {
                return (
                  <li key={ii}>
                    <Link
                      to={iitem.id}
                      className={`${iitem.isBig ? "bold" : ""}`}
                    >
                      {iitem.displayName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  const { category } = state;
  return {
    categoryData: category,
  };
};

export default connect(mapStateToProps)(NavCategory);
