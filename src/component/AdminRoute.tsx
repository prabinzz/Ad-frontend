import store from "@/store/store";
import { PropsWithChildren } from "react"
import NotAuthorized from "./NotAuthorized";

const AdminRoute = ({children}:PropsWithChildren) => {
   const { isAuthenticated } = store.getState().auth;
  return (
   <>
    {!isAuthenticated ? <NotAuthorized /> : children }
   </>
  )
}

export default AdminRoute