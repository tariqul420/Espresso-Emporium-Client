import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Private = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="min-w-screen flex items-center justify-center my-12">
                <ScaleLoader
                    height={60}
                    margin={2}
                    width={5}
                />
            </div>
        )
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={'/login'} />
    );
};

Private.propTypes = {
    children: PropTypes.array.isRequired
}
export default Private;