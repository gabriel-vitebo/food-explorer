import { Routes, Route } from "react-router-dom"

import { Details } from "../pages/Details"
import { EditFood } from "../pages/EditFood"
import { Home } from "../pages/Home"
import { NewFood } from "../pages/NewFood"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newfood/:id" element={<NewFood />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/editfood/:id" element={<EditFood />} />
    </Routes>
  )
}
