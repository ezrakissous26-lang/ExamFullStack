import { myStore } from "../Store/Store"
import AccessDenied from "./AccessDenied"

export default function ProtectedRoute({ children }) {

    const token = myStore((state) => state.token)
    if (!token) {
        return (
            <>
                <AccessDenied />
            </>
        )
    }
    return children
}