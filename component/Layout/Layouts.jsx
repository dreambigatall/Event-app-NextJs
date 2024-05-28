import MainHeader from "./main-header";

import React from 'react'

export default function MainLayout(props) {
  return (
    <>
    <MainHeader/>
    <main>{props.children}</main>
    </>
  )
}
