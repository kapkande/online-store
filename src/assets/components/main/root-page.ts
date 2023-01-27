const rootPage:string = `<div class="root-page">
<aside class="aside-bar">
    <button class="button_base button_reset">RESET FILTERS</button>
    <form class="range-cost">
        <div class="range-cost__inputs">
            <input class="range-input range-cost__min" value="0" type="text">
            <input class="range-input range-cost__max" value="100" type="text">
        </div>
        <span class="range-cost__line"></span>
        <span class="range-cost__incl"></span>
        <input class="range-cost__point" value="0" name="rangeOne" type="range">
        <input class="range-cost__point" value="100" name="rangeTwo" type="range">
    </form>
    <div class="aside-bar__block"></div>
    <div class="aside-bar__block"></div>
    <div class="aside-bar__block"></div>
    <div class="aside-bar__block"></div>
</aside>
<section class="main__content">
    <div class="main__info-block">
        <div class="search-block">
            <input type="search" placeholder="Search product" class="search-bar">
        </div>
        <select class="sort-block">
            <option value="sort-title" disabled="" selected="">Sort options:</option>
            <option value="price-ASC">Sort by price ASC</option>
            <option value="price-DESC">Sort by price DESC</option>
            <option value="ASC">Sort by ASC</option>
            <option value="DESC">Sort by DESC</option>
            <!-- <option value="discount-ASC">Sort by discount ASC</option>
            <option value="discount-DESC">Sort by discount DESC</option> -->
        </select>
    </div>
    <div class="main__product"></div>
</section>
</div>`

export default rootPage