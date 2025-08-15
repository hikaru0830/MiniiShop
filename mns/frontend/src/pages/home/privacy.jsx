import Layout from '../../layouts/productLayout.jsx';
import renderService from '../../services/renderService.jsx'

renderService(GetView());

export default function GetView() {
    return (
        <Layout>
            <GetContent />
        </Layout>
    );
}

export function GetContent() {
    return (
        <div>
            This is Privacy Page.
        </div>
    );
}