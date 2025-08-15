
export default function GetView({children}) {
    return (
        <>
            <header>Product Header</header>
            <main>
                {children}
            </main>
            <footer>Product Footer</footer>
        </>
    );
}   