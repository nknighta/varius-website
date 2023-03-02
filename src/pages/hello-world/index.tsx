export default function HelloWorld(props) {
    return (
        <div style={{color: '#fff'}}>
            <h1>Hello World</h1>
            <pre><code>{JSON.stringify(props,null,2)}</code></pre>
        </div>
    )
}


export async function getServerSideProps (context) {
    try {
        const host = context.req.headers.host || 'app-terminal.vercel.app'
        const protocol = /^localhost/.test(host) ? 'http' : 'https'
        const products = await fetch(`${protocol}://${host}/api/main`)
            .then(data => data.json())
        return {
            props: {
                name: []
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                name: [],
            }
        }
    }
}