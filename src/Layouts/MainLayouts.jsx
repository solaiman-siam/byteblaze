import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

function MainLayouts() {
  return (
    <div>
        <div className="h-16">
            <Nav></Nav>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayouts