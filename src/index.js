import ReactDOM from "react-dom"
import React from "react"
import PageContainer from "./page/PageContainer"

ReactDOM.render(
    <PageContainer/>,
    document.getElementById("page-structure")
)

addEventListener("scroll", checkScroll)

function checkScroll() {
    const el = document.getElementsByClassName("post-component")
    const lastEl = el[el.length -2]
    // const i = el.length / 10
    if (window.scrollY + window.outerHeight - 350 > lastEl.offsetTop) {
        // ReactDOM.render(
        //     <PageContainer/>,
        //     document.getElementById("page-structure" + i)
        // )
        //добавление постов. Нормального решения не вышло
       }
   }