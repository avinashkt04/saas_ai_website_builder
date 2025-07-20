interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <main className="flex fex-col min-h-screen max-h-screen">
            <div className="flex-1 flex flex-col px-4 py-4">
                <div className="absolute inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#39334a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] dark:[background-size:16px_16px] [background-size:16px_16px]" />
                {children}
            </div>
        </main>
    )
}

export default Layout;