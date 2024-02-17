import Link from "next/link";
import "./page.module.css";

export default function Home() {
    return (
        <div className="d-flex mt-5 align-items-center justify-content-center">
            <div className='mt-5'>
                <h4>Welcome To Employee Management </h4>
                <span>
                    <Link className=' d-flex align-items-start text-decoration-none' href="/employees">
                        Employee Management
                        <i className="ms-2 fs-5 bi-arrow-right"/>
                     </Link>
            </span>
            </div>
        </div>
    );
}
