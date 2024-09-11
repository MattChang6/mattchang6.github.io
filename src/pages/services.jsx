import '../components/services.css';

export function Services() {
    return (
        <>
        <div>
            <h1 className="services-title lato-font"><strong>Our Services</strong></h1>
        </div>
        <div className="service-area">
            <div className="each-service background-primary">
                <div className="title">
                    <h2 className='roboto-mono-font'>Bookkeeping</h2>
                </div>
                <div className="content lato-font">
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
            <div className="each-service background-lb">
                <div className="title roboto-mono-font">
                    <h2>Tax Services</h2>
                </div>
                <div className="content lato-font">
                    <ul>
                        <li>Federal tax preparation for Individuals and Businesses</li>
                        <li>State income tax filings</li>
                        <li>Sales tax filings</li>
                        <li>Payroll services and related taxes</li>
                    </ul>
                </div>
            </div>
            <div className="each-service background-gray">
                <div className="title roboto-mono-font">
                    <h2>Consulting</h2>
                </div>
                <div className="content lato-font">
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
