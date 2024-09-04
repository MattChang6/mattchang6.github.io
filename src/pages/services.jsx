import '../components/services.css';

export function Services() {
    return (
        <>
        <div>
            <p className="services-title"><strong>Services</strong></p>
        </div>
        <div className="service-area">
            <div className="each-service">
                <div className="title">
                    <h2>Tax Services</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>Federal tax preparation for Individuals and Businesses</li>
                        <li>State income tax filings</li>
                        <li>Sales tax filings</li>
                        <li>Payroll services and related taxes</li>
                    </ul>
                </div>
            </div>
            <div className="each-service">
                <div className="title">
                    <h2>Bookkeeping</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>Record-Keeping in Computerized Bookkeeping System</li>
                        <li>Set Up of Chart of Accounts</li>
                        <li>Monthly Financial Reports</li>
                        <li>Payroll Taxes</li>
                        <li>Internal Control Procedures</li>
                        <li>Document Retention Policy Implementation</li>
                        <li>Business License Renewals</li>
                        <li>Sales Tax Forms</li>
                        <li>Business Tax Forms</li>
                        <li>Year-End 1099 Forms</li>
                    </ul>
                </div>
            </div>
            <div className="each-service">
                <div className="title">
                    <h2>Consulting</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>Managing cash flow, budgeting and projections</li>
                        <li>Bookkeeping & Accounting</li>
                        <li>Budgets and bill payments</li>
                        <li>Back office support</li>
                        <li>Payroll processing and management</li>
                        <li>Outsource accounting manager and/or controller level support</li>
                        <li>Financial statement analysis</li>
                        <li>Assistance in obtaining financing</li>
                    </ul>
                </div>
            </div>

        </div>
        </>
    );
}
