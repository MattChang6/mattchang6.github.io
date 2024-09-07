import '../components/resources.css';

export function Resources() {
    return (
        <>
        <div>
            <h1 className="resource-title">Resources</h1>
            <div>
                <div className='resource-grid'>
                    <div className='item1-resource'>
                        <p className='resource-description'>Internal Revenue Service<br />
                        <a className='resource-link' href='https://www.irs.gov/' target='_blank' rel="noreferrer">https://www.irs.gov/</a></p>
                    </div>
                    <div className='item1-resource'>
                    <p className='resource-description'>Social Security<br />
                    <a className='resource-link' href='https://www.ssa.gov/' target='_blank' rel="noreferrer">https://www.ssa.gov/</a></p>
                    </div>
                    <div className='item1-resource'>
                    <p className='resource-description'>Quickbooks<br />
                    <a className='resource-link' href='https://proadvisor.intuit.com/app/accountant/search?searchId=jay-chang' target='_blank' rel="noreferrer">Link</a></p>
                    </div>
                </div>
            </div>
            <div>
                <div className='resource-grid'>
                    <div className='item1-resource'>
                        <p className='resource-description'>Verifyle<br />
                        <a className='resource-link' href='https://verifyle.com/@jaychangcpa' target='_blank' rel="noreferrer">Link</a></p>
                    </div>
                    <div className='item1-resource'>
                        <p className='service-subtitle'>Link Title</p>
                        <p className='service-description'></p>
                    </div>
                    <div className='item1-resource'>
                        <p className='service-subtitle'>Link Title</p>
                        <p className='service-description'></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
