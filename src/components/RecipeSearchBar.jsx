import React from "react";

function RecipeSearchBar() {
    return <nav className="navbar navbar-expand-lg navbar-light recipe-searchbar pl-10">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-brand text-white">Search for recipes</div>
  
    <div className="collapse navbar-collapse" id="recipe-navbar">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active pl-10" id="all-search">
          <div className="nav-link text-white">All <span className="sr-only"></span></div>
        </li>
        <li className="nav-item pl-3" id="breakfast-search">
          <div className="nav-link text-white">Breakfast</div>
        </li>
        <li className="nav-item pl-3" id="lunch-search">
          <div className="nav-link disabled text-white">Lunch</div>
        </li>
        <li className="nav-item pl-3" id ="dinner-search">
          <div className="nav-link disabled text-white">Dinner</div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0 pr-5">
        <input className="form-control mr-sm-2" type="text" id="searchInput" aria-label="Search section" name="search-section" valueautocomplete="off" placeholder="Search..."/>
      </form>
    </div>
  </nav>
};

export default RecipeSearchBar;