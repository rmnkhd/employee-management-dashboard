
"use client"

import CustomTable from "@/components/table/CustomTable";
import Column from "@/components/Column";
import { useState } from "react";


export default function Page() {
    const [itemsData, setItemsData] = useState({});


    const items =
        [
        {id:0 , name:"ramin" , gender:"male" },
        {id:1 , name:"ali" , gender:"male" },
        {id:2 , name:"reza" , gender:"male" },
        {id:3 , name:"kave" , gender:"male" },
        {id:4 , name:"ronaldo" , gender:"male" },
        {id:5 , name:"jafar" , gender:"male" },
        {id:6 , name:"nima" , gender:"male" },
        {id:7 , name:"reza" , gender:"male" },
        {id:8 , name:"ahmad" , gender:"male" },
        ]
    return (
        <CustomTable  items={items} isLoading={false} itemsPerPage={25} page={1}>
            <Column width={240} header={"id"} field={"id"} />
            <Column width={240} header={"name"} field={"name"} />
            <Column width={240} header={"gender"} field={"gender"} />
            <Column width={240} header={"test"} field={"gender"} >
                <div>test</div>
            </Column>

        </CustomTable>
    )
}