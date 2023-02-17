import React from 'react'
import styled from "styled-components/macro";
import Header, { Footer, Navbar, MinDivBorder } from "../partials/Theme"
import PageHeader from '../common/layouts/PageHeader'

const Recipes = () => {
  return (
    <div>
        <Navbar />
        <Header />

        <PageHeader title="RECIPES" />
    </div>
  )
}

export default Recipes
