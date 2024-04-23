import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbLink, RightArrowImage } from "./styled";
import { BreadCrumbProps } from "./types";
import rightArrow from "../../assets/RightArrow.svg";
import { TestIds } from "./constants";
import * as React from "react";

const Breadcrumb = ({ crumbs }: BreadCrumbProps) => {
  return (
    <BreadcrumbContainer key={crumbs.length} data-testid={TestIds.BREADCRUMB_CONTAINER}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={crumb.url}>
          {index === crumbs.length - 1 ? (
            <BreadcrumbItem data-testid={TestIds.BREADCRUMB_ITEM}>{crumb.title}</BreadcrumbItem>
          ) : (
            <>
              <BreadcrumbLink href={crumb.url} data-testid={TestIds.BREADCRUMB_LINK}>
                <div>{crumb.title}</div>
              </BreadcrumbLink>
              <BreadcrumbItem data-testid={TestIds.BREADCRUMB_IMAGE}>
                <RightArrowImage src={rightArrow} height={10} />
              </BreadcrumbItem>
            </>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
