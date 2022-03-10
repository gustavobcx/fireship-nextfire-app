import AuthCheck from "../../components/AuthCheck";

export default function Page({}) {
    return (
        <main>
            <AuthCheck>
                Admin
            </AuthCheck>
        </main>
    )
}