import { Outlet } from "react-router-dom"
import Header from './Header'
import { Box, Container } from "@mui/material"

export const Layout = () => {


    return (
        <Box sx={{ height: '100vh', width: '100%' }}>
            <Header />
            {/* <ToastContainer autoClose={2500} /> */}
            <Outlet />
        </Box>
    )
}

