import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import { ThemeWrapper } from "../../../utils";
import Breadcrumb from "../BreadCrumbs";
import { TestIds } from "../constants";

describe("Breadcrumb component", () => {
  const crumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Category", url: "/products/category" },
    { title: "Product Name", url: "/products/category/product-name" }
  ];

  const renderFunction = () => render(ThemeWrapper(<Breadcrumb crumbs={crumbs} />));

  it("renders the correct number of breadcrumb links", () => {
    const { getAllByTestId } = renderFunction();
    const breadcrumbLinks = getAllByTestId(TestIds.BREADCRUMB_LINK);
    expect(breadcrumbLinks.length).toBe(crumbs.length - 1);
  });
  it("renders the last crumb as a plain text", () => {
    const { getAllByTestId } = renderFunction();
    const breadcrumbTextItem = getAllByTestId(TestIds.BREADCRUMB_ITEM);
    expect(breadcrumbTextItem.length).toBe(1);
  });

  it("renders corrent number of arrow images", () => {
    const { getAllByTestId } = renderFunction();
    const breadCrumbImages = getAllByTestId(TestIds.BREADCRUMB_IMAGE);
    expect(breadCrumbImages.length).toBe(crumbs.length - 1);
  });
});
