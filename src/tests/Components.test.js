import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {getAllByTestId, render, toHaveTextContent} from "@testing-library/react";
import ListItem from "../components/ListItem";
import BreadCrumbs from "../components/BreadCrumbs";
import Documents from "../components/Documents";
import Gallery from "../components/Gallery";
import Loader from "../components/Loader"


//Tests - ListItem
const title = "listItem Title";
test("list item renders correctly" , () => {
    const {queryByTestId} = render(<ListItem title={title} />)
    expect(queryByTestId("list-item")).toBeTruthy()
    expect(queryByTestId("list-item-title")).toBeTruthy()
})

//Display Title Test - ListItem
test('input title is list item title', () => {
    const {queryByTestId} = render(<ListItem title={title} />)
    expect(queryByTestId('list-item-title')).toHaveTextContent(title)
})

//Render Test - Breadcrumbs
test("breadcrumbs  renders correctly" , () => {
    const {queryByTestId } = render( <BreadCrumbs startPage="Search" country="Netherlands" city="Amsterdam" pageIndex="2" />)
    expect(queryByTestId("breadcrumbs")).toBeTruthy()
})

//Correct Amount of Items in breadcrumbs -  BReadcrumbs & BreadcrumbsItem
test("breadcrumbs showing the correct number of items" , () => {
    let loopCount = 4;
    //Loop over all breadcrumbs index options. 0 - 3
    for(let iterator = 0; iterator < loopCount; iterator++) { 
        const { getAllByTestId } = render(<BreadCrumbs startPage="test" pageIndex={iterator}/>)
        const items = getAllByTestId('breadcrumb-item');
        expect(items.length).toBe(iterator + 1);
    }
})

//Render Test - Documents 
test("documents renders correctly" , () => {
    const {queryByTestId } = render( <Documents />)
    expect(queryByTestId("documents-row")).toBeTruthy()
})

//Render Test - Gallery/GalleryItem
test("gallery and items renders correctly" , () => {
    const {queryByTestId } = render( <Gallery />)
    expect(queryByTestId("gallery-container")).toBeTruthy()
})

//Render Test - Loader
test("loading renders correctly" , () => {
    const {queryByTestId } = render( <Loader />)
    expect(queryByTestId("loading-container")).toBeTruthy()
})

