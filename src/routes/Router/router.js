import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import NewsCategory from "../../pages/NewsCategory/NewsCategory";
import NewsDetails from "../../pages/Shared/NewsDetails/NewsDetails";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../pages/Others/TermsAndConditions/TermsAndConditions";
import Profile from "../../pages/Others/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('http://localhost:5000/news')
                }
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/news-category/:id',
                element: <NewsCategory></NewsCategory>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/news-category/${params.id}`)
                }
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/news/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/termsandconditions',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])