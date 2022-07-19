import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminDash from './Layout-admin/AdminDash'
import NormalUserDash from './Layout/NormalUserDash'

export default function LayoutSelector() {
    const location = useLocation()
    const isAdminDashboard = () => {
        return location.pathname.includes("admin-d")
        return window.location.href.includes("admin-d")
    }
    return (
        <>
            {isAdminDashboard() ?
                <AdminDash>

                </AdminDash>
                :
                <NormalUserDash>
                </NormalUserDash>
            }
        </>

    )
}
