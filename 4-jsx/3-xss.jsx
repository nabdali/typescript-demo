function FailXSS() {
    const testMyHtml = '<p>Hello world</p>'
    return <div>{testMyHtml}</div>
}

// Don't do this (only if you are in danger)
function WinXSS() {
    const testMyHtml = '<p>Hello world</p>'
    return <div dangerouslySetInnerHTML={{ __html: testMyHtml }} />
}