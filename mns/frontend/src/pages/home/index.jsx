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

function GetContent() {
    return (
        <div>
            This is Home Pageeeeee
            <button
                onClick={function() {
                    window.location = '/Home/Privacy'
                }}>
                    Privacy Page
            </button>
        </div>
    );
}