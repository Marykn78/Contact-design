import { createBrowserRouter } from "react-router-dom";
import AddContact from '../Pages/AddContact/AddContact';
import InfoContact from '../Pages/InfoContact/InfoContact'
import Home from '../Pages/HomePage/Home'

const router =createBrowserRouter([{
    path:"/",
    element: <Home />,
    children: [
        // {
        //   index: true,
        //   element: <AddContact />,
        // },
        {
          path: "newcontact",
          element: <AddContact />,
        },
        {
          path: "info",
          element: <InfoContact />,
        },
      ],
    },
])

export default router;