import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";

const SideBar = () => {
    const [toggleClass, settoggleClass] = useState("");
    return (
        <div className="d-block d-lg-none side-custom-bar">
            <Nav defaultActiveKey="/home" className={toggleClass}>
                <Button className="close mr-1" onClick={()=>settoggleClass("d-none")} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </Button>
                <Nav.Link className="mt-2" href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        </div>
    )
}

export default SideBar;
