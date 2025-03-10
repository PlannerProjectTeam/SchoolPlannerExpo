import React from "react"
import { SVG } from "@/components/graphics/svgs/SVG"
import { Scheme } from "@/constants/globalStyles"

export const CheckMarkSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/535263/checkmark.svg"} color={'none'} stroke={Scheme.darkPurple} height={50} width={50} fillRule="odd" clipRule="odd"/>
    )
}

export const CheckMarkCircleSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/437550/checkmark-circle.svg"} color={Scheme.darkPurple} stroke={'none'} height={30} width={30} fillRule="odd" clipRule="odd"/>
    )
}

export const OpenBookSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/532906/book-open.svg"} color={'none'} stroke={Scheme.darkPurple} height={50} width={50} fillRule="odd" clipRule="odd"/>
    )
}

export const CalendarSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/521530/calendar.svg"} color={Scheme.darkPurple} stroke={'none'} height={30} width={30} fillRule="evenodd" clipRule="odd"/>
    )
}

export const CalendarBigSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/521532/calendar-big.svg"} color={Scheme.darkPurple} stroke={'none'} height={45} width={50} fillRule="evenodd" clipRule="odd"/>
    )
}

export const PlusSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/440141/plus-circle-fill.svg"} color={Scheme.darkPurple} stroke={'none'} height={60} width={60} fillRule="evenodd" clipRule="odd"/>
    )
}

export const PersonSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/440005/person.svg"} color={Scheme.darkPurple} stroke={'none'} height={55} width={50} fillRule="evenodd" clipRule="evenodd"/>
    )
}

export const DotSVG = () => {
    return (
        <SVG svgUrl={"https://www.svgrepo.com/show/448406/dot.svg"} color={Scheme.darkPurple} stroke={'none'} height={10} width={10} fillRule="evenodd" clipRule="evenodd"/>
    )
}