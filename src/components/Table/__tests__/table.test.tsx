import { createColumnHelper } from "@tanstack/react-table";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Table, { TestIds } from "../";
import { ThemeWrapper } from "../../../utils";

describe("Table component", () => {
  const data = [
    { name: "Alice", age: 30, location: "New York" },
    { name: "Bob", age: 25, location: "San Francisco" },
    { name: "Charlie", age: 35, location: "Los Angeles" },
    { name: "David", age: 40, location: "Chicago" },
    { name: "Eve", age: 27, location: "Miami" },
    { name: "Frank", age: 45, location: "Seattle" },
    { name: "George", age: 33, location: "Dallas" },
    { name: "Helen", age: 28, location: "Boston" },
    { name: "Ivy", age: 38, location: "Portland" },
    { name: "Jack", age: 42, location: "Denver" },
    { name: "Kate", age: 31, location: "Houston" },
    { name: "Liam", age: 29, location: "Atlanta" },
    { name: "Megan", age: 36, location: "Phoenix" },
    { name: "Noah", age: 44, location: "Las Vegas" },
    { name: "Olivia", age: 26, location: "San Diego" },
    { name: "Peter", age: 34, location: "Miami Beach" },
    { name: "Rachel", age: 39, location: "Orlando" },
    { name: "Simon", age: 37, location: "Washington, D.C." },
    { name: "Tina", age: 32, location: "Philadelphia" },
    { name: "Victor", age: 41, location: "San Antonio" },
  ];

  const columnHelper = createColumnHelper<(typeof data)[0]>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("age", {
      header: "Age",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("location", {
      header: "Location",
      cell: (info) => info.getValue(),
    }),
  ];

  const labelMaps = {
    location: "Location",
    age: "Age",
    name: "Name",
  };

  test("renders table headers correctly", async () => {
    const { getByTestId } = render(ThemeWrapper(<Table columns={columns} data={data} />));

    const headerIds = ["name", "age", "location"];
    await headerIds.map(async (id) => {
      const element = await getByTestId(`${TestIds.TABLE_HEADER}-${id}`);
      expect(element).toHaveTextContent(
        labelMaps[id as keyof typeof labelMaps]
      );
    });

    // expect(getByPlaceholderText("Search")).toBeInTheDocument();
    // expect(getByAltText("Filter")).toBeInTheDocument();
    // expect(getByAltText("Previous")).toBeInTheDocument();
    // expect(getByAltText("Next")).toBeInTheDocument();
  });
  test("renders table data correctly for firstpage", async () => {
    const { getByTestId } = render(ThemeWrapper(<Table columns={columns} data={data} />));

    const firstPageItems = data.slice(0,9)

    firstPageItems.map(async (item, index) => {
      Object.keys(item).map(async (key) => {
        expect(
          await getByTestId(`${TestIds.TABLE_CELL}-${index}_${key}`)
        ).toHaveTextContent(item[key as keyof typeof item]);
      });
    });
  });

  test("allows searching", async () => {
    const { getByTestId, getByText, queryByText } = render(
      ThemeWrapper(<Table columns={columns} data={data} />)
    );

    const searchInput = getByTestId(TestIds.SEARCH_INPUT);
    fireEvent.change(searchInput, { target: { value: "Alice" } });

    expect(await getByText("Alice")).toBeInTheDocument();
    expect(await queryByText("Bob")).not.toBeInTheDocument();
    expect(await queryByText("Charlie")).not.toBeInTheDocument();
  });
  test("on clicking page buttons corresponding data is shown", async () => {
    const { getByTestId } = render(ThemeWrapper(<Table columns={columns} data={data} />));

    const secondPageButton = getByTestId(`${TestIds.PAGE_NO_BUTTON}-2`);
    fireEvent.click(secondPageButton);

    const secondPageItems = data.slice(10,19)

    secondPageItems.map(async (item, index) => {
      Object.keys(item).map(async (key) => {
        expect(
          await getByTestId(`${TestIds.TABLE_CELL}-${10+index}_${key}`)
        ).toHaveTextContent(item[key as keyof typeof item]);
      });
    });
  });
  test("on clicking page buttons corresponding data is shown", async () => {
    const { getByTestId } = render(ThemeWrapper(<Table columns={columns} data={data} />));

    expect(getByTestId(TestIds.PREVIOUS_PAGE_BUTTON)).toBeDisabled();

    const nextPageButton = getByTestId(TestIds.NEXT_PAGE_BUTTON);
    fireEvent.click(nextPageButton);

    const secondPageItems = data.slice(10,19)

    secondPageItems.map(async (item, index) => {
      Object.keys(item).map(async (key) => {
        expect(
          await getByTestId(`${TestIds.TABLE_CELL}-${10+index}_${key}`)
        ).toHaveTextContent(item[key as keyof typeof item]);
      });
    });
  });
  test("on changing count correct items are shown", async () => {
    const { getByTestId } = render(ThemeWrapper(<Table columns={columns} data={data} />));

    fireEvent.change(getByTestId(TestIds.COUNT_INPUT), { target: { value: 20 } })

    const firstTwentyItems = data.slice(0,19)

    firstTwentyItems.map(async (item, index) => {
      Object.keys(item).map(async (key) => {
        expect(
          await getByTestId(`${TestIds.TABLE_CELL}-${index}_${key}`)
        ).toHaveTextContent(item[key]);
      });
    });
  });
});
