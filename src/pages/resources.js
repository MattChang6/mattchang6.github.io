import '../components/resources.css';

export function Resources() {
    return (
        <>
        <div>
            <h1 className="resource-title">Resources</h1>
            <a className="resource-link" href="https://www.irs.gov/" target="_blank" rel="noreferrer">IRS</a><br />
            <a className="resource-link" href="https://proadvisor.intuit.com/app/accountant/search?searchId=jay-chang" target="_blank" rel="noreferrer">
                        Quickbooks
                    </a><br />
            <a className="resource-link" href="https://verifyle.com/" target="_blank" rel="noreferrer">
                Verifyle
            </a><br />
            <a className="resource-link" href="https://www.ssa.gov/" target="_blank" rel="noreferrer">Social Security</a><br />
            <br />
        </div>
        </>
    );
}
