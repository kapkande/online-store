import IBasicNew from "./data/productInterfaceNew";
import openProductPage from "./createProductPage";

function onMainProduct(element: Element, data: IBasicNew) {
  element.addEventListener('click', (e) => {
    openProductPage(data)
  });
}

export default onMainProduct;
