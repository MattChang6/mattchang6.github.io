import '../components/services.css';

export function Services() {
    return (
        <>
        <div>
            <p className="services-title"><strong>Services</strong></p>
            <p>NEED TO CHANGE TABLE INFO</p>
        </div>
        <div className="service-area">
            <div className="each-service">
                <div className="title">
                    <h2>Assurances & Accounting</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>Audit</li>
                        <li>Review</li>
                        <li>Payroll</li>
                        <li>Compilation</li>
                    </ul>
                </div>
            </div>
            <div className="each-service">
                <div className="title">
                    <h2>Tax</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>Corporation</li>
                        <li>Limited Liability Company</li>
                        <li>Partnership</li>
                        <li>Individual</li>
                    </ul>
                </div>
            </div>
            <div className="each-service">
                <div className="title">
                    <h2>Consulting</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>Business Setup</li>
                        <li>Quickbooks</li>
                        <li>Internal Control Structure</li>
                        <li>Merger & Acquisition</li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    );
}
