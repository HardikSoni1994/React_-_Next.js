import { useEffect, useState } from "react";

function TableView () {

    const [allAdmin, setAllAdmin] = useState<any[]>([]);

    useEffect (() => {
        // Fetch Admin Api
        const data = [
            {
                name: "Hardik",
                email: "hardik@gmail.com",
                phone: 8866299606,
                isActive: true
            },
            {
                name: "Sujal",
                email: "sujal@gmail.com",
                phone: 9852147890,
                isActive: true
            },
        ]

        setAllAdmin(data);
    }, []);

    return <>
    <table border={1} >
        <thead>
            <tr>
                <th>SR. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                allAdmin.map((admin, index) => {
                    return <tr>
                                <td>{index + 1}</td>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.phone}</td>
                                <td>{admin.isActive ? 'Active ✔' : 'inActive ✖'}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                } )
            }
        </tbody>
    </table>
    </>
}

export default TableView;